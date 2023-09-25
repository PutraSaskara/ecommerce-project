import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const {id, color, amount, product} = action.payload
    const tempItem = state.cart.find((item) => item.id + item.color === id + color)

    if(tempItem){ //product exist start
      const tempCart = state.cart.map(cartItem => {
        if(cartItem.id + cartItem.color === id + color){
          let newQty = cartItem.amount + amount
          if(newQty > cartItem.stock){
            newQty = cartItem.stock
          }
          return {...cartItem, amount: newQty}
        }else{
          return cartItem
        }
      })
      return {...state, cart: tempCart}
    }else {
      // new product add to cart
      const newItem = {
        id: id,
        amount: amount,
        name: product.name,
        color: color,
        image: product.image,
        price: product.price,
        stock: product.stock
      }

      return {...state, cart: [...state.cart, newItem]}
    }
  }


  if (action.type === REMOVE_CART_ITEM) {
    // const newCart = state.cart.filter(item => item.id !== action.payload);
    // return { ...state, cart: newCart };
    const {id} = action.payload;
    const tempCart = state.cart.filter((item) => item.id !== id);
    return {...state, cart: tempCart}
  }
  

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {

    const {id, value} = action.payload
    const tempCart = state.cart.map((item) => {
      if(item.id === id ) {
        if (value === 'inc') {
          let newAmount = item.amount + 1
          if (newAmount > item.stock) {
            newAmount = item.stock
          }
          return {...item, amount: newAmount}
        }
        if(value === 'dec') {
          let newAmount = item.amount - 1
          if (newAmount < 1) {
            newAmount = 1
          }
          return {...item, amount: newAmount}
        }
      }
      return item
    })
    return {...state, cart: tempCart}
  }
  
      // cari item sesuai id tersebut
    // if inc, amount +1
    // else , amount -1
    // return ...state, cart: [cart lama, tempItem]


  if (action.type === CLEAR_CART) {
    // copy state update state cart dengan array kosong
    return {...state, cart: []}
  }


  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem
        total.total_items += amount
        total.total_amount += price * amount
        return total
      },
      { total_items: 0, total_amount: 0 }
    )
    return { ...state, total_items, total_amount }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
