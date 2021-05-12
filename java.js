var items = [
    ['images/Product_1.png',29.99, 'Mug 1'],
    ['images/product 2.png',29.99, 'Mug 2'],
    ['images/Product 3.png',29.99, 'Mug 3'],
    ['images/Product 4.png',29.99, 'Mug 4']
    
];

function run() {
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

         }
        }