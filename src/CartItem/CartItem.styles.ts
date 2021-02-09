import styled from 'styled-components';
import {Button} from '@material-ui/core';

export const Wrapper = styled.div`
height:200px;
width:100%;
display:flex;
flex-direction:column;
align-content:center;
justify-items:center;

`
export const CartImg=styled.img`
height:100px;
width:100%;
padding:0;
object-fit:cover;
object-position:center;
`
export const CartProductValue=styled.p`
    background: lightgrey;
    width:100%;
    height:20px;
    text-align:center;
    font-weight:bold;
    font-style:Verdana;
`
export const CartFooter= styled.div`
height:80px;
display:flex;
justify-content:space-around;
padding:0;

`
// export const CartButton= styled(Button)`
// &.primary{
// background-color: #5469d4;
//  height:40px;
//   color: #fff;
//   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   padding: 7px 14px;
//   &:hover {
//     background-color: #5469d4;
//   }
// }
// &.secondary{
// background-color: red;
//  height:40px;
//   color: #fff;
//   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   padding: 7px 14px;
//   &:hover {
//     background-color: red;
//   }
// }
// `
export const CartButton= styled(Button)`
 
background-color: lightblue;
  height:40px;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
 padding: 7px 14px;
`