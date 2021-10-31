import React from "react";
import "./cryptoPane.scss";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form'

export default function CryptoPane({
  crypto,
  onBuyClick,
  onSellClick,
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
        <Form.Control id={"amount_" + coinName} placeholder="Enter Quantity..."/>
        <Button 
          id = "buyButton"
          variant="outline-light"
          onClick={() => {
            onBuyClick(coinName, coinPrice, parseFloat(document.getElementById("amount_" + coinName).value));
          }}
        >
          Buy
        </Button>
        <Button
          id ="sellButton"
          variant="outline-light"
          onClick={() => {
            onSellClick(coinName, coinPrice, parseFloat(document.getElementById("amount_" + coinName).value));
          }}
        >
          Sell
        </Button>
      </div>
    </Col>
  );
}
