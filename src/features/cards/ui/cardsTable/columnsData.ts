import { Column } from '@/components/ui/table'

export const columnsData: Column[] = [
  {
    key: 'question',
    sortable: true,
    title: 'Question',
  },
  {
    key: 'answer',
    sortable: true,
    title: 'Answer',
  },
  {
    key: 'lastUpdated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'grade',
    sortable: true,
    title: 'Grade',
  },
  {
    key: 'icons',
    title: '',
  },
]
export const getColumnsData = (isOwner: boolean) => {
  if (isOwner) {
    return columnsData
  }

  return columnsData.slice(0, columnsData.length - 1)
}
