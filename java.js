 var items = [
    ['images/product 1.png', 29.99, 'Mug 1'],
    ['images/product 2.png', 29.99, 'Mug 2'],
    ['images/Product 3.png', 29.99, 'Mug 3'],
    ['images/Product 4.1.png', 29.99, 'Mug 4']

];


 var cartItems = [];

 function run() { // load products on shop page
     var main = document.getElementById('products');

     for (var i = 0; i < items.length; i++) {
         var ele = document.createElement('li');
         var pic = document.createElement('img');
         var price = document.createElement('h1');
         var desc = document.createElement('h2');
         var add = document.createElement('button');
         var typeBox = document.createElement('input');


         main.appendChild(ele);
         ele.appendChild(pic);
         ele.appendChild(price);
         ele.appendChild(desc);
         ele.appendChild(add);
         ele.appendChild(typeBox);

         pic.src = items[i][0];
         price.innerHTML = '$' + items[i][1];
         desc.innerHTML = items[i][2];
         add.innerHTML = 'add';
         typeBox.type = 'number';
         typeBox.min = '1';

         typeBox.setAttribute("id", "input" + i);
         typeBox.value = 1;

         add.dataset.cartIndex = i;
         add.addEventListener('click', adding, false);

     }
 }

 function adding(event) {
     const NUM = event.currentTarget.dataset.cartIndex;

     cartItems.push([items[NUM]]);
     cartItems[cartItems.length - 1][1] = Number(document.getElementById('input' + NUM).value);

     updateCart();
 }

 var totalItems = 0;

 function updateCart() {
     var itemCounter = document.getElementById('ItemCount');

     totalItems = 0;


     for (var i = 0; i < cartItems.length; i++) {
         totalItems += cartItems[i][1];
     }

     window.sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

     itemCounter.innerHTML = totalItems;

 } // end func

 var totalPrice = 0;

 function loadCart() { // load products on cart page
     var main = document.getElementById('cartProducts');

     var data = sessionStorage.getItem('cartItems');
     data = JSON.parse(data);

     cartItems = data;

     updateCart();

     for (var i = 0; i < cartItems.length; i++) {

         var ele = document.createElement('li');
         var pic = document.createElement('img');
         var price = document.createElement('h1');
         var desc = document.createElement('h2');
         var deleteItem = document.createElement('button');
         var amount = document.createElement('h2');
         var subtotal = document.createElement('h3');


         main.appendChild(ele);
         ele.appendChild(pic);
         ele.appendChild(price);
         ele.appendChild(desc);
         ele.appendChild(deleteItem);
         ele.appendChild(amount);
         ele.appendChild(subtotal);

         pic.src = cartItems[i][0][0];
         price.innerHTML = '$' + cartItems[i][0][1];
         desc.innerHTML = cartItems[i][0][2];

         deleteItem.innerHTML = 'Delete';
         deleteItem.dataset.cartIndex = i;
         deleteItem.addEventListener('click', deleteMe, false);

         amount.innerHTML = cartItems[i][1];
         subtotal.innerHTML = '$' + cartItems[i][1] * cartItems[i][0][1];

         totalPrice = 0;
     }

     // work out a grand total and push into html



 } // end func

 function deleteMe() {
     const NUM = event.currentTarget.dataset.cartIndex;

     delete cartItems[NUM];

     cartItems = cartItems.filter(item => item !== undefined);

     updateCart();
     loadCart();
     window.location.reload(true);
 }
