"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teachers_1 = __importDefault(require("./api/teachers"));
const students_1 = __importDefault(require("./api/students"));
// import JohnWick from "./images/JohnWick";
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send('main api route');
});
routes.use('/teachers', teachers_1.default);
routes.use('/students', students_1.default);
// routes.use("/JohnWick", JohnWick);
exports.default = routes;
