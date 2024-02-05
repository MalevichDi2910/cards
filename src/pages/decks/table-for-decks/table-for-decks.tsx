import { Link } from 'react-router-dom'

import { PlayCircle } from '@/assets/icons/playCircle'
import { GetDecksResponse } from '@/common/services/api'
import { Column, Sort, Table, TableHeader } from '@/components/ui/table'
import { DeleteDeck } from '@/pages/decks/modals/modals-for-decks/delete-deck'
import { EditDeck } from '@/pages/decks/modals/modals-for-decks/edit-deck'

import s from './table-for-decks.module.scss'

type TableForDecksProps = {
  decks: GetDecksResponse
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
    <Table.Root>
      <TableHeader columns={tableColumn} onSort={setSort} sort={sort} />
      <Table.Body>
        {decks?.items.map(deck => {
          return (
            <Table.Row key={deck.id}>
              <Table.Cell className={s.name}>
                <Link to={`/v1/decks/${deck.id}/cards`}>{deck.name}</Link>
              </Table.Cell>
              <Table.Cell>{deck.cardsCount}</Table.Cell>
              <Table.Cell>{new Date(deck.updated).toLocaleDateString()}</Table.Cell>
              <Table.Cell>{deck.author.name}</Table.Cell>
              <Table.Cell>
                <div className={s.icons}>
                  <PlayCircle />
                  <EditDeck deckId={deck.id} />
                  <DeleteDeck deckId={deck.id} />
                </div>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
