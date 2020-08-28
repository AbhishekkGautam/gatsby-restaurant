import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils"
import contactImg from "../images/bcg/contactBcg.jpeg"
const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={contactImg}>Contact page</PageHeader>
  </Layout>
)

export default ContactPage
