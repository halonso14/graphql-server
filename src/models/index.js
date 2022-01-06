import mongoose from 'mongoose';

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const MONGO_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ivmey.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

// Connect to mongoDB
export default () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDB Connected')
    }).catch(err => {
        console.log(err);
    });
}