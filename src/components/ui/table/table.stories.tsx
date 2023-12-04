import { CSSProperties } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Table } from '@/components/ui/table/table'
import { IconButton } from '@/components/ui/iconButton'
import { PlayCircle } from '@/assets/icons/playCircle'
import { Edit } from '@/assets/icons/edit'
import { Delete } from '@/assets/icons/delete'
import { Column, TableHeader } from '@/components/ui/table/tableHeader'
import { Typography } from '@/components/ui/typography'

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

const columnsDefault: Column[] = [
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

const data = [
  {
    title: 'Pack Name 1',
    cardsCount: 4,
    lastUpdated: '18.01.23',
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
  },
  {
    title: 'Pack Name 2',
    cardsCount: 8,
    lastUpdated: '07.01.23',
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
  },
  {
    title: 'Pack Name 3',
    cardsCount: 5,
    lastUpdated: '08.04.23',
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
  },
  {
    title: 'Pack Name 4',
    cardsCount: 7,
    lastUpdated: '11.05.23',
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
  },
]

const columns: Column[] = [
  ...columnsDefault,
  {
    key: 'icons',
    title: '',
  },
]

export const PackListTable: Story = {
  args: {
    children: (
      <>
        <TableHeader columns={columns} />
        <Table.Body>
          {data.map(item => (
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
