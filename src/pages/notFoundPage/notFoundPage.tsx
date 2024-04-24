import { Link } from 'react-router-dom'

import { NotFound } from '@/assets/icons/notFound'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './notFoundPage.module.scss'

export const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <NotFound height={192} width={451} />
      </div>
      <Typography as={'span'} className={s.text} variant={'body1'}>
        Sorry! Page not found!
      </Typography>
      <Button as={Link} className={s.button} to={'/'}>
        <Typography as={'span'} variant={'subtitle2'}>
          Back to home page
        </Typography>
      </Button>
    </div>
  )
}
