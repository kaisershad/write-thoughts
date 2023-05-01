import { Button, Input, Grid, Link } from '@nextui-org/react'
import { useState } from 'react'
import Header from '@/pages/components/header'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css'

const mdParser = new MarkdownIt()

type ContentProps = {
  html: any
  text: any
}

export default function Editor() {
  const handleEditorChange = ({ html, text }: ContentProps) => {
    console.log('handleEditorChange', html, text)
  }
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')

  const handleTitle = (e: any) => {
    setTitle(e.target.value)
  }
  const handleTag = (e: any) => {
    setTag(e.target.value)
  }

  return (
    <>
      <Header />
      <Grid.Container style={{ backgroundColor: 'white' }} gap={2}>
        <Grid style={{ display: 'flex' }}>
          <Link href="/" color={'secondary'}>
            &#60; back
          </Link>
        </Grid>
        <Grid>
          <Input
            underlined
            labelLeft="title"
            placeholder="Add file name ..."
            value={title}
            onChange={handleTitle}
            clearable
            required
          />
        </Grid>
        <Grid>
          <Button auto rounded flat disabled={title === '' ? true : false}>
            Save
          </Button>
        </Grid>
        <Grid>
          <Input
            underlined
            labelLeft="tag"
            placeholder="Add tag name ..."
            value={tag}
            onChange={handleTag}
            clearable
          />
        </Grid>
        <Grid>
          <Button
            auto
            rounded
            flat
            color={'secondary'}
            disabled={tag === '' ? true : false}
          >
            Add
          </Button>
        </Grid>
      </Grid.Container>
      <main>
        <MdEditor
          style={{ height: '1200px' }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
      </main>
    </>
  )
}
