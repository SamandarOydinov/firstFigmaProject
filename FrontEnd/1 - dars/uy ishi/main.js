const rootEl = document.querySelector('.root');

function productsCardsRendering(productsList) {
  productsList.forEach((element) => {
    rootEl.innerHTML += `
    <div class = "product">
            <img class = "image" src="${element.image}" alt="image not found"
        />
        <div class = "elements">
        <p id="firstName" style="padding-left: 10px">${element.firstName}</p>
        <p id="address_city" style="padding-left: 10px">${element.address.city}</p>
        <p id="company_name" style="margin: 10px">${element.company.name}</p>
        </div>           
        </div>`;
  });
}

fetch('https://dummyjson.com/users')
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
    productsCardsRendering(result.users);
  });
