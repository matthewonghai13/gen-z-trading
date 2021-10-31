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
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


function App() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const [coins, setCoins] = useState([]);
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState({});

  const getInitialAccountValue = async () => {
    const username = user["displayName"];
    const data = await (await getDoc(doc(firestore, "users", username))).data();
    return data["total_account_value"];
  };

  const [totalAccountValue, setTotalAccountValue] = useState(0);

  useEffect(async () => {
    axios
      .get(
        "https://api.nomics.com/v1/currencies/ticker?key=3d681a0313c2d06bf77868e2efe072916ee91eb5&ids=BTC,ETH,XRP&interval=1d&convert=USD&per-page=100&page=1"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));

    if (user) {
      // Grab user
      const username = user["displayName"];
      var data = await (
        await getDoc(doc(firestore, "users", username))
      ).data();
      console.log(data);
      if (!data) { // undefined, user doesn't exist yet, create default data
          data = {'cost_Bitcoin' : 0.0,
                  'cost_Ethereum' : 0.0,
                  'cost_XRP' : 0.0,
                  'num_Bitcoin' : 0.0,
                  'num_Ethereum' : 0.0,
                  'num_XRP' : 0.0,
                  'total_account_value' : 0.0
                 }
      }
      console.log(data);
      setUserData(data);
      // write back to firestore
      await setDoc(doc(firestore, "users", username), data);
      console.log("hi");
      setTotalAccountValue(data["total_account_value"]);
    }
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

    // update account value, quantities, and cost basis
    userData["total_account_value"] =
      userData["total_account_value"] + price * amount;
    if (name === "Ethereum") {
      userData["num_Ethereum"] = userData["num_Ethereum"] + amount;
      userData["cost_Ethereum"] = userData["cost_Ethereum"] + amount * price;
    } else if (name === "Bitcoin") {
      userData["num_Bitcoin"] = userData["num_Bitcoin"] + amount;
      userData["cost_Bitcoin"] = userData["cost_Bitcoin"] + amount * price;
    } else if (name === "XRP") {
      userData["num_XRP"] = userData["num_XRP"] + amount;
      userData["cost_XRP"] = userData["cost_XRP"] + amount * price;
    }

    // write back to firestore
    await setDoc(doc(firestore, "users", username), userData);
    // force react refresh
    setTotalAccountValue(userData["total_account_value"]);
  };

  console.log(totalAccountValue);
  return (
    <div className="App">
      <header id="welcomeHome">Welcome!</header>
      {!user ? <Redirect to="/login" /> : <></>}
      <header className="App-header">
        <div id="total">
          Total Account Value: {Number(totalAccountValue).toFixed(2) + " USD"}
        </div>

        <Container>
          <Row>
            {coins.map((coin) => (
              <CryptoPane
                key={coin["name"]}
                crypto={coin}
                coinQuantity={userData[`num_${coin["name"]}`]}
                coinCostBasis={userData[`cost_${coin["name"]}`]}
                onBuyClick={onBuyClick}
              />
            ))}
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
