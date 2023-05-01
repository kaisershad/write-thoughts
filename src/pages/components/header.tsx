import {
  Navbar,
  Button,
  Text,
  Modal,
  Input,
  Row,
  Checkbox,
} from '@nextui-org/react'
import MailIcon from './MailIcon'
import PasswordIcon from './PasswordIcon'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Header() {
  const router = useRouter()

  const [visible, setVisible] = useState(false)
  const handler = () => setVisible(true)

  const closeHandler = () => {
    setVisible(false)
    console.log('closed')
  }

  return (
    <>
      <Navbar maxWidth={'fluid'} isBordered borderWeight="normal">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            WRITE THOUGHTS
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link
            href="/"
            isActive={router.pathname === '/' ? true : false}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/editor"
            isActive={router.pathname === '/editor' ? true : false}
          >
            Editor
          </Navbar.Link>
          <Navbar.Link
            href="/about"
            isActive={router.pathname === '/about' ? true : false}
          >
            About us
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat onPress={handler}>
              Login
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              &nbsp;WRITE THOUGHTS
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<MailIcon fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<PasswordIcon fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
