import { AsyncStorage } from "react-native";
import { Linking } from "react-native";

const _ = require("lodash");
const validator = require("validator");

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// from https://stackoverflow.com/a/24657561
const addHttp = url => {
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
    url = "http://" + url;
  }
  return url;
};

const verifyKeyParams = key => {
  return key.currency && key.name && key.publicKey;
};

const alreadyCreated = (publicKeys, key) => {
  publicKeys.find(element => {
    return (
      _.isEqual(element.name, key.name) &&
      _.isEqual(element.currency, key.currency)
    );
  });
};

export const getPublicKeys = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("publicKeys", (err, result) => {
      if (err) return reject(err);
      const publicKeys = result ? JSON.parse(result) : [];
      resolve(publicKeys);
    });
  });
};

export const addPublicKey = key => {
  return new Promise((resolve, reject) => {
    if (!verifyKeyParams(key))
      return reject("Please fill out all required fields");
    if (key.explorerUrl) {
      key.explorerUrl = addHttp(key.explorerUrl);
      if (!validator.isURL(key.explorerUrl)) return reject("URL is not valid");
    }
    getPublicKeys()
      .then(publicKeys => {
        if (alreadyCreated(publicKeys, key)) {
          const currency = key.currency.capitalize().replace(/[_-]/g, " ");
          return reject(`${currency} public key ${key.name} already exists!`);
        }
        publicKeys.unshift(key);
        AsyncStorage.setItem("publicKeys", JSON.stringify(publicKeys));
        resolve(key);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const deletePublicKey = key => {
  return new Promise((resolve, reject) => {
    getPublicKeys()
      .then(publicKeys => {
        const withKeyRemoved = publicKeys.filter(element => {
          return !(
            _.isEqual(element.name, key.name) &&
            _.isEqual(element.currency, key.currency)
          );

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

export const editPublicKey = (originalKey, newKey) => {
  return new Promise((resolve, reject) => {
    deletePublicKey(originalKey)
      .then(key => {
        addPublicKey(newKey)
          .then(key => {
            resolve(key);
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        reject(err);
      });
  });
};
