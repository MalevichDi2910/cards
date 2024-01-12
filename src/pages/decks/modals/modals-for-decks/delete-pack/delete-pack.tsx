import { useState } from 'react'

import Trash from '@/assets/icons/trash'
import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/modal/modal.module.scss'

export const DeletePack = () => {
  const [open, setOpen] = useState<boolean>(false)
  const changeOpen = (open: boolean) => {
    setOpen(open)
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <Trash />
      </button>
      <Modal closeIcon isOpen={open} onOpenChange={changeOpen} title={'Delete Pack'}>
        <div>
          <Typography as={'p'} variant={'body1'}>
            Do you really want to remove <Typography variant={'subtitle1'}>Pack Name</Typography>?
          </Typography>
          <Typography as={'p'} variant={'body1'}>
            All cards will be deleted.
          </Typography>
        </div>
        <div className={s.FooterTwoButtonsContainer}>
          <div className={s.FooterTwoButtons}>
            <Button variant={'secondary'}>Cancel</Button>
            <Button onSubmit={undefined} variant={'primary'}>
              Delete Pack
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
