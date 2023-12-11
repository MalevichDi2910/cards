import { Avatar } from '@/components/ui/avatar'
import { Typography } from '@/components/ui/typography'

import s from './avatarWithName.module.scss'

type AvatarWithNameProps = {
  src: string
  userName: string
}

export const AvatarWithName = ({ src, userName }: AvatarWithNameProps) => {
  return (
    <div className={s.container}>
      <Typography className={s.text} variant={'h3'}>
        {userName}
      </Typography>
      <Avatar className={s.avatar} size={'small'} src={src} userName={userName}></Avatar>
    </div>
  )
}
