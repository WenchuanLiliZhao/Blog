import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      );

      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule('/src/App.tsx');

      const appHtml = render(); // 调用你的渲染函数

      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      console.error(e);
      res.status(500).end('Internal Server Error');
    }
  });

  app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
  });
}

createServer();
