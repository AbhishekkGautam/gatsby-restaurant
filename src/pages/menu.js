import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import menuImg from "../images/bcg/menuBcg.jpeg"
import { PageHeader } from "../utils"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={menuImg}>Menu page</PageHeader>
  </Layout>
)

export default MenuPage
