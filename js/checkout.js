const checkoutInfo = document.querySelector(".checkout__conteudo");
const checkoutPrice = document.querySelector(".checkout__preco");
const checkoutButton = document.querySelector(".checkout__whatsapp");

console.log(checkoutInfo);
console.log(checkoutPrice);

let checkoutAmount = localStorage.amount;
let total = checkoutAmount * 110

console.log(checkoutAmount);

checkoutInfo.innerText = `Camiseta OTR X RAVIOLI Quantidade: ${checkoutAmount}`
checkoutPrice.innerText = `R$ ${total},00`

checkoutButton.innerHTML = `<p>Nos chame no link abaixo</p>
<button class="checkout__botao"><a href="https://wa.me/5547999230603?text=Gostaria%20de%20comprar%20${checkoutAmount}%20camiseta(s)%20da%20ON%20THE%20ROCKS%20pelo%20total%20de%20R$%20${total}."><img src="./assets/img/whatsapp.png" "alt="whatsapp"><a/></button>`



