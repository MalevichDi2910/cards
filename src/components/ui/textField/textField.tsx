import { ChangeEvent, ComponentPropsWithoutRef, ReactNode, forwardRef, useState } from 'react'

import CloseOutline from '@/assets/icons/closeOutline'
import EyeOff from '@/assets/icons/eyeOff'
import EyeOutline from '@/assets/icons/eyeOutline'
import Search from '@/assets/icons/search'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './textField.module.scss'

export type TextFieldProps = {
  errorMessage?: string
  fullWidth?: boolean
  label?: ReactNode
  onChangeValue?: (value: string) => void
  onClearSearch?: () => void
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = /* @__PURE__ */ forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      disabled,
      errorMessage,
      fullWidth,
      label,
      onChange,
      onChangeValue,
      placeholder,
      type,
      value,
      ...rest
    },
    ref
  ) => {
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false)

    const [isActive, setIsActive] = useState(false)

    const classNames = {
      closerIcon: s.closerIcon,
      errorMessage: s.errorMessage,
      eyeClass: s.eyeIcon,
      input: clsx(errorMessage ? s.errorInput : s.input, fullWidth && s.fullWidth),
      inputContainer: s.inputContainer,
      label: s.label,
      root: s.root,
      searchIcon: s.searchIcon,
    }

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
      <div className={classNames.root}>
        {label && (
          <Typography as={'label'} className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={s.inputContainer}>
          {type === 'search' && (
            <Search className={classNames.searchIcon} style={{ color: color }} />
          )}
          <input
            className={classNames.input}
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
              <span className={classNames.eyeClass} onClick={toggleVisiblePassword}>
                <EyeOff color={eyeIconClass} />
              </span>
            ) : (
              <span className={classNames.eyeClass} onClick={toggleVisiblePassword}>
                <EyeOutline color={eyeIconClass} />
              </span>
            ))}
          {isShowClear && (
            <CloseOutline className={classNames.closerIcon} onClick={onClearSearch} />
          )}
          {showError && (
            <Typography as={'span'} className={classNames.errorMessage} variant={'caption'}>
              {errorMessage}
            </Typography>
          )}
        </div>
      </div>
    )
  }
)
