import React, { useEffect, useState } from "react";
import "./Summary.scss";

export default function Summary({ mood, sign, name }) {
  const [horo, setHoro] = useState({});

  useEffect(() => {
    var request = require("request");

    var options = {
      url: `https://aztro.sameerkumar.website/?sign=${sign}&day=today`,
      method: "POST",
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        setHoro(JSON.parse(body));
        console.log(horo);
        console.log(horo["description"]);
      }
    }

    request(options, callback);
  }, []);

  const compatible = horo["compatibility"];
  const luckyNum = horo["lucky_number"];
  const luckyTime = horo["lucky_time"];

  return (
    <div id="summaryContainer">
      <br />
      <hr />
      <br />
      <h1 id="name">Hi {name} !</h1>
      <h2 id="greeting">here are your personal investment tips:</h2>
      <br />
      <br />
      <br />
      <h2 id="wTitle">Today's Wisdom:</h2>
      <p id="horo"> "{horo["description"]}"</p>
      <br />
      <br />
      <br />
      <h1 id="mood">Your mood is:</h1>
      <h1 id="express">{mood}</h1>
      <br />
      <br />
      <br />
      <h2 id="ipart">Picking an investment partner:</h2>
      <p id="compat">
        choose a <b>{compatible}</b> to be your investment partner as they will
        compliment your your strengths to help you make the smartest moves.
        Everyone needs a friend.
      </p>
      <br />
      <br />
      <br />
      <h2 id="number">Your numbers</h2>
      <p id="numdes">
        You will make your best and smartest investments today at
        <b>{" " + luckyTime}</b>
      </p>
      <p id="numdays">
        Incorporate the number <b>{luckyNum}</b> in your trades today, and you
        will be destined to succeed.
      </p>
    </div>
  );
}
