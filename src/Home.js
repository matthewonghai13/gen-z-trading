import "./home.css";
import CryptoPane from "./components/CryptoPane/CryptoPane.js";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);

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
      <header className="App-header">
        {coins.map((coin) => (
          <CryptoPane key="asdf" crypto={coin} onBuyClick={onBuyClick} />
        ))}
      </header>
    </div>
  );
}

export default App;
