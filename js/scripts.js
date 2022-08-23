//ANIMATIONS
const pricing = document.querySelector('.pricing')
const cardItems = document.querySelectorAll('.card__item')
const cardPlans = document.querySelectorAll('.card__item--plan')
const cardPrices = document.querySelectorAll('.card__item--price')
const cardIcons = document.querySelectorAll('.card__item--icon')
const cardBenefits = document.querySelectorAll('.card__item--benefits')
const cardBtns = document.querySelectorAll('.btn')
const footer = document.querySelector('.attribution')
const startAnimation = (entries, observe)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible')
        }
    })
}
const oberver = new IntersectionObserver(startAnimation, {
    root : null,
    rootMargin : "0px",
    threshold: 0.1
})

oberver.observe(pricing)
cardItems.forEach(cardItem => {
    oberver.observe(cardItem)
});
cardPlans.forEach(cardPlan => {
    oberver.observe(cardPlan)
});
cardPrices.forEach(cardPrice => {
    oberver.observe(cardPrice)
});
cardIcons.forEach(cardIcon => {
    oberver.observe(cardIcon)
});
cardBenefits.forEach(cardBenefit => {
    oberver.observe(cardBenefit)
});
cardBtns.forEach(cardbtn => {
    oberver.observe(cardbtn)
});
oberver.observe(footer)
//END ANIMATIONS

//TOGGLE
const spanAnnually = document.getElementById('chkAnnually')
const spanMonthly = document.getElementById('chkMonthly')
const btnToggle = document.getElementById('chkPricing')

let priceBasic = document.getElementById('basic')
let priceProfessional = document.getElementById('professional')
let priceMaster = document.getElementById('master')

spanAnnually.addEventListener('click', ()=>{
    btnToggle.checked = true;
    changePrice()
})
spanMonthly.addEventListener('click', ()=>{
    btnToggle.checked = false;
    changePrice()
})
btnToggle.addEventListener('click', ()=>{
    changePrice()
})


function changePrice(){
    if(btnToggle.checked){
        priceBasic.innerHTML = "199.99"
        priceProfessional.innerHTML = "249.99"
        priceMaster.innerHTML = "399.99"
        return
    } 
    priceBasic.innerHTML = "19.99"
    priceProfessional.innerHTML = "24.99"
    priceMaster.innerHTML = "39.99"
}