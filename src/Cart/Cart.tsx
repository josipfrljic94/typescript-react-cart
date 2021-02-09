import CartItem from "../CartItem/CartItem";

// styles

import {Wrapper} from './Cart.styles';

// Types

import {ProductType} from "../App";

type Props={
    cartItems: ProductType[];
    addToCart:(clickedItem:ProductType)=>void;
    removeFromCart:(id:number)=>void;
}

const Cart: React.FC<Props> =({cartItems,addToCart,removeFromCart})=>{
    return (
        <Wrapper>
                <h3>Your shopping cart</h3>
                {cartItems.length===0 ? <h3>No items </h3> : null}
                {cartItems.map(item=>(
                    <CartItem 
                    key={item.id} 
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    />
                ))}
        </Wrapper>
    )
}
export default Cart;