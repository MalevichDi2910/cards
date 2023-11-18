import { ChangeEvent, ComponentPropsWithoutRef, ReactNode, forwardRef, useState } from 'react'

// import closerIcon from '@/assets/icons/close-outline.svg'
import searchIcon from '@/assets/icons/search-outline.svg'
import { Typography } from '@/components/ui/typography'

import s from './textField.module.scss'

export type TextFieldProps = {
  disabled?: boolean
  error?: string
  label?: ReactNode
  placeholder?: string
  type?: 'password' | 'search' | 'text'
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = /* @__PURE__ */ forwardRef<HTMLInputElement, TextFieldProps>(
  ({ disabled, error, label, onChange, placeholder, type, value, ...rest }, ref) => {
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
    }

    return (
      <div className={s.root}>
        <Typography as={'label'} className={s.label} variant={'body2'}>
          {label}
        </Typography>
        <div className={s.inputContainer}>
          {type === 'search' && (
            <span>
              <img alt={'search icon'} className={s.searchIcon} src={searchIcon} />
            </span>
          )}
          <input
            className={error ? s.errorInput : s.input}
            disabled={disabled}
            onChange={onChangeHandler}
            placeholder={placeholder}
            ref={ref}
            type={'password' && visiblePassword ? 'text' : type}
            value={value}
            {...rest}
          />
          {type === 'password' && (
            <span
              className={`${s.passwordControl} ${
                visiblePassword ? s.showPassword : s.hidePassword
              }`}
              onClick={() => setVisiblePassword(visiblePassword => !visiblePassword)}
            />
          )}
          {/*{isShowClearButton && (*/}
          {/*  <span>*/}
          {/*    <img alt={'closer icon'} className={s.closerIcon} src={closerIcon} />*/}
          {/*  </span>*/}
          {/*)}*/}
          {error && (
            <Typography variant={'caption'}>
              <span className={s.errorMessage}>{error}</span>
            </Typography>
          )}
        </div>
      </div>
    )
  }
)
