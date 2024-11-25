import { useContext, useEffect, useState } from "react"
import { MyContent } from "../App"
import style from "./cart.module.css"
import Menu from "./menu/menu"
import { toast } from "react-toastify"

export default function CartPage()
{
    var {cart,setCart}=useContext(MyContent)
    var [totalprice,setTotalprice]=useState(0)
    var [total,setTotal]=useState(0)
    var [delCost,setDelCost]=useState(0)
    var [index,setIndex]=useState(-1)

    function calTotal()
    {
        
        var t=0
        var t2=0
        cart.forEach((item)=>
        {
            t2=t2+35;
            t=t+item.price*item.qty
        }) 
        setDelCost(t2)
        setTotalprice(t)
        setTotal(delCost+totalprice)
    }


    useEffect(()=>{
        calTotal()
    },[cart])
    function increament(items,index)
    {
        
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
    }
    function descrement(items,index)
    {
        
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
        temp[search.index]['qty']-=1  
       
        setCart(temp)
        toast("Quantity updated...")
       }
    }
    
    var remove=(index)=>
    {
        var temp=[...cart]
        temp.splice(index,1)
        setCart(temp)
        toast("Product Removed...")
    }
    return (
        <>
            <h1>Cart Page</h1>
            <Menu/>
            {cart.map((item,index)=>
                <div className={style.box}>
                    <div className={style.imgBox}><img src={item.image} height="100" width="100"/>
                        <div className={style.qty}><button onClick={()=>(item.qty>1)?descrement(item,index):remove(index)}>-</button> 
                         { item.qty}  
                        <button disabled={(item.qty>9)?"disabled":null}  onClick={()=>increament(item,index)}>+</button></div>
                    </div>
                    <div className={style.detailBox}>
                        <div className={style.title}>{item.title}</div>
                        <div className={style.price}>${item.price} </div>
                        <p>${item.price*item.qty} / Quantity</p>
                    <div onClick={()=>remove(index)} className="btn btn-outline-danger">Remove</div>
                    </div>
                    <div className={style.dlry}>Delivery by Mon Apr 1 | ₹80Free</div>
                </div>
            )}
                        <div className={style.priceBox}>
                            <p className={style.txt}>Price Details</p>
                            <p className={style.price1}>Price {totalprice}</p>
                            <p className={style.price1}>Delivery Charge {delCost}</p>
                            <p className={style.pay}>Amount Payable  {total}</p>
                            <p className={style.total}>Your total Price on this order  10%</p>
                        </div>
        </>
    )
}