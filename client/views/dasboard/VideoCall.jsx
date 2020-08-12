import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const VideoCall = (props) => {
  let image =
    "https://avatars2.githubusercontent.com/u/50172413?s=460&u=0573967b786828dda99a1efb64dff093fb654f08&v=4";
  let dummyData = ["Learn docker", "Learn testing", "Lern MySql"];
  return (
    <section>
      <div className="contact_container">
        <div className="close_icon">
          {" "}
          <RiCloseLine />
        </div>
        <div className="user_details">
          <img src={image} alt="" />
          <h3 className="username">bim240</h3>
          <div className="online">Online</div>
          <div className="call_section">
            <div className="call">
              <IoIosCall className="icon" />
              Call
            </div>
            <div className="email">
              {" "}
              <MdEmail className="icon" />
              Email
            </div>
          </div>
          <div className="room">
            <div className="text">Room</div>
            <div className="room_number">112</div>
          </div>
          <div className="category">
            <div className="text">Category</div>
            <div className="category_name">Standerd</div>
          </div>
          <div className="country">
            <div className="text">Country</div>
            <div className="country_number">India</div>
          </div>
        </div>
      </div>
      <div className="task_section">
        <select name="task" id="task" className="select_task">
          <option value="first"> Tasks</option>
          <option value="first"> Hello2</option>
          <option value="first"> Hello3</option>
          <option value="first"> Hello4</option>
        </select>
        <div className="all_task"></div>
        {dummyData.map((data, i) => {
          return (
            <div className="single_task" key={i}>
              <input type="checkbox" />
              <h4 className="text"> {data}</h4>
            </div>
          );
        })}
        <button className="show_all">All Tasks</button>
      </div>
    </section>
  );
};

export default VideoCall;
