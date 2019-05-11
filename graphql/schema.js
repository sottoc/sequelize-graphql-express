'use strict';

const schema = `
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email_address: String!
    birthday: String!
    cell_number: String
    marital_status: String!
    dependents: String!
    address: String!
    financialCharacteristics: FinancialCharacteristics
    financialProfile: FinancialProfile
  }
  type FinancialCharacteristics {
    id: ID!
    UserId: Int!,
    employer_matched_RRSP: Boolean!,
    has_will: Boolean!,
    has_budget: Boolean!,
    pension_type: String!
  }
  type FinancialProfile {
    id: ID!
    UserId: Int!,
    estimated_income: Int!,
    RRSP_contribution_room: Int!,
    TFSA_contribution_room: Int!
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
    createFinancialProfile(UserId:Int!, estimated_income:Int!, RRSP_contribution_room:Int!, TFSA_contribution_room:Int!): FinancialProfile!
    createUser(first_name:String!, last_name:String!, email_address:String!, birthday:String!, cell_number:String!, marital_status:String!, dependents:String!, address:String! ):User!
    createUserWithFinancial(first_name:String!, last_name:String!, email_address:String!, birthday:String!, cell_number:String!, marital_status:String!, dependents:String!, address:String!, employer_matched_RRSP:Boolean!, has_will:Boolean!, has_budget:Boolean!, pension_type:String!, estimated_income:Int!, RRSP_contribution_room:Int!, TFSA_contribution_room:Int!):User!
    updatePost(id: ID!, title: String, content:String!): [Int!]!
    deletePost(id: ID!): Int!
    checkEmailaddress(email_address:String!):[User!]!
  }
`;

module.exports = schema;