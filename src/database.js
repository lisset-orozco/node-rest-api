import MongoClient from "mongodb";

const connect = async () => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
    const db = client.db('node-rest-api');
    console.log('DB is connected');

    return db;
  } catch (error) {
    console.log(error);
  }
}

export default connect;
