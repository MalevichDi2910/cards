import { Edit } from '@/assets/icons/edit'
import { PlayCircle } from '@/assets/icons/playCircle'
import Trash from '@/assets/icons/trash'
import { GetDecksResponse } from '@/common/services/api'
import { Body, Cell, Column, Root, Row, Sort, TableHeader } from '@/components/ui/table'

import s from '@/pages/decks/decks.module.scss'

type TableForDecksProps = {
  decks: GetDecksResponse | undefined
  setSort: (sort: Sort | null) => void
  sort: Sort | null
}

export const TableForDecks = ({ decks, setSort, sort }: TableForDecksProps) => {
  const tableColumn: Column[] = [
    { key: 'name', sortable: true, title: 'Name' },
    { key: 'cardsCount', sortable: true, title: 'Cards' },
    { key: 'updated', sortable: true, title: 'Last Updated' },
    { key: 'created', sortable: true, title: 'Created by' },
    { key: 'actions', sortable: false, title: '' },
  ]

  return (
    <Root>
      <TableHeader columns={tableColumn} onSort={setSort} sort={sort} />
      <Body>
        {decks?.items?.map(deck => {
          return (
            <Row key={deck?.id}>
              <Cell>{deck?.name}</Cell>
              <Cell>{deck?.cardsCount}</Cell>
              <Cell>{new Date(deck?.updated).toLocaleDateString()}</Cell>
              <Cell>{deck?.author?.name}</Cell>
              <Cell>
                <div className={s.icons}>
                  <PlayCircle />
                  <Edit />
                  <Trash />
                </div>
              </Cell>
            </Row>
          )
        })}
      </Body>
    </Root>
  )
}
