const axios= require('axios');
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');

const {GraphQLInputObjectType,GraphQLSchema,GraphQLObjectType, GraphQLInt,GraphQLBoolean, GraphQLString,GraphQLList}= require('graphql');
const api_key='LBSaMajQK7esr6nimNBvdRSRQhiC6D3uwtNFSeGY';
const START_DATE='2015-09-07';
const END_DATE= '2015-09-08';

const API_Token= '4348627323db8f65347f0293c5ae8edc';
const newsapi_token= '0441fc0205cd4e2fb3ab212de4d5dab6';
//Neo-Feed

// const Neo_Feeds= new GraphQLObjectType({
//     name:'neo',
//     fields:()=>({
//         links: {type: Graph},
        

//     })
// });
//news
// const News_Feed= new GraphQLObjectType({
//     name:'newsap',
//     fields:()=>({
        
//         timestamp: {type: GraphQLInt},
//         articleCount: {type: GraphQLInt},
//         articles:{type: GraphQLJSON}

//      })
// });
const News_Feed= new GraphQLObjectType({
    name:'newsap',
    fields:()=>({
        
        status: {type: GraphQLString},
        totalResults: {type: GraphQLInt},
        articles:{type: GraphQLJSON}

     })
});

const News= new GraphQLObjectType({
    name:'newsapi',
    fields:()=>({
        articles: {type: GraphQLJSON},
        })
});


//Root Query
const RootQuery= new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
            //google news api
        newsap:{
            type: News_Feed,
            args: {
                newsapi_token: {type:GraphQLString},
            },
            resolve(parent,args){
                return axios.get(`https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${args.newsapi_token}`)    
                .then(res=>res.data);
            }
            
        
        },
//         newsapi:{
//             type: News,
//             args: {
//                 newsapi_token: {type:GraphQLString},
//             },
//                resolve(parent,args){
//                         return axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${args.newsapi_token}`)
//                         .then(res=>res.data);
//                     }
//         },
 
       
   } 
  });


module.exports= new GraphQLSchema({
    query: RootQuery
})
