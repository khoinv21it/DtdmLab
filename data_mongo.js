const { MongoClient } = require("mongodb"); // Sử dụng MongoClient thay vì mongo
const url = "mongodb+srv://khoinguyen010503:YCYur0dmGervDilH@cluster0.gzyss.mongodb.net/test1";

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
  try {
    await client.connect();
    console.log("Database connected!");
    console.log('Web Server is listening at port '+ (process.env.port || 3000));
  } catch (err) {
    console.error("Error connecting to the database:", err);
  } finally {
    await client.close();
  }
}

main();
