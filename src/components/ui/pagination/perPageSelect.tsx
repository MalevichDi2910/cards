import { FC } from 'react'

import { Option, Select } from '@/components/ui/select'

import s from '@/components/ui/pagination/pagination.module.scss'

export type PerPageSelectProps = {
  onPerPageChange?: (itemPerPage: string) => void
  perPage: number
  perPageOptions: Option[]
}

export const PerPageSelect: FC<PerPageSelectProps> = ({
  onPerPageChange,
  perPage,
  perPageOptions,
}) => {
  return (
    <div className={s.selectBox}>
      Показать
      <Select
        className={s.select}
        onChange={onPerPageChange}
        options={perPageOptions}
        perPage={perPage}
        placeholder={perPageOptions[0].title}
        variant={'pagination'}
      />
      на странице
    </div>
  )
}
