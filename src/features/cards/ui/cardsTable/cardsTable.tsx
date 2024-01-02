import { Delete } from '@/assets/icons/delete'
import { Edit } from '@/assets/icons/edit'
import { IconButton } from '@/components/ui/iconButton'
import { Rating } from '@/components/ui/rating'
import { Sort, Table, TableHeader } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { Card } from '@/features/cards/api/cardsApi.types'
import { getColumnsData } from '@/features/cards/ui/cardsTable/columnsData'

type Props = {
  cards: Card[]
  isOwner: boolean
  onSort: (sort: Sort) => void
  sort: Sort
}
export const CardsTable = ({ cards, isOwner, onSort, sort }: Props) => {
  return (
    <Table.Root>
      <TableHeader columns={getColumnsData(isOwner)} onSort={onSort} sort={sort} />
      <Table.Body>
        {cards.map(card => {
          return (
            <Table.Row key={card.id}>
              <Table.Cell>
                <Typography variant={'body2'}>{card.question}</Typography>
              </Table.Cell>
              <Table.Cell>
                <div>
                  <Typography variant={'body2'}>{card.answer}</Typography>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Typography variant={'body2'}>{'Data'}</Typography>
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