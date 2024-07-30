import { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

const linkStyles = {
  textDecoration: 'none',
}

/**
 * Link Component
 * reusable
 * wraps any component to make it a link
 * style-agnostic
 * @param props - Props
 * @returns JSX.Element
 */
const Link = ({
  to,
  children,
  onClick,
  popOut,
  styles,
}: PropsWithChildren<{
  to?: string
  onClick?: () => void
  popOut?: boolean
  styles?: React.CSSProperties
}>) => {
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onClick) onClick()
    if (to) navigate(to)
  }

  const customStyles = styles
    ? {
        ...linkStyles,
        ...styles,
      }
    : linkStyles

  return (
    <a
      href={to}
      onClick={!popOut ? handleClick : undefined}
      /** @TODO add icon to communicate "new tab" to user (w3 might have SVG) */
      target={popOut ? '_blank' : undefined}
      style={{ ...customStyles }}
    >
      {!children ? null : children}
    </a>
  )
}

export default Link
