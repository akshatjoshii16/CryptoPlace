// import React, { useContext, useEffect,useState } from 'react'
// import './Coin.css'
// import { useParams } from 'react-router-dom'
// import { CoinContext } from '../../context/CoinContext';
// import LineChart from '../../components/LineChart/LineChart';

// const Coin = () => {

//   const {coinId} = useParams();
//   const [coinData,setCoinData]=useState();
//   const [historicalData, setHistoricalData]=useState();
//   const {currency} = useContext(CoinContext);

//   const fetchCoinData= async ()=>{
//     const options = {
//       method: 'GET',
//       headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-gUoxcMMfJxwaRGbD7G39onbU'}
//     };

//     fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
//       .then(res => res.json())
//       .then(res => setCoinData(res))
//       .catch(err => console.error(err));
//     }

//     const fetchHistoricalData=async ()=>{
//       const options = {
//   method: 'GET',
//   headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-gUoxcMMfJxwaRGbD7G39onbU'}
// };

// fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
//   .then(res => res.json())
//   .then(res => setHistoricalData(res))
//   .catch(err => console.error(err));
//     }

//     useEffect(()=>{
//       fetchCoinData();
//       fetchHistoricalData();
//     },[currency])
// if(coinData && historicalData){
//  return (
//     <div className='coin'>
//     <div className="coin-name">
//       <img src={coinData.image.large} alt="" />
//       <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
//     </div>
//     <div className="coin-chart">
//       <LineChart historicalData={historicalData}/>
//     </div>
//     <div className="coin-info">
//       <ul>
//         <li>Crypto Market Rank</li>
//         <li>{coinData.market_cap_rank}</li>
//       </ul>
//       <ul>
//         <li>Current Price</li>
// <li className="price-value">
//   {currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}
// </li>

//       </ul>
//       <ul>
//         <li>Market cap</li>
//         <li>{currency.symbol} {coinData.market_data.market_cap [currency.name].toLocaleString()}</li>
//       </ul>
//       <ul>
//         <li>24 Hour high</li>
//         <li>{currency.symbol} {coinData.market_data.high_24h [currency.name].toLocaleString()}</li>
//       </ul>
//       <ul>
//         <li>24 Hour low</li>
//         <li>{currency.symbol} {coinData.market_data.low_24h [currency.name].toLocaleString()}</li>
//       </ul>
//     </div>
      
//     </div>
//   )
// }else{
//   return (
//     <div className='spinner'>
//       <div className="spin">

//       </div>
    
      
//     </div>
//   )
// }
// }

// export default Coin  
// import React, { useContext, useEffect, useState } from 'react';
// import './Coin.css';
// import { useParams } from 'react-router-dom';
// import { CoinContext } from '../../context/CoinContext';
// import LineChart from '../../components/LineChart/LineChart';
// import axios from 'axios';  // axios import karna hoga

// const Coin = () => {
//   const { coinId } = useParams();
//   const [coinData, setCoinData] = useState();
//   const [historicalData, setHistoricalData] = useState();
//   const { currency } = useContext(CoinContext);

//   // Backend se coin data fetch karne ke liye
//   const fetchCoinData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/coins/${coinId}`);
//       setCoinData(response.data);
//     } catch (error) {
//       console.error("Error fetching coin data from backend:", error);
//     }
//   };

//   // Backend se historical data fetch karne ke liye
//   const fetchHistoricalData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/coins/${coinId}/history?currency=${currency.name}`);
//       setHistoricalData(response.data);
//     } catch (error) {
//       console.error("Error fetching historical data from backend:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCoinData();
//     fetchHistoricalData();
//   }, [currency, coinId]);

//   if (coinData && historicalData) {
//     return (
//       <div className='coin'>
//         <div className="coin-name">
//           <img src={coinData.image} alt={coinData.name} />
//           <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
//         </div>

//         <div className="coin-chart">
//           <LineChart historicalData={historicalData} />
//         </div>

//         <div className="coin-info">
//           <ul>
//             <li>Crypto Market Rank</li>
//             <li>{coinData.market_cap_rank}</li>
//           </ul>
//           <ul>
//             <li>Current Price</li>
//             <li className="price-value">{currency.symbol} {coinData.current_price[currency.name].toLocaleString()}</li>
//           </ul>
//           <ul>
//             <li>Market Cap</li>
//             <li>{currency.symbol} {coinData.market_cap[currency.name].toLocaleString()}</li>
//           </ul>
//           <ul>
//             <li>24 Hour High</li>
//             <li>{currency.symbol} {coinData.high_24h[currency.name].toLocaleString()}</li>
//           </ul>
//           <ul>
//             <li>24 Hour Low</li>
//             <li>{currency.symbol} {coinData.low_24h[currency.name].toLocaleString()}</li>
//           </ul>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div className='spinner'>
//         <div className="spin"></div>
//       </div>
//     );
//   }
// };

// export default Coin;
import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/LineChart/LineChart';

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  // CoinGecko se coin data fetch karna
  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-gUoxcMMfJxwaRGbD7G39onbU'
      }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json())
      .then(res => setCoinData(res))
      .catch(err => console.error(err));
  };

  // CoinGecko se historical data fetch karna
  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-gUoxcMMfJxwaRGbD7G39onbU'
      }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(res => res.json())
      .then(res => setHistoricalData(res))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency, coinId]);

  if (coinData && historicalData) {
    return (
      <div className='coin'>
        <div className="coin-name">
          <img src={coinData.image.large} alt={coinData.name} />
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>

        <div className="coin-chart">
          <LineChart historicalData={historicalData} />
        </div>

        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li className="price-value">
              {currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24 Hour High</li>
            <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24 Hour Low</li>
            <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className='spinner'>
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
