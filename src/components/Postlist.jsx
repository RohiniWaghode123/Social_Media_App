import { useContext, useEffect } from "react";
import Post from "./Posts";
import { PostList as PostListData } from "../store/Post-list-Context";
import WelcomeMsg from "./WelcomeMsg";

function Postlist() {

  const { postList,addInitialPost } = useContext(PostListData);
 
  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => {
    console.log(data);  // ✅ data is an array of posts
  const formattedPosts = data.map(post => ({
    id: post.id,
    title: post.title,
    body: post.body,
    userId: post.userId,
    reactions: Math.floor(Math.random() * 100), // fake reactions
    tags: ['demo', 'sample'], // fake tags
  }));
  addInitialPost(formattedPosts);
   });
  },[]
  );
  
  
  const handleGetPostsClick = () => {
    

  };
  return (
    <>

      {postList.length === 0 && <WelcomeMsg onGetPostClicks={handleGetPostsClick} />}
      {postList.map((post) => (

        <Post key={post.id} post={post} />

      ))}

    </>
  );
}

export default Postlist;
