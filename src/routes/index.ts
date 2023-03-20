import express from "express";
import teachers from "./api/teachers";
import students from "./api/students";
// import JohnWick from "./images/JohnWick";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("main api route");
});

routes.use("/teachers", teachers);
routes.use("/students", students);
// routes.use("/JohnWick", JohnWick);

export default routes;
