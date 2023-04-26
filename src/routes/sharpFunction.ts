import sharp from 'sharp'

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
