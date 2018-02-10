import axios from "axios";

const currencyAbbreviation = {
  bitcoin: "btc",
  ethereum: "eth",
  dash: "dash"
};

const conversionToWholeUnit = currency => {
  // coinmarketcap returns smaller denominations,
  // this give the multiplier to convert to a whole unit.
  switch (currency) {
    case "bitcoin":
      return 0.00000001;
    case "ethereum":
      return 0.000000000000000001;
    case "dash":
      return 0.00000001;
    default:
      return 1;
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
    console.log(explorer);
    axios
      .get(explorer)
      .then(response => {
        //console.log(response.data.balance);
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
