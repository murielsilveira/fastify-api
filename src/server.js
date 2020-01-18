const fastify = require('fastify')
const fatifyGraghQL = require('fastify-gql')
const app = fastify()

app.get('/', async () => {
  return { hey: 'yo' }
})

const gql = args => (args[0])

const schema = gql`
  type Query {
    hey(name: String): String
  }
`

const resolvers = {
  Query: {
    hey: async (root, { name = ''}) => {
      return `Yo ${name}`.trim()
    }
  }
}

app.register(fatifyGraghQL, {
  schema,
  resolvers,
  graphiql: 'playground',
})

const port = process.env.PORT || 3003
app.listen(port, error => {
  if (error) {
    console.error(error)
    process.exit(1)
  }
  console.log(`Server running on http://localhost:${port}`)
})
