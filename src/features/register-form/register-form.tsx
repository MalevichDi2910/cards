import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField/controlled-textField'
import { Typography } from '@/components/ui/typography'
import { useSignUpMutation } from '@/features/auth/api'
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
  } = useForm<RegisterFormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(registerFormSchema),
  })
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(data => {
    const { email, password } = data

    signUp({ email, password }).then(() => {
      navigate('/sign-in')
    })
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
        <Button as={Link} className={s.signIn} to={'/sign-in'} variant={'link'}>
          Sign In
        </Button>
      </Card>
    </>
  )
}
