const CryptoJS = require('crypto-js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan teks yang mau dienkripsi: ', (textToEncrypt) => {
  rl.question('Masukkan kunci rahasia: ', (key) => {
    function encryptFiveTimes(text, key) {
      let encrypted = text;

      for (let i = 0; i < 10; i++) {
        encrypted = CryptoJS.AES.encrypt(encrypted, key).toString();
      }

      return encrypted;
    }

    const encryptedText = encryptFiveTimes(textToEncrypt, key);
    console.log('Hasil Enkripsi 10x:', encryptedText);
    rl.close();
  });
});
