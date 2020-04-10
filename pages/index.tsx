import Head from 'next/head'

const Home = () => (
  <>
    <Head>
      <title>next-boilerplate</title>
    </Head>
    <div className="block">
      <h1 className="block-title">next-boilerplate</h1>
      <p className="lead">Personal Next.js boilerplate</p>
      <a
        href="https://github.com/niceb5y/next-boilerplate"
        className="btn btn-outline-primary"
      >
        <span className="icon icon-github" /> Repo
      </a>
    </div>
  </>
)

export default Home
