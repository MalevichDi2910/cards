import { Link } from 'react-router-dom'

import { NotFound } from '@/assets/icons/notFound'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export const NotFoundPage = () => {
  return (
    <div>
      <div>
        <NotFound height={192} width={451} />
      </div>
      <Typography as={'span'} variant={'body1'}>
        Sorry! Page not found!
      </Typography>
      <Button as={Link} to={'/'}>
        <Typography as={'span'} variant={'subtitle2'}>
          Back to home page
        </Typography>
      </Button>
    </div>
  )
}
