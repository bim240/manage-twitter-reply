import React from "react";
import { NavLink } from "react-router-dom";
const AllChat = (props) => {
  let image =
    "https://avatars2.githubusercontent.com/u/50172413?s=460&u=0573967b786828dda99a1efb64dff093fb654f08&v=4";
  let dummyData = [
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
  ];
  return (
    <section className="all_chat_container">
      {dummyData.map((chat, i) => {
        return (
          <NavLink to="#" className="single_chat" key={i}>
            <div className="chat_header_section">
              <div className="sender_details">
                <img src={chat.image} className="sender_image" alt="img" />
                <h5 className="sender_name">{chat.name}</h5>
              </div>
              <h6 className="new_message"></h6>
            </div>
            <div className="chat_body">{chat.text}</div>
          </NavLink>
        );
      })}
    </section>
  );
};

export default AllChat;
