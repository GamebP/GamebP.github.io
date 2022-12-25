const butits = "abcdefghijklmnopqrstuvwxyz1234567890ㄖ几ㄥㄚ山ㄒ卂Ҝ乇丂ツㅤ卐ㅰㅱصഐᾯ"; // ﱞ 
function bititmatos(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += butits[Math.floor(Math.random() * butits.length)];
    }
    return result;
}

function Generate_bititmatos() {
    document.getElementById("CharOnHere").innerHTML = bititmatos(16);
  }

  function Copy_bititmatos() {
    const headingText = document.getElementById("CharOnHere").textContent;
  
    const tempInput = document.createElement("input");
    tempInput.value = headingText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }