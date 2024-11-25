import {useContext, useEffect, useState} from "react"
import Product from "../component/product"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyContent } from "../App";
import { Link } from "react-router-dom";
import Menu from "./menu/menu";
export default function Shop()
{
    var {fav,setFav,cart,setCart}=useContext(MyContent)
    var [icon,setIcon]=useState(false)
  
    var myStyle={
        display:"flex",
        flexWrap:"wrap",
        rowGap:"10px",
        columnGap:"10px",
        marginLeft:"100px"
    }
    var [data,setData]=useState([])
    var getData=async()=>{
        var raw=await fetch("https://fakestoreapi.com/products")
        var info=await raw.json()
        setData(info)
    }
    useEffect(()=>{
        toast("product added");
        getData()
    },[])
    
    
    function checkFav(title)
    {
        fav.forEach((item)=>{
            if(item.title==title)
            {
                return setIcon(true);
            }
        })
        return setIcon(false);
    }
   
    return(
        <>
        <Menu/>
        <div style={myStyle}>
            {
                data.map((item,index)=>
                <Product icon={icon} key={index} title={item.title} rating={item.rating.rate} price={item.price} image={item.image} description={item.description}/>
                )
            }
        </div>
        </>
    )
}