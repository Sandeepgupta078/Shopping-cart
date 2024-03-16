import {toast} from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";

const CartItem = ({item}) => {

  const dispatch = useDispatch();
  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.success("Item removed");
  }

  return (
  <div>
    <div className="flex p-4 mt-10 gap-10">

      <div className="h-[180px]">
        <img src={item.image} alt="" className="w-full h-full" />
      </div>
      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
        <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left" >{item.description}</h1>
        <div className="flex flex-row justify-between">
          <p className="text-green-600 font-semibold ">{item.price}</p> 
          <div 
          onClick={removeFromCart}>
          <MdDeleteForever 
          className="rounded-full bg-red-400  cursor-pointer "/>
          </div>
        </div>
      </div>

    </div>
  </div>
  );
};

export default CartItem;
