import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'

const Root = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...restProps }, ref) => {
    return <table ref={ref} {...restProps} />
  }
)

const Head = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...restProps }, ref) => {
    return <thead ref={ref} {...restProps} />
  }
)

const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...restProps }, ref) => {
    return <tbody ref={ref} {...restProps} />
  }
)

const Row = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...restProps }, ref) => {
    return <tr ref={ref} {...restProps} />
  }
)

const HeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...restProps }, ref) => {
    return <th ref={ref} {...restProps} />
  }
)

const Cell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...restProps }, ref) => {
    return <td ref={ref} {...restProps} />
  }
)

type EmptyProps = {
  children?: ReactNode
  className?: string
  text?: string
} & ComponentPropsWithoutRef<'div'>

export const Empty = forwardRef<ElementRef<'div'>, EmptyProps>(
  ({ children, className, text = 'There is no data yet', ...restProps }, ref) => {
    return (
      <div ref={ref} {...restProps}>
        <Typography variant={'h2'}>{text}</Typography>
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
