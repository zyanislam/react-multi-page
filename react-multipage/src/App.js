import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Posts from './components/Posts';


function App() {
  const [posts, setPosts] = useState([
    {
      username: "zyan",
      caption: "Getting started with React",
      imageURL: "https://xpgraph.com/wp-content/uploads/2017/12/reactjs.jpg"
    },
    {
      username: "reactcommunity",
      caption: "React",
      imageURL: "https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1920&rev=61e1dad3af7e465e9544cf8490237772&extension=webp&hash=15AC1170ADEB7C885F07C74ED6D57E8D"
    },
    {
      username: "reactcommunity2",
      caption: "React JS",
      imageURL: "https://res.cloudinary.com/practicaldev/image/fetch/s---WaM_VT8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/nxo6lq82wbziz16f1xso.png"
    },
  ]);
  
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

export default App;
