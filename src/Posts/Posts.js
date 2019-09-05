import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

const POSTS_QUERY = gql`
{
  posts {
    id
    title
    body
    createdAt
  }
}
`;

class Posts extends Component {
  render() {
    return (
      <Query query={POSTS_QUERY}>
        {({loading, data}) => {
          if (loading) return 'Loading...';
          const { posts } = data;
          return posts.map(p => <Link key={p.id} to={`/post/${p.id}`} ><h2>{p.title}</h2></Link>)
        }}
      </Query>
    );
  }
}

export default Posts;
