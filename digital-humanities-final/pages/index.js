import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <img className={utilStyles.profPic} src="/profilepic2.jpg" alt="yo" width="200" height="200" />
      <section className={utilStyles.headingMd}>
        <p>Hello! My name is Dillon Hansen. I'm a student at Brigham Young University. I'm currently studying Advertising and pursuing a minor in Digital Humanities.</p>
        <p>
        To me, digital humanities is the art of using techniques of technology to emulate human patterns. While many people separate human process with the rigidity of technology, digital humanities seeks to bring those two together and make our online experiences more human-like.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Click on any of the posts below to learn more.</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>          
          ))}
        </ul>
      </section>
    </Layout>
  )
}
