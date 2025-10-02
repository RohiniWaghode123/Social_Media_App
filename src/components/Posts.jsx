import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post-list-Context";

const Posts = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        {/* Post Title and Delete Button */}
        <h5 className="card-title">
          {post.title}
          <button
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border-0"
            onClick={() => deletePost(post.id)}
            title="Delete Post"
            style={{ cursor: "pointer" }}
          >
            <MdDelete />
            <span className="visually-hidden">Delete post</span>
          </button>
        </h5>

        {/* Post Body */}
        <p className="card-text">{post.body}</p>

        {/* Post Tags */}
        {Array.isArray(post.tags) &&
          post.tags.map((tag, index) => (
            <span
              key={`${post.id}-${tag}-${index}`}
              className="badge text-bg-primary hashtag me-1"
            >
              {tag}
            </span>
          ))}

        {/* Post Reactions */}
        <div className="alert alert-info reactions mt-3" role="alert">
          This post has been reacted to by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Posts;
