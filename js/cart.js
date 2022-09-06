const getInputFieldById = (id) =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '' ;
    return inputValue;
}


const addProduct = () =>{
    const product = getInputFieldById('product-name-field');
    const quantity = getInputFieldById('product-quantity-field');
    console.log(product, quantity)

    //display product on UI
    addProductsToDisplay(product,quantity);

    // set the local storage
    // simple way
    // localStorage.setItem(product, quantity)
    saveItemToLocalStorage(product,quantity)

}  

const getShoppingCartToLocalStorage = () =>{
    let saveCart = localStorage.getItem('cart');
    let cart = {}
    if(saveCart){
        cart = JSON.parse(saveCart)
    }
    return cart;
}

const saveItemToLocalStorage = (product,quantity) =>{

    const cart = getShoppingCartToLocalStorage()
    // add product to the object as property
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);

    // save to local storage 
    localStorage.setItem('cart', cartStringified)

}

const addProductsToDisplay = (product,quantity) => {
    const productContainer = document.getElementById('product-container')
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}

const displayStoreProduct = () =>{
    const cart = getShoppingCartToLocalStorage()
    for(const product in cart){
        const quantity = cart[product]
        console.log(product, quantity);
        addProductsToDisplay(product,quantity)
    }
}

displayStoreProduct()