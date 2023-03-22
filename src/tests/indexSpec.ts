import fs from 'fs'

import fetch from 'isomorphic-fetch'

// check if the unedited image exists
it('Should expect JohnWick.jpg to exist', () => {
    expect(fs.existsSync('src/images/JohnWick.jpg')).toBeTruthy()
})

// check if the edited image exists
it('Should expect edited-JohnWick.jpg to exist', () => {
    expect(fs.existsSync('src/thumbs/edited-JohnWick.jpg')).toBeTruthy()
})

// this should pass only after npm run start has been run
it('Should return false for an invalid link', async () => {
    const response = await fetch('http://localhost:3000/images/JohnWick.jpg')
    expect(response).toBeTruthy()
})

// this should pass only after npm run start has been run
it('Should return false for an invalid link', async () => {
    const response = await fetch('http://localhost:3000/thumbs/edited-JohnWick.jpg')
    expect(response).toBeTruthy()
})

// This should pass if the resizable link exists and after npm run start has been run
it('Should return false for an invalid link', async () => {
    const response = await fetch('http://localhost:3000/resize?imageUrl=https://localhost:3000/images/JohnWick.jpg&width=340&height=380')
    expect(response).toBeTruthy()
})
