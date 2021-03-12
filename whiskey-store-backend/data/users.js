const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Leon Marbukh',
    email: 'leonmarbukh@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Whitney Winsor',
    email: 'wjwinsor@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];


module.exports = users;