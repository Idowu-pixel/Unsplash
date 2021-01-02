import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { auth } from "./firebase";
//import { useHistory } from "react-router-dom";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  //const [query, setQuery] = useState("");
  const [input, setInput] = useState("");
  const [pics, setPics] = useState([]);
  //const [star, setStar] = useState([]);
  const [lee, setLee] = useState(false);

  console.log(pics);
  //const history = useHistory();
  const unsplash = new Unsplash({
    accessKey: "dcoWb8HxLhlXjUZDUNWFWwWtgbac6nING1o32oa6CCE",
  });

  // const showMan = new Unsplash({
  //   accessKey: "wWKMipTLy8qy0U-e5Ew3ch4jjf6VnulsqTJ0RIi9hkU",
  // });

  useEffect(() => {
    const handleSearch = () => {
      // e.preventDefault();
      unsplash.search
        .photos(input, 1, 30)
        .then(toJson)
        .then((json) => setPics(json.results));
      //history.push("/search");
    };
    handleSearch();
  }, [unsplash, input]);

  // useEffect(() => {
  //   const handleSort = () => {
  //     showMan.search
  //       .photos(query, 1, 29)
  //       .then(toJson)
  //       .then((json) => setStar(json.results));
  //   };
  //   handleSort();
  // }, [showMan]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setCurrentUser(authUser);
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (lee) {
      setLee(true);
    } else {
      setLee(false);
    }
  }, [lee]);

  return (
    <Context.Provider
      value={{
        input,
        setInput,
        pics,
        currentUser,
        lee,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
