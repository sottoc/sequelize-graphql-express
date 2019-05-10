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
      
      // await Classroom.findAll({})
      // .then((classrooms) => {
      //   console.log(classrooms[0]['dataValues']);
      //   var id = classrooms[0]['dataValues']['id'];
      //   //return [{id:1, name:"content", email:"test@test.com"}];
      // })
        
    },
    authors: (parent, args, { db }, info) => db.author.findAll(),
    post: (parent, { id }, { db }, info) => db.post.findById(id),
    author: (parent, { id }, { db }, info) => db.author.findById(id),
    createPost: (parent, { title, content, authorId }, { db }, info) =>
        db.post.create({
          title: title,
          content: content,
          authorId: authorId
        }),
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