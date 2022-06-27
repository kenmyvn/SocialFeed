import "./Post.css";
import CustomButton from "./CustomButton";

const Post = (props) => {
  return (
    <div className="post">
      <div className="name">
        <p>{props.name}</p>
      </div>
      <div className="body">
        <p>{props.body}</p>
        <div className="buttons">
          <CustomButton type="up"/>
          <CustomButton type="down"/>
        </div>
      </div>
    </div>
  );
};

export default Post;
