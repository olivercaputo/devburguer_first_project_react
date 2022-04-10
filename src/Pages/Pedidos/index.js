import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from 'axios';

import Pacote from "../../assets/pacote.svg";
import Trash from "../../assets/trash.svg";

import H1 from "../../components/Title";
import Button from "../../components/Button";

import {
  Container,
  Image, //pacote//
  ContainerItens,
  Order,
  Paragrafos
    
} from './styles';

function Pedidos() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();
  
  useEffect(()=>{
    async function fetchOrders(){
      const {data: newOrders} = await axios.get("http://localhost:3001/orders/");

  setOrders(newOrders);
  }

  fetchOrders()
}, [])

async function deleteOrder (orderId) {
  await axios.delete(`http://localhost:3001/orders/${orderId}`)
  const newOrders = orders.filter (order => order.id !== orderId)
  setOrders (newOrders);
}

  function goBackPage(){
    history.push("/")
  }
    
  return (
    <Container>
      <Image alt="pacote" src={Pacote} />
      <ContainerItens>
        <H1>Pedidos</H1>

          <ul>
            {orders.map ((order) => (
            <Order key={order.id}>
              <Paragrafos>
                <p>{order.order}</p>
                <p><strong>{order.clientName}</strong></p>
              </Paragrafos>
                <button onClick={() => deleteOrder(order.id)}>  
                    <img src={Trash} alt="lata-de-lixo"/>
                </button>  
            </Order>
            ))}
          </ul>

      </ContainerItens>

        <Button isBack={true} onClick={goBackPage}>
          Voltar
        </Button>

    </Container>
  );
}

export default Pedidos




    