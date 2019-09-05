import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/ck03r4v8t0dwl01cd1bi392yn/master'
});


//
// client.query({
//   query: testQuery
// }).then(res => console.log(res));

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <header className="App-header">

            <Link to={'/'}><img src={logo} className="App-logo" alt="logo" /></Link>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to={'/post/new'}>New Post +</Link>
          </header>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/post/new" component={NewPost} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
