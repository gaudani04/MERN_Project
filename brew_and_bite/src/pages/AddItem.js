
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Add_Item.css';
function AddItem(){
    const [data, setData] = useState({});
    const navigate = useNavigate();
    return(
        <>
            
            <div className="text-light fs-5 mt-5">
            <div className="form-group row">
                <label className="col-4 col-form-label">Name</label> 
                <div className="col-8">
                <input onChange={(e)=>{
                    setData({...data,name:e.target.value})
                }} type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-4 col-form-label">Price</label> 
                <div className="col-8">
                <input onChange={(e)=>{
                    setData({...data,price:Number(e.target.value)})
                }}  type="number" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-4 col-form-label">Image_Path</label> 
                <div className="col-8">
                <input onChange={(e)=>{
                    setData({...data,image:e.target.value})
                }}  type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-4 col-form-label">Quantity</label> 
                <div className="col-8">
                <input onChange={(e)=>{
                    setData({...data,quantity:e.target.value})
                }}  type="text" className="form-control" />
                </div>
            </div> 
            <div className="form-group row">
                <label className="col-4 col-form-label">Item no</label> 
                <div className="col-8">
                <input onChange={(e)=>{
                    setData({...data,itemNo:Number(e.target.value)})
                }}  type="number" className="form-control" />
                </div>
            </div> 
            <div className="form-group row">
                <label className="col-4 col-form-label">More Details</label> 
                <div className="col-8">
                <input onChange={(e)=>{
                    setData({...data,moreDetails:e.target.value})
                }}  type="text" className="form-control" />
                </div>
            </div> 
            <div className="form-group row">
                <div className="offset-4 col-8">
                <button onClick={()=>{
                    // Ensure itemNo is defined and is a valid number
            if (!data.itemNo || isNaN(data.itemNo)) {
                console.error("Item No is not valid.");
                alert("Please enter a valid Item No.");
                return;
            }
                    const apiUrl = "http://localhost:3005/food";
                    console.log("submitting..."+data);
                    fetch(apiUrl,{
                        method:"POST",
                        body:JSON.stringify(data),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        navigate('/menu');
                    });
                }} name="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
            </div>
            
        </>
    );
}

export default AddItem;

