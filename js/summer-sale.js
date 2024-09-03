
function handClick(data)
{
    const title = data.childNodes[5].innerText
    const price = parseFloat(data.childNodes[7].innerText.split(" ")[0]);
    console.log(price);
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
    console.log(previousPrice)
    total = previousPrice + price;
    PriceContainer.children[0].children[0].innerText = total.toFixed(2) + "TK";
    if(total>0){
        const modalBtn = document.getElementById('modal-btn');
        modalBtn.removeAttribute('disabled',true)
    }
    if(total>=200){
        const applyBtn = document.getElementById('apply-btn');
        applyBtn.removeAttribute('disabled',true)
    }
    
    

}