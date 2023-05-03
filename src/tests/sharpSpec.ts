import sharp from 'sharp'
import fs from 'fs'

export const resizeImage = async (
  imageUrl: string,
  width: number,
  height: number
): Promise<Buffer> => {
  const buffer = await sharp(imageUrl).resize(width, height).toBuffer()

  // Save resized image to file
  await sharp(buffer).toFile('src/thumbs/edited-JohnWick.jpg')

  return buffer
}

// test build image function
describe('resizeImage', () => {
  // beforeAll(async () => {
  //   const imageUrl = 'src/thumbs/edited-JohnWick.jpg'
  //   const width = 100
  //   const height = 100

  //   // Wait for the resizeImage function to build
  //   await resizeImage(imageUrl, width, height)
  // })

  it('should return a Buffer object', async () => {
    const imageUrl = 'src/thumbs/edited-JohnWick.jpg'
    const width = 100
    const height = 100

    const result = await resizeImage(imageUrl, width, height)
    await fs.promises.access('src/thumbs/edited-JohnWick.jpg')

    expect(fs.existsSync(result).toBeTruthy())
  })
})
