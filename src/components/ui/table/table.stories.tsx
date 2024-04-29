import { CSSProperties } from 'react'

import { Delete } from '@/assets/icons/delete'
import { Edit } from '@/assets/icons/edit'
import { PlayCircle } from '@/assets/icons/playCircle'
import { IconButton } from '@/components/ui/iconButton'
import { Rating } from '@/components/ui/rating'
import { Table } from '@/components/ui/table/table'
import { Column, TableHeader } from '@/components/ui/table/tableHeader'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

import '@/styles/index.scss'

const meta: Meta<typeof Table.Root> = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/UI/Table',
}

export default meta
type Story = StoryObj<typeof meta>

// PackListTable
const iconsTableWrapper: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  gap: '10px',
  height: '24px',
  padding: '6px 24px',
}

const columnsDefaultPackList: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cards',
    title: 'Cards',
  },
  {
    key: 'lastUpdated',
    title: 'Last Updated',
  },
  {
    key: 'createdBy',
    title: 'Created by',
  },
  {
    key: 'icons',
    title: '',
  },
]

const dataPackList = [
  {
    cardsCount: 4,
    createdBy: 'Dennis Ruiz',
    icons: {
      ...(
        <div style={iconsTableWrapper}>
          <IconButton icon={<PlayCircle />} size={1} />
          <IconButton icon={<Edit />} size={1} />
          <IconButton icon={<Delete />} size={1} />
        </div>
      ),
    },
    lastUpdated: '18.01.23',
    title: 'Pack Name 1',
  },
  {
    cardsCount: 8,
    createdBy: 'Erik Carter',
    icons: {
      ...(
        <div style={iconsTableWrapper}>
          <IconButton icon={<PlayCircle />} size={1} />
          <IconButton icon={<Edit />} size={1} />
          <IconButton icon={<Delete />} size={1} />
        </div>
      ),
    },
    lastUpdated: '07.01.23',
    title: 'Pack Name 2',
  },
  {
    cardsCount: 5,
    createdBy: 'James Glover',
    icons: {
      ...(
        <div style={iconsTableWrapper}>
          <IconButton icon={<PlayCircle />} size={1} />
          <IconButton icon={<Edit />} size={1} />
          <IconButton icon={<Delete />} size={1} />
        </div>
      ),
    },
    lastUpdated: '08.04.23',
    title: 'Pack Name 3',
  },
  {
    cardsCount: 7,
    createdBy: 'Dave Smith',
    icons: {
      ...(
        <div style={iconsTableWrapper}>
          <IconButton icon={<PlayCircle />} size={1} />
          <IconButton icon={<Edit />} size={1} />
          <IconButton icon={<Delete />} size={1} />
        </div>
      ),
    },
    lastUpdated: '11.05.23',
    title: 'Pack Name 4',
  },
]

export const PackListTable: Story = {
  args: {
    children: (
      <>
        <TableHeader columns={columnsDefaultPackList} />
        <Table.Body>
          {dataPackList.map(item => (
            <Table.Row key={item.title}>
              {Object.values(item).map((value, index) => {
                return (
                  <Table.Cell key={`${value}${index}`}>
                    <Typography variant={'body2'}>{value}</Typography>
                  </Table.Cell>
                )
              })}
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
  render: args => <Table.Root {...args} />,
}

const columnsFriendsPack: Column[] = [
  {
    key: 'question',
    title: 'Question',
  },
  {
    key: 'answer',
    title: 'Answer',
  },
  {
    key: 'lastUpdated',
    title: 'Last Updated',
  },
  {
    key: 'grade',
    title: 'Grade',
  },
]

const dataFriendsPack = [
  {
    answer: 'This is how "This" works in JavaScript',
    grade: {
      ...(
        <>
          <Rating rating={4} />
        </>
      ),
    },
    lastUpdated: '18.01.23',
    question: 'How "This" works in JavaScript?',
  },
  {
    answer: 'This is how "This" works in JavaScript',
    grade: {
      ...(
        <>
          <Rating rating={2} />
        </>
      ),
    },
    lastUpdated: '07.01.23',
    question: 'How "This" works in JavaScript?',
  },
  {
    answer: 'This is how "This" works in JavaScript',
    grade: {
      ...(
        <>
          <Rating rating={3} />
        </>
      ),
    },
    lastUpdated: '08.04.23',
    question: 'How "This" works in JavaScript?',
  },
  {
    answer: 'This is how "This" works in JavaScript',
    grade: {
      ...(
        <>
          <Rating rating={5} />
        </>
      ),
    },
    lastUpdated: '11.05.23',
    question: 'How "This" works in JavaScript?',
  },
]

export const FriendsPackTable: Story = {
  args: {
    children: (
      <>
        <TableHeader columns={columnsFriendsPack} />
        <Table.Body>
          {dataFriendsPack.map(item => (
            <Table.Row key={item.question}>
              {Object.values(item).map((value, index) => {
                return (
                  <Table.Cell key={`${value}${index}`}>
                    <Typography variant={'body2'}>{value}</Typography>
                  </Table.Cell>
                )
              })}
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
  render: args => <Table.Root {...args} />,
}
