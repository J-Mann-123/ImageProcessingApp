import fs from 'fs'
import fetch from 'node-fetch';

it('Should expect JohnWick.jpg to exist', () => {
    expect(fs.existsSync('src/images/JohnWick.jpg')).toBeTruthy()
})

it('Should expect edited-JohnWick.jpg to exist', () => {
    expect(fs.existsSync('src/images/edited-JohnWick.jpg')).toBeTruthy()
})

it('Should return true for a valid link', async () => {
    const response = await fetch('http://localhost:3000/images/JohnWick.jpg')
    expect(response.ok).toBe(true)
})

// it('should expect JohnWick.jpg to exist', () => {
//     expect(fs.existsSync('src/images/edited-JohnWick.jpg')).toBeTruthy()
// })
