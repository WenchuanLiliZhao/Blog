// Ensure this file extension is .js (with "type": "module" in package.json)
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path'

// URLs you want to include, ideally these should be dynamic based on your routes
const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  // Add more paths as needed
];

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://wenchuanlilizhao.netlify.app/' });
  const writeStream = createWriteStream(resolve(process.cwd(), 'public', 'sitemap.xml'));
  sitemap.pipe(writeStream);

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap has been generated!');
})();
