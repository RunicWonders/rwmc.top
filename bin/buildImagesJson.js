import fs from 'fs';

const ImagesPath = './public/assets/images';
const ImagesJsonPath = './public/assets/images.json';

if(!fs.existsSync(ImagesPath))
	throw new Error('Images path not found');

fs.writeFileSync(ImagesJsonPath, JSON.stringify(fs.readdirSync(ImagesPath)));
console.log('Images.json generated successfully');