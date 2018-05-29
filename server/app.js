const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://yutong:gql-test@ds233970.mlab.com:33970/gql-test');
mongoose.connection.once('open', () => {
    console.log('connected to database');
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log("now listening for req on port 4000");
});