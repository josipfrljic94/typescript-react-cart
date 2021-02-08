import {Button} from '@material-ui/core';
// types
import {ProductType} from '../App';
// styles
import {Wrapper} from './Item.style';

type Props={
    product:ProductType;
    handleAddToCart:(clickedProduct:ProductType)=>void;
}

export const Item: React.FC<Props>=({product,handleAddToCart})=>(

    <Wrapper>
        <img src={product.image} alt={product.title}></img>
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h3>{product.price}</h3>
        </div>
        <Button onClick={()=>handleAddToCart(product)}>Add</Button>
    </Wrapper>
)
