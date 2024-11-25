import { Link } from "react-router-dom";
import style from "./menu.module.css"
import { useContext, useState } from "react";
import { MyContent } from "../../App";
export default function Menu()
{
    var [search,setSearch]=useState("")
    var {cart}=useContext(MyContent)
    return(
        <>
             <div className={style.menu}>
                <p className={style.row}>
                    <span><h1>Company</h1></span>
                    <span><Link to="/" className={style.link}>Shop</Link></span>
                    <div><input type="search" placeholder="Search" className={style.search} value={search} onChange={(e)=>setSearch(e.target.value)} />
                    {
                        (search.length>0)?<div>
                            {
                                cart.filter((x,index)=>x.toLowerCase().includes(search.toLowerCase())).map((item,index)=><>{item}</>)
                            }
                        </div>:null
                        }
                    </div>
                    <span><Link to="/cart" className={style.link}>Cart</Link></span>
                    <span><Link to="/fav" className={style.link}>Favorite</Link></span>
                </p>
            </div>
        </>
    )
}