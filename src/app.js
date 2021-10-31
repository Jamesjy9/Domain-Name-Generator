/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["my", "our"];
  let adj = ["little", "grand"];
  let noun = ["father", "girl"];
  let extend = [".com", ".cl", ".ht", ".ca"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let m = 0; m < extend.length; m++) {
          console.log(
            pronoun[i]
              .concat(adj[j])
              .concat(noun[k])
              .concat(extend[m])
          );
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
