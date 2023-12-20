import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField/controlled-textField'
import { Typography } from '@/components/ui/typography'
import {
  RegisterFormValues,
  registerFormSchema,
} from '@/features/register-form/register-form-schema'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './register-form.module.scss'

export const RegisterForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormValues>({ resolver: zodResolver(registerFormSchema) })

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
          <ControlledTextField
            control={control}
            errorMessage={errors.email?.message}
            fullWidth
            label={'Email'}
            name={'email'}
          />
          <ControlledTextField
            control={control}
            errorMessage={errors.password?.message}
            fullWidth
            label={'Password'}
            name={'password'}
            type={'password'}
          />
          <ControlledTextField
            control={control}
            errorMessage={errors.confirmPassword?.message}
            fullWidth
            label={'Confirm Password'}
            name={'confirmPassword'}
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
