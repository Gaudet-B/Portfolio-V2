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
const Link = (props: {
  to?: string
  children?: React.ReactNode
  onClick?: () => void
  popOut?: boolean
}) => {
  const { to, children, onClick, popOut } = props
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onClick) onClick()
    if (to) navigate(to)
  }

  return (
    <a
      href={to}
      onClick={!popOut ? handleClick : undefined}
      /** @TODO add icon to communicate "new tab" to user (w3 might have SVG) */
      target={popOut ? '_blank' : undefined}
      style={linkStyles}
    >
      {!children ? null : children}
    </a>
  )
}

export default Link
