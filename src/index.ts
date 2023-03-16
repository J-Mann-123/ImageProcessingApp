import express from "express";
import routes from "./routes/index";

const app = express();
const port = 3000;

// app.get("/api/images", (req, res) => {
//   res.send(
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt10366206%2F&psig=AOvVaw2butvPd8ceVfGuxLWB7VqZ&ust=1678947232693000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKCEyP2j3f0CFQAAAAAdAAAAABAN"
//   );
// });
// const sharp: unknown = require("sharp")(async function () => {
//   try {
//     await sharp("images/JohnWick.jpg")
//       .resize(300, 200)
//       .jpg()
//       .toFile("images/JohnWick");
//   } catch (error) {
//     console.log(error);
//   }
// });

app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
