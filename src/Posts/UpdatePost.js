import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PostForm from './PostFrom';

const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(
      where: {
        id: $id,
      }
      data: {
        status: PUBLISHED,
        title: $title
        body: $body
      }
    ) {
      title
      body
      id
    }
  }
`;

class UpdatePost extends Component {
  render() {
    return (
      <div>
        <Mutation mutation={UPDATE_POST} >
          {updatePost => (
            <PostForm post={this.props.post} onSubmit={updatePost} />
          )}
        </Mutation>
      </div>
    );
  }
}

export default UpdatePost;