"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const resizeImage = async (imageUrl, width, height) => {
    const buffer = await (0, sharp_1.default)(imageUrl).resize(width, height).toBuffer();
    // Save resized image to file
    await (0, sharp_1.default)(buffer).toFile('src/thumbs/edited-JohnWick.jpg');
    return buffer;
};
exports.resizeImage = resizeImage;
// test build image function
describe('resizeImage', () => {
    // beforeAll(async () => {
    //   const imageUrl = 'src/thumbs/edited-JohnWick.jpg'
    //   const width = 100
    //   const height = 100
    //   // Wait for the resizeImage function to build
    //   await resizeImage(imageUrl, width, height)
    // })
    it('should return a Buffer object', async () => {
        const imageUrl = 'src/thumbs/edited-JohnWick.jpg';
        const width = 100;
        const height = 100;
        const result = await (0, exports.resizeImage)(imageUrl, width, height);
        await fs_1.default.promises.access('src/thumbs/edited-JohnWick.jpg');
        expect(Buffer.isBuffer(result)).toBe(true);
    });
});
