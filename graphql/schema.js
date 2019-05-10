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
  }
  type Mutation {
    createPost(title: String, content:String!, authorId: ID!): Post!
    updatePost(id: ID!, title: String, content:String!): [Int!]!
    deletePost(id: ID!): Int!
  }
`;

module.exports = schema;