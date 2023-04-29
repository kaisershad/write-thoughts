import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Grid, Card, Text } from '@nextui-org/react'

import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css'

const inter = Inter({ subsets: ['latin'] })

const mdParser = new MarkdownIt()

type FooterItemProps = {
  title: string
  text: string
}
type ContentProps = {
  html: any
  text: any
}

export default function Home() {
  const FooterItem = ({ title, text }: FooterItemProps) => {
    return (
      <Card>
        <Card.Header>
          <Text h4>{title}</Text>
        </Card.Header>
        <Card.Body>
          <Text h6 size={15} css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    )
  }
  const handleEditorChange = ({ html, text }: ContentProps) => {
    console.log('handleEditorChange', html, text)
  }

  return (
    <>
      <Head>
        <title>write thoughts</title>
        <meta name="description" content="Build by kaisershad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by writing your&nbsp;
            <code className={styles.code}>thoughts</code>
          </p>
        </div>

        <MdEditor
          style={{ height: '800px', minWidth: '1400px' }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />

        <Grid.Container gap={2} justify="center">
          <Grid xs={4}>
            <FooterItem
              title="Idea"
              text="Find what the idea behing the project is."
            />
          </Grid>
          <Grid xs={4}>
            <FooterItem
              title="Learn"
              text="An overview about the functionalities of the editor."
            />
          </Grid>
          <Grid xs={4}>
            <FooterItem
              title="GitHub"
              text="Discover the project and learn how to contribute."
            />
          </Grid>
        </Grid.Container>
      </main>
    </>
  )
}
