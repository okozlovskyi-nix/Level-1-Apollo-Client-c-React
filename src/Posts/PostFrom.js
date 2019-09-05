import React, { Component } from 'react';

class PostForm extends Component {
  state = {
    id: this.props.post.id || '',
    body: this.props.post.body || '',
    title: this.props.post.title || '',
  };

  handleInput = e => {
    const formData = {};

    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { title, body, id } = this.state;
    const { onSubmit } = this.props;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          variables: {
            title,
            body,
            id
          }
        }).then(() => {
          this.setState({
            title: '',
            body: ''
          })
        })
      }}>
        <input
          type="text"
          value={title}
          placeholder="title"
          name="title"
          onChange={this.handleInput}
        />
        <textarea
          placeholder="body"
          value={body}
          name="body"
          onChange={this.handleInput}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default PostForm;
