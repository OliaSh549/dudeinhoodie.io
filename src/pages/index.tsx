import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
  </Layout>
);

export default IndexPage;
