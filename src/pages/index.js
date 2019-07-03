import React from 'react'
import Layout from '../components/layout'
import LastPosts from '../components/last-posts'
import PopularPosts from '../components/popular-posts'
import Newsletter from '../components/newsletter-card'

export default () => (
  <Layout>
    <h1>Manoj Gautam Blog</h1>
    <p>
      Hey! I'm Manoj Gautam from Gulmi Nepal currently living in
      {' '}
      <a
        href="https://www.google.com/maps/place/Kathmandu/"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Kathmandu
      </a>
      ,
      {' '}
      <a
        href="https://www.google.com/maps/place/Nepal/"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Nepal
      </a>
      . Graduated as an Electronic and Communication enginneer, working in a financial sector(Insurance Domain) I am writing blog posts about
      technologies, concepts and tools I learn.
    </p>
    <LastPosts />
    <PopularPosts />
    <Newsletter />
  </Layout>
)
