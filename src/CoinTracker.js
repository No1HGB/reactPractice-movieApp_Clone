import { useEffect, useState } from "react";

//문제1: selected의 default 값을 렌더링 처음부터 반환할 수 없음
/*문제2 : <select>된 coin의 symbol(BTC,ETH..)를 가져오지 못하여 단위 표시 불가
getElementById?? ref?? => 검색결과 최대한 쓰지 말라는데..*/

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState(0);
  const handleSelect = (event) => {
    setSelected(event.target.value);
    setPrice(0);
  };

  const [price, setPrice] = useState(0);
  const onChange = (event) => {
    setPrice(event.target.value);
  };
  const onExchange = () => {
    setPrice(price / selected);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select id="selectCoin" onChange={handleSelect} value={selected}>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>

          <hr />

          <div>
            <input type="number" value={price} onChange={onChange} />
            <button onClick={onExchange}>Change to Coin</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoinTracker;
