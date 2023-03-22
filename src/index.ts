import express from 'express'
import routes from './routes/index'
import sharp from 'sharp'
// import  from 'express';

import path from 'path'

const app = express()
const port = 3000

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`)
// })

app.use('/api', routes)

app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/thumbs', express.static(path.join(__dirname, 'thumbs')))

// void (async function () {
//   app.get('/resize', (req, res) => {
//     const imageUrl = 'src/images/JohnWick.jpg;
//     const width = parseInt(req.query.width);
//     const height = parseInt(req.query.height);
//     try {
//       await sharp('src/images/JohnWick.jpg')
//         .resize(width, height)
//         // .toBuffer()
//         .jpeg()
//         .toFile('src/thumbs/edited-JohnWick.jpg')
//       // .toFile('src/thumbs/edited-JohnWick.jpg')
//     } catch (error) {
//       console.log(error)
//     }
//   })
// })()

// app.get('/resize', (req, res) => {
//   const imageUrl = 'src/images/JohnWick.jpg'
//   const width = parseInt(req.query.width as string)
//   const height = parseInt(req.query.height as string)

//   sharp(imageUrl)
//     .resize(width, height)
//     .toBuffer()
//     // .toFile('src/thumbs/edited-JohnWick.jpg')
//     .then((data: unknown) => {
//       res.set('Content-Type', 'image/jpeg')
//       res.send(data)
//     })
//     .catch((err: unknown) => {
//       console.error(err)
//       res.status(500).send('Internal server error')
//     })
// })

app.get('/resize', async (req, res) => {
  const imageUrl = 'src/images/JohnWick.jpg'
  const width = parseInt(req.query.width as string)
  const height = parseInt(req.query.height as string)

  try {
    const buffer = await sharp(imageUrl)
      .resize(width, height)
      .toBuffer()

    // Save resized image to file
    await sharp(buffer)
      .toFile('src/thumbs/edited-JohnWick.jpg')

    res.set('Content-Type', 'image/jpeg')
    res.send(buffer)
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal server error')
  }
})

// app.get('/resize', async (req: Request, res: Response) => {
//   const imageUrl = req.query.imageUrl as string
//   const width = parseInt(req.query.width as string)
//   const height = parseInt(req.query.height as string)

//   try {
//     const buffer = await sharp(imageUrl)
//       .resize(width, height)
//       .toBuffer()

//     // Save resized image to file
//     await sharp(buffer)
//       .toFile('/path/to/resized/image.jpg')

//     res.set('Content-Type', 'image/jpeg')
//     res.send(buffer)
//   } catch (err) {
//     console.error(err)
//     res.status(500).send('Internal server error')
//   }
// })

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
