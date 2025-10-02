import { createContext, useReducer } from "react";

// Default context shape
const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
};

// Create context
export const PostList = createContext(DEFAULT_CONTEXT);

// Reducer function
const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currPostList.filter(
        (post) => post.id !== action.payload.postId
      );

    case "ADD_POST":
      return [action.payload, ...currPostList];
    case "ADD_INITIAL_POSTS":
      return [...action.payload.posts]

    default:
      return currPostList;
  }
};


// Provider component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  // Add Post function
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now().toString(), // unique id
        title: postTitle,
        body: postBody,
        reactions: parseInt(reactions) || 0,
        userId,
        tags,
      },
    });
  };
  //addInitial posts

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
      posts
      },
    });
  };

  // Delete Post function
  const deletePost = (postId) => {
    console.log(`delete post called for : ${postId}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost ,addInitialPost}}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
