import React from "react"

import Layout from "../components/layout"
import About from "../components/about"
import Timeline from "../components/timeline"
import Portfolio from "../components/portfolio"
import Footer from "../components/footer"

import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" /> 
        <About></About>
        <Timeline></Timeline>
        <div className="mb-24"></div>
        <Portfolio></Portfolio>
        <Footer></Footer>
    </Layout>
)
    
export default IndexPage
    