import { Delete } from '@/assets/icons/delete'
import { Edit } from '@/assets/icons/edit'
import { IconButton } from '@/components/ui/iconButton'
import { Rating } from '@/components/ui/rating'
import { Sort, Table, TableHeader } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { Card } from '@/features/cards/api/cardsApi.types'
import { getColumnsData } from '@/features/cards/ui/cardsTable/columnsData'

import s from './cardsTable.module.scss'

type Props = {
  cards: Card[]
  isOwner: boolean
  onSort: (sort: Sort) => void
  sort: Sort
}
export const CardsTable = ({ cards, isOwner, onSort, sort }: Props) => {
  const cardDate = (stringDate: string): string => {
    const date = new Date(stringDate)
    const dateFormat = new Intl.DateTimeFormat('ru', {
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      month: '2-digit',
      second: 'numeric',
      year: 'numeric',
    })

    return dateFormat.format(date)
  }

  return (
    <Table.Root className={s.root}>
      <TableHeader columns={getColumnsData(isOwner)} onSort={onSort} sort={sort} />
      <Table.Body>
        {cards.map(card => {
          return (
            <Table.Row key={card.id}>
              <Table.Cell className={s.cellQuestion}>
                <Typography variant={'body2'}>{card.question}</Typography>
              </Table.Cell>
              <Table.Cell className={s.cellAnswer}>
                <Typography variant={'body2'}>{card.answer}</Typography>
              </Table.Cell>
              <Table.Cell className={s.cellUpdated}>
                <Typography variant={'body2'}>{cardDate(card.updated)}</Typography>
              </Table.Cell>
              <Table.Cell>
                <Rating rating={card.grade} />
              </Table.Cell>
              {isOwner && (
                <Table.Cell>
                  <IconButton icon={<Edit />} size={1} />
                  <IconButton icon={<Delete />} size={1} />
                </Table.Cell>
              )}
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
