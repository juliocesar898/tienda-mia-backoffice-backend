const { createNewUser } = require('../interactors/users');
const { parseUsers } = require('../serializers/users');

const { findAllUsers } = require('../services/users');

const createUser = ({ body }, res, next) =>
  createNewUser(body)
    .then((newUser) => res.status(201).send(newUser))
    .catch(next);

const getUsers = (_, res, next) =>
  findAllUsers()
    .then((users) => res.status(200).send(parseUsers(users)))
    .catch(next);

module.exports = {
  createUser,
  getUsers,
};
