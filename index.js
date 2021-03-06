
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.static('build'))
app.use(express.json())
app.use(cors())


app.get('/', (request, response) => {
    response.send('<h1>Hello Lassi!</h1>')
  })


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

