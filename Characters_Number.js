const CharNumbs = "1234567890ㄖ几ㄥㄚ山ㄒ卂Ҝ乇丂ツㅤ卐ㅰㅱصഐᾯண";

function CharactersWithNumbersOnly(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += CharNumbs[Math.floor(Math.random() * CharNumbs.length)];
    }
    return result;
}

function gasasas_Asas() {
    document.getElementById("sudsdisZads").innerHTML = CharactersWithNumbersOnly(16);
  }

  function Copy_GenerateCharactersWithNumbersOnlyADS() {
    const headingText = document.getElementById("sudsdisZads").textContent;
  
    const tempInput = document.createElement("input");
    tempInput.value = headingText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
