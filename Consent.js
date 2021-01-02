import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";

const Consent = React.createContext();

function ConsentProvider({ children }) {
  const [query, setQuery] = useState("");
  const [star, setStar] = useState([]);

  const showMan = new Unsplash({
    accessKey: "wWKMipTLy8qy0U-e5Ew3ch4jjf6VnulsqTJ0RIi9hkU",
  });

  useEffect(() => {
    const handleSort = () => {
      showMan.search
        .photos(query, 1, 30)
        .then(toJson)
        .then((json) => setStar(json.results));
    };
    handleSort();
  }, [showMan, query]);

  return (
    <Consent.Provider value={{ star, query, setQuery }}>
      {children}
    </Consent.Provider>
  );
}

export { ConsentProvider, Consent };
