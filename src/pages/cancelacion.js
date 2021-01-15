import React from 'react'
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import {Link} from "gatsby";

export default function cancelacion() {
    return (
        <div>
            <SEO title="Compra Cancelada"/>
            <Purchase>
                <h2>Compra Cancelada</h2>
                <p>No se ha podido concretar la compra</p>
                <span rol="img" aria-label="emoji"> :( </span>
                <Link to="/">
                    <button>Volver al catálogo</button>
                    </Link>
            </Purchase>
        </div>
    )
}
