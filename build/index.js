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
void (async function () {
    try {
        await (0, sharp_1.default)('src/images/JohnWick.jpg')
            .resize(300, 200)
            .jpeg()
            .toFile('src/thumbs/edited-JohnWick.jpg');
    }
    catch (error) {
        console.log(error);
    }
})();
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
