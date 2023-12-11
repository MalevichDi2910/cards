import { ReactNode } from 'react'

import s from './header.module.scss'

export type HeaderProps = {
  children: ReactNode
}
export const Header = ({ children }: HeaderProps) => {
  return <div className={s.container}>{children}</div>
}
