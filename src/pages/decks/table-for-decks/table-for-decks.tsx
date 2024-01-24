import { useNavigate } from 'react-router-dom'

import { PlayCircle } from '@/assets/icons/playCircle'
import { GetDecksResponse, GetDecksResponseItems } from '@/common/services/api'
import { Column, Sort, Table, TableHeader } from '@/components/ui/table'
import { DeleteDeck } from '@/pages/decks/modals/modals-for-decks/delete-deck'
import { EditDeck } from '@/pages/decks/modals/modals-for-decks/edit-deck'

import s from './table-for-decks.module.scss'

type TableForDecksProps = {
  deck: GetDecksResponseItems | undefined
  decks: GetDecksResponse | undefined
  removeDeck: () => void
  setSort: (sort: Sort | null) => void
  sort: Sort | null
}

export const TableForDecks = ({ deck, decks, removeDeck, setSort, sort }: TableForDecksProps) => {
  const tableColumn: Column[] = [
    { key: 'name', sortable: true, title: 'Name' },
    { key: 'cardsCount', sortable: true, title: 'Cards' },
    { key: 'updated', sortable: true, title: 'Last Updated' },
    { key: 'created', sortable: true, title: 'Created by' },
    { key: 'actions', sortable: false, title: '' },
  ]

  const navigate = useNavigate()
  const toGetDeck = () => {
    navigate(`v1/decks/${deck?.id}`)
  }

  return (
    <Table.Root>
      <TableHeader columns={tableColumn} onSort={setSort} sort={sort} />
      <Table.Body>
        {decks?.items?.map(deck => {
          return (
            <Table.Row key={deck?.id}>
              <Table.Cell className={s.name} onClick={toGetDeck}>
                {deck?.name}
              </Table.Cell>
              <Table.Cell>{deck?.cardsCount}</Table.Cell>
              <Table.Cell>{new Date(deck?.updated).toLocaleDateString()}</Table.Cell>
              <Table.Cell>{deck?.author?.name}</Table.Cell>
              <Table.Cell>
                <div className={s.icons}>
                  <PlayCircle />
                  <EditDeck />
                  <DeleteDeck removeDeck={removeDeck} />
                </div>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
