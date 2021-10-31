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
    <div>
      <h1>Hi {name}</h1>
      <h2>here are your personal investment tips.</h2>
      <h2>Today's Wisdom</h2>
      <p> {horo["description"]}</p>

      <p>Your mood is</p>
      <h1>{mood}</h1>
      <h2>Picking an investment partner</h2>
      <p>
        choose a <b>{compatible}</b> to be your investment partner as they will
        compliment your your strengths to help you make the smartest moves.
        Everyone needs a friend.
      </p>
      <h2>Your numbers</h2>
      <p>
        You will make your best and smartest investments today at{" "}
        <b>{luckyTime}</b>
      </p>
      <p>
        Incorporate the number <b>{luckyNum}</b> in your trades today, and you
        will be destined to succeed
      </p>
    </div>
  );
}
