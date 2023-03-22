"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// import fetch from 'node-fetch/lib/index.js';
// import fetch from 'node-fetch'
it('Should expect JohnWick.jpg to exist', () => {
    expect(fs_1.default.existsSync('src/images/JohnWick.jpg')).toBeTruthy();
});
it('Should expect edited-JohnWick.jpg to exist', () => {
    expect(fs_1.default.existsSync('src/images/edited-JohnWick.jpg')).toBeTruthy();
});
const node_fetch_1 = __importDefault(require("node-fetch"));
async function fetchData() {
    const response = await (0, node_fetch_1.default)('http://localhost:3000/images/JohnWick.jpg');
    const data = await response.json();
    console.log(data);
}
fetchData();
// describe('Link exists tests', () => {
//     it('Should return true for a valid link', async () => {
//         const response = await fetch('http://localhost:3000/images/JohnWick.jpg')
//         expect(response.ok).toBe(true)
//     })
//     it('Should return false for an invalid link', async () => {
//         const response = await fetch('http://localhost:3000/images/edited-JohnWick.jpg')
//         expect(response.ok).toBe(false)
//     })
// })
// it('should expect JohnWick.jpg to exist', () => {
//     expect(fs.existsSync('src/images/edited-JohnWick.jpg')).toBeTruthy()
// })
