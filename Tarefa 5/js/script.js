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

      let price = $('.card .price')[i].innerHTML
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

            montaPedido()
      })

      $('.card .quantityControl .plus')[i].addEventListener('click', () => {
            let newQuantity = comida[i].quantity+1
            comida[i].quantity = newQuantity

            $('.card .quantityControl span')[i].innerHTML = comida[i].quantity

            comida[i].total = comida[i].quantity*price
            comida[i].total = parseFloat(comida[i].total).toFixed(2)

            let totalExibido = comida[i].total.toString().replace('.', ',')

            let precoExibido = comida[i].total.toString().replace('.', ',')

            if(pedido.search(comida[i].name)){
                  if(comida[i].quantity > 0){
                        pedido = pedido+`- Quantidade: ${comida[i].quantity} - Total: ${totalExibido}.</li>`
                  } 
            }else{
                  if(comida[i].quantity > 0){
                        pedido = pedido+`<li>${comida[i].type}: ${comida[i].name} - Preço unitário: R$ ${precoExibido} - Quantidade: ${comida[i].quantity} - Total: ${totalExibido}.</li>`
                  } 
            }
                  
            console.log(pedido)
      })

      
}

$('.calc')[0].addEventListener('click', ()=>{
      var formName = $('#name').val()
      var formTel = $('#tel').val()
      var formEmail = $('#email').val()

      $('.dados')[0].style.display = 'block'
      $('.dados p:first b').innerHTML = formName
      
      console.log(pedido);
})

// for (let index = 0; index < comidas.length; index++) {
//       console.log(comida[index])
// }