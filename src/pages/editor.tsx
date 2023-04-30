import { Button, Input, Grid } from '@nextui-org/react'
import { useState } from 'react'
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
      <Grid.Container style={{ backgroundColor: 'white' }} gap={2}>
        <Grid>
          <Input
            underlined
            labelLeft="title"
            placeholder="Add file name ..."
            value={title}
            onChange={handleTitle}
            required
          />
        </Grid>
        <Grid>
          <Button auto rounded flat>
            Save
          </Button>
        </Grid>
        <Grid>
          <Input
            underlined
            labelLeft="tag"
            placeholder="Add tag name ..."
            value={title}
            onChange={handleTag}
          />
        </Grid>
        <Grid>
          <Button auto rounded flat color={'secondary'}>
            Add
          </Button>
        </Grid>
      </Grid.Container>
      <MdEditor
        style={{ height: '1200px' }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </>
  )
}
