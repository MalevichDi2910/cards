import Check from '@/assets/icons/check'
import * as Checkbox from '@radix-ui/react-checkbox'

import './checkBoxEX.scss'

const CheckboxDemo = () => (
  <form>
    <div className={'MainBox'}>
      <Checkbox.Root className={'CheckboxRoot'} defaultChecked id={'c1'}>
        <Checkbox.Indicator className={'CheckboxIndicator'}>{<Check />}</Checkbox.Indicator>
      </Checkbox.Root>
      <label className={'Label'} htmlFor={'c1'}>
        Accept terms and conditions.
      </label>
    </div>
  </form>
)

export default CheckboxDemo
