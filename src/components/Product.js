import React from 'react'
import {Link} from "gatsby"

import priceFormat from "../utils/priceFormat"
import { StyledProducts } from "../styles/components"
import styled from "styled-components"

export default function Products(props) {

    return (
        <>
            <StyledProducts>
                <h2>Productos</h2>
                <section>
                    {props.products.map((node) => {

                                const price = priceFormat(node.node.unit_amount_decimal)
                                return (
                                        <>
                                            <article key={node.node.product.id}>
                                                    <img src={node.node.product.metadata.img}
                                                        alt={node.node.product.metadata.descripcion}/>
                                                    <p>{node.node.product.metadata.name}</p>     
                                            </article>
                                            <small> USD {price}</small>
                                            <Link to={`/${node.node.product.id}`}>
                                                Comprar ahora
                                            </Link>
                                        </>
                                )
                        }
                    )}
                </section>
            </StyledProducts>
        </>
    )
}
