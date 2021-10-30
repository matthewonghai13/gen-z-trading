import "./home.css";
import CryptoPane from "./components/CryptoPane/CryptoPane.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  const auth = firebase.auth();
  const [coins, setCoins] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    axios
      .get(
        "https://api.nomics.com/v1/currencies/ticker?key=3d681a0313c2d06bf77868e2efe072916ee91eb5&ids=BTC,ETH,XRP&interval=1d&convert=USD&per-page=100&page=1"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onBuyClick = (name, price, amount) => {
    console.log("bought " + name + "!" + "for" + price * amount);
  };

  return (
    <div className="App">
      {!user ? <Redirect to="/login" /> : <></>}
      <header className="App-header">
        {coins.map((coin) => (
          <CryptoPane key="asdf" crypto={coin} onBuyClick={onBuyClick} />
        ))}
      </header>
      <p>welcome</p>
    </div>

  );
}

export default App;
