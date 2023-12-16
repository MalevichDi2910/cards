import { useForm } from 'react-hook-form'

import { FormValues, loginSchema } from '@/components/auth/login-form/loginSchema'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './register-form.module.scss'

export const RegisterForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <>
      <Card className={s.card} variant={'dark'}>
        <Typography as={'h1'} className={s.title} variant={'large'}>
          Sign Up
        </Typography>
        <form className={s.form} onSubmit={onSubmit}>
          <DevTool control={control} />
          <TextField
            {...register('email')}
            errorMessage={errors.email?.message}
            fullWidth
            label={'Email'}
          />
          <TextField
            {...register('password')}
            errorMessage={errors.password?.message}
            fullWidth
            label={'Password'}
            type={'password'}
          />
          <TextField
            {...register('password')}
            errorMessage={errors.password?.message}
            fullWidth
            label={'Confirm Password'}
            type={'password'}
          />
          <Button className={s.signUp} fullWidth type={'submit'}>
            Sign Up
          </Button>
        </form>
        <Typography as={'p'} className={s.text} variant={'body2'}>
          Already have an account?
        </Typography>
        <Button as={'a'} className={s.signIn} href={'/sign-in'} variant={'link'}>
          Sign In
        </Button>
      </Card>
    </>
  )
}
