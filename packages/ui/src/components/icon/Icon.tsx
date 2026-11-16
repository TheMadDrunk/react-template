import type { CSSProperties } from 'react'

type IconProps = {
  name: string
  className?: string
  filled?: boolean
  style?: CSSProperties
}

export function Icon({ name, className = '', filled = false, style }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? 'filled' : ''} ${className}`}
      style={style}
      aria-hidden
    >
      {name}
    </span>
  )
}
