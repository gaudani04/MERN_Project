// import { useEffect, useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import './Menu.css';

// function Menu(){
//     const[food,setfood] = useState([]);  
//     const apiUrl = "http://localhost:3005/food";
//     const navigate = useNavigate();


//     useEffect(()=>{
//         fetch(apiUrl).then(res=>res.json()).then(res=>setfood(res));
//     },[])
    

//     const formattedfood = food.map((res)=>{
        
//         return(
//                 <>
//            <div className="col-4">
//             <div class="card mb-3 me-4" style={{maxWidth: '540px'}}>
//                 <div class="row g-0">
//                     <div class="col-md-4">
//                     <img src={res.image} class="img-fluid rounded-circle " alt="..."/>
//                     </div>
//                     <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title">{res.name}</h5>
//                         <p class="card-text"><small class="text-body-secondary">{res.quantity}</small></p>
//                         <p class="card-text">&#8377;{res.price}</p>
//                         <Link className="btn btn-outline-success" to={"/cart/"+res.itemNo}>Add item</Link>
//                         <Link className="btn bg-success-subtle ms-4" to={"/food/"+res.itemNo}  >view more</Link>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
            
            
//                 </>
//         )
//     })
//     return(
//             <>
//                 <div class="container  " >
//                 <div class=" row ">
//                 {formattedfood}
//                 </div>
                
//                 </div>
                
               
            
//             </>

//     );
// }
// export default Menu;
// src/pages/Menu.js
import { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import './Menu.css';

function Menu() {
  const [food, setFood] = useState([]);
  const apiUrl = "http://localhost:3005/food";
  const navigate = useNavigate();

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(res => setFood(res));
  }, []);

  const addToCart = (item) => {
    // Get the existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cart.push(item);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // alert(`${item.name} added to cart!`);
    navigate('/cart');
    
  };

  const formattedFood = food.map(res => {
    return (
      <div className="col-4" key={res.itemNo}>
        <div className="card mb-3 me-4" style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={res.image} className="img-fluid rounded-circle" alt={res.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{res.name}</h5>
                <p className="card-text"><small className="text-body-secondary">{res.quantity}</small></p>
                <p className="card-text">&#8377;{res.price}</p>
                <button 
                  className="btn btn-outline-success" 
                  onClick={() => addToCart(res)} // Call addToCart when "Add item" is clicked
                >
                  Add item
                </button>
                <Link className="btn bg-success-subtle ms-4" to={`/food/${res.itemNo}`}>
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {formattedFood}
      </div>
    </div>
  );
}

export default Menu;

