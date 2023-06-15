import express from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
dotenv.config();
import colors from 'colors';
import cors from 'cors';
import schema from './schema/schema.js';
import connectDB from './config/db.js'

const app = express();
const port = process.env.PORT;
connectDB()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    graphiql: process.env.NODE_ENV === 'development',
    schema
}))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});