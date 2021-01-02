import React, { useContext } from "react";
import { Context } from "./Context";
import { Consent } from "./Consent";
import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Notifications from "@material-ui/icons/Notifications";
import { useHistory, Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { auth } from "./firebase";
import "./Header.css";

function Header() {
  const { currentUser } = useContext(Context);
  const { query, setQuery } = useContext(Consent);
  const history = useHistory();

  const handleSearch = async (e) => {
    e.preventDefault();

    history.push("/search");
  };

  const logIn = () => {
    if (currentUser) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <LocalPrintshopIcon className="header__icon" />
      </Link>

      <form onSubmit={handleSearch} className="header__iconInput">
        <SearchIcon type="submit" />
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="header__inputTwo"
          placeholder="Search free high-resolution Photo..."
        />
      </form>

      <div onClick={logIn} className="header__sectionTwo">
        <Link to={currentUser ? "/" : "/login"}>
          <p>Home</p>
        </Link>
        <span>🏆</span>
        <p>Unsplash {!currentUser ? "Awards" : currentUser?.email}</p>
        <MoreHorizIcon className="header__iconTwo" />
      </div>
      <div className="header__sectionThree">
        <input className="header__input" placeholder="Submit a photo" />
        <Notifications className="header__iconThree" />
        <Avatar src={require("./image/banjo.jpg")} alt="" />
      </div>
    </div>
  );
}

export default Header;

// const [input, setInput] = useState("");
// const [pics, setPics] = useState([]);
// const history = useHistory();

// const unsplash = new Unsplash({
//   accessKey: "dcoWb8HxLhlXjUZDUNWFWwWtgbac6nING1o32oa6CCE",
// });
// const handleSearch = async (e) => {
//   e.preventDefault();
//   unsplash.search
//     .photos(input)
//     .then(toJson)
//     .then((json) => console.log(json.results));

//   history.push("/search");
// };

// const unsplash = new Unsplash({
//   accessKey: "dcoWb8HxLhlXjUZDUNWFWwWtgbac6nING1o32oa6CCE",
// });
