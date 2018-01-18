import { AsyncStorage } from "react-native";
const _ = require("lodash");

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
  return new Promise((resolve, reject) => {
    getPublicKeys()
      .then(publicKeys => {
        const alreadyCreated = publicKeys.find(element => {
          console.log(element);
          console.log(key);
          console.log(_.isEqual(element, key));
          return _.isEqual(element, key);
        });
        console.log(alreadyCreated);
        if (alreadyCreated) reject("Public Key already exists!");
        publicKeys.push(key);
        console.log(JSON.stringify(publicKeys));
        console.log(JSON.stringify(key));
        AsyncStorage.setItem("publicKeys", JSON.stringify(publicKeys));
        resolve(key);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};
