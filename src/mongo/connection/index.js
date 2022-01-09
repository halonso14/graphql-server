import mongoose from 'mongoose';

const { DB_USER, DB_PASSWORD, MFLIX_DB_NAME, AIRBNB_DB_NAME } = process.env;

const DB_INFO = {
    mflix: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ivmey.mongodb.net/${MFLIX_DB_NAME}?retryWrites=true&w=majority`,
    airbnb: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ivmey.mongodb.net/${AIRBNB_DB_NAME}?retryWrites=true&w=majority`,
}

export default function createtDBConnection(name) {
    const url = DB_INFO[name];
    return mongoose.createConnection(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}