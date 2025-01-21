import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





function Dashboard() {
  let [record,setrecord]=useState([])
  useEffect(() => {
  fetchdata()
  }, [])
  let fetchdata=async () => {
      let res=await axios.get("https://fakestoreapi.com/products")
      console.log(res);
      setrecord(res.data)
      
  }
    
  return (
    <Container className='home1'>
      <h1 className='we'>WELCOME.... TO MY WEBSITE</h1>
      <Row>
      
        {record.map(item=>(
          <Col Key={item.id} xs={12} md={4} lg={3} className="mb-4">
            <div className="product-card">
            <img src={item.image} alt={item.title} className="product-image" />
            <h5>{item.category}</h5>
            <p>{item.title}</p>

            </div>

             </Col>

              ))}

               </Row>
               
                </Container>
      
      
    
  )
}

export default Dashboard
