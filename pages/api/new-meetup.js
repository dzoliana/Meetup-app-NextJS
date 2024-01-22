import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    /* const client = await MongoClient.connect(
      "mongodb+srv://<username>:<password>@cluster0.hsckvsf.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups"); */
    const user = process.env.DB_USER;
    const password = process.env.DB_PASS;

    const client = await MongoClient.connect(
      `mongodb+srv://${user}:${password}@cluster0.hsckvsf.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection(`${process.env.DB_COLLECTION}`);

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    await client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
