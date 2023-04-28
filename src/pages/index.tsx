import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Grid, Card, Text } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  type FooterItemProps = {
    title: string
    text: string
  }
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

        <div className={styles.center}>Mardown Editor - placeholder</div>

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
