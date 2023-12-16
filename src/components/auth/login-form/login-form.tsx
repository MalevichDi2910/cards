import { useForm } from 'react-hook-form'

import { FormValues, loginSchema } from '@/components/auth/login-form/loginSchema'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { TextField } from '@/components/ui/textField'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

export const LoginForm = () => {
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
    <form onSubmit={onSubmit}>
      <DevTool control={control} />
      <TextField {...register('email')} errorMessage={errors.email?.message} label={'Email'} />
      <TextField
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'Password'}
        type={'password'}
      />
      <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
