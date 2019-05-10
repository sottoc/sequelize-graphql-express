'use strict';

const Post = require('../models').Post;
const Author = require('../models').Author;
const Student = require('../models').Student;
const Classroom = require('../models').Classroom;
const db = require('../models');

const resolvers = {
    posts: async(args) => await db.Post.findAll(),
    users: async(args) => {
      return await db.User.findAll()
      .then((users) => { 
        console.log(users) 
        return users;
      });
    },
    authors: (parent, args, { db }, info) => db.author.findAll(),
    mortgages: async(args) => {
      return await db.Mortgage.findAll()
      .then((mortgages) => { 
        console.log(mortgages) 
        return mortgages;
      });
    },
    post: (parent, { id }, { db }, info) => db.post.findById(id),
    author: (parent, { id }, { db }, info) => db.author.findById(id),
    createPost: (parent, { title, content, authorId }, { db }, info) =>
        db.post.create({
          title: title,
          content: content,
          authorId: authorId
        }),
    createMortgage: async(args) => {
      return await db.Mortgage.create({
        rate_type: args.rate_type,
        term: args.term,
        interest_rate: args.interest_rate,
        rate_hold_data: args.rate_hold_data,
        monthly_prepayment: args.monthly_prepayment,
        lump_sum_prepayment: args.lump_sum_prepayment,
        pre_approval: args.pre_approval,
        prime_adjustment: args.prime_adjustment,
        mortgage_provider: args.mortgage_provider
      })
      .then((mortgage) => { 
        console.log(mortgage) 
        return mortgage;
      });
    },
      updatePost: (parent, { title, content, id }, { db }, info) =>
        db.post.update({
          title: title,
          content: content
        },
        {
          where: {
            id: id
          }
        }),
      deletePost: (parent, {id}, { db }, info) =>
        db.post.destroy({
          where: {
            id: id
          }
        }) 

    // Author: {
    //   posts: (parent, args, context, info) => parent.getPosts(),
    // },
    // Post: {
    //   author: (parent, args, context, info) => parent.getAuthor(),
    // },
    // Query: {
    //   posts: (parent, args, { db }, info) => db.post.findAll(),
    //   users: (parent, args, { db }, info) => {
    //     console.log(args);
    //     return [{id:1, name:"content", email:"test@test.com"}];
    //   },
    //   authors: (parent, args, { db }, info) => db.author.findAll(),
    //   post: (parent, { id }, { db }, info) => db.post.findById(id),
    //   author: (parent, { id }, { db }, info) => db.author.findById(id) 
    // },
    // Mutation: {
    //   createPost: (parent, { title, content, authorId }, { db }, info) =>
    //     db.post.create({
    //       title: title,
    //       content: content,
    //       authorId: authorId
    //     }),
    //   updatePost: (parent, { title, content, id }, { db }, info) =>
    //     db.post.update({
    //       title: title,
    //       content: content
    //     },
    //     {
    //       where: {
    //         id: id
    //       }
    //     }),
    //   deletePost: (parent, {id}, { db }, info) =>
    //     db.post.destroy({
    //       where: {
    //         id: id
    //       }
    //     })
    // }
  };

  module.exports = resolvers;