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
    hey: async (_, { name = '' }) => {
      return `Yo ${name}`.trim()
    }
  }
}

app.register(fatifyGraghQL, {
  schema,
  resolvers,
  graphiql: 'playground',
})

module.exports = app
