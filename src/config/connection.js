import mongoose from "mongoose";
import 'dotenv/config';

const { MONGO_USER,MONGO_PASS, MONGO_HOST, MONGO_DB_NAME, MONGO_PORT } = process.env


// mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB_NAME}`)
mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}`)

const db = mongoose.connection;

db.on('error', console.log.bind(console, 'Connection error'));
db.once('open', () => {
  console.log('Database connected');
})

export default db;