import {useState} from 'react';
import {useQuery} from 'react-query';
import {Drawer,Container,CircularProgress,Grid,Badge} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Wrapper,StyledButton} from "./App.styles";
import {Item} from "./Item/Item";

// Types
export type ProductType={
  id:number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string;
  amount:number;
}

const getProducts= async(): Promise<ProductType[]>=>
await (await fetch ('https://fakestoreapi.com/products')).json();



function App() {

  const [cartOpen, setcartOpen] = useState(false);
  const [cartProducts, setcartProducts] = useState([] as ProductType[])
  const {data,isLoading,error}= useQuery<ProductType[]>('products',getProducts);
  console.log(data);

  const getTotalItems=(products: ProductType[])=>
  products.reduce((ack:number,product)=>ack + product.amount,0)
  const handleAddToCart=(clickedProduct:ProductType)=>null;
  const handleRemoveFromCart=()=>null;

    (isLoading) && <CircularProgress /> 
    error && <h1>Something went wrong...</h1>
  return (
   <Wrapper>
     <Drawer anchor='right' open={cartOpen} onClose={()=>setcartOpen(false)}>
        Cart cloud
     </Drawer>
     <StyledButton onClick={()=>setcartOpen(true)}>
      <Badge badgeContent={getTotalItems(cartProducts)} color="secondary">5</Badge>
      <AddShoppingCartIcon />
      </StyledButton>
     <Container>
     <Grid container spacing={3}>
        {data?.map(product=>(
          <Grid item  key={product.id} xs={12} sm={4}>
              <Item product={product} handleAddToCart={handleAddToCart}/>
              
          
          </Grid>
        ))}
     </Grid>
     </Container>
   </Wrapper>
  );
}

export default App;
