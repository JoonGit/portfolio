const CryptoJS = require("crypto-js");

const crypto = {
  // 암호화
  encryption: (password) => {
    const key = process.env.CRYPTO_KEY;
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(password),
      key
    ).toString();
    return ciphertext;
  },
  //   복호화
  decryption: (password) => {
    // 변경 필요 개인 고유 번호로 변경
    const key = process.env.CRYPTO_KEY;
    const bytes = CryptoJS.AES.decrypt(password, key);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  },
};

module.exports = crypto;
