import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { useAppSelector } from '@/common/services/store'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { modalsActions, selectOpenModal } from '@/features/modals'
import { SignInFormSchema, SignInFormValues } from '@/features/signInForm/signInFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './signInForm.module.scss'

type Props = {
  onSubmit: (data: SignInFormValues) => void
}

export const SignInForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(SignInFormSchema),
  })

  const dispatch = useDispatch()
  const open = useAppSelector(selectOpenModal)

  const onChangeOpen = (openModal: boolean) => {
    dispatch(modalsActions.setOpenModal({ openModal }))
  }

  const trigger = (
    <Button className={s.info}>
      <Typography as={'span'} variant={'subtitle2'}>
        Info
      </Typography>
    </Button>
  )
  const bodyText =
    'If you currently can not sign in to Google Chrome, use a different browser. Third-party browser cookies do not work for everyone. Google is gradually disabling them.'

  return (
    <div className={s.container}>
      <Card className={s.card} variant={'dark'}>
        <Typography as={'h1'} className={s.title} variant={'large'}>
          Sign In
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
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
          <Typography
            as={Link}
            className={s.forgotPassword}
            to={'/forgot-password'}
            variant={'body2'}
          >
            Forgot Password?
          </Typography>
          <Button className={s.signIn} fullWidth type={'submit'}>
            Sign In
          </Button>
        </form>
        <Typography as={'p'} className={s.text} variant={'body2'}>
          {`Don't have an account?`}
        </Typography>
        <Button as={Link} className={s.signUp} to={'/sign-up'} variant={'link'}>
          Sign Up
        </Button>
      </Card>
      <Modal
        bodyText={bodyText}
        closeIcon
        isOpen={open}
        onOpenChange={() => onChangeOpen(!open)}
        title={'Attention!'}
        trigger={trigger}
      >
        <p className={s.titleData}>Common test account credentials:</p>
        <p>Email: test@test.com</p>
        <p>Password: test</p>
      </Modal>
    </div>
  )
}
