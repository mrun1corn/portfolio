import fs from 'fs';
import path from 'path';

const dist = path.resolve('dist');
const indexFile = path.join(dist, 'sitemap-index.xml');
const subFile = path.join(dist, 'sitemap-0.xml');
const targetFile = path.join(dist, 'sitemap.xml');

if (fs.existsSync(subFile)) {
  fs.copyFileSync(subFile, targetFile);
  console.log('Successfully created dist/sitemap.xml from sitemap-0.xml');
} else if (fs.existsSync(indexFile)) {
  fs.copyFileSync(indexFile, targetFile);
  console.log('Successfully created dist/sitemap.xml from sitemap-index.xml');
}
