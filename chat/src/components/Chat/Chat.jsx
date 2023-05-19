import React, { useState } from "react";
import "./Chat.scss";

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
      <main className="wrapper">
        <h1 className="title">Comments</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            name="input"
            type="text"
            className="inputfield"
            placeholder="Enter your comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        <div className="comments-container">
          <ul>
            {comments.map((comment, index) => (
              <li
                key={index}
                className={index === 0 ? "commentNew" : "comment"}
              >
                {comment.text}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};
export default Chat;
