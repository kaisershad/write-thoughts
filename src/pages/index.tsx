'use client'

import Header from '@/pages/components/header'
import {
  Grid,
  Input,
  Button,
  Link,
  Table,
  Badge,
  Row,
  Col,
  Tooltip,
  FormElement,
} from '@nextui-org/react'
import IconButton from '@/pages/components/IconButton'
import EyeIcon from '@/pages/components/EyeIcon'
import EditIcon from '@/pages/components/EditIcon'
import DeleteIcon from '@/pages/components/DeleteIcon'
import { useState, ChangeEvent, Key } from 'react'

type FileProps = {
  id: string | number
  title: string
  created: string
  updated?: string
  tags?: string[]
}

export default function Home() {
  const [searchByTitle, setSearchByTitle] = useState('')
  const [filterByTag, setFilterByTag] = useState('')

  const handleSearch = (event: ChangeEvent<FormElement>) => {
    setSearchByTitle(event.target.value)
  }
  const handleFilter = (event: ChangeEvent<FormElement>) => {
    setFilterByTag(event.target.value)
  }

  const columns = [
    { name: 'TITLE', uid: 'title' },
    { name: 'TAGS', uid: 'tags' },
    { name: 'CREATED', uid: 'created' },
    { name: 'UPDATED', uid: 'updated' },
    { name: 'ACTIONS', uid: 'actions' },
  ]
  const files: FileProps[] = [
    {
      id: 1234,
      title: 'First thought',
      created: '2022-10-21',
      updated: '2023-04-14',
      tags: ['studies'],
    },
    {
      id: 3245,
      title: 'Second thought',
      created: '2021-12-11',
      updated: '2023-03-04',
      tags: ['studies', 'learning'],
    },
    {
      id: 1221,
      title: 'Third thought',
      created: '2022-01-01',
      updated: '',
      tags: [],
    },
    {
      id: 3214,
      title: 'Forth thought',
      created: '2021-12-11',
      updated: '2023-03-04',
      tags: ['experience'],
    },
    {
      id: 9870,
      title: 'Fifth thought',
      created: '2021-12-11',
      updated: '2023-03-04',
      tags: ['work'],
    },
  ]

  const renderCell = (file: any, columnKey: Key) => {
    const cellValue = file[columnKey]
    switch (columnKey) {
      case 'title':
        return cellValue
      case 'tags':
        return cellValue ? (
          cellValue.map((tag: string) => (
            <Badge color={'secondary'} key={tag}>
              {tag}
            </Badge>
          ))
        ) : (
          <></>
        )
      case 'created':
        return cellValue
      case 'updated':
        return cellValue
      case 'actions':
        return (
          <Row justify="center" align="center">
            <Col css={{ d: 'flex' }}>
              <Tooltip content="Preview">
                <IconButton onClick={() => console.log('View file', file?.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: 'flex' }}>
              <Tooltip content="Edit" color={'primary'}>
                <IconButton onClick={() => console.log('Edit file', file?.id)}>
                  <EditIcon size={20} fill="#0072F5" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: 'flex' }}>
              <Tooltip
                content="Delete"
                color="error"
                onClick={() => console.log('Delete file', file?.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        )
      default:
        return cellValue
    }
  }

  return (
    <>
      <Header />
      <Grid.Container style={{ backgroundColor: 'white' }} gap={2}>
        <Grid style={{ display: 'flex' }}>
          <Link href="/editor" color={'secondary'}>
            Write a new thought
          </Link>
        </Grid>
        <Grid>
          <Input
            underlined
            id="search-title"
            aria-label="Search by title"
            labelLeft="title"
            placeholder="Search by file ..."
            value={searchByTitle}
            onChange={handleSearch}
            clearable
          />
        </Grid>
        <Grid>
          <Button
            auto
            id="search-title"
            rounded
            flat
            disabled={searchByTitle === '' ? true : false}
          >
            Search
          </Button>
        </Grid>
        <Grid>
          <Input
            underlined
            id="filter-tag"
            aria-label="Filter by tag"
            labelLeft="tag"
            placeholder="Filter by tag ..."
            value={filterByTag}
            onChange={handleFilter}
            clearable
          />
        </Grid>
        <Grid>
          <Button
            auto
            id="filter-tag"
            rounded
            flat
            color={'secondary'}
            disabled={filterByTag === '' ? true : false}
          >
            Filter
          </Button>
        </Grid>
      </Grid.Container>
      <main style={{ backgroundColor: 'white' }}>
        <Table
          aria-label="Example table with custom cells"
          css={{
            height: 'auto',
            minWidth: '100%',
          }}
          lined
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column.uid}
                hideHeader={column.uid === 'actions'}
                align={column.uid === 'actions' ? 'center' : 'start'}
              >
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={files}>
            {(item: FileProps) => (
              <Table.Row>
                {(columnKey) => (
                  <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </main>
    </>
  )
}
