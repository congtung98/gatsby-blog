import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Article from '../components/article'
import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <div className="page">
//       <SEO title="Home - blog" keywords={[`blog`, `gatsby`]} />
//       <Article />
//     </div>
//   </Layout>
// )

const IndexPage = props => (
  <Layout>
    <div className="page">
      {console.log(props)}
      <SEO title="My blog" keywords={[`blog`, `gatsby`, `prismic`]} />
      {props.data.article.edges.map(article => (
        <Article data={article.node.data} id={article.node.id} />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const IndexQuery = graphql`
query article {
  article: allPrismicArticle {
    edges {
      node {
        id
        data {
          title {
            text
          }
          image {
            alt
            url
          }
          content {
            text
          }
        }
      }
    }
  }
}
`