const express= require('express');
const graphqlHTTP= require('express-graphql');
const cors= require('cors');

const schema= require('./schema');
const app= express();
const path= require('path');

//allow cors-origin 
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.use(express.static('client/public'));

app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client/public', 'index.html'));
})
const PORT= process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server started at ${PORT}`));
