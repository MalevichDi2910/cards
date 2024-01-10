import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import { ControlledSelect } from '@/components/ui/controlled/controlledSelect'
import Modal from '@/components/ui/modal/modal'
import { Option } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

type Props = {
  options: Option[]
}
export const AddCard = ({ options }: Props) => {
  const [open, setOpen] = useState(false)
  const changeOpen = (open: boolean) => {
    setOpen(open)
  }

  const closeModal = () => {
    setOpen(false)
  }
  const { control, handleSubmit } = useForm({})

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <Modal isOpen={open} onOpenChange={changeOpen} title={'Add New Card'}>
      <form onSubmit={onSubmit}>
        <ControlledSelect
          control={control}
          fullWidth
          label={'Choose a question format'}
          name={'questionFormat'}
          options={options}
          placeholder={'Data format type'}
        />
        <ControlledTextField control={control} fullWidth label={'Question'} name={'question'} />
        <ControlledTextField control={control} fullWidth label={'Answer'} name={'answer'} />
        <div>
          <Button onClick={closeModal} type={'reset'} variant={'secondary'}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
          <Button type={'submit'}>
            <Typography variant={'subtitle2'}>Add New Card</Typography>
          </Button>
        </div>
      </form>
    </Modal>
  )
}
