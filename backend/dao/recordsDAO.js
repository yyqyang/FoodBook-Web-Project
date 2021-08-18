import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;

let records;

export default class RecordsDAO {

  static async injectDB(conn) {
    if (records) {
      return;
    }
    try {
      records = await conn.db(process.env.FOODBOOK_NS).collection("records");
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`);
    }
  }

  static async getRecord({
    filters = null,

  } = {}) {
    let query;

    if (filters) {
      if ("user_id" in filters) {
        query = { user_id: { $eq: filters["user_id"] } };
      } 
    }

    // now we have query

    let cursor;
    try {
      cursor = await records
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { recordList: [], totalNumUser: 0 };
    }

    const displayCursor = cursor;
    // if there is a lot in the list, use limit(foodPerPage).skip(foodPerPage * page)

    try {
      const recordList = await displayCursor.toArray();
      const totalNumUser = await records.countDocuments(query);
      return { recordList, totalNumUser };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { recordList: [], totalNumUser: 0 };
    }
  }

  static async addRecord(userId, record, date) {
    try {
      const recordDoc = {
        user_id: userId,
        text: record,
        date: date
      };

      return await records.insertOne(recordDoc);
    } catch (e) {
      console.error(`Unable to post record: ${e}`);
      return { error: e };
    }
  }

  static async updateRecord(userId, text, date) {
    try {
      const updateResponse = await records.updateOne(
        { user_id: userId },
        { $set: { text: text, date: date } }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update record: ${e}`);
      return { error: e };
    }
  }

  static async deleteRecord(userId) {
    try {
      const deleteResponse = await records.deleteMany({
        user_id: userId,
      });

      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete record: ${e}`);
      return { error: e };
    }
  }
}
