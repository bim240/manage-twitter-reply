import React from "react";
const UserDetails = (props) => {
  return (
    <section className="user_details_container">
      <button className="first_child"> Updates</button>
      <div className="second_child">
        <button className="session"> Sessions:34min</button>
        <button className="username">User:Bimlendu Kumar</button>
      </div>
    </section>
  );
};

export default UserDetails;
