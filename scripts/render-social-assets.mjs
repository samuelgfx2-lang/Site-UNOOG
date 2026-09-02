import { createRequire } from 'node:module';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const require = createRequire(import.meta.url);
const sharp = require('../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp');
const root = process.cwd();
const outputDir = path.join(root, 'deliverables', 'unoog-social-kit');
await mkdir(outputDir, { recursive: true });

const blue = '#001e89';
const orange = '#fb4400';
const ink = '#111111';
const paper = '#f4f1ea';
const symbolPath = 'M492.01 303.233 643.626 384.987 557.413 527.685 401.338 434.039 405.797 604.979 236.343 604.979 240.803 434.039 84.727 527.685 0 384.987 151.617 303.233 0 219.993 84.727 77.295 240.803 172.427 236.343 0 405.797 0 401.338 172.427 557.413 77.295 643.626 219.993Z';
const wordmarkPaths = `
<path d="M0 49.452V1.07h18.482v48.382c0 10.153 8.256 18.421 18.41 18.421 10.152 0 18.408-8.268 18.408-18.421V1.848h18.482v83.437H55.3v-4.049c-5.447 3.161-11.672 5.107-18.408 5.107C16.548 86.343 0 69.782 0 49.452"/>
<path d="M99.996 85.273H81.514V1.07h18.482v4.037C105.443 1.946 111.67 0 118.406 0c20.342 0 36.89 16.548 36.89 36.891v48.382h-18.482V36.891c0-10.153-8.256-18.421-18.408-18.421-10.154 0-18.41 8.268-18.41 18.421Z"/>
<path fill-rule="evenodd" d="M256.255 44.419c0-23.589 19.187-42.764 42.753-42.764 23.576 0 42.751 19.187 42.751 42.764 0 23.577-19.175 42.752-42.751 42.752-23.566 0-42.741-19.175-42.753-42.752Zm18.482.012c0 13.375 10.883 24.27 24.271 24.27 13.386 0 24.281-10.882 24.281-24.27 0-13.387-10.895-24.282-24.281-24.282-13.376 0-24.271 10.907-24.271 24.282Z"/>
<path fill-rule="evenodd" d="M348.235 31.574c7.142-22.482 31.235-34.948 53.694-27.812 22.47 7.138 34.935 31.23 27.797 53.7-7.139 22.471-31.22 34.94-53.689 27.802-22.46-7.136-34.929-31.216-27.802-53.69Zm17.611 5.607c-4.05 12.747 3.024 26.426 15.783 30.48 12.758 4.053 26.436-3.02 30.49-15.779 4.053-12.759-3.032-26.442-15.789-30.495-12.748-4.049-26.434 3.047-30.484 15.794Z"/>
<path d="M375.633 85.135c7.756 4.067 11.698 13.389 8.957 22.017-2.741 8.629-11.291 13.811-19.972 12.656l-5.642 17.759c18.451 4.144 37.385-6.468 43.216-24.822 5.831-18.353-3.507-37.949-20.967-45.213Z"/>
<path d="m227.659 43.226 21.134 11.395-12.017 19.892-21.756-13.053.621 23.828h-23.62l.621-23.828-21.756 13.053-11.81-19.892 21.134-11.395-21.134-11.603 11.81-19.892 21.756 13.26-.621-24.034h23.62l-.621 24.034 21.756-13.26 12.017 19.892Z"/>`;

const wordmark = (x, y, width, color) => `<svg x="${x}" y="${y}" width="${width}" height="${width * 137.567 / 429.726}" viewBox="0 0 429.726 137.567" fill="${color}">${wordmarkPaths}</svg>`;
const asterisk = (x, y, size, color, opacity = 1) => `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 643.626 604.979" fill="${color}" opacity="${opacity}"><path d="${symbolPath}"/></svg>`;

