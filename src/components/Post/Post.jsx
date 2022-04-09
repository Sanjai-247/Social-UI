import { Favorite, MoreHoriz, ThumbUp } from "@mui/icons-material";
import React, { useState } from "react";
import "./Post.css";
import { Users } from "../../dummyData";

export default function Post({post}) {
    const use = Users.filter(u => u.id === post.userId);
    const user = use[0];
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    function LikeCounter() {
      setLike(isLiked ? like+1 : like-1)
      setIsLiked(!isLiked)
    }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user.profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreHoriz className="postmore" />
          </div>
        </div>
        <div className="postCenter">
         {(post.desc) &&  <span className="postText">{post.desc}</span>}
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="BottomLeft">
            <ThumbUp htmlColor="blue" className="postIcon" onClick = {LikeCounter} />
            <Favorite htmlColor="red" className="postIcon" onClick = {LikeCounter} />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="BottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
