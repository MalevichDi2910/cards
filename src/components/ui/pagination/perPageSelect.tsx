import { FC } from 'react'

import { Option, Select } from '@/components/ui/select'

import s from '@/components/ui/pagination/pagination.module.scss'

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: string) => void
  perPageOptions: Option[]
}

export const PerPageSelect: FC<PerPageSelectProps> = ({ onPerPageChange, perPageOptions }) => {
  return (
    <div className={s.selectBox}>
      Показать
      <Select
        className={s.select}
        onChange={onPerPageChange}
        options={perPageOptions}
        placeholder={perPageOptions[0].title}
        variant={'pagination'}
      />
      на странице
    </div>
  )
}
