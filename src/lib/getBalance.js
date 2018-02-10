import axios from "axios";

const currencyAbbreviation = {
  bitcoin: "btc",
  ethereum: "eth",
  dash: "dash",
  litecoin: "ltc",
  dogecoin: "doge"
};

const conversionToWholeUnit = currency => {
  // coinmarketcap returns smaller denominations,
  // this returns the multiplier to convert to a whole unit.
  switch (currency) {
    case "ethereum":
      return 0.000000000000000001;
    default:
      return 0.00000001;
  }
};

const convertToUSD = (coinBalance, currency) => {
  return new Promise((resolve, reject) => {
    const coinMarketCap = `https://api.coinmarketcap.com/v1/ticker/${currency}/`;
    axios
      .get(coinMarketCap)
      .then(response => {
        const exchangeRate = response.data[0].price_usd;
        const conversion = conversionToWholeUnit(currency);
        resolve(coinBalance * conversion * exchangeRate);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getBalance = (publicKey, currency) => {
  return new Promise((resolve, reject) => {
    const explorer = `https://api.blockcypher.com/v1/${currencyAbbreviation[
      currency
    ]}/main/addrs/${publicKey}`;
    axios
      .get(explorer)
      .then(response => {
        const btc_balance = response.data.balance;
        convertToUSD(btc_balance, currency)
          .then(usd_balance => {
            resolve(GlobalHelpers.numberWithCommas(usd_balance.toFixed(2)));
          })
          .catch(error => {
            reject(error);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default getBalance;
