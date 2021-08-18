import RecordsDAO from "../dao/recordsDAO.js";

export default class RecordsController {
  static async apiGetRecord(req, res, next) {

    let filters = {};
    if (req.query.user_id) {
      filters.user_id = req.query.user_id;
    }

    const { recordList, totalNumUser } = await RecordsDAO.getRecord({
      filters,
    });

    let response = {
      records: recordList,
      filters: filters,
      total_results: totalNumUser,
    };
    res.json(response);
  }

  static async apiPostRecord(req, res, next) {
    try {
      const userId = req.body.user_id;
      const record = req.body.text;
      const date = new Date();

      const RecordResponse = await RecordsDAO.addRecord(userId, record, date);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateRecord(req, res, next) {
    try {
      const userId = req.body.user_id;
      const text = req.body.text;
      const date = new Date();

      const recordResponse = await RecordsDAO.updateRecord(
        userId,
        text,
        date
      );

      var { error } = recordResponse;
      if (error) {
        res.status(400).json({ error });
      }

      //   if (recordResponse.modifiedCount === 0) {
      //     throw new Error(
      //       "unable to update record - user may not be original poster"
      //     );
      //   }
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  static async apiDeleteRecord(req, res, next) {
    try {
      const userId = req.body.user_id
      console.log(userId)
      const recordResponse = await RecordsDAO.deleteRecord(
        userId,
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}
