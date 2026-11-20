import React from "react";
import { useState } from "react";
function CommentBox() {
  const [comment, setComment] = useState("");
  const handlerChange = (event) => {
    setComment(event.target.value);
    
  };
  // post btn
  const [comments, setComments] = useState([
    // { name: "Sneha Yadav", text: "Really beautiful! " },
    // { name: "priya Singh", text: "beautiful!" },
  ]);
  function handlePost() {
    if (comment.trim() === "") {
      return;
    }
    setComments((prevComments) => {
      return [...prevComments, { text: comment }];
    });
    setComment("");
    
  }
  
  
  return (
    <div className="bg-gradient-to-r from-purple-100 via-pink-50 to-purple-100 border-purple-200 rounded-xl h-[200px] ">
      <div className="w-full  flex items-center gap-3">
        <img
          src="https://imgs.search.brave.com/D7Fi54QiF7gpiUdo8Jg_FimmtbGGz8iKZf4U51dGGTk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE2/ODc3NDExMS92ZWN0/b3IvYXZhdGFyLW9y/LXBlcnNvbi1zaWdu/LXByb2ZpbGUtcGlj/dHVyZS1wb3J0cmFp/dC1pY29uLXVzZXIt/cHJvZmlsZS1zeW1i/b2wuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTZxdzFMUkc1/M3owMFJYSm5WS1FD/NThXN1huVzJnZFFm/R0JJUjQzRTk3T2M9"
          alt="Pooja"
          className="w-12 h-12 rounded-full object-cover shrink-0"
        />
        <input
          type="text"
          placeholder=" Write a comment..."
          className="flex-1 h-12 rounded-full px-4 border border-purple-200 outline-none"
          onChange={handlerChange}
          value={comment}
        />
        <button
          onClick={handlePost}
          className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold"
        >
          Post
        </button>
      </div>
      <h2 className="font-bold text-base ml-2 mb-3">Comments ({comments.length})</h2>
      <div className="flex flex-col gap-4">
        <div>
          {comments.map((item,index)=>{
            return(
              <div key={index}>
            <p>{item.text}</p>

              </div>
            )
            

          })}
        </div>
        </div>
        </div>
      
      
  );
}
export default CommentBox;
