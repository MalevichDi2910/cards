import { ChangeEvent, ComponentPropsWithoutRef, ReactNode, forwardRef, useState } from 'react'

import CloseOutline from '@/assets/icons/closeOutline'
import EyeOff from '@/assets/icons/eyeOff'
import EyeOutline from '@/assets/icons/eyeOutline'
import Search from '@/assets/icons/search'
import { Typography } from '@/components/ui/typography'

import s from './textField.module.scss'

export type TextFieldProps = {
  errorMessage?: string
  label?: ReactNode
  onChangeValue?: (value: string) => void
  onClearSearch?: () => void
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = /* @__PURE__ */ forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { disabled, errorMessage, label, onChange, onChangeValue, placeholder, type, value, ...rest },
    ref
  ) => {
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false)

    const [isActive, setIsActive] = useState(false)

    const handleFocus = () => {
      setIsActive(true)
    }

    const handleBlur = () => {
      setIsActive(false)
    }

    // eslint-disable-next-line no-nested-ternary
    const color = isActive
      ? 'var(--color-light-100)'
      : disabled
      ? 'var(--color-dark-300)'
      : 'var(--color-dark-100)'

    const [text, setText] = useState<string>('')
    const onClearSearch = () => {
      setText('')
    }

    const isShowClear = type === 'search' && text.length > 0

    const showError = !!errorMessage && errorMessage.length > 0

    const eyeIconClass = disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeValue?.(e.currentTarget.value)
      setText(e.currentTarget.value)
    }

    const toggleVisiblePassword = () => {
      setVisiblePassword(visiblePassword => !visiblePassword)
    }

    return (
      <div className={s.root}>
        {label && (
          <Typography as={'label'} className={s.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={s.inputContainer}>
          {type === 'search' && <Search className={s.searchIcon} style={{ color: color }} />}
          <input
            className={errorMessage ? s.errorInput : s.input}
            disabled={disabled}
            onBlur={handleBlur}
            onChange={onChangeHandler}
            onFocus={handleFocus}
            placeholder={placeholder}
            ref={ref}
            type={'password' && visiblePassword ? 'text' : type}
            value={text}
            {...rest}
          />
          {type === 'password' &&
            (visiblePassword ? (
              <span className={s.eyeIcon} onClick={toggleVisiblePassword}>
                <EyeOff color={eyeIconClass} />
              </span>
            ) : (
              <span className={s.eyeIcon} onClick={toggleVisiblePassword}>
                <EyeOutline color={eyeIconClass} />
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
