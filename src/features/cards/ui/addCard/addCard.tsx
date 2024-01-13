import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Image } from '@/assets/icons/image'
import { Button } from '@/components/ui/button'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import { ControlledSelect } from '@/components/ui/controlled/controlledSelect'
import Modal from '@/components/ui/modal/modal'
import { Option } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

export const AddCard = () => {
  const options: Option[] = [
    { title: 'Text', value: 'text' },
    { title: 'Picture', value: 'picture' },
  ]

  const [open, setOpen] = useState(false)
  const changeOpen = (open: boolean) => {
    setOpen(open)
  }

  const closeModal = () => {
    setOpen(false)
  }
  const { control, handleSubmit, watch } = useForm({})

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  const questionFormat = watch('questionFormat')

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
        {questionFormat === 'text' && (
          <ControlledTextField control={control} fullWidth label={'Question'} name={'question'} />
        )}
        {questionFormat === 'picture' && (
          <>
            <div>
              <img />
            </div>
            <Button fullWidth type={'button'} variant={'secondary'}>
              <Image />
              <Typography as={'span'} variant={'subtitle2'}>
                {'Change Cover'}
              </Typography>
            </Button>
          </>
        )}

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
