import fs from 'fs';

const ImagesPath = './public/assets/images';
const ImagesJsonPath = './public/assets/images.json';
const baseImagesDir = '/assets/images/';

if(!fs.existsSync(ImagesPath))
	throw new Error('Images path not found');

fs.writeFileSync(ImagesJsonPath, JSON.stringify({
	format_version: 2,
	images:
		fs.readdirSync(ImagesPath).map(image => baseImagesDir + image)
}));
console.log('Images.json generated successfully');