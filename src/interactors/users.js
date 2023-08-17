const { createUser } = require('../services/users');
const { v4 } = require('uuid');

const createNewUser = ({ firstName, email, lastName, phone, avatar }) => {
  try {
    const dataNew = {
      uid: v4(),
      firstName,
      lastName,
      email,
      phone,
      avatar,
    };
    return createUser(dataNew);
  } catch (error) {
    throw error;
  }
};

module.exports = { createNewUser };
