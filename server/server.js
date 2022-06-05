const path = require('path')
const express = require('express')
const port = process.env.PORT || 3000

const app = express()
app.use(express.static(path.join(__dirname, '..', 'public/static/')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});