import React from 'react'
import Img from 'gatsby-image'
import BlockContent from './block-content'
import Container from './container'

import styles from './project.module.css'

function Project (props) {
  const { _rawBody, title, mainImage } = props
  return (
    <article className={styles.root}>
      {props.mainImage &&
        mainImage.asset &&
        mainImage.asset.fluid &&
        mainImage.asset.metadata &&
        mainImage.asset.metadata.dimensions && <Img className={styles.mainImage} fluid={mainImage.asset.fluid} />}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          {/*
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {members && <RoleList items={members} title='Authors' />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      <Link to={`/projects/${project.slug.current}`}>{project.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
           */}
        </div>
      </Container>
    </article>
  )
}

export default Project
