import XMark from '@/assets/icons/XMark'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

const Modal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`${s.Button} ${s.violet}`}>Edit profile</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay} />
        <Dialog.Content className={s.DialogContent}>
          <div className={s.ContentHeader}>
            <Dialog.Title className={s.DialogTitle}>
              <Typography variant={'h2'}>Title</Typography>
            </Dialog.Title>
            <Dialog.Close asChild>
              <button aria-label={'Close'} className={s.IconButton}>
                {<XMark size={1.5} />}
              </button>
            </Dialog.Close>
          </div>
          {/*<div className={s.Body}>*/}
          {/*  <Dialog.Description className={s.DialogDescription}>*/}
          {/*    <Typography variant={'body2'}>*/}
          {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cumque delectus*/}
          {/*      deleniti ducimus error laborum magni, unde vitae. Architecto at aut distinctio ex*/}
          {/*      itaque labore laboriosam, nisi nulla quos repudiandae. Lorem ipsum dolor sit amet,*/}
          {/*      consectetur adipisicing elit. Cum eaque impedit in iusto magnam obcaecati, odit*/}
          {/*      quasi qui velit. Commodi ex harum, nobis perferendis qui rem sed sit? Eligendi,*/}
          {/*      inventore.*/}
          {/*    </Typography>*/}
          {/*  </Dialog.Description>*/}
          {/*</div>*/}

          {/*<fieldset className={s.Fieldset}>*/}
          {/*  <label className={s.Label} htmlFor={'name'}>*/}
          {/*    Name*/}
          {/*  </label>*/}
          {/*  <input className={s.Input} defaultValue={'Pedro Duarte'} id={'name'} />*/}
          {/*</fieldset>*/}
          {/*<fieldset className={s.Fieldset}>*/}
          {/*  <label className={s.Label} htmlFor={'username'}>*/}
          {/*    Username*/}
          {/*  </label>*/}
          {/*  <input className={s.Input} defaultValue={'@peduarte'} id={'username'} />*/}
          {/*</fieldset>*/}

          {/*<div className={s.FooterOneButton}>*/}
          {/*  <Dialog.Close asChild>*/}
          {/*    <Button variant={'secondary'}>Button primary</Button>*/}
          {/*  </Dialog.Close>*/}
          {/*</div>*/}

          <div className={s.FooterTwoButtonsContainer}>
            <Dialog.Close asChild>
              <div className={s.FooterTwoButtons}>
                <Button className={s.Button} variant={'primary'}>
                  Button primary
                </Button>
                <Button className={s.Button} variant={'secondary'}>
                  Button primary
                </Button>
              </div>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
