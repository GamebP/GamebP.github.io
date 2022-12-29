const Everything = "BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890ㄖ几ㄥㄚ山ㄒ卂Ҝ乇丂ツㅤ卐ㅰㅱصഐᾯண";

function EverythingInOne(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += Everything[Math.floor(Math.random() * Everything.length)];
    }
    return result;
}

function Generate_EverythingInOne() {
    document.getElementById("charev").innerHTML = EverythingInOne(16);
  }

  function Copy_Everything() {
    const headingText = document.getElementById("charev").textContent;
  
    const tempInput = document.createElement("input");
    tempInput.value = headingText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
