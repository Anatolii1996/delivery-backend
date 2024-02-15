import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const inputPath = 'assets/original'; // путь к вашим изображениям
const outputPath = 'assets/converted';

(async () => {
    await imagemin([`${inputPath}/*.{jpg,png}`], {
        destination: outputPath,
        plugins: [
            imageminWebp({ quality: 75 }) // настройте качество по своему усмотрению
        ]
    });

    console.log('Изображения успешно сконвертированы в формат WebP!');
})();