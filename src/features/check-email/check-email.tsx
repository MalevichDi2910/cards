import Email from '@/assets/icons/email'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from '@/features/check-email/check-email.module.scss'

export const CheckEmail = () => {
  return (
    <>
      <Card className={s.card} variant={'dark'}>
        <Typography as={'h1'} className={s.title} variant={'large'}>
          Check Email
        </Typography>
        <span className={s.email}>
          <Email size={6} />
        </span>
        <Typography as={'p'} className={s.info} variant={'body2'}>
          We’ve sent an Email with instructions to example@mail.com
        </Typography>
        <Button as={'a'} className={s.button} variant={'primary'}>
          Back to Sign In
        </Button>
      </Card>
    </>
  )
}
