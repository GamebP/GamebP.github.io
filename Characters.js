const charListCharacters = "ㄖ几ㄥㄚ山ㄒ卂Ҝ乇丂ツㅤ卐ㅰㅱصഐᾯ";

function CharactersOnly(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += charListCharacters[Math.floor(Math.random() * charListCharacters.length)];
    }
    return result;
}

function Generate_GenerateCharactersOnly() {
    //document.getElementById("char").textContent = CharactersOnly(16);
    document.getElementById("char").innerHTML = CharactersOnly(16);
  }

  function Copy_CharactersOnly() {
    const headingText = document.getElementById("char").textContent;
  
    const tempInput = document.createElement("input");
    tempInput.value = headingText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
