import React from "react";
import "./cryptoPane.scss";
import Button from "react-bootstrap/Button";

export default function CryptoPane({ crypto, onBuyClick }) {
  const coinName = crypto["name"];
  const coinPrice = crypto["price"];

  

  return (
    <div>
      <br/>
    {/* <header id='welcomeHome'>welcome</header> */}
  
      <div id="pane">
        <p>{coinName}</p>
        <p>{coinPrice}</p>
        <Button onClick={() => onBuyClick(coinName, coinPrice, 1)}>Buy</Button>
      </div>
    </div>
  );
}
