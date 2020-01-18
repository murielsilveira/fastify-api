const app = require('./app')

const port = process.env.PORT || 3003

app.listen(port, error => {
  if (error) {
    console.error(error)
    process.exit(1)
  }
  console.log(`Server running on http://localhost:${port}`)
})
