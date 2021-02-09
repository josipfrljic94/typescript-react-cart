import {useState} from 'react';
import {useQuery} from 'react-query';
import Cart from './Cart/Cart';
import {Drawer,Container,CircularProgress,Grid,Badge} from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
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
  const [cartProducts, setCartProducts] = useState([] as ProductType[])
  const {data,isLoading,error}= useQuery<ProductType[]>('products',getProducts);
  console.log(data);

  const getTotalItems=(products: ProductType[])=>
  products.reduce((ack:number,product)=>ack + product.amount,0)

  const handleAddToCart=(clickedProduct:ProductType)=>{
    setCartProducts(prev=>{
      const inCart= prev.find(item=>item.id===clickedProduct.id);
      
      if(inCart)
      {
        return prev.map(item=>
          item.id===clickedProduct.id 
          ? {...item,amount:item.amount+1}
          : item
          );
      }
      return[...prev,{...clickedProduct,amount:1}];
      });
  };
  const handleRemoveFromCart=(id:number)=>{
    setCartProducts(prev=>
      prev.reduce((ack,product)=>{
        if(product.id===id){
          if(product.amount===1) return ack;
          return[...ack,{...product,amount:product.amount-1}];
        }else{
          return[...ack,product]
        }
       


      },[] as ProductType[])
      )
  };

    (isLoading) && <CircularProgress /> 
    error && <h1>Something went wrong...</h1>
  return (
    
   <Wrapper>
     <Drawer anchor='right' open={cartOpen} onClose={()=>setcartOpen(false)}>
     <StylesProvider injectFirst>
        <Cart cartItems={cartProducts} 
        addToCart={handleAddToCart}
        removeFromCart={handleRemoveFromCart}
        />
      </StylesProvider>
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
