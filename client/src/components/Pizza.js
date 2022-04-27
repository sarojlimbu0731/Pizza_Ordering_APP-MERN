import React, {useState} from "react";
import {Modal} from "react-bootstrap";

export default function Pizza({pizza}){
    const [varient, setvarient]=useState("small");
    const [quantity, setquantity]= useState(1);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
    return (
        <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{margin: "70px"}}>
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} alt={pizza.name}></img>
            </div>
            <div className="flex-container">
                <div className="w-100">
                    <p>Varients</p>
                    <select className="form-control" value={varient} onChange={(e) => setvarient(e.target.value)}>
                        {pizza.varients.map( varient => {
                            return (
                                <option value={varient} >{varient}</option>
                            )
                        }
                          
                        )}
                    </select>
                </div>

                <div className="w-100">
                    <p>Quantity</p>
                       <select className="form-control m-2" value={quantity} onChange={(e) => setquantity(e.target.value)}>
                             {[...Array(10).keys()].map((o,i) => {
                                return (
                                    <option value={i+1}>{i+1}</option>
                                )

                            })}
                       </select>
                </div>
            </div>
            <div className="flex-container">

                    <div className="w-100 m-2">
                        <h1 className="mt-4">Price : Rs.{pizza.prices[0][varient] * quantity}</h1>

                    </div>
 
                    <div className="w-100 m-2">
                        <button className="btn">ADD TO CART</button>

                    </div>
                
            </div>


        
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{pizza.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <img src={pizza.image} style={{height:"300px",width:"300px"}}/>
                <p>{pizza.description}</p>
            </Modal.Body>

            <Modal.Footer>
                <button className="btn" onClick={handleClose}>CLOSE</button>
            </Modal.Footer>
            </Modal>



        </div>
    )
}