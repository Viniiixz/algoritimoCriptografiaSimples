const descrip = () => {
    const descripCode = Descriptografia(getCharcodesFromMessage());
    const resultado = TransLetras(descripCode);
    const metodo = 'descriptografada';
    mostrarResultados(resultado, metodo);
    clearTextArea();
  };

  
const Descriptografia = charcodesArray => charcodesArray.map((charCode, i) => {

    if (charCode > 47 && charCode < 58) {
      charCode = (charCode - 57 - 33) % 10 + 57;
    } else if (charCode > 64 && charCode < 91) {
      charCode = (charCode - 90 - 33) % 26 + 90;
    } else if (charCode > 96 && charCode < 192) {
      charCode = (charCode - 122 - 33) % 26 + 122;
    } else if (charCode > 191 && charCode < 222) {
      charCode = (charCode - 221 - 33) % 30 + 221;
    } else if (charCode > 221 && charCode <= 255) {
      charCode = (charCode - 255 - 33) % 34 + 255;
    }
    return charCode;
  });