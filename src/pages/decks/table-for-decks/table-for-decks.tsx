import { Link } from 'react-router-dom'

import { PlayCircle } from '@/assets/icons/playCircle'
import { GetDecksResponse } from '@/common/services/api'
import { Column, Sort, Table, TableHeader } from '@/components/ui/table'
import { AuthResponseType } from '@/features/auth/api'
import { DeleteDeck } from '@/features/decks/ui/delete-deck'
import { EditDeck } from '@/features/decks/ui/edit-deck'

import s from './table-for-decks.module.scss'

type TableForDecksProps = {
  authMe: AuthResponseType | null | undefined
  decks: GetDecksResponse
  setSort: (sort: Sort | null) => void
  sort: Sort | null
}

export const TableForDecks = ({ authMe, decks, setSort, sort }: TableForDecksProps) => {
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
              <Table.Cell className={s.cellDeck}>
                <div className={s.iconAndTextWrapper}>
                  {deck.cover && <img alt={'Deck cover'} className={s.image} src={deck.cover} />}
                  <Link className={s.name} to={`/decks/${deck.id}/cards`}>
                    {deck.name}
                  </Link>
                </div>
              </Table.Cell>
              <Table.Cell>{deck.cardsCount}</Table.Cell>
              <Table.Cell>{new Date(deck.updated).toLocaleDateString()}</Table.Cell>
              <Table.Cell>{deck.author.name}</Table.Cell>
              <Table.Cell>
                <div className={s.icons}>
                  <Link className={s.name} to={`/decks/${deck.id}/learn`}>
                    <PlayCircle />
                  </Link>
                  {deck.author.id === authMe?.id && (
                    <>
                      <EditDeck deckId={deck.id} isPrivate={deck.isPrivate} name={deck.name} />
                      <DeleteDeck deckId={deck.id} />
                    </>
                  )}
                </div>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
