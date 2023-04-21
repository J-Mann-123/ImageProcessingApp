"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', index_1.default);
app.use('/images', express_1.default.static(path_1.default.join(__dirname, 'images')));
app.use('/thumbs', express_1.default.static(path_1.default.join(__dirname, 'thumbs')));
app.get('/resize', async (req, res) => {
    const imageUrl = 'src/images/JohnWick.jpg';
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    try {
        const buffer = await (0, sharp_1.default)(imageUrl).resize(width, height).toBuffer();
        // Save resized image to file
        await (0, sharp_1.default)(buffer).toFile('src/thumbs/edited-JohnWick.jpg');
        res.set('Content-Type', 'image/jpeg');
        res.send(buffer);
    }
    catch (err) {
        console.error(err);
        res.status(200).send('Internal server error');
    }
});
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
