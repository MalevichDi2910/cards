import Trash from '@/assets/icons/trash'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Tabs } from '@/components/ui/tabs'
import { TabItem } from '@/components/ui/tabs/tabItem'
import { TextField } from '@/components/ui/textField'

import s from '@/pages/decks/decks.module.scss'

type FilterForDecksProps = {
  range: number[]
  search: string
  setCardsPerPage: (perPage: string) => void
  setPage: (page: number) => void
  setRange: (range: number[]) => void
  setSearch: (search: string) => void
  setShowMyDecks: (show: boolean) => void
  showMyDecks: boolean
}
export const FilterForDecks = ({
  range,
  search,
  setCardsPerPage,
  setPage,
  setRange,
  setSearch,
  setShowMyDecks,
  showMyDecks,
}: FilterForDecksProps) => {
  const onClearFilters = () => {
    setSearch('')
    setRange([0, 100])
    setPage(1)
    setCardsPerPage('10')
  }

  const packsCards = [
    { title: 'My cards', value: 'My cards' },
    { title: 'All cards', value: 'All cards' },
  ]

  return (
    <div className={s.filter}>
      <TextField
        onChangeValue={setSearch}
        onClearSearch={() => setSearch('')}
        placeholder={'Search'}
        type={'search'}
        value={search}
      />
      <Tabs
        defaultValue={packsCards[1].value}
        label={'Show packs cards'}
        onValueChange={() => setShowMyDecks(!showMyDecks)}
      >
        {packsCards.map(cards => (
          <TabItem key={cards.value} value={cards.value}>
            {cards.title}
          </TabItem>
        ))}
      </Tabs>
      <Slider onRangeChange={setRange} range={range} />
      <Button onClick={onClearFilters} variant={'secondary'}>
        <Trash size={1} />
        Clear filter
      </Button>
    </div>
  )
}
