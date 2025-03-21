const rootEl = document.querySelector('.root');

function productsCardsRendering(productsList) {
    rootEl.innerHTML += `
    <table class="table">
        <tr>
            <th>Name</th>
            <th>Email address</th>
            <th>Role</th>
            <th>Gender</th>
        </tr>
    </table>`;
  productsList.forEach((element) => {
    document.querySelector('.table').innerHTML += `
    <tr>
    <td class="image-name"><img src="${element.image}"><div style="align-items: center;">${element.firstName}</div></td>
    <td>${element.email}</td>
    <td>${element.role}</td>
    <td>${element.gender}</td>
    </tr>
    `;
  });
}

fetch('https://dummyjson.com/users')
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
    productsCardsRendering(result.users);
  });
