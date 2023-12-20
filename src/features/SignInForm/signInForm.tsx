import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './signInForm.module.scss'

export type SignInFormValues = z.infer<typeof SignInFormSchema>

export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional().default(false),
})
export const SignInForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormValues>({ resolver: zodResolver(SignInFormSchema) })

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <>
      <Card className={s.card} variant={'dark'}>
        <Typography as={'h1'} className={s.title} variant={'large'}>
          Sign In
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
          <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
          <Typography as={'p'} className={s.forgotPassword} variant={'body2'}>
            Forgot Password?
          </Typography>
          <Button className={s.signIn} fullWidth type={'submit'}>
            Sign In
          </Button>
        </form>
        <Typography as={'p'} className={s.text} variant={'body2'}>
          {`Don't have an account?`}
        </Typography>
        <Button as={'a'} className={s.signUp} href={'/sign-up'} variant={'link'}>
          Sign Up
        </Button>
      </Card>
    </>
  )
}
