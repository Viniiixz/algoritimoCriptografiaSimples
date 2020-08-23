const crip = () => {
    const cripCode = Criptografia(getCharcodesFromMessage());
    const resultado = TransLetras(cripCode);
    const metodo = 'criptografada';
    mostrarResultados(resultado, metodo);
    clearTextArea();
  };

  const Criptografia = charcodesArray => charcodesArray.map((charCode, i) => {

    if (charCode > 47 && charCode < 58) {
      charCode = (charCode - 48 + 33) % 10 + 48;
    } else if (charCode > 64 && charCode < 91) {
      charCode = (charCode - 65 + 33) % 26 + 65;
    } if (charCode > 96 && charCode < 192) {
      charCode = (charCode - 97 + 33) % 26 + 97;
    } else if (charCode > 191 && charCode < 222) {
      charCode = (charCode - 192 + 33) % 30 + 192;
    } else if (charCode > 221 && charCode <= 255) {
      charCode = (charCode - 222 + 33) % 34 + 222;
    } 
    return charCode;
  });