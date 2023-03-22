import express from 'express'
import routes from './routes/index'
import sharp from 'sharp'

import path from 'path'

const app = express()
const port = 3000

app.use('/api', routes)

app.use('/images', express.static(path.join(__dirname, 'images')))
// app.use('/thumbs', express.static(path.join(__dirname, 'thumbs')))

void (async function () {
  try {
    await sharp('src/images/JohnWick.jpg')
      .resize(300, 200)
      .jpeg()
      .toFile('src/thumbs/edited-JohnWick.jpg')
  } catch (error) {
    console.log(error)
  }
})()

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
