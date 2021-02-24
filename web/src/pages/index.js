import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import BlockContent from '../components/block-content'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import { introductionSection } from '../components/layout.module.css'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    page: sanityPage(_id: { regex: "/(drafts.|)index/" }) {
      id
      _id
      title
      _rawBody
    }
    projects: allSanityProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { hideFromStart: { ne: true } }
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              fluid(maxWidth: 300, maxHeight: 200) {
                ...GatsbySanityImageFluid
              }
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
          categories {
            _id
            title
          }
        }
      }
    }

    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              fluid(maxWidth: 300, maxHeight: 200) {
                ...GatsbySanityImageFluid
              }
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs) : []
  const projectNodes = (data || {}).projects ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs) : []
  const page = data && data.page

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1 hidden>Patrik Arvidsson</h1>

        <section className={introductionSection}>
          <h2>{page.title}</h2>
          <BlockContent blocks={page._rawBody || []} />
        </section>

        {projectNodes && (
          <ProjectPreviewGrid title='Latest projects' nodes={projectNodes} browseMoreHref='/projects/' />
        )}
        {postNodes && <BlogPostPreviewGrid title='Latest blog posts' nodes={postNodes} browseMoreHref='/blog/' />}
      </Container>
    </Layout>
  )
}

export default IndexPage
