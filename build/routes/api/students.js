"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const students = express_1.default.Router();
students.get("/", (req, res) => {
    res.send("Students Route");
    // res.send(console.log("pooooop");
});
exports.default = students;
