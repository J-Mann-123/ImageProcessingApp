'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.resizeImage = void 0
const sharp_1 = __importDefault(require('sharp'))
const resizeImage = async (imageUrl, width, height) => {
  const buffer = await (0, sharp_1.default)(imageUrl)
    .resize(width, height)
    .toBuffer()
  // Save resized image to file
  await (0, sharp_1.default)(buffer).toFile('src/thumbs/edited-JohnWick.jpg')
  return buffer
}
exports.resizeImage = resizeImage
