import React from "react";
import { IoMdSearch } from "react-icons/io";
import { TiFilter } from "react-icons/ti";
import { GoPrimitiveDot } from "react-icons/go";
import { useState } from "react";

const HeadingAndSearch = (props) => {
  let [status, setStatus] = useState("online");

  return (
    <section className="heading_search_section">
      <div className="first_child">
        <h1 className="heading"> Conversations</h1>
        <div className="search_section">
          <IoMdSearch className="icon" />
          <input
            type="text"
            placeholder="Quick search"
            name="seach"
            className="search_input"
          />
        </div>
        <div className="filter">
          <TiFilter className="filter_icon" />
          filter
        </div>
      </div>
      <div className="status_section">
        <GoPrimitiveDot className={`${status} icon`} />
        <select
          name="status"
          id="status"
          onChange={(e) => setStatus(e.target.value)}
          className="select_status">
          <option value="online">Online</option>
          <option value="offline">Offline</option>
          <option value="busy">Busy</option>
        </select>
      </div>
    </section>
  );
};

export default HeadingAndSearch;
