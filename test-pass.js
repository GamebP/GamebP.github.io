const PassChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

function PasswordCharacters(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += PassChar[Math.floor(Math.random() * PassChar.length)];
  }
  return result;
}

function GeneratePass() {
  const password = PasswordCharacters(20);
  document.getElementById('password-gen').value = password;
}

(function() {
  GeneratePass();
})();
