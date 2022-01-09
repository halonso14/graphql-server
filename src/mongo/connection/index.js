import mongoose from 'mongoose';

const { DB_USER, DB_PASSWORD, MFLIX_DB_NAME, AIRBNB_DB_NAME } = process.env;

const MFLIX_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ivmey.mongodb.net/${MFLIX_DB_NAME}?retryWrites=true&w=majority`;
const AIRBNB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ivmey.mongodb.net/${AIRBNB_DB_NAME}?retryWrites=true&w=majority`;

export function createtMflixDBConnection() {
    return mongoose.createConnection(MFLIX_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

export function createtAirbnbDBConnection() {
    return mongoose.createConnection(AIRBNB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}