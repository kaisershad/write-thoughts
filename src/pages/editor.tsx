'use client'

import { Button, Input, Grid, Link, FormElement } from '@nextui-org/react'
import { useState, ChangeEvent } from 'react'
import Header from '@/pages/components/header'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import DeleteIcon from '@/pages/components/DeleteIcon'
// import style manually
import 'react-markdown-editor-lite/lib/index.css'

const mdParser = new MarkdownIt()

type ContentProps = {
  html: string
  text: string
}

type TagsProp = string[]

export default function Editor() {
  const handleEditorChange = ({ html, text }: ContentProps) => {
    return { html, text }
  }
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState<TagsProp>([])

  const handleTitle = (event: ChangeEvent<FormElement>) => {
    setTitle(event.target.value)
  }
  const handleTag = (event: ChangeEvent<FormElement>) => {
    setTag(event.target.value)
  }

  const submitTitle = () => {
    console.log(title, handleEditorChange)
  }

  const submitTag = () => {
    tags.push(tag)
    setTag('')
    console.log(tags)
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
            aria-label="Add title"
            labelLeft="title"
            placeholder="Add file name ..."
            value={title}
            onChange={handleTitle}
            clearable
            required
          />
        </Grid>
        <Grid>
          <Button
            auto
            rounded
            flat
            disabled={title === '' ? true : false}
            onPress={submitTitle}
          >
            Save
          </Button>
        </Grid>
        <Grid>
          <Input
            underlined
            aria-label="Add tag"
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
            onPress={submitTag}
          >
            Add
          </Button>
        </Grid>
        {tags.map((addedTag) => {
          return (
            <Button
              key={addedTag}
              style={{ alignSelf: 'center' }}
              light
              color={'secondary'}
              iconRight={<DeleteIcon size={14} fill="#7828C8" />}
              auto
            >
              {addedTag}
            </Button>
          )
        })}
      </Grid.Container>
      <main>
        <MdEditor
          style={{ height: '100vh' }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
      </main>
    </>
  )
}
