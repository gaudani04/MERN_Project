import {Link,Outlet} from 'react-router-dom';
import Logo from './Logo.png';
import './Layout.css'

function Layout() {
    return (
    <>
         <div className="container-fluid ">
            <div className="row">
                <div className="col">
                <nav className="navbar navbar-expand-lg fixed-top " >
                    <div className="container-fluid">
                   
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse paddingLeft " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
                       
                            <li className="nav-item ">
                            <Link to="/" className="nav-link active fs-5 fw-bold" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/menu" className="nav-link active fs-5 fw-bold ps-5" aria-current="page" >Menu</Link>
                            </li>
                        
                            <li className="nav-item">
                            <Link to="/cart" className="nav-link active fs-5 fw-bold ps-5" aria-current="page" >Cart</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/checkout" className="nav-link active fs-5 fw-bold ps-5" aria-current="page" >Checkout</Link>
                            </li>
                           
                            
                            </ul>                           
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
   
    <Outlet/>
        </>
    )
}
export default Layout;
