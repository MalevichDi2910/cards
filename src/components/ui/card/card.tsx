import s from './card.module.scss'

type PropsType = {
  className?: string
}

export const Card = (props: PropsType) => {
  return <div className={`${s.card} ${s[props.className!]}`}></div>
}
