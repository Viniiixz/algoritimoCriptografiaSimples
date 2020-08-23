const getMessage = () => document.getElementById('message-box').value;
const getCharcodesFromMessage = () => getMessage().split('').map(val => val.charCodeAt());

const TransLetras = charcodesArray => String.fromCharCode.apply(this, charcodesArray);


const mostrarResultados = (resultado, metodo) => {


  return document.getElementById('results').innerHTML = `
  <div id="p-group">
    <p class="result-fixed-message w-100">Esta é a sua mensagem ${metodo}:</p>
    <p class="result-text w-100">${resultado /*= btoa(resultado)*/}</p>
  </div>`;
};

const clearTextArea = () => { 
  document.getElementById('message-box').value = '';
  enableButtons();
  addResultado();
};