import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state)=>state);
  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to='/'>
          <div className="ml-5">
            <img src="https://th.bing.com/th?id=OIP.OpyhuB6O3pd9WCP756ZT8AHaH_&w=240&h=259&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=""  className="h-14"/>
          </div>
        </NavLink>

        <div className="text-white text-3xl">MYCART</div>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart  className="text-2xl"/>
              {
                cart.length > 0 && 
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center
                items-center animate-bounce rounded-full text-white">{cart.length}</span>
              }
          
            </div>
          </NavLink>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
