
'use strict';

//console.log('hihihi')

const productContainer = document.getElementById('products-container')
const buttons = document.getElementsByClassName('add')
const productCart = document.getElementById('cart-item')
const totalPrice = document.getElementById('cart-total-price');
var formCartOrder = new XMLHttpRequest()
let token = document.getElementById('token').innerHTML
const orderButton = document.getElementById('submitOrder')







var cart = [];

for (let selectedProduct of buttons) {
    selectedProduct.addEventListener('click', getProductData)


}

function saveCart() {
sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
}

let addItemToCart = function(name, price, count, id) {


    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();

        return;
      }
    }
    var item = new Item(name, price, count, id);
    cart.push(item);
    saveCart();

  }




function getProductData() {
    event.preventDefault();


    addItemToCart(event.target.dataset.productname,
                  event.target.dataset.price,
                  1,
                  event.target.dataset.productid)
    productCart.innerHTML = "";

    let totalSum = 0;

    for (let prod in cart) {
    productCart.appendChild(addChildNodes(cart[prod].name, cart[prod].count))
    totalSum += Number(cart[prod].price) * Number(cart[prod].count)
    }
    totalPrice.innerHTML = totalSum
}


function Item(name, price, count, id) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.id = id
  }


function addChildNodes(name, quantity) {
    let additionalNodeName = document.createElement('h6')
    additionalNodeName.classList.add('my-0')
    additionalNodeName.innerHTML = name


    let additionalNodeQuantity = document.createElement('span');
    additionalNodeQuantity.classList.add('text-muted')
    additionalNodeQuantity.innerHTML = quantity

    let additionalNode = document.createElement('li')
    additionalNode.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'lh-condensed')
    additionalNode.appendChild(additionalNodeName)
    additionalNode.appendChild(additionalNodeQuantity)

    return additionalNode
}

let datasent = {order_product: cart, csrfmiddlewaretoken: token}

//{name:"name ONE", email:"email ONE", csrfmiddlewaretoken: token}

//order_product =
//time_order =
//ordered_quantity =



//console.log(datasent)

//formCartOrder.open("POST",
//"http://127.0.0.1:8000/create-order", datasent,'json')
//



console.log('before ajax')
//
//$.post("http://127.0.0.1:8000/create-order", {data: "some data"}, function(data, status) {
//   // we're fine here
//}).fail(function(err, status) {
//   // something went wrong, check err and status
//   console.log('smthg wrong')
//});

console.log(datasent)



const makeOrder = function() {
    $.ajax({
    url: "http://127.0.0.1:8000/create-order",
    data: datasent,
    dataType: 'JSON',
    type: 'POST',
    //success: function(datasent, status) {
    //    console.log(data),
    //    console.log(status)},
    //error: function(datasent, status) {
    //console.log(datasent)}
    })
console.log('smth ordered', datasent)
}

//
//$.ajax({
//    url:"{% url home %}",
//    data: {name:"name ONE",
//            email:"email ONE",
//            csrfmiddlewaretoken:'{{ csrf_token }}'},
//    dataType: "json",
//    type: "POST",
//    success: console.log("SUCCESS"),
//    error: console.log('ERROR')
//
//});

//formCartOrder.send()
console.log('after ajax')
console.log(formCartOrder.responseText)

orderButton.addEventListener('click', makeOrder)


//
//<li class="list-group-item d-flex justify-content-between lh-condensed">
//<div>
//<h6 class="my-0">{item.name}</h6>
//</div><span class="text-muted">{item.quantity}</span>
//</li>
//
//const node = {
//  name: 'h1',
//  props: {
//    class: 'main-title'
//  },
//  childs: [
//    'Заголовок'
//  ]
//};





