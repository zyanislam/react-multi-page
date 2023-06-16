import React, {Component} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import {app} from './Firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {posts: []}
  }
  async refreshPosts() {
    var postsList=[];
    const db = getFirestore(app);
    const postsCol = collection(db, 'posts');
    const postsSnapshot = await getDocs(postsCol);

    postsSnapshot.forEach(doc => {
      let post = doc.data();
      postsList.id = doc.id;
      postsList.push(post);
    });

    this.setState({posts:postsList});
  }

  componentDidMount() {
    this.refreshPosts();
  }
  render() {
    const { posts } = this.state;
  return (
    <div>
      <NavBar />
      <div className="container">
        {
          posts.map(post => (
            <Posts username={ post.username }
              caption={ post.caption }
              imageURL={ post.imageURL }
            />
          ))
        }
      </div>
    </div>
  );
  }
}

export default App;
