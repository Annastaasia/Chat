import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (commentText) => {
    const newComment = { text: commentText, date: new Date() };
    setComments((prev) => [newComment, ...prev]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommentSubmit(commentText);
    setCommentText("");
    console.log(comments);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="input"
          type="text"
          placeholder="Enter your comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className={index === 0 ? "commentNew" : "comment"}>
            {comment.text}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Chat;
