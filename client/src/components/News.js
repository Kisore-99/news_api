import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
//import { Link } from 'react-router-dom';
import NewsItem from './NewsItem';

const LAUNCH_QUERY = gql`
  query NewsQuery {
    newsap(newsapi_token:"0441fc0205cd4e2fb3ab212de4d5dab6") 
    {
      status,
      totalResults,
      articles
       
    }
}
`;

export default class News extends Component {

  render() {
    return(
      <Fragment>
      <div>
          
          <Query query={LAUNCH_QUERY}>
            {({loading, error, data})=>{
              if(loading) return <h4>Loading</h4>

            
              if(error) console.log(error)
    
            console.log(data.newsap.articles);
              // this.setState({'art': data});
              // console.log(art);
           return <NewsItem article={data.newsap.articles} />
                
    
              
                  
                  
              
              
            }}
          </Query>
      </div>

      </Fragment>
    )
  }
}


