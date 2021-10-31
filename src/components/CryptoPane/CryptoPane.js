import React from "react";
import "./cryptoPane.scss";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function CryptoPane({
  crypto,
  onBuyClick,
  coinQuantity,
  coinCostBasis,
}) {
  const coinName = crypto["name"];
  const coinPrice = crypto["price"];

  return (
    <Col xs>
      <br />
      <div id="pane">
        <h1>{coinName}</h1>
        <p>{Number(coinPrice).toFixed(2) + " USD"}</p>
        <p>Owned: {coinQuantity}</p>
        <Button
          onClick={() => {
            onBuyClick(coinName, coinPrice, 1);
          }}
        >
          Buy
        </Button>
      </div>
    </Col>
  );
}
