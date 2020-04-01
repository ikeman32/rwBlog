export const schema = gql`
  type User {
    id: Int!
    username: String!
    password: String!
  }

  type Query {
    users: [User]
  }

  input UserInput {
    username: String
    password: String
  }

  type Mutation {
    createUser(input: UsersInput!): User
    loginUser(username: String!, password: String!): User
  }
`
