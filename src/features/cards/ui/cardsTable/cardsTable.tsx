import { Edit } from '@/assets/icons/edit'
import { IconButton } from '@/components/ui/iconButton'
import { Rating } from '@/components/ui/rating'
import { Sort, Table, TableHeader } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { Card } from '@/features/cards/api/cardsApi.types'
import { getColumnsData } from '@/features/cards/ui/cardsTable/columnsData'
import { DeleteCard } from '@/features/cards/ui/deleteCard/deleteCard'

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
                <div className={s.iconAndTextWrapper}>
                  {card.questionImg && (
                    <img alt={'Card question'} className={s.image} src={card.questionImg} />
                  )}
                  <Typography variant={'body2'}>{card.question}</Typography>
                </div>
              </Table.Cell>
              <Table.Cell className={s.cellAnswer}>
                <div className={s.iconAndTextWrapper}>
                  {card.answerImg && (
                    <img alt={'Card answer'} className={s.image} src={card.answerImg} />
                  )}
                  <Typography variant={'body2'}>{card.answer}</Typography>
                </div>
              </Table.Cell>
              <Table.Cell className={s.cellUpdated}>
                <Typography variant={'body2'}>{cardDate(card.updated)}</Typography>
              </Table.Cell>
              <Table.Cell>
                <Rating rating={card.grade} />
              </Table.Cell>
              {isOwner && (
                <Table.Cell className={s.cellsButton}>
                  <IconButton icon={<Edit />} size={1} />
                  <DeleteCard id={card.id} />
                </Table.Cell>
              )}
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
