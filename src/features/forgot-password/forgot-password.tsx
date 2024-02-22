import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import { Typography } from '@/components/ui/typography'
import {
  ForgotPasswordFormValues,
  forgotPasswordSchema,
} from '@/features/forgot-password/forgot-password-schema'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './forgot-password.module.scss'

type Props = {
  onSubmit: (data: ForgotPasswordFormValues) => void
}

export const ForgotPasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ForgotPasswordFormValues>({ resolver: zodResolver(forgotPasswordSchema) })

  return (
    <>
      <Card className={s.card} variant={'dark'}>
        <Typography as={'h1'} className={s.title} variant={'large'}>
          Forgot your password?
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <DevTool control={control} />
          <ControlledTextField
            control={control}
            errorMessage={errors.email?.message}
            fullWidth
            label={'Email'}
            name={'email'}
          />
          <Typography as={'p'} className={s.info} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Button className={s.button} fullWidth type={'submit'}>
            Send Instructions
          </Button>
        </form>
        <Typography as={'p'} className={s.rememberPassword} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Button as={Link} className={s.loggingIn} to={'/sign-in'} variant={'link'}>
          Try logging in
        </Button>
      </Card>
    </>
  )
}
