var comidas = $('.card .name')
comidas = Array.from(comidas)

var comida = {
}

var pedido = "";

for (let i = 0; i < comidas.length; i++) {

      let id = parseInt($('.card')[i].id)

      let name = $('.card .name')[i].innerHTML

      
      if(id < 4){
            var type = "Prato"
      }else{
            var type = "Acompanhamento"
      }

      var price = $('.card .price')[i].innerHTML
      price = price.replace('R$ ', '')
      price = price.replace(',', '.')
      price = parseFloat(price).toFixed(2)

      let quantity = 0

      let total

      comida[i] = {
            "id": id,
            "name": name,
            "type": type,
            "price":  price,
            "quantity": quantity,
            "total": total
      }

      $('.card .quantityControl .minus')[i].addEventListener('click', () => {
            if(comida[i].quantity != 0){
                  let newQuantity = comida[i].quantity-1
                  comida[i].quantity = newQuantity
            }

            $('.card .quantityControl span')[i].innerHTML = comida[i].quantity
      })

      $('.card .quantityControl .plus')[i].addEventListener('click', () => {
            let newQuantity = comida[i].quantity+1
            comida[i].quantity = newQuantity

            $('.card .quantityControl span')[i].innerHTML = comida[i].quantity
      })

      
}

$('#btnEnviar')[0].addEventListener('click', () => {

      var formName = $('#name').val()

      var precoFinal = 0

      pedido = ""

      if($('#name')[0].validity.valid && $('#tel')[0].value.length == 15 && $('#email')[0].validity.valid){

            if(comidas.length){
                  for (let i = 0; i < comidas.length; i++) {
                        if(comida[i].quantity > 0){
                              
                              comida[i].total = comida[i].quantity*comida[i].price

                              precoFinal += comida[i].total

                              comida[i].total = parseFloat(comida[i].total).toFixed(2) 

                              let totalExibido = comida[i].total.toString().replace('.', ',')

                              let precoExibido = comida[i].price.toString().replace('.', ',')

                              pedido = pedido+`<li>${comida[i].type}: ${comida[i].name} - Pre??o unit??rio: R$ ${precoExibido} - Quantidade: ${comida[i].quantity} - Total: R$ ${totalExibido}.</li>`
                        }
                  }
            }

            if(pedido == ""){
                  $('.pedidoCheio')[0].style.display = "none"
                  $('.pedidoVazio')[0].style.display = "block"
            }else{
                  precoFinal = parseFloat(precoFinal).toFixed(2) 
                  precoFinal = precoFinal.toString().replace('.', ',')  

                  $('.pedidoVazio')[0].style.display = "none"
                  $('.pedidoCheio')[0].style.display = 'block'
                  $('.pedidoCheio .nameComplete')[0].innerHTML = formName
                  $('.pedidoCheio ul')[0].innerHTML = pedido
                  $('.pedidoCheio p:last b')[0].innerHTML = `Pre??o final R$ ${precoFinal}`
            }

            var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
                  keyboard: false
            })
      
            myModal.show()    
      }
})

$('#form').submit(function (e) {
      e.preventDefault();
});