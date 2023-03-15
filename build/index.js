"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.get("/api", function (req, res) {
    res.send("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt10366206%2F&psig=AOvVaw2butvPd8ceVfGuxLWB7VqZ&ust=1678947232693000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKCEyP2j3f0CFQAAAAAdAAAAABAN");
});
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
