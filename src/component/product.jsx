import { useContext, useState } from "react"
import style from "./product.module.css"
import { MyContent } from "../App"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Menu from "../pages/menu";
export default function Product(props)
{
    var {fav,setFav,cart,setCart}=useContext(MyContent)
    var [icon,setIcon]=useState(true)

    function cartProduct(items)
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
        temp[search.index]['qty']+=1        // temp ke search object se index ko call
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
    var favProduct=(item)=>
    {
        
       
        // fav.style.backgroundColor="red"

        var result=null
        var temp=[...fav]
        var result= temp.find((element)=>element.title==item.title
    )
    if(result==undefined)
    {
        temp.push(item)
        setFav(temp)
    }
    else
    {
        var temp=[...fav]
        var index =temp.indexOf(result)
        temp.splice(index,1)
    }
    toast("Favorite")
    }
    
   return(
        <>
        {/* <Menu/> */}
        <div className={style.box}>
            <Link to="/detail" state={props} className={style.imgBox} style={{backgroundImage:"url('"+props.image+"')"}}>
        </Link>
            <div className={style.detailBox}>
                <p className={style.title}>
                    <span>{props.title}</span>
                    <span>{props.price}</span>
                </p>
                <div className={style.row}>
                    <span>{props.rating}</span>
                    
                    {/* {(checkFav(props.title))?<ion-icon name="heart-outline" onClick={()=>favProduct(props)} className={style.fav}></ion-icon>:
                    <ion-icon name="home-outline" onClick={()=>favProduct(props)} className={style.fav}></ion-icon>} */}
                    {/* {(props.icon)?<ion-icon name="home-outline" onClick={()=>favProduct(props)} className={style.fav}></ion-icon>:
                    <ion-icon name="heart-outline" onClick={()=>favProduct(props)} className={style.fav}></ion-icon>} */}

                    <div>
                        {
                            
                            (icon==false)?<ion-icon name="home-outline" onClick={()=>favProduct(props)} className={style.fav}></ion-icon>:
                            <ion-icon name="heart-outline" onClick={()=>favProduct(props)} className={style.fav}></ion-icon>
                        }
                    </div>

                    <span>
                        <button className={style.btn} onClick={()=>cartProduct(props)}>Buy Now</button>
                    </span>
                </div>
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