import { useContext } from "react"
import { MyContent } from "../App"
import Menu from "./menu/menu"
import style from "./fav.module.css"
import { useLocation } from "react-router-dom"
import { toast } from "react-toastify"

export default function CartPage()
{
    var {fav,setFav}=useContext(MyContent)
    var {state}=useLocation()
    console.log(state)
    

    var remove=(index)=>
        {
            var temp=[...fav]
            temp.splice(index,1)
            setFav(temp)
            toast("Product Removed...")
        }

    return (
        <>
            <h1>Favorite</h1>
            <Menu/> 
            {fav.map((item,index)=>
                <div className={style.box}>
                    <div className={style.imgBox}><img src={item.image} height="100" width="100"/>
                        <div className={style.qty}>{item.qty}</div>
                    </div>
                    <div className={style.detailBox}>
                        <div className={style.title}>{item.title}</div>
                        <div className={style.price}>${item.price}</div>
                    </div>
                    <div><div className="btn btn-outline-danger"><ion-icon name="trash-outline" onClick={()=>remove(index)} ></ion-icon></div>
                </div></div>
            )}
        </>
    )
}