let shopingCart = document.querySelector('.shoping-cart');
document.querySelector('#cart-btn').onclick = ()=>
{
    shopingCart.classList.toggle('active');
}
let loginForm = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = ()=>
{
    loginForm.classList.toggle('active');
}

document.querySelector('#close').addEventListener("click",function(){
    document.querySelector(".close1").style.display="none";
})
document.querySelector('#close1').addEventListener("click",function(){
    document.querySelector(".login-form").style.display="none";
})