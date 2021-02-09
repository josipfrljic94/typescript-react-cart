import {Button} from '@material-ui/core';

import {Wrapper,CartImg,CartFooter,CartProductValue,CartButton} from './CartItem.styles';

// type

import {ProductType} from "../App";

type Props= {
    item: ProductType;
    addToCart:(clickedItem:ProductType)=>void;
    removeFromCart:(id:number)=>void;
}


const CartItem:React.FC<Props>=({item,addToCart,removeFromCart})=>{
return (
   
    <Wrapper>
        <CartImg src={item.image}></CartImg>
        <CartProductValue>AMOUNT :{item.amount}</CartProductValue>
        <CartFooter>
            <CartButton onClick={()=>addToCart(item)}  >+</CartButton>
            <CartButton onClick={()=>removeFromCart(item.id)} >Remove</CartButton>
        </CartFooter>
    </Wrapper>
   
)
}
export default CartItem;