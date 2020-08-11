import React from "react";
import VideoCall from "./VideoCall";

const SingleChatDetails = (props) => {
  let image =
    "https://avatars2.githubusercontent.com/u/50172413?s=460&u=0573967b786828dda99a1efb64dff093fb654f08&v=4";
  let image1 =
    "https://avatars3.githubusercontent.com/u/47945529?s=460&u=acf42942699144ff4b04c3bd55cd916cae466632&v=4";
  let dummyData = [
    { image, text: "hello testing", name: "bim" },
    { image: image1, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image: image1, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image: image1, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
  ];
  return (
    <section className="singel_chat_conatiner">
      <div className="singel_chat_details_section">
        <div className="header">
          <div className="chat_status">
            <div className="user_details">
              <img src={image} alt="" className="" />
              <div className="username">Bim</div>
            </div>
            <div className="room"> Room 202</div>
            <div className="date">Oct1-Oct2</div>
          </div>
          <div className="task"> Create a task</div>
        </div>
        <h6 className="today"> Today</h6>
        <div className="conversatation_section">
          {dummyData.map((chat, i) => {
            return (
              <div className="single_chat" key={i}>
                <div className="chat_header_section">
                  <div className="sender_details">
                    <img src={chat.image} className="sender_image" alt="img" />
                    <h5 className="sender_name">{chat.name}</h5>
                  </div>
                  <h6 className="new_message"></h6>
                </div>
                <div className="chat_body">{chat.text}</div>
              </div>
            );
          })}
        </div>
        {/* replay section */}
        <div className="reply_section">
          <img src={image} className="reply_image" alt="image" />
          <input type="text" className="reply_input" placeholder="Reply" />
        </div>
      </div>
      <VideoCall />
    </section>
  );
};

export default SingleChatDetails;
