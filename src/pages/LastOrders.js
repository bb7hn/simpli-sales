import React, {useState,useEffect} from 'react'
import { getToken } from '../context/AuthContext';
import LoadingLight from '../img/LoadingLight.svg'


export default function LastOrders(){
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
    const TOKEN = getToken();
    let bearer = 'Bearer ' + TOKEN;
    const query = ` 
    {
      orders(startDate: "string", endDate: "string") {
        id
        orderName
        orderDate
        currency
        total
        details {
          id
          product {
            id
            description3
            isFavorites
          }          
          quantity
          price
          total
        }
      }
    }
  `;
  fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      body:JSON.stringify({query:query}),
      withCredentials: true,
      headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json'
      }
  }).then(r=>r.json()).then(response=>{
    console.log(response);
    let orders = response.data.orders;
    setOrders(orders);
    setTimeout(() => {
      setLoaded(true);
    }, 50);
  });
    
  },[]);

  if(!loaded){
    return(
            <div 
                className='position-fixed top-0 start-0 container-fluid d-flex '
                style={{width:'100vw',height:'100vh', backgroundColor:'#00000090',zIndex:3}}
            >
                <img className="m-auto" alt="loader icon" src={LoadingLight }/>
            </div>
    );
  }

  return (
    <>
      <h1>Last Orders</h1>
      {orders.map((order,key)=>{
        let date = new Date(order.orderDate).toLocaleString('en-GB');
        date = date.slice(0,date.length - 3);
      return<div key={order.id} className="accordion" id={'order__'+order.id}>
        <div className="accordion-item mt-3 shadow">
          <h2 className="accordion-header d-flex flex-column" id={'heading__'+order.id}>
            <button className={"accordion-button "+(key!==0?'collapsed':'')} type="button" data-bs-toggle="collapse" data-bs-target={'#collapse__'+order.id} aria-expanded="false" aria-controls="collapseTwo">
              <span className='fw-bold'>{order.orderName}</span> 
            </button>
          </h2>
          <div 
            id={'collapse__'+order.id} 
            className={"accordion-collapse collapse"+(key===0?' show':'')} 
            aria-labelledby={'heading__'+order.id} 
            data-bs-parent={'#order__'+order.id}
          >
            <div className="accordion-body d-flex flex-column">
            <div className="d-flex">
              <code className='ms-auto fw-bold'>{date}</code>
            </div>
            <hr/>
            <h6>Products</h6>
            <table className='table border table-hover  p-1' style={{borderRadius:'12px!important'}}>
              <thead>
                <tr>
                  <th scope="col">Quantity</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>                              
                </tr>
              </thead>
              <tbody>
              {
                order.details.map((detail,key)=>{
                  const product = detail.product
                  return  <tr key={detail.id} className={product.isFavorites?'table-success':key%2?'table-secondary':''}>
                              <td className='text-center align-middle'>{detail.quantity}</td>
                              <td>{product.description3}</td>
                              <td className='text-end align-middle'>{detail.currency?order.currency:'£'}{detail.total}</td>
                            </tr>
                })
              }
              </tbody>
              <tfoot>
                <tr>
                  <th>Total:</th>
                  <th className='text-end' colSpan="2" scope="col">{order.currency?order.currency:'£'}{order.total}</th>                              
                </tr>
              </tfoot>
            </table>
            </div>
          </div>
        </div>
      </div>;
    })}
    </>
  )
}