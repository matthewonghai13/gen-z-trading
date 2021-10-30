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
import { doc, setDoc, getDoc } from "firebase/firestore";

function App() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
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

  const onBuyClick = async (name, price, amount) => {
    console.log(user);
    const username = user["displayName"];
    console.log("bought " + name + "!" + "for" + price * amount);
    // firestore.collection("users");

    // get user's document in users collection
    const userData = await (
      await getDoc(doc(firestore, "users", username))
    ).data();
    console.log(userData);

    // append stuff

    userData["total_account_value"] =
      userData["total_account_value"] + price * amount;
    if (name === "Ethereum") {
      userData["num_eth"] = userData["num_eth"] + amount;
    } else if (name === "Bitcoin") {
      userData["num_btc"] = userData["num_btc"] + amount;
    } else if (name === "XRP") {
      userData["num_xrp"] = userData["num_btc"] + amount;
    }
    // write back to firestore
    await setDoc(doc(firestore, "users", username), userData);
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
