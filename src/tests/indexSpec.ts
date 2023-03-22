import fs from 'fs'

it('Should expect JohnWick.jpg to exist', () => {
    expect(fs.existsSync('src/images/JohnWick.jpg')).toBeTruthy()
})

it('Should expect edited-JohnWick.jpg to exist', () => {
    expect(fs.existsSync('src/images/edited-JohnWick.jpg')).toBeTruthy()
})

// it('should expect JohnWick.jpg to exist', () => {
//     expect(fs.existsSync('src/images/edited-JohnWick.jpg')).toBeTruthy()
// })