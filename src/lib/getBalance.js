import axios from "axios";

const currencyAbbreviation = {
  bitcoin: "btc",
  ethereum: "eth",
  dash: "dash",
  litecoin: "ltc",
  dogecoin: "doge"
};

const decimalPlaces = num => {
  numberOfDigits = num.toFixed().toString().length;
  // return less decimal places the larger the value
  switch (true) {
    case numberOfDigits <= 1:
      return 7;
    case numberOfDigits <= 2:
      return 5;
    case numberOfDigits <= 3:
      return 4;
    case numberOfDigits <= 4:
      return 2;
    case numberOfDigits <= 5:
      return 1;
    default:
      return 0;
  }
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
        const cryptoBalance = response.data.balance;
        convertToUSD(cryptoBalance, currency)
          .then(usdBalance => {
            const conversion = conversionToWholeUnit(currency);
            const convertedCryptoBalance = cryptoBalance * conversion;
            const decimals = decimalPlaces(convertedCryptoBalance);
            resolve({
              usdBalance: GlobalHelpers.numberWithCommas(usdBalance.toFixed(2)),
              cryptoBalance: GlobalHelpers.numberWithCommas(
                convertedCryptoBalance.toFixed(decimals)
              ),
              code: currencyAbbreviation[currency]
            });
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
