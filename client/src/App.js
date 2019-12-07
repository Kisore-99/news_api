import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from './components/News';


const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>

          <div className="container">
                 <News/>
          </div>

      </ApolloProvider>
    );
  }
}

export default App;
