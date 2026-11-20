import React from "react";
import CommentBox from "./CommentBox";
import { useState } from "react";
function Post() {
  const [isLiked, setisLiked] = useState(false);
  const [count, setCount] = useState(0);
  function handleLike() {
    increaseButton();
  }
  function increaseButton() {
    setCount((prevCount) => prevCount + 1)
  } 
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <div className="w-[500px]  min-h-[400px] bg-white rounded-xl shadow-md p-4 mx-auto mt-6">
        <div className="flex items-center gap-3">
          <img
            src="https://imgs.search.brave.com/D7Fi54QiF7gpiUdo8Jg_FimmtbGGz8iKZf4U51dGGTk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE2/ODc3NDExMS92ZWN0/b3IvYXZhdGFyLW9y/LXBlcnNvbi1zaWdu/LXByb2ZpbGUtcGlj/dHVyZS1wb3J0cmFp/dC1pY29uLXVzZXIt/cHJvZmlsZS1zeW1i/b2wuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTZxdzFMUkc1/M3owMFJYSm5WS1FD/NThXN1huVzJnZFFm/R0JJUjQzRTk3T2M9"
            alt="Pooja"
            className="w-16 h-16 rounded-full object-cover"
          />

          <div>
            <h3 className="font-bold text-xxl">Pooja Gupta</h3>
            <div className="flex items-center gap-4">
              <h4>Frontend Developer</h4>
              <p className="text-sm text-gray-500 flex">2 hours ago</p>
            </div>
          </div>
        </div>
        <div className="mt-1">
          <h5 className="text-xl font-medium text-gray-900">
            Good vibes, better days! ✨
          </h5>
        </div>
        <div className="mt-2">
          <img
            src="https://imgs.search.brave.com/urK7dJFqx5d0vaiQaGgJ89ZhPMjpo2j_S7n_BiTW8uU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NjY5LzQ4OS9zbWFs/bC9tb3VudGFpbi1j/b3VudHJ5c2lkZS1s/YW5kc2NhcGUtYXQt/c3Vuc2V0LWRyYW1h/dGljLXNreS1vdmVy/LWEtZGlzdGFudC12/YWxsZXktZ3JlZW4t/ZmllbGRzLWFuZC10/cmVlcy1vbi1oaWxs/LWJlYXV0aWZ1bC1u/YXR1cmFsLWxhbmRz/Y2FwZXMtb2YtdGhl/LWNhcnBhdGhpYW5z/LWdlbmVyYXRpdmUt/YWktdmFyaWF0aW9u/LTUtcGhvdG8uanBl/Zw"
            alt=""
            srcset=""
            className=" w-[450px] h-[220px] object-cover rounded-lg flex justify-center items-center"
          />
        </div>
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={handleLike}
            className="w-24 h-10 rounded-full hover:bg-red-500 text-sm font-medium border border-solid border-red-500 flex items-center justify-center gap-2"
          >
          {count}
            <i className="ri-heart-3-line"></i>
          </button>
          <button className="w-28 h-10 rounded-full hover:bg-gray-100 text-sm font-medium border border-solid border-gray-300 flex items-center justify-center gap-4">
            <i className="ri-chat-3-line"></i>
            
          </button>
        </div>
        <CommentBox />
      </div>
      
    </div>
  );
}
export default Post;



