'use strict';

const db = require('../models');

const resolvers = {
    posts: async(args) => await db.Post.findAll(),
    users: async(args) => {
      return await db.User.findAll({
        include: [{
          model: db.FinancialCharacteristics,
          as: 'financialCharacteristics'
        }, {
          model: db.FinancialProfile,
          as: 'financialProfile'
        }]
      })
      .then((users) => { 
        return users;
      });
    },
    authors: (parent, args, { db }, info) => db.author.findAll(),
    mortgages: async(args) => {
      return await db.Mortgage.findAll()
      .then((mortgages) => { 
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
        return mortgage;
      });
    },
    createFinancialProfile: async(args) => {
      return await db.FinancialProfile.create({
        estimated_income: args.estimated_income,
        RRSP_contribution_room: args.RRSP_contribution_room,
        TFSA_contribution_room: args.TFSA_contribution_room
      })
      .then((financialProfile) => { 
        return financialProfile;
      });
    },
    createUser: async(args) => {
      return await db.User.create({
        first_name: args.first_name,
        last_name: args.last_name,
        email_address: args.email_address,
        birthday: args.birthday,
        cell_number: args.cell_number,
        marital_status: args.marital_status,
        dependents: args.dependents,
        address: args.address
      }, {
        include: [{
          model: db.FinancialProfile,
          as: 'financialProfile'
        }],
      })
      .then((user) => { 
        return user;
      });
    },

    createUserWithFinancial: async(args) => {
      return await db.User.create({
        first_name: args.first_name,
        last_name: args.last_name,
        email_address: args.email_address,
        birthday: args.birthday,
        cell_number: args.cell_number,
        marital_status: args.marital_status,
        dependents: args.dependents,
        address: args.address,
        financialCharacteristics: {
          employer_matched_RRSP: args.employer_matched_RRSP,
          has_will: args.has_will,
          has_budget: args.has_budget,
          pension_type: args.pension_type
        }, 
        financialProfile: {
          estimated_income: args.estimated_income,
          RRSP_contribution_room: args.RRSP_contribution_room,
          TFSA_contribution_room: args.TFSA_contribution_room
        }
      }, {
        include: [{
          model: db.FinancialCharacteristics,
          as: 'financialCharacteristics'
        }, {
          model: db.FinancialProfile,
          as: 'financialProfile'
        }],
      })
      .then((user) => { 
        return user;
      });
    },

    checkEmailaddress: async(args) => {
      return await db.User.findAll({
        where: {
          email_address: args.email_address
        },
        include: [{
          model: db.FinancialCharacteristics,
          as: 'financialCharacteristics'
        }, {
          model: db.FinancialProfile,
          as: 'financialProfile'
        }],
      })
      .then((users) => { 
        return users;
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

  };

  module.exports = resolvers;