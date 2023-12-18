import { useForm } from 'react-hook-form'

import { FormValues, loginSchema } from '@/components/auth/login-form/loginSchema'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { TextField } from '@/components/ui/textField'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField/controlled-textField'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <DevTool control={control} />
      <ControlledTextField
        control={control}
        errorMessage={errors.email?.message}
        label={'Email'}
        name={'email'}
      ></ControlledTextField>
      <ControlledTextField
        control={control}
        errorMessage={errors.password?.message}
        label={'Password'}
        name={'password'}
        type={'password'}
      />
      <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
