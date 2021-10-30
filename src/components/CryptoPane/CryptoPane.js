import React from "react";
import "./cryptoPane.scss";
import Button from "react-bootstrap/Button";

export default function CryptoPane({
  crypto,
  onBuyClick,
  coinQuantity,
  coinCostBasis,
}) {
  const coinName = crypto["name"];
  const coinPrice = crypto["price"];

  return (
    <div>
      <br />
      <div id="pane">
        <h1>{coinName}</h1>
        <p>{coinPrice}</p>
        <p>Cost Basis: {coinCostBasis}</p>
        <p>Owned: {coinQuantity}</p>
        <Button
          onClick={() => {
            onBuyClick(coinName, coinPrice, 1);
          }}
        >
          Buy
        </Button>
      </div>
    </div>
  );
}
