import Head from 'next/head'
import { Navbar, Button, Link, Text } from '@nextui-org/react'
import Editor from './editor'

export default function Home() {
  return (
    <>
      <Head>
        <title>write thoughts</title>
        <meta name="description" content="Build by kaisershad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar maxWidth={'fluid'} isBordered borderWeight="normal">
          <Navbar.Brand>
            <Text b color="inherit" hideIn="xs">
              WRITE THOUGHTS
            </Text>
          </Navbar.Brand>
          <Navbar.Content hideIn="xs">
            <Navbar.Link href="#">Overview</Navbar.Link>
            <Navbar.Link isActive href="#">
              Editor
            </Navbar.Link>
            <Navbar.Link href="#">Features</Navbar.Link>
            <Navbar.Link href="#">About us</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Link color="inherit" href="#">
              Login
            </Navbar.Link>
            <Navbar.Item>
              <Button auto flat as={Link} href="#">
                Sign Up
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
        <Editor />
      </main>
    </>
  )
}
