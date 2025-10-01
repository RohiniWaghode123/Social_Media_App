import { createContext, useReducer } from "react";

// Default context shape
const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
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

    default:
      return currPostList;
  }
};

// ✅ Initial dummy data
const default_postlist = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Hi friends I am going to mumbai for my vacations.",
    reactions: 1,
    userId: "user-9",
    tags: ["Vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Going to pune",
    body: "I am excited to join a new job.",
    reactions: 15,
    userId: "user-12",
    tags: ["Job", "Growth", "Unbelievable"],
  },
];

// Provider component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    default_postlist
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

  // Delete Post function
  const deletePost = (postId) => {
    console.log(`delete post called for : ${postId}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
