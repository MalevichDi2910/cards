import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './table.module.scss'

const Root = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...restProps }, ref) => {
    const rootClassName = clsx(s.root, className)

    return <table className={rootClassName} ref={ref} {...restProps} />
  }
)

const Head = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...restProps }, ref) => {
    const headClassName = clsx(s.thead, className)

    return <thead className={headClassName} ref={ref} {...restProps} />
  }
)

const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...restProps }, ref) => {
    const bodyClassName = clsx(s.body, className)

    return <tbody className={bodyClassName} ref={ref} {...restProps} />
  }
)

const Row = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...restProps }, ref) => {
    const rowClassName = clsx(s.row, className)

    return <tr className={rowClassName} ref={ref} {...restProps} />
  }
)

const HeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...restProps }, ref) => {
    const headClassName = clsx(s.headCell, className)

    return <th className={headClassName} ref={ref} {...restProps} />
  }
)

const Cell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...restProps }, ref) => {
    const cellClassName = clsx(s.cell, className)

    return <td className={cellClassName} ref={ref} {...restProps} />
  }
)

type EmptyProps = {
  children?: ReactNode
  className?: string
  text?: string
} & ComponentPropsWithoutRef<'div'>

export const Empty = forwardRef<ElementRef<'div'>, EmptyProps>(
  ({ children, className, text = 'There is no data yet', ...restProps }, ref) => {
    const classNames = {
      empty: clsx(className, s.empty),
      emptyDescription: s.emptyDescription,
    }

    return (
      <div className={classNames.empty} ref={ref} {...restProps}>
        <Typography className={classNames.emptyDescription} variant={'body1'}>
          {text}
        </Typography>
        {children}
      </div>
    )
  }
)

export const Table = {
  Body,
  Cell,
  Empty,
  Head,
  HeadCell,
  Root,
  Row,
}
