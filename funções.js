/** Após o caracter adicionado ele ira desanular o button */
window.onload = () => {
    document.getElementById('crip').disabled = true;
    document.getElementById('descrip').disabled = true;
  
    document.getElementById('message-box').addEventListener('input', () => {
      enableButtons(); 
      addResultado();
      limparResultados();
    });
    document.getElementById('crip').addEventListener('click', crip);
    document.getElementById('descrip').addEventListener('click', descrip);
  };
  
/** Caso o usuário escolha crip ele irá anular o button crip e desnular o descrip, para
* possivel descriptografia */
  const enableButtons = () => {
    if (getMessage().trim().length !== 0) {
      document.getElementById('crip').disabled = false;
      document.getElementById('descrip').disabled = false;
    } else {
      document.getElementById('crip').disabled = true;
      document.getElementById('descrip').disabled = true;
    }
  };
  
  const addResultado = () => {
    const txtArea = document.getElementById('message-box');
    txtArea.style.height = '8vh';
    txtArea.style.height = txtArea.scrollHeight + 'px';
  };
  
  const limparResultados = () => {
    if (document.getElementById('p-group')) 
      document.getElementById('results').removeChild(document.getElementById('p-group'));
  };