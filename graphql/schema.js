'use strict';

const schema = `
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email_address: String!
    birthday: String!
    cell_number: String
    marital_status: Int!
    dependents: String!
    address: String!
    financial_characteristics: String!
    user_financial_profile: String!
  }
  type Mortgage {
    id: ID!
    rate_type: Int!,
    term: Int!,
    interest_rate: Float!,
    rate_hold_data: String!,
    monthly_prepayment: Float!,
    lump_sum_prepayment: Float!,
    pre_approval: Boolean!,
    prime_adjustment: Float,
    mortgage_provider: String!
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    posts: [Post!]!
  }
  type Post {
    id: ID!
    title: String
    content: String!
    authorId: ID!
    author: Author!
  }
  type Query {
    users: [User!]!
    posts: [Post!]!
    post(id: ID!): Post
    author(id: ID!): Author
    authors: [Author!]!
    mortgages: [Mortgage!]!
  }
  type Mutation {
    createPost(title: String, content:String!, authorId: ID!): Post!
    createMortgage(rate_type: Int!, term: Int!, interest_rate: Float!, rate_hold_data: String!, monthly_prepayment: Float!, lump_sum_prepayment: Float!, pre_approval: Boolean!, prime_adjustment: Float, mortgage_provider: String!): Mortgage!
    updatePost(id: ID!, title: String, content:String!): [Int!]!
    deletePost(id: ID!): Int!
  }
`;

module.exports = schema;