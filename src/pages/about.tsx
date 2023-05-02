'use client'

import { Container, Card, Text } from '@nextui-org/react'
import Header from '@/pages/components/header'

export default function About() {
  return (
    <>
      <Header />
      <Container fluid>
        <Card>
          <Card.Header>
            <Text h3>About us</Text>
          </Card.Header>
          <Card.Body>
            <Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
