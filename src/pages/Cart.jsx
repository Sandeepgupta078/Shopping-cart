import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log(cart);
  const [totalamount,setTotalAmount] = useState(0);

  useEffect( () =>{
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price , 0) );
  },[cart])
  
  return (
  <div className="w-full h-full">
    {
      cart.length > 0 ?
      (<div className="w-2/5 relative top-4 sm:left-10 md:left-20 lg:left-52">
 
        <div className="border-b-10 border-black xs:relative">
          {
            cart.map( (item,index) =>{
              return <CartItem key={item.id} item={item} itemIndex = {index}/>
            })
          }
        </div>

       <div className=" top-32 sm:right-10 md:right-20 lg:right-52 sm:space-y-80 sm:fixed">
       <div >
          <div className="text-green-700 text-xl uppercase">Your Cart</div>
          <div className="text-green-800 text-3xl uppercase">Summary</div>
          <p>
            <span className="text-bold">Total Items : {cart.length}</span>
          </p> 
        </div>

        <div>
          <p>Total Amount:$<span className="text-semibold">{totalamount}</span></p>
          <button className="text-white bg-green-700 rounded-md">CheckOut</button>
        </div>
       </div>

      </div>) :
      (
        <div className="flex flex-col items-center justify-center">
          <h1>Cart Empty</h1>

          <Link to = {"/"}>
            <button className="text-bold font-extralight">
              Shop Now
            </button>
          </Link>
        </div>
      )
    }
  </div>
  );
};

export default Cart;
