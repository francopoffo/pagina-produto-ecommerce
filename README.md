# E-commerce page

E-commerce page with several functionalities for viewing product images and also the functionality to add products to the cart. A checkout page was also developed using data storage in the browser to save the order information.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Look through gallery pictures (desktop and mobile) and open a lightbox to see a bigger version of the pictures (desktop).
- Add products to the cart.
- Go to the checkout page and finalize the order.

### Links

- Solution URL: (https://github.com/francopoffo/pagina-produto-ecommerce)
- Live Site URL: (https://friendly-dragon-c991bc.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Flexbox
- Desktop-first workflow
- localStorage

### What I learned


```js
let checkoutAmount = localStorage.amount;
let total = checkoutAmount * 110

console.log(checkoutAmount);

checkoutInfo.innerText = `Camiseta OTR X RAVIOLI Quantidade: ${checkoutAmount}`
checkoutPrice.innerText = `R$ ${total},00`

checkoutButton.innerHTML = `<p>Nos chame no link abaixo</p>
<button class="checkout__botao"><a href="https://wa.me/5547999230603?text=Gostaria%20de%20comprar%20${checkoutAmount}%20camiseta(s)%20da%20ON%20THE%20ROCKS%20pelo%20total%20de%20R$%20${total}."><img src="./assets/img/whatsapp.png" "alt="whatsapp"><a/></button>`

and

images.forEach((image) => {
  image.addEventListener("click", () => {
    const lastImg = document.querySelectorAll(".selected");
    if (lastImg) {
      lastImg[0].classList.remove("selected");
    }
    image.classList.add("selected");
    const selectedImg = document.querySelector(".selected");
    switch (selectedImg.getAttribute("src")) {
      case "./assets/img/camiseta-1.jpg":
        mainThumbnail.src = "./assets/img/camiseta-1.jpg";
        mainThumbnailLightBox.src = "./assets/img/camiseta-1.jpg";
        break;
      case "./assets/img/camiseta-2.jpg":
        mainThumbnail.src = "./assets/img/camiseta-2.jpg";
        mainThumbnailLightBox.src = "./assets/img/camiseta-2.jpg";
        break;
      case "./assets/img/camiseta-3.jpg":
        mainThumbnail.src = "./assets/img/camiseta-3.jpg";
        mainThumbnailLightBox.src = "./assets/img/camiseta-3.jpg";
        break;
      case "./assets/img/camiseta-4.jpg":
        mainThumbnail.src = "./assets/img/camiseta-4.jpg";
        mainThumbnailLightBox.src = "./assets/img/camiseta-4.jpg";
        break;
    }
  });
});

```

### Continued development

My goal now is to continue to develop my skills in this three languages, with the main focus being JavaScript.

### Useful resources

- [localStorage](https://www.youtube.com/watch?v=AphaUpmVguI)


## Author

- Website - [Franco Poffo](https://www.linkedin.com/in/franco-poffo/)
- GitHub - [@francopoffo](https://github.com/francopoffo)


