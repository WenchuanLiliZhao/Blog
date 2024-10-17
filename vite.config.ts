import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // 开发环境配置
    return {
      plugins: [react()],
    };
  } else {
    // 生产环境配置
    return {
      plugins: [react()],
      build: {
        ssr: true,
        ssrManifest: true,
        outDir: 'dist-ssr', // 服务端构建输出目录
        rollupOptions: {
          input: '/src/App.tsx',  // 服务端入口文件
        },
      },
    };
  }
});
