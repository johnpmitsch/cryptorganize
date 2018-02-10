import axios from "axios";

const currencyAbbreviation = {
  "bitcoin": "btc",
  "ethereum": "eth"
}

const convertToUSD = (btc_balance, currency) => {
  return new Promise((resolve, reject) => {
    const coinMarketcap = "https://api.coinmarketcap.com/v1/ticker/bitcoin/"
    axios.get(coinMarketcap).then(response => {
       const btc_rate = response.data[0].price_usd
       console.log(response.data[0].price_usd);
       resolve(btc_balance * .00000001 * btc_rate);
    })
    .catch(error => {
      reject(error);
    })
  })
}

const getBalance = (publicKey, currency) => {
  return new Promise((resolve, reject) => {
    const explorer = `https://api.blockcypher.com/v1/${currencyAbbreviation[currency]}/main/addrs/${publicKey}`;
    axios.get(explorer)
      .then(response => {
        //console.log(response.data.balance);
        const btc_balance = response.data.balance;
        convertToUSD(btc_balance).then(usd_balance => {
          resolve(GlobalHelpers.numberWithCommas(usd_balance.toFixed(2)));
        })
        .catch(error => {
          reject(error);
        })
      })
      .catch((error) => {
        reject(error);
      })
    });
}

export default getBalance;
