"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const node_fetch_1 = __importDefault(require("node-fetch"));
it('Should expect JohnWick.jpg to exist', () => {
    expect(fs_1.default.existsSync('src/images/JohnWick.jpg')).toBeTruthy();
});
it('Should expect edited-JohnWick.jpg to exist', () => {
    expect(fs_1.default.existsSync('src/images/edited-JohnWick.jpg')).toBeTruthy();
});
it('Should return true for a valid link', async () => {
    const response = await (0, node_fetch_1.default)('http://localhost:3000/images/JohnWick.jpg');
    expect(response.ok).toBe(true);
});
// it('should expect JohnWick.jpg to exist', () => {
//     expect(fs.existsSync('src/images/edited-JohnWick.jpg')).toBeTruthy()
// })
