import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import { Typography } from '@/components/ui/typography'
import {
  CreateNewPasswordFormSchema,
  CreateNewPasswordFormValues,
} from '@/features/createNewPasswordForm/CreateNewPasswordFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './createNewPasswordForm.module.scss'

type Props = {
  onSubmit: (data: CreateNewPasswordFormValues) => void
}

export const CreateNewPasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateNewPasswordFormValues>({
    defaultValues: { password: '' },
    resolver: zodResolver(CreateNewPasswordFormSchema),
  })

  return (
    <>
      <Card className={s.card} variant={'dark'}>
        <Typography as={'h1'} className={s.title} variant={'large'}>
          Create new password
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <ControlledTextField
            control={control}
            errorMessage={errors.password?.message}
            fullWidth
            label={'Password'}
            name={'password'}
            type={'password'}
          />
          <Typography as={'p'} className={s.info} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button className={s.button} fullWidth type={'submit'}>
            Create New Password
          </Button>
        </form>
      </Card>
    </>
  )
}
