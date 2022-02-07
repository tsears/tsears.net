import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tom Sears</title>
        <meta name="description" content="Tom Sears' Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <header className={styles.heading}>
        <img className={styles.headingImage} src="tsrs.png" />
      </header>

      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Tom Sears</h1>
          <div>
            Software Engineer
          </div>
        </div>

        <div className={styles.content}>
          <p>
          Hi! my name is Tom Sears and I'm a Software/DevOps Engineer in Portland, OR. I was introduced to Q-Basic at
          at a young age and have been banging out code in one form or another ever since. These days I do most of my
          work with web technologies, but still venture over to the desktop or console when I need to.
          </p>

          <p>
          I spent the early part of my career working with Microsoft SharePoint as a consultant - and not strictly in
          development activities. Estimating, infrastructure setup, user documentation, project management and business
          analysis are all hats I wore at one point or another. On the tech side, my professional experience
          centered around parts of the Microsoft stack. SharePoint uses ASP.NET (not MVC), html, css, and javascript,
          but largely takes the place of the middle and back-end of the web development stack in favor of its own rich
          object model and APIs.
          </p>

          <p>
          Following that portion of my career, I transitioned to a more traditional full-stack web developer role,
          working with javascript on both the back and front end of applications. Software I contributed to is used by
          an audience in the millions.  During this time, I also took a keen interest in how software is developed and
          deployed, spending a lot of time streamlining pipelines and nudging projects in the direction of CI/CD.
          </p>

          <p>
          My efforts to enhance my team's development processes were noticed around the organization, and I was
          afforded the opportunity to rotate to the DevOps team for a temporary loan. When the time came to return
          to the development side of the house, I requested to stay with the DevOps team and was accepted, and have
          been working in that role ever since. While I still focus much of my attention on build and deployment
          engineering, I've also been working on more purely system administration work, particularly in support of our
          colo infrastructure.
          </p>

          <p>I have or have had production applications running on top of the following technologies:</p>
          <ul>
            <li>Microsoft Sharepoint</li>
            <li>ASP.NET (not MVC)</li>
            <li>XSLT</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>HTML/CSS</li>
            <li>nodejs</li>
            <li>Angular JS (1.x)</li>
            <li>React</li>
            <li>Redux</li>
            <li>expressjs</li>
            <li>webpack</li>
            <li>docker</li>
            <li>AWS (api gateway, lambda, S3)</li>
            <li>Jenkins</li>
            <li>Terraform</li>
            <li>Nomad</li>
            <li>Vault</li>
            <li>Consul</li>
          </ul>
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default Home