//
////function getPriceFormatted(value) {
////  return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
////}
////
////const itemsSpace = document.getElementById('container');
//////const cartCount = document.getElementById('cart-count');
//const totalPrice = document.getElementById('cart-total-price');
////
////let totalSum = 0;
////
////function buttonClick() {
////    if (event.target.classList.contains('add')) {
////        let currClick = event.target;
////        let addedSum = Number(currClick.dataset.price);
////        totalSum = totalSum + addedSum;
////        cartCount.innerHTML ++;
////        totalPrice.innerHTML = getPriceFormatted(totalSum);
////    }
////}
////itemsSpace.addEventListener('click', buttonClick)
//
//// ************************************************
//// Shopping Cart API
//// ************************************************
//
//var shoppingCart = (function() {
//  // =============================
//  // Private methods and propeties
//  // =============================
//  cart = [];
//
//  // Constructor
//  function Item(name, price, count) {
//    this.name = name;
//    this.price = price;
//    this.count = count;
//  }
//
//  // Save cart
//  function saveCart() {
//    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
//  }
//
//    // Load cart
//  function loadCart() {
//    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
//  }
//
//  if (sessionStorage.getItem("shoppingCart") != null) {
//    loadCart();
//  }
//
//
//  // =============================
//  // Public methods and propeties
//  // =============================
//  var obj = {};
//
//  // Add to cart
//  obj.addItemToCart = function(name, price, count) {
//    for(var item in cart) {
//      if(cart[item].name === name) {
//        cart[item].count ++;
//        saveCart();
//        return;
//      }
//    }
//    var item = new Item(name, price, count);
//    cart.push(item);
//    saveCart();
//  }
//  // Set count from item
//  obj.setCountForItem = function(name, count) {
//    for(var i in cart) {
//      if (cart[i].name === name) {
//        cart[i].count = count;
//        break;
//      }
//    }
//  };
//  // Remove item from cart
//  obj.removeItemFromCart = function(name) {
//      for(var item in cart) {
//        if(cart[item].name === name) {
//          cart[item].count --;
//          if(cart[item].count === 0) {
//            cart.splice(item, 1);
//          }
//          break;
//        }
//    }
//    saveCart();
//  }
//
////  // Remove all items from cart
////  obj.removeItemFromCartAll = function(name) {
////    for(var item in cart) {
////      if(cart[item].name === name) {
////        cart.splice(item, 1);
////        break;
////      }
////    }
////    saveCart();
////  }
//
////  // Clear cart
////  obj.clearCart = function() {
////    cart = [];
////    saveCart();
////  }
//
////  // Count cart
////  obj.totalCount = function() {
////    var totalCount = 0;
////    for(var item in cart) {
////      totalCount += cart[item].count;
////    }
////    return totalCount;
////  }
//
//  // Total cart
//  obj.totalCart = function() {
//    var totalCart = 0;
//    for(var item in cart) {
//      totalCart += cart[item].price * cart[item].count;
//    }
//    return Number(totalCart.toFixed(2));
//  }
//
//  // List cart
//  obj.listCart = function() {
//    var cartCopy = [];
//    for(i in cart) {
//      item = cart[i];
//      itemCopy = {};
//      for(p in item) {
//        itemCopy[p] = item[p];
//
//      }
//      itemCopy.total = Number(item.price * item.count).toFixed(2);
//      cartCopy.push(itemCopy)
//    }
//    return cartCopy;
//  }
//  return obj;
//})();
//
//
//// *****************************************
//// Triggers / Events
//// *****************************************
//// Add item
//function addProduct(event) {
//  event.preventDefault();
//  let name = $(this).data('name');
//  let price = Number($(this).data('price'));
//  let productID = this.dataset
//  shoppingCart.addItemToCart(name, price, 1);
//  displayCart();
//};
//
////// Clear items
//$('.clear-cart').click(function() {
//  shoppingCart.clearCart();
//  displayCart();
//});

//
//function displayCart() {
//  var cartArray = shoppingCart.listCart();
//  var output = "";
//  for(var i in cartArray) {
//    output += "<tr>"
//      + "<td>" + cartArray[i].name + "</td>"
//      + "<td>(" + cartArray[i].price + ")</td>"
//      + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
//      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
//      + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
//      + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
//      + " = "
//      + "<td>" + cartArray[i].total + "</td>"
//      +  "</tr>";
//  }
//  $('.show-cart').html(output);
//  $('.total-cart').html(shoppingCart.totalCart());
//  $('.total-count').html(shoppingCart.totalCount());
//}

//// Delete item button
//
//$('.show-cart').on("click", ".delete-item", function(event) {
//  var name = $(this).data('name')
//  shoppingCart.removeItemFromCartAll(name);
//  displayCart();
//})
//
//
//// -1
//$('.show-cart').on("click", ".minus-item", function(event) {
//  var name = $(this).data('name')
//  shoppingCart.removeItemFromCart(name);
//  displayCart();
//})
//// +1
//$('.show-cart').on("click", ".plus-item", function(event) {
//  var name = $(this).data('name')
//  shoppingCart.addItemToCart(name);
//  displayCart();
//})

//// Item count input
//$('.show-cart').on("change", ".item-count", function(event) {
//   var name = $(this).data('name');
//   var count = Number($(this).val());
//  shoppingCart.setCountForItem(name, count);
//  displayCart();
//});
//
//displayCart();


////
////'use strict';
//
//const productsItems = document.getElementsByClassName('product-name')
//console.log('hooray')
//
//for (let someProduct of productsItems) {
//    someProduct.addEventListener('onclick', purchaseItem)
//    console.log(someProduct)
//}
//
//
//function addNewElement(item) {
//    return '<li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 class="my-0">{item.name}</h6>' +
//        '</div><span class="text-muted">{item.quantity}</span></li>'
//}
//
////addNewElement({'name':'Evian', 'quantity': '50'})
//
//
//function purchaseItem(target) {
//    productCart.appendChild(addNewElement({'name':'Evian', 'quantity': '50'}))
//}
