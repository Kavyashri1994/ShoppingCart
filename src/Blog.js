import React from 'react';
import ReactDOM from 'react-dom';

export default class Blog extends React.Component {
  render() {
  var posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
  var sidebar = (
    <ul>
    {posts.map((post) =>
      <li key={post.id}>{post.title}</li>)}
      </ul>
  );
  var content =  posts.map((post) =>
    <div key={post.id}>
     <h2>{post.title}</h2>
     <p>{post.content}</p>
    </div>
  );

    return (
      <div>
        {sidebar}
       <hr />
        {content}
      </div>
    )
  }
}