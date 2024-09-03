function handClick(data)
{
    const title = data.childNodes[5].innerText
    const price = parseFloat(data.childNodes[7].innerText.split(" ")[0]);
    const titleContainer = document.getElementById('title-container');
    const count = titleContainer.childElementCount;
    const h5 = document.createElement('h5');
    h5.innerHTML = `
    ${count+1}. ${title}
    `
    h5.setAttribute('class','text-xl font-medium');
    titleContainer.appendChild(h5)
    const PriceContainer = document.getElementById('price-container');
    const previousPrice = parseFloat(PriceContainer.children[0].children[0].innerText.split(" ")[0])
    total = previousPrice + price;
    PriceContainer.children[0].children[0].innerText = total.toFixed(2) + " TK";
    if(total>0){
        const modalBtn = document.getElementById('modal-btn');
        modalBtn.removeAttribute('disabled',true)
        
    }
    if(total>=200){
        const applyBtn = document.getElementById('apply-btn');
        applyBtn.removeAttribute('disabled',true)
        cuponText = document.getElementById('cupon-text')
        if(cuponText.value === "SELL200"){
            apply();
        }

    }
    
    

}

function apply() {
    const PriceContainer = document.getElementById('price-container');
    PriceContainer.children[1].children[0].innerText = (total*0.2).toFixed(2) + " Tk";
    PriceContainer.children[2].children[0].innerText = (total-(total*0.2)).toFixed(2) + " Tk";
}