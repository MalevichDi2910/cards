import { useForm } from 'react-hook-form'

import { FormValues, loginSchema } from '@/components/auth/login-form/loginSchema'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

export const SignInForm = () => {
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
      <Card variant={'dark'}>
        <Typography as={'h1'} variant={'large'}>
          Sign In
        </Typography>
        <form onSubmit={onSubmit}>
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
          <ControlledCheckbox
            control={control}
            label={'Remember me'}
            name={'rememberMe'}
            position={'left'}
          />
          <Typography as={'p'} variant={'body2'}>
            Forgot Password?
          </Typography>
          <Button fullWidth type={'submit'}>
            Sign In
          </Button>
        </form>
        <Typography as={'p'} variant={'body2'}>
          Don't have an account?
        </Typography>
        <Button as={'a'} href={'/sign-up'} variant={'link'}>
          Sign Up
        </Button>
      </Card>
    </>
  )
}
