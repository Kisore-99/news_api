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


// // Launch type
// const LaunchType = new GraphQLObjectType({
//     name:'Launch',
//     fields:()=>({
//         flight_number: {type: GraphQLInt},
//         mission_name: {type: GraphQLString},
//         launch_year: {type: GraphQLString},
//         launch_date_local: {type: GraphQLString},
//         launch_success: {type: GraphQLBoolean},
//         rocket: {type: RocketType}
//     })
// });

// //Rocket Type
// const RocketType = new GraphQLObjectType({
//     name:'Rocket',
//     fields:()=>({
//         rocket_id: {type: GraphQLString},
//         rocket_name: {type: GraphQLString},
//         rocket_type: {type: GraphQLString},
//     })
// });

//Root Query
const RootQuery= new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // launches: {
        //     type: new GraphQLList(LaunchType),
        //     resolve(parent, args){
        //         return axios.get('https://api.spacexdata.com/v3/launches')
        //         .then(res=> res.data);
        //     }
        // },
        // neos:{
        //     type: Neo_Feeds,
        //     args: {
        //         api_key: {type: GraphQLString},
        //         START: {type: GraphQLString},
        //         END: {type: GraphQLString},
        //     },
        //     resolve(parent, args){
        //         return axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${args.START}&end_date=${args.END}&api_key=${args.api_key}`)
        //         .then(res=>res.data);
        //     }
        // },
        // newsap:{
        //     type: News_Feed,
        //     args: {
        //         topic: {type: GraphQLString},
        //         API_Token: {type:GraphQLString},
        //     },
        //     resolve(parent,args){
        //         return axios.get(`https://gnews.io/api/v3/topics/${args.topic}?token=${args.API_Token}`)    
        //         .then(res=>res.data);
        //     }
            
        
        // },
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
 
        // launch: {
        //     type: LaunchType,
        //     args: {
        //         flight_number: {type: GraphQLInt}
        //     },
        //     resolve(parent, args){
        //         return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
        //         .then(res=> res.data);
        //     }
        // },
        // rockets: {
        //     type: new GraphQLList(RocketType),
        //     resolve(parent, args){
        //         return axios.get('https://api.spacexdata.com/v3/rockets')
        //         .then(res=> res.data);
        //     }
        // },
        // rocket: {
        //     type: RocketType,
        //     args: {
        //         id: {type: GraphQLInt}
        //     },
        //     resolve(parent, args){
        //         return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
        //         .then(res=> res.data);
        //     }
        // }
   } 
  });


module.exports= new GraphQLSchema({
    query: RootQuery
})
