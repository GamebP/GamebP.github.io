const charListCharactersWithNumbersAndLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890ㄖ几ㄥㄚ山ㄒ卂Ҝ乇丂ツㅤ卐ㅰㅱصഐᾯண";

function CharactersWithNumbersAndLettersOnly(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += charListCharactersWithNumbersAndLetters[Math.floor(Math.random() * charListCharactersWithNumbersAndLetters.length)];
    }
    return result;
}

function Generate_CharactersWithNumbersAndLettersOnly() {
    document.getElementById("charAs").innerHTML = CharactersWithNumbersAndLettersOnly(16);
  }

  function Copy_GenerateCharactersWithNumbersOnlyOMG() {
    const headingText = document.getElementById("charAs").textContent;
  
    const tempInput = document.createElement("input");
    tempInput.value = headingText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
