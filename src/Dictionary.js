import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
   let [keyword, setKeyword] = useState("");
   function handleKeywordChange(event) {
      setKeyword(event.target.value);

   }
   function handleResponse(response) {
      console.log(response.data[0]);

   }

   function search(event) {
      event.preventDefault();
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
   }
 return <div className="Dictionary">
   <form onSubmit={search}>
      <input type="search" onChange={handleKeywordChange}/>
   </form>
   <Results />
 </div>;
 
}