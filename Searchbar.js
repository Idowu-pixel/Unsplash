import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./Searchbar.css";
import { Context } from "./Context";

function Searchbar() {
  const { input, setInput } = useContext(Context);
  const history = useHistory();

  const handleGo = async (e) => {
    e.preventDefault();

    history.push("/search");
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleGo}>
        <SearchIcon type="submit" className="searchbar__icon" />
        <input
          className="searchbar__input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search free high-resolution photo..."
        />
      </form>
    </div>
  );
}

export default Searchbar;
//https://unsplash.com/s/photos/v1?key=7tj5Ems6Z00PJkn5hUNLNuhWnVZx4HOZYo6OWGE3lUQ&ak=dcoWb8HxLhlXjUZDUNWFWwWtgbac6nING1o32oa6CCE
//accessKey="wWKMipTLy8qy0U-e5Ew3ch4jjf6VnulsqTJ0RIi9hkU"
//secretKey="i6VIwbg6BTs0S16V27Uu156r-ayT_C19SohwTz_WEqk"
