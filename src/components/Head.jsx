import { useEffect, useState } from "react";
import { GiPlasticDuck } from "react-icons/gi";
import { GiDuckPalm } from "react-icons/gi";
import { SiDuckduckgo } from "react-icons/si";
import { Link } from "react-router-dom";
import axios from "axios";

const Head = ({ account, setAccount }) => {
  const [coinPrice, setCoinPrice] = useState();

  const getCoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH,%20KRW-MATIC"
      );

      setCoinPrice([
        { symbol: "BTC", price: response.data[0].trade_price },
        { symbol: "ETH", price: response.data[1].trade_price },
        { symbol: "MATIC", price: response.data[2].trade_price },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickAccount = async () => {
    try {
      const user = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(user[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoinPrice();
  }, []);

  return (
    <header className="max-w-screen-xl mx-auto p-4 flex justify-between items-center font-bold">
      <Link to="/">
        <div className="flex items-center text-yellow-300">
          <GiPlasticDuck size={40} />
          <div className="ml-1 text-xl">Rubber Ducks Project.</div>
        </div>
      </Link>
      <div className="flex items-center">
        {coinPrice && (
          <ul className="flex text-gray-400 text-sm">
            {coinPrice.map((v, i) => {
              return (
                <li key={i} className="ml-2">
                  {v.symbol}: {(v.price / 1000).toLocaleString()}K₩
                </li>
              );
            })}
          </ul>
        )}
        {account ? (
          <div className="flex items-center p-2 bg-gray-800 rounded-full ml-4">
            <div className="bg-yellow-500 w-6 h-6 rounded-full flex justify-center items-center">
              <SiDuckduckgo />
            </div>
            <div>
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)}
            </div>
          </div>
        ) : (
          <button
            onClick={onClickAccount}
            className="flex items-center p-2 bg-gray-800 rounded-full ml-4"
          >
            <div className="bg-yellow-500 w-6 h-6 rounded-full flex justify-center items-center">
              <GiDuckPalm />
            </div>
            <div className="ml-3 text-white">Connect</div>
          </button>
        )}
      </div>
    </header>
  );
};

export default Head;
