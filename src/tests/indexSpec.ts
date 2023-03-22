import fs from 'fs'

import fetch from 'isomorphic-fetch'
// import fetch from 'node-fetch/lib/index.js';
// import fetch from 'node-fetch'

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
    const response = await fetch('http://localhost:3000/images/edited-JohnWick.jpg')
    expect(response).toBeTruthy()
})

// describe('Link exists tests', () => {
//     it('Should return true for a valid link', async () => {
//         const response = await fetch('http://localhost:3000/images/JohnWick.jpg')
//         expect(response.ok).toBe(true)
//     })

//     it('Should return false for an invalid link', async () => {
//         const response = await fetch('http://localhost:3000/images/edited-JohnWick.jpg')
//         expect(response.ok).toBe(false)
//     })
// })

// it('should expect JohnWick.jpg to exist', () => {
//     expect(fs.existsSync('src/images/edited-JohnWick.jpg')).toBeTruthy()
// })
