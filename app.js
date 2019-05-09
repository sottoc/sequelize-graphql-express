var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//import { ApolloServer, gql } from "apollo-server-express";
var ApolloServer, gql = require('apollo-server-express');

// import typeDefs from "./graphql/schema";
// import resolvers from "./graphql/resolvers";
// import db from "./models";

var typeDefs = require('./graphql/schema');
var resolvers = require('./graphql/resolvers');
var db = require('./models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

server.applyMiddleware({ app });

console.log(server.graphqlPath);



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
