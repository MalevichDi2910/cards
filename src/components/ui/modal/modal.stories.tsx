import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkBox'
import Modal from '@/components/ui/modal/modal'
import { Option, Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/textField'
import * as Dialog from '@radix-ui/react-dialog'

import s from '@/components/ui/modal/modal.module.scss'

const meta = {
  argTypes: {},
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
    children: (
      <>
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
      </>
    ),
    closeIcon: true,
    title: 'Modal',
  },
}

export const SecondaryWithText: Story = {
  args: {
    bodyText: bodyTextTemplateShort,
    closeIcon: true,
    title: 'Modal',
  },
}

export const SecondaryWithTextOnly: Story = {
  args: {
    bodyText: bodyTextTemplateShort,
  },
}

export const SecondaryWithTextScroll: Story = {
  args: {
    bodyText: bodyTextTemplateLong,
    bodyTextScroll: true,
    closeIcon: true,
    title: 'Modal',
  },
}
