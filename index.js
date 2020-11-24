
const express = require('express')
const app = express()
app.use(express.static('build'))
app.use(express.json())


app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

