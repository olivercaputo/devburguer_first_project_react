import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from 'axios';

import Logo from "../../assets/logo.png";

import H1 from '../../components/Title';
import Button from '../../components/Button';

import {
  Container,
  Image, //logo-dev club//
  ContainerItens,
  InputLabel,
  Input
      
} from './styles';

function App () {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  const inputOrder = useRef();
  const inputClientName = useRef();
  
  async function addNewOrder() {
    const {data:newOrder} = await axios.post("http://localhost:3001/orders", {
    order:inputOrder.current.value,
    clientName:inputClientName.current.value,
  });
    
  setOrders([...orders, newOrder]);

  history.push("/pedidos");
}

  return (
    <Container> {/* Background */}
      <Image alt="logo-devburguer" src={Logo} />
      <ContainerItens>
     
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder = "Itens"/>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClientName} placeholder = "Cliente"/>
      
        <Button onClick={addNewOrder}>
          Novo Pedido
        </Button>
      </ContainerItens>  
    </Container>
  );
}

export default App

        //<ul>
        //  {orders.map ((order) => (
        //  <Order key={order.id}>
        //    <Ppedido>{order.order}</Ppedido>

        //      <ButtonTrash>
        //        <img src={Trash} alt="lata-de-lixo"/>
        //      </ButtonTrash>

        //    <Pcliente>{order.clientName}</Pcliente>
              
        //  </Order>
        //  ))}
        //</ul>



    /*{id: Math.random(), order: "1 Batata Grande, 1 X-Salada", clientName: "Oliver", price: 44.50, status: "EM PREPARAÇÃO"},
    {id: Math.random(), order: "1 X-Bacon, 1 Refrigerante", clientName: "Mariana", price: 50.00, status: "EM PREPARAÇÃO"},*/