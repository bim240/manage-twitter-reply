import React from "react";
import UserDetails from "./UserDetails";
import HeadingAndSearch from "./HeadingAndSearch";
import AllChat from "./AllChat";
import SingleChatDetails from "./SingleChatDetails";

const DashBoard = (props) => {
  return (
    <div className="dashboard_container">
      <UserDetails />
      <HeadingAndSearch />
      <div className="chat_section">
        <AllChat />
        <SingleChatDetails />
      </div>
    </div>
  );
};

export default DashBoard;
