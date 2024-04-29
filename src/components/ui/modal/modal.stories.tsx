import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkBox'
import Modal from '@/components/ui/modal/modal'
import { Option, Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/textField'
import * as Dialog from '@radix-ui/react-dialog'

import '@/styles/index.scss'

import s from '@/components/ui/modal/modal.module.scss'

const meta = {
  args: {
    isOpen: false,
  },
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/UI/Modal',
} satisfies Meta<typeof Modal>

const initialState: Option[] = [
  { title: 'Select-box 1', value: '1' },
  { title: 'Select-box 2', value: '2' },
  { title: 'Select-box 3', value: '3' },
  { title: 'Select-box 4', value: '4' },
]

const bodyTextTemplateLong =
  'In the mystical realm of quantum possibilities, where particles dance in a cosmic ballet, time itself waltzes through the tapestry of existence. Fluttering like ethereal butterflies, dreams take flight in the nebulous corridors of imagination, painting the canvas of reality with strokes of whimsy and wonder.\n' +
  '\n' +
  'Amidst the symphony of celestial whispers, a symphony of serendipity unfolds. Stars, like ancient storytellers, weave tales across the velvet expanse of the night sky. Each twinkle, a punctuation mark in the grand narrative of the cosmos, whispers secrets to those who dare to listen.\n' +
  '\n' +
  'As the moonlight spills its silver secrets upon the landscape, shadows play hide-and-seek, chasing echoes of forgotten laughter. The gentle rustle of leaves in the nocturnal breeze echoes the ancient lullabies sung by the Earth herself, cradling the universe in the arms of eternal slumber.'

const bodyTextTemplateShort =
  'In the mystical realm of quantum possibilities, where particles dance in a cosmic ballet, time itself waltzes through the tapestry of existence. Fluttering like ethereal butterflies, dreams take flight in the nebulous corridors of imagination, painting the canvas of reality with strokes of whimsy and wonder.'

export default meta
type Story = StoryObj<typeof meta>

export const DefaultWithChildren: Story = {
  args: {
    closeIcon: true,
    isOpen: false,
    title: 'Modal',
  },
  render: args => {
    const [open, setOpen] = useState(false)
    const changeOpen = (open: boolean) => {
      setOpen(open)
    }

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'primary'}>
          Open modal
        </Button>
        <Modal closeIcon isOpen={open} onOpenChange={changeOpen} title={args.title}>
          <div>
            <Select fullWidth label={'Select-box'} options={initialState} />
          </div>

          <div>
            <Select fullWidth label={'Select-box'} options={initialState} />
          </div>

          <div>
            <TextField
              disabled={false}
              fullWidth
              label={'Input'}
              placeholder={'Input'}
              type={'text'}
            />
          </div>

          <div>
            <Checkbox id={'c1'} label={'Check-box'}></Checkbox>
          </div>
          <div className={s.FooterTwoButtonsContainer}>
            <Dialog.Close asChild></Dialog.Close>
            <div className={s.FooterTwoButtons}>
              <Button className={s.Button} onSubmit={undefined} variant={'primary'}>
                Button primary
              </Button>
              <Button className={s.Button} variant={'secondary'}>
                Button secondary
              </Button>
            </div>
          </div>
        </Modal>
      </>
    )
  },
}

export const SecondaryWithText: Story = {
  args: {
    bodyText: bodyTextTemplateShort,
    closeIcon: true,
    title: 'Modal',
  },
  render: args => {
    const [open, setOpen] = useState(false)
    const changeOpen = (open: boolean) => {
      setOpen(open)
    }

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'primary'}>
          Open modal
        </Button>
        <Modal
          bodyText={args.bodyText}
          closeIcon={args.closeIcon}
          onOpenChange={changeOpen}
          open={open}
          title={args.title}
        ></Modal>
      </>
    )
  },
}

export const SecondaryWithTextOnly: Story = {
  args: {
    bodyText: bodyTextTemplateShort,
  },
  render: args => {
    const [open, setOpen] = useState(false)
    const changeOpen = (open: boolean) => {
      setOpen(open)
    }

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'primary'}>
          Open modal
        </Button>
        <Modal bodyText={args.bodyText} isOpen={open} onOpenChange={changeOpen}></Modal>
      </>
    )
  },
}

export const SecondaryWithTextScroll: Story = {
  args: {
    bodyText: bodyTextTemplateLong,
    bodyTextScroll: true,
    closeIcon: true,
    title: 'Modal',
  },
  render: args => {
    const [open, setOpen] = useState(false)
    const changeOpen = (open: boolean) => {
      setOpen(open)
    }

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'primary'}>
          Open modal
        </Button>
        <Modal
          bodyText={args.bodyText}
          bodyTextScroll={args.bodyTextScroll}
          closeIcon={args.closeIcon}
          isOpen={open}
          onOpenChange={changeOpen}
          title={args.title}
        ></Modal>
      </>
    )
  },
}
