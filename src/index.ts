import express from 'express'
import routes from './routes/index'
import path from 'path'
import { resizeImage } from './routes/sharpFunction'

const app = express()
const port = 3000

app.use('/api', routes)

app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/thumbs', express.static(path.join(__dirname, 'thumbs')))

app.get('/resize', async (req, res) => {
  const imageUrl = 'src/images/JohnWick.jpg'
  const width = parseInt(req.query.width as string)
  const height = parseInt(req.query.height as string)

  try {
    const buffer = await resizeImage(imageUrl, width, height)

    res.set('Content-Type', 'image/jpeg')
    res.send(buffer)
  } catch (err) {
    console.error(err)
    res.status(200).send('Internal server error')
  }
})

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
