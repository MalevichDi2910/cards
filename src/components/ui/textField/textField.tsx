import { ChangeEvent, ComponentPropsWithoutRef, ReactNode, forwardRef, useState } from 'react'

import { CloseOutline } from '@/assets/icons/closeOutline'
import { EyeOff } from '@/assets/icons/eye-off'
import { EyeOutline } from '@/assets/icons/eye-outline'
import { Search } from '@/assets/icons/search'
import { Typography } from '@/components/ui/typography'

import s from './textField.module.scss'

export type TextFieldProps = {
  disabled?: boolean
  errorMessage?: string
  label?: ReactNode
  onChangeValue?: (value: string) => void
  onClearSearch?: () => void
  placeholder?: string
  type?: 'password' | 'search' | 'text'
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = /* @__PURE__ */ forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { disabled, errorMessage, label, onChange, onChangeValue, placeholder, type, value, ...rest },
    ref
  ) => {
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false)

    const [text, setText] = useState<string>('')
    const onClearSearch = () => {
      setText('')
    }

    const isShowClear = text?.length! > 0

    const showError = !!errorMessage && errorMessage.length > 0

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeValue?.(e.currentTarget.value)
      setText(e.currentTarget.value)
    }

    return (
      <div className={s.root}>
        <Typography as={'label'} className={s.label} variant={'body2'}>
          {label}
        </Typography>
        <div className={s.inputContainer}>
          {type === 'search' && <Search className={s.searchIcon} />}
          <input
            className={errorMessage ? s.errorInput : s.input}
            disabled={disabled}
            onChange={onChangeHandler}
            placeholder={placeholder}
            ref={ref}
            type={'password' && visiblePassword ? 'text' : type}
            value={text}
            {...rest}
          />
          {type === 'password' &&
            (visiblePassword ? (
              <span
                className={s.eyeIcon}
                onClick={() => setVisiblePassword(visiblePassword => !visiblePassword)}
              >
                <EyeOff fill={disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'} />
              </span>
            ) : (
              <span
                className={s.eyeIcon}
                onClick={() => setVisiblePassword(visiblePassword => !visiblePassword)}
              >
                <EyeOutline fill={disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'} />
              </span>
            ))}
          {isShowClear && <CloseOutline className={s.closerIcon} onClick={onClearSearch} />}
          {showError && (
            <Typography as={'span'} className={s.errorMessage} variant={'caption'}>
              {errorMessage}
            </Typography>
          )}
        </div>
      </div>
    )
  }
)
