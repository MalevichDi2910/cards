import { Edit } from '@/assets/icons/edit'
import { PlayCircle } from '@/assets/icons/playCircle'
import Trash from '@/assets/icons/trash'
import { GetDecksResponse } from '@/common/services/api'
import { Column, Sort, Table, TableHeader } from '@/components/ui/table'

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
    <Table.Root>
      <TableHeader columns={tableColumn} onSort={setSort} sort={sort} />
      <Table.Body>
        {decks?.items?.map(deck => {
          return (
            <Table.Row key={deck?.id}>
              <Table.Cell>{deck?.name}</Table.Cell>
              <Table.Cell>{deck?.cardsCount}</Table.Cell>
              <Table.Cell>{new Date(deck?.updated).toLocaleDateString()}</Table.Cell>
              <Table.Cell>{deck?.author?.name}</Table.Cell>
              <Table.Cell>
                <div className={s.icons}>
                  <PlayCircle />
                  <Edit />
                  <Trash />
                </div>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
