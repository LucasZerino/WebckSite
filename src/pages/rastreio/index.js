import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import ContactCreative2 from '../../sections/contact/ContactCreative2'


class Index extends React.Component {

  render() {
    
    const { site } = this.props.data

    return (
      <div id='Cliente'>
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <Layout
          isHome={false}
          sections={['']}
        >
          <ContactCreative2 />
        </Layout>
      </div>
    )
  }
}

export default Index

export const personalQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`