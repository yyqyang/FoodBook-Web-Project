// Atlas:
// mongo mongodb+srv://shangjun:jsjsam@cluster0.ojh7b.mongodb.net/foodbook_user scripts/init.mongo.js

// mongo "mongodb+srv://cluster0.ojh7b.mongodb.net/foodbook_user" --username shangjun
// then input pwd jsjsam
db.foodbook_user.remove({});

const issuesDB = [
    {
      "user_name": "Sam",
      "user_id": "1000",
      "user_psw": "jsjsam",
      "foodlist": ["food1", "food2", "food3"],
      "total_calorie": 1000,
      "date": "2021-08-10"
    },

    {
      "user_name": "Yang",
      "user_id": "1001",
      "user_psw": "jsjsam",
      "foodlist": ["food3", "food4", "food5"],
      "total_calorie": 2000,
      "date": "2021-08-11"
    }
  ];

db.foodbook_user.insertMany(issuesDB);
const count = db.foodbook_user.count();
print('Inserted', count, 'users');

