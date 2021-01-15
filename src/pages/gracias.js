import React from 'react'
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import {Link} from "gatsby";

export default function gracias() {
    return (
        <div>
            <SEO title="Compra Exitosa "/>
            <Purchase>
                <h2>Compra Exitosa</h2>
                <p>Espero que disfrutes tu swag, lúcelo con orgullo</p>
                <p>No pares de aprender</p>
                <span role="img" aria-label="emoji"> :) </span>
                <Link to="/">
                    <button>Volver al catálogo</button>
                    </Link>
            </Purchase>
        </div>
    )
}
