import { AES, enc } from "crypto-js";

// Function to encrypt a string
function encrypt(text, secretKey) {
  const ciphertext = AES.encrypt(text, secretKey);
  return ciphertext.toString();
}

// Function to decrypt an encrypted string
function decrypt(encryptedText, secretKey) {
  const bytes = AES.decrypt(encryptedText, secretKey);
  const originalText = bytes.toString(enc.Utf8);
  return originalText;
}

export { encrypt, decrypt };
