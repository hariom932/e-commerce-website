import { useLocation } from "react-router-dom";
import style from "./detail.module.css"
import { useContext, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyContent } from "../../App";
import Menu from "../menu/menu";
export default function DetailPage()
{
   var {state} =useLocation()
   var {cart,setCart}=useContext(MyContent)
   function cartProduct(items)
   {
    console.log(items)
    items={...items,qty:1}
    var temp=[...cart]
    
    var search={"result":false,"index":-1}
    temp.forEach((item,index)=>{
     if(item.title==items.title)
     {
         search['result']=true
         search['index']=index
     }
    })
    if(search['result']==true)
    {
     temp[search.index]['qty']+=1       
     setCart(temp)
     toast("Quantity updated...")
    }
    else
    {
         temp.push(items)
         setCart(temp)
         toast("product added!")
    }
 }

    return(
        <>
            <Menu/>
            {console.log(state)}
            <div className={style.box}>
                <div className={style.imgBox}><img src={state.image} width="100%" height="100%" /></div>
                <div className={style.btn}>
                    <button className={style.cart} onClick={()=>cartProduct(state)}>Add to cart</button>
                    <button className={style.buy}>Buy now</button>
                </div>
                <div className={style.detailBox}>
                    <div className={style.title}>{state.title}</div>
                    <div className={style.price}>{state.price}</div>
                    <div className={style.rating}><button>4.6 *</button></div>
                    <div className={style.desc}>{state.description}</div>
                </div>
            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss 
                draggable
                pauseOnHover
                theme="dark"
        />
        </>
    )
}