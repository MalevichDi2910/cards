import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowIosDown } from '@/assets/icons/arrowIosDown'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { ArrowIosUp } from '@/assets/icons/arrowIosUp'
import { clsx } from 'clsx'
import s from './tableHeader.module.scss'

export type Column = {
  key: string
  sortable?: boolean
  title: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

type Props = Omit<
  ComponentPropsWithoutRef<typeof Table.Head> & {
    columns: Column[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  },
  'children'
>

export const TableHeader = forwardRef<ElementRef<typeof Table.Head>, Props>(
  ({ columns, onSort, sort, ...restProps }, ref) => {
    const handleSort = (key: string, sortable?: boolean) => () => {
      if (!onSort || !sortable) {
        return
      }

      if (sort?.key !== key) {
        return onSort({ direction: 'asc', key })
      }

      if (sort.direction === 'desc') {
        return onSort(null)
      }

      return onSort({
        direction: sort?.direction === 'asc' ? 'desc' : 'asc',
        key,
      })
    }

    return (
      <Table.Head ref={ref} {...restProps}>
        <Table.Row>
          {columns.map(({ key, sortable, title }) => {
            const headCellClassName = clsx(sortable && s.activeHeadCell)

            return (
              <Table.HeadCell
                className={headCellClassName}
                key={key}
                onClick={handleSort(key, sortable)}
              >
                <Typography as={'span'} className={s.sortCell} variant={'subtitle2'}>
                  {title}
                  {sort && sort.key === key && (
                    <>
                      {sort.direction === 'asc' && (
                        <ArrowIosUp className={s.sortIcon} size={0.75} />
                      )}
                      {sort.direction !== 'asc' && (
                        <ArrowIosDown className={s.sortIcon} size={0.75} />
                      )}
                    </>
                  )}
                </Typography>
              </Table.HeadCell>
            )
          })}
        </Table.Row>
      </Table.Head>
    )
  }
)
