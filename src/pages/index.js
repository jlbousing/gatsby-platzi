import React from "react"
import { Link, graphql } from "gatsby"
import { Jumbo, Products} from "../components"

import { SEO } from "../components"
import styled from "styled-components"


export const query = graphql`
  query GET_DATA{
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice {
      edges {
        node {
          product {
            metadata {
              descripcion
              img
              wear
            }
            id
            description
          }
          unit_amount_decimal
        }
      }
    }
  }
`

const IndexPage = ({data}) => {
  console.log(data)
  return (
    <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata}></Jumbo>
    <Products products={data.allStripePrice.edges}></Products>
  </>
  )
}

export default IndexPage
