/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo issuetracker scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://user:pwd@xxx.mongodb.net/issuetracker scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/issuetracker scripts/init.mongo.js
 */

/* global db print */
/* eslint no-restricted-globals: "off" */

db.user.remove({});
db.deleted_user.remove({});

const foodDB = [
  {
    id: 1,
    name: 'Shirali',
    email:'husan.s@northeastern.edu',
    tableData:{
      food:"banana",
      kcal: 60,
      quantity: 1
    }
  },
  {
    id: 2,
    name: 'Shangjun',
    email:'1234@qq.com',
    tableData:{
      food:"apple",
      kcal: 80,
      quantity: 2
    }
  },
  {
    id: 3,
    name: 'Yang',
    email:'1222@qq.com',
    tableData:{
      food:"ham",
      kcal: 100,
      quantity: 2
    }
  },
];

db.user.insertMany(foodDB);

db.user.createIndex({ id: 1 }, { unique: true });
db.user.createIndex({ status: 1 });
db.user.createIndex({ created: 1 });
db.user.createIndex({ title: 'text', description: 'text' });

db.deleted_users.createIndex({ id: 1 }, { unique: true });