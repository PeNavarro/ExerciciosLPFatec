document.addEventListener('DOMContentLoaded', () => {
      var lampada = document.getElementById('lampada')

      lampada.addEventListener('click', () => {
            var nomeImagem = lampada.src.split('img/').pop()

            if(nomeImagem == 'lampada-apagada.png'){
                  lampada.src = 'img/lampada-acesa.png'
            }else{
                  lampada.src = 'img/lampada-apagada.png'
            }
      })
})