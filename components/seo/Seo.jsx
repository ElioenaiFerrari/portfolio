import Head from 'next/head';

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} | Elioenai Ferrari`}</title>
    </Head>
  </>
);

export default Seo;
