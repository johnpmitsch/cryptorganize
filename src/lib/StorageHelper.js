import { AsyncStorage } from "react-native";
const _ = require("lodash");

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const verifyKeyParams = key => {
  return key.currency && key.name && key.key;
};

export const getPublicKeys = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("publicKeys", (err, result) => {
      if (err) reject(err);
      const publicKeys = result ? JSON.parse(result) : [];
      resolve(publicKeys);
    });
  });
};

export const addPublicKey = key => {
  //  AsyncStorage.removeItem("publicKeys");
  return new Promise((resolve, reject) => {
    if (!verifyKeyParams(key)) reject("Please fill out all fields");
    getPublicKeys()
      .then(publicKeys => {
        const alreadyCreated = publicKeys.find(element => {
          return (
            _.isEqual(element.name, key.name) &&
            _.isEqual(element.currency, key.currency)
          );
        });
        const currency = key.currency.capitalize().replace(/[_-]/g, " ");
        const keyFoundMessage = `${currency} public key ${
          key.name
        } already exists!`;
        if (alreadyCreated) reject(keyFoundMessage);
        publicKeys.unshift(key);
        AsyncStorage.setItem("publicKeys", JSON.stringify(publicKeys));
        resolve(key);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const deleteKey = key => {
  return new Promise((resolve, reject) => {
    getPublicKeys()
      .then(publicKeys => {
        const withKeyRemoved = publicKeys.filter(element => {
          return !_.isEqual(element, key);
        });
        AsyncStorage.setItem("publicKeys", JSON.stringify(withKeyRemoved));
        resolve(key);
      })
      .catch(err => {
        reject(err);
      });
  });
};
