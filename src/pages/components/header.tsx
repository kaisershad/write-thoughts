import { Navbar, Button, Link, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <Navbar maxWidth={'fluid'} isBordered borderWeight="normal">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          WRITE THOUGHTS
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="/" isActive={router.pathname === '/' ? true : false}>
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/editor"
          isActive={router.pathname === '/editor' ? true : false}
        >
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
  )
}
