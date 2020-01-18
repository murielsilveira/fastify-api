const fastify = require('fastify')
const app = fastify()

app.get('/', async () => {
  return { hey: 'yo' }
})

const port = process.env.PORT || 3003
app.listen(port, error => {
  if (error) {
    console.error(error)
    process.exit(1)
  }
  console.log(`Server running on http://localhost:${port}`)
})
