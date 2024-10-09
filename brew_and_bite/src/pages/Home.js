
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel1 from './Carousel1.webp';
import Carousel2 from './Carousel2.webp';
import Carousel3 from './Carousel3.webp';
import Cookies from './Cookies.jpg';
import '../Layout.css';
import Logo from './Logo.png';

function Home() {
  const [data, setData] = useState([]);

  const apiUrl = "http://localhost:3005/food";

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then(res => res.json())
      .then(res => setData(res));
  }, []);
  


  return (
    <>
    
    <img class="mx-auto d-block" src={Logo}></img>
    <div class="m-5">
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active position-relative">
      <img src={Carousel1} className="d-block w-100 carousel-width-height" alt="..." />
      <div className="overlay">
        <h1>WELCOME TO BREW & BITE</h1>
      </div>
    </div>
    <div className="carousel-item position-relative">
      <img src={Carousel2} className="d-block w-100 carousel-width-height" alt="..." />
      <div className="overlay">
        <h1>WELCOME TO BREW & BITE</h1>
      </div>
    </div>
    <div className="carousel-item position-relative">
      <img src={Carousel3} className="d-block w-100 carousel-width-height" alt="..." />
      <div className="overlay">
        <h1>WELCOME TO BREW & BITE</h1>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
    <div class="row">
        <div class="col">
              <div class="card bg-black text-light card-home text-center">
                <div class="card-title fs-3">Welcome to Brew and Bite - Your Home Away from Home!</div>
                <div class="card-text">
                At Brew and Bite, we believe that every cup of coffee <i class="fa-solid fa-mug-hot"></i> and every bite <i class="fa-solid fa-pizza-slice"></i> of our treats brings people together. 
                Our cozy atmosphere invites you to unwind, whether you're catching up with friends or simply enjoying some quiet time.
                 We pride ourselves on not just serving delicious beverages and snacks, but also creating a welcoming space where everyone feels valued.
                  Our friendly team is dedicated to making your visit special, ensuring you leave with not just great flavors, but also a sense of belonging.
                 Join us today and become part of the Brew and Bite family!
                 <div style={{paddingTop:'40px'}}>SIDDHI GAUDANI & MANALI AKABARI</div>
                 <i>owners</i>


                </div>
              </div>
        </div>
        <div class="col">
        <img src={Cookies} style={{height:'400px',width:'700px'}}></img>
        </div>
    </div>
    {/* footer */}
    <div style={{height:'7px',backgroundColor:'white',marginTop:'25px'}}></div>
    <div class="row text-center m-0 p-0" style={{backgroundColor:'#bd8113'}}>
      <div class="col" >
        <div class="display-4" style={{color:'white'}}>LOCATION</div>
        <div class="address p-3">
            301 Basin Street, Suite 1
            New Orleans, LA
            70112</div>
      </div>
      <div class="col">
      <div class="display-4" style={{color:'white'}}>HOURS</div>
      <div class="p-3">Closing at 1PM for Christmas Eve.</div> 
      <div class="p-3">Closed for Christmas.</div>
      </div>
      <div class="col">
      <div class="display-4" style={{color:'white'}}>FIND US ON...</div>

      <i class="fa-brands fa-twitter p-3"></i>
      <i class="fa-brands fa-instagram p-3"></i>
      <i class="fa-brands fa-facebook p-3"></i>
      <i class="fa-brands fa-whatsapp p-3"></i>

(504)-372-4442

<div>info@brewandbite.com</div>


      </div>
      
      <div style={{height:'7px',backgroundColor:'white',marginTop:'25px'}}></div>
      <div class="text-center">
     <div> <b>Powered by :</b> Brew and Bite<i class="fa-solid fa-cookie"></i></div>
     <div> Crafting flavors that fuel your day!</div>
      </div>

    </div>
    <div class="text-center text-light">We strive to make our website accessible to everybody.</div>
    
    </>
  )
}
export default Home;