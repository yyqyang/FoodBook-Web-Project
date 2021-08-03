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
    age: 25,
    gender:'Male',
    email:'husan.s@northeastern.edu',
    title: 'my diet',
    dietList:'100g beef.'
                +'\n 300g eggs'
                +'\n 100g sugar'
                +'\n 250g fish' 
  },
  {
    id: 2,
    name: 'Shangjun',
    age: 23,
    gender:'Male',
    email:'1234@qq.com',
    title: 'ShangJun diet',
    dietList:'100g beef.'
                +'\n 30g eggs'
                +'\n 10g sugar'
                +'\n 25g fish' 
  },
  {
    id: 3,
    name: 'Yang',
    age: 24,
    gender:'Female',
    email:'1222@qq.com',
    title: 'ShangJun diet',
    dietList:'100g beef.'
                +'\n 30g eggs'
                +'\n 10g sugar'
  },
];

db.user.insertMany(foodDB);
const count = db.user.count();
print('Inserted', count, 'issues');

db.user.remove({ _id: 'user' });
db.counters.insert({ _id: 'users', current: count });

db.user.createIndex({ id: 1 }, { unique: true });
db.user.createIndex({ status: 1 });
db.user.createIndex({ owner: 1 });
db.user.createIndex({ created: 1 });
db.user.createIndex({ title: 'text', description: 'text' });

db.deleted_users.createIndex({ id: 1 }, { unique: true });