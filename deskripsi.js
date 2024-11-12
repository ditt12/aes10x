const CryptoJS = require('crypto-js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan teks yang mau didekripsi: ', (encryptedText) => {
  rl.question('Masukkan kunci rahasia: ', (key) => {
    function decryptFiveTimes(encrypted, key) {
      let decrypted = encrypted;

      for (let i = 0; i < 10; i++) {
        const bytes = CryptoJS.AES.decrypt(decrypted, key);
        decrypted = bytes.toString(CryptoJS.enc.Utf8);

        // break loop kalo dekripsi gagal, misalnya key salah atau data ga valid
        if (!decrypted) {
          console.log('Gagal mendekripsi. Pastikan kunci benar dan teks valid.');
          break;
        }
      }

      return decrypted;
    }

    const decryptedText = decryptFiveTimes(encryptedText, key);
    console.log('Hasil Dekripsi:', decryptedText);
    rl.close();
  });
});
