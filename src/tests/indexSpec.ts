import fs from 'fs'

import fetch from 'isomorphic-fetch'

it('Should expect JohnWick.jpg to exist', () => {
    expect(fs.existsSync('src/images/JohnWick.jpg')).toBeTruthy()
})

it('Should expect edited-JohnWick.jpg to exist', () => {
    expect(fs.existsSync('src/thumbs/edited-JohnWick.jpg')).toBeTruthy()
})

// this should return true only after npm run start has been run
it('Should return false for an invalid link', async () => {
    const response = await fetch('http://localhost:3000/images/JohnWick.jpg')
    expect(response).toBeTruthy()
})

// this should return true only after npm run start has been run
it('Should return false for an invalid link', async () => {
    const response = await fetch('http://localhost:3000/thumbs/edited-JohnWick.jpg')
    expect(response).toBeTruthy()
})