const linkedin = `<svg xmlns="http://www.w3.org/2000/svg" width="1584" height="396" viewBox="0 0 1584 396">
<rect width="1584" height="396" fill="${ink}"/><rect x="620" width="964" height="396" fill="${blue}"/>
<path d="M0 323 1584 205V264L0 382Z" fill="${orange}"/>
<g stroke="${paper}" stroke-opacity=".16"><path d="M0 99H1584M0 198H1584M0 297H1584"/><path d="M198 0V396M396 0V396M594 0V396M792 0V396M990 0V396M1188 0V396M1386 0V396"/></g>
${asterisk(72, 52, 92, orange)}${asterisk(1360, -62, 300, paper, .95)}
<text x="650" y="104" fill="${paper}" font-family="Arial,Helvetica,sans-serif" font-size="28" font-weight="700" letter-spacing="3">SAMUEL NOGUEIRA</text>
<text x="650" y="176" fill="${paper}" font-family="Arial,Helvetica,sans-serif" font-size="56" font-weight="800" letter-spacing="-2">MULTIDISCIPLINARY</text>
<text x="650" y="233" fill="${orange}" font-family="Arial,Helvetica,sans-serif" font-size="56" font-weight="800" letter-spacing="-2">DESIGNER*</text>
<text x="650" y="317" fill="${paper}" font-family="Arial,Helvetica,sans-serif" font-size="17" font-weight="700" letter-spacing="1.4">BRANDING / VISUAL IDENTITY / PACKAGING / CAMPAIGNS / 3D</text>
${wordmark(1180, 286, 260, paper)}</svg>`;

const behance = `<svg xmlns="http://www.w3.org/2000/svg" width="3200" height="410" viewBox="0 0 3200 410">
<rect width="3200" height="410" fill="${blue}"/><rect width="810" height="410" fill="${paper}"/><rect x="2760" width="440" height="410" fill="${orange}"/>
<path d="M810 0H2760L2530 410H1040Z" fill="${ink}"/>${wordmark(105, 132, 580, orange)}${asterisk(2872, 70, 220, blue)}
<text x="1110" y="142" fill="${orange}" font-family="Arial,Helvetica,sans-serif" font-size="34" font-weight="700" letter-spacing="5">SAMUEL NOGUEIRA / UNOOG</text>
<text x="1110" y="238" fill="${paper}" font-family="Arial,Helvetica,sans-serif" font-size="78" font-weight="800" letter-spacing="-3">MOVE IDEAS PAST</text>
<text x="1110" y="322" fill="${paper}" font-family="Arial,Helvetica,sans-serif" font-size="78" font-weight="800" letter-spacing="-3">THE EXPECTED*</text>
<text x="1110" y="372" fill="${orange}" font-family="Arial,Helvetica,sans-serif" font-size="22" font-weight="700" letter-spacing="2">BRANDING / PACKAGING / CAMPAIGNS / 3D / ILLUSTRATION</text></svg>`;

const characterSvg = await readFile(path.join(root, 'public', 'brand', 'characters', 'head-primary.svg'), 'utf8');
const characterData = Buffer.from(characterSvg).toString('base64');
const avatar = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
<defs><clipPath id="disc"><circle cx="540" cy="540" r="430"/></clipPath></defs><rect width="1080" height="1080" fill="${ink}"/>
<circle cx="540" cy="540" r="464" fill="${orange}"/><circle cx="540" cy="540" r="425" fill="${paper}"/>
<g clip-path="url(#disc)"><rect x="110" y="110" width="860" height="860" fill="${orange}"/><image href="data:image/svg+xml;base64,${characterData}" x="185" y="155" width="710" height="790" preserveAspectRatio="xMidYMid meet"/></g>
${asterisk(760, 90, 190, blue)}</svg>`;

for (const [name, svg] of [['linkedin-banner-1584x396', linkedin], ['behance-banner-3200x410', behance], ['profile-avatar-1080x1080', avatar]]) {
  await writeFile(path.join(outputDir, `${name}.svg`), svg, 'utf8');
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(path.join(outputDir, `${name}.png`));
}

console.log(outputDir);
