"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const sharp_1 = __importDefault(require("sharp"));
// import  from 'express';
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`)
// })
app.use('/api', index_1.default);
app.use('/images', express_1.default.static(path_1.default.join(__dirname, 'images')));
app.use('/thumbs', express_1.default.static(path_1.default.join(__dirname, 'thumbs')));
// void (async function () {
//   app.get('/resize', (req, res) => {
//     const imageUrl = 'src/images/JohnWick.jpg;
//     const width = parseInt(req.query.width);
//     const height = parseInt(req.query.height);
//     try {
//       await sharp('src/images/JohnWick.jpg')
//         .resize(width, height)
//         // .toBuffer()
//         .jpeg()
//         .toFile('src/thumbs/edited-JohnWick.jpg')
//       // .toFile('src/thumbs/edited-JohnWick.jpg')
//     } catch (error) {
//       console.log(error)
//     }
//   })
// })()
// app.get('/resize', (req, res) => {
//   const imageUrl = 'src/images/JohnWick.jpg'
//   const width = parseInt(req.query.width as string)
//   const height = parseInt(req.query.height as string)
//   sharp(imageUrl)
//     .resize(width, height)
//     .toBuffer()
//     // .toFile('src/thumbs/edited-JohnWick.jpg')
//     .then((data: unknown) => {
//       res.set('Content-Type', 'image/jpeg')
//       res.send(data)
//     })
//     .catch((err: unknown) => {
//       console.error(err)
//       res.status(500).send('Internal server error')
//     })
// })
app.get('/resize', async (req, res) => {
    const imageUrl = 'src/images/JohnWick.jpg';
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    try {
        const buffer = await (0, sharp_1.default)(imageUrl)
            .resize(width, height)
            .toBuffer();
        // Save resized image to file
        await (0, sharp_1.default)(buffer)
            .toFile('src/thumbs/edited-JohnWick.jpg');
        res.set('Content-Type', 'image/jpeg');
        res.send(buffer);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});
// app.get('/resize', async (req: Request, res: Response) => {
//   const imageUrl = req.query.imageUrl as string
//   const width = parseInt(req.query.width as string)
//   const height = parseInt(req.query.height as string)
//   try {
//     const buffer = await sharp(imageUrl)
//       .resize(width, height)
//       .toBuffer()
//     // Save resized image to file
//     await sharp(buffer)
//       .toFile('/path/to/resized/image.jpg')
//     res.set('Content-Type', 'image/jpeg')
//     res.send(buffer)
//   } catch (err) {
//     console.error(err)
//     res.status(500).send('Internal server error')
//   }
// })
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
