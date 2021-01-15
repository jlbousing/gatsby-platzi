import React from 'react'
import {StyledJumbo} from "../styles/components"
import Image from "./image"

export default function Jumbo(props) {
    console.log(props);
    return (
        <StyledJumbo>
            <div>
                <h2>¡ Consigue el mejor swag exclusivo y especial de Platzi</h2>
                <small> {props.description.description} </small>
            </div>
            <Image name={"icon"}></Image>
        </StyledJumbo>
    )
}
