
import React, { useState, useContext } from "react"
import priceFormat from "../utils/priceFormat"
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/components"
import { SEO, Stars } from "./"

import { CartContext } from "../context";
export default function producDetail({data}) {

  const formatePrice = priceFormat(data.unit_amount_decimal)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const [] = useContext(CartContext); 

 
 return (
    <StyledProductDetail>
      <SEO title={data.product.metadata.name} />
      <img src={data.product.metadata.img} alt={data.product.metadata.name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{data.product.metadata.name}</h2>
        <b>USD {formatePrice}</b>
        <Stars/>
        <small>{data.product.metadata.descripcion}</small>
        {data.product.metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type="text" disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        <Button>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}