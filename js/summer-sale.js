let globalTotal = 0;
let discountBtnApplied = false;

function handClick(data) {
  // card title
  let title = data.childNodes[5].innerText;
  // card price
  let price = parseFloat(data.childNodes[7].innerText.split(" ")[0]);
  let titleContainer = document.getElementById("title-container");
  let count = titleContainer.childElementCount;
  let h5 = document.createElement("h5");
  h5.innerHTML = `${count + 1}. ${title}`;
  h5.setAttribute("class", "text-xl font-medium");
  titleContainer.appendChild(h5);

  let PriceContainer = document.getElementById("price-container");
  let previousPrice = parseFloat(
    PriceContainer.children[0].children[0].innerText.split(" ")[0]
  );

  globalTotal = previousPrice + price;

  // initially when cupon card is not applied
  let discount = 0;
  let finalTotal = globalTotal;

  // once cupon card is applied
  if (discountBtnApplied) {
    discount = globalTotal * 0.2;
    finalTotal = globalTotal - discount;
  }

  PriceContainer.children[0].children[0].innerText =
    globalTotal.toFixed(2) + " TK";
  PriceContainer.children[1].children[0].innerText =
    discount.toFixed(2) + " TK";
  PriceContainer.children[2].children[0].innerText =
    finalTotal.toFixed(2) + " TK";

  //  apply button enabled
  if (globalTotal >= 200 && !discountBtnApplied) {
    let applyBtn = document.getElementById("apply-btn");
    applyBtn.removeAttribute("disabled");
  }

  // purchase button enabled
  if (globalTotal > 0) {
    let modalBtn = document.getElementById("modal-btn");
    modalBtn.removeAttribute("disabled");
  }
}

// applied when globalTotal greater than 200 or equal to 200
function apply() {
  let cuponText = document.getElementById("cupon-text").value;
  document.getElementById("cupon-text").value = "";
  let sellBtn = document.getElementById("sell-btn").innerText;
  let PriceContainer = document.getElementById("price-container");

  if (cuponText === sellBtn && !discountBtnApplied) {
    discountBtnApplied = true;
    let discount = globalTotal * 0.2;
    let finalTotal = globalTotal - discount;

    PriceContainer.children[1].children[0].innerText =
      discount.toFixed(2) + " TK";
    PriceContainer.children[2].children[0].innerText =
      finalTotal.toFixed(2) + " TK";

    let applyBtn = document.getElementById("apply-btn");
    //  apply button disabled
    applyBtn.setAttribute("disabled", "true");
    applyBtn.innerText = "Applied";
    applyBtn.style.backgroundColor = "gray";
    applyBtn.style.fontSize = "14px xl:16px";
  }
}

// go to home page when clicked
function purchaseBtn() {
  window.location.href = "index.html";
}
