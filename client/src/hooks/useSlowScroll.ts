import { useRef, useState } from 'react'

const SCROLL_INTERVAL = 4000 // 4 seconds
export const ALTERNATING_DELAY = 2000 // 2 seconds

type ScrollerType = {
  intervalId: number[]
  containerRef: React.RefObject<HTMLDivElement>
  cancel: () => void
  start: () => void
}

const containerScroll = (container: HTMLDivElement, scrollStep: number) => {
  const { clientWidth, scrollLeft, scrollWidth } = container
  if (scrollLeft + clientWidth + scrollStep >= scrollWidth) {
    container.scrollTo({
      left: 0,
      behavior: 'smooth',
    })
  } else {
    container.scrollTo({
      left: scrollLeft + scrollStep,
      behavior: 'smooth',
    })
  }
}

const slowScroll = (container: HTMLDivElement) => {
  const { clientWidth, scrollWidth } = container
  const steps = container.childElementCount - 2 // subtract 2 to account for the "bookends" that are empty divs
  const scrollStep = (scrollWidth - clientWidth) / steps
  return setInterval(
    () => containerScroll(container, scrollStep),
    SCROLL_INTERVAL
  )
}

export default () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scroller, setScroller] = useState<ScrollerType>({
    intervalId: [0],
    containerRef,
    cancel: () => cancelScroll(),
    start: () => startScroll(),
  })

  const cancelScroll = () => {
    const { intervalId } = scroller
    intervalId.forEach((i) => clearInterval(i))
  }

  const startScroll = () => {
    if (!containerRef.current) return
    const { intervalId } = scroller
    const interval = slowScroll(containerRef.current)
    intervalId.push(interval)
    setScroller({
      ...scroller,
      intervalId,
    })
  }

  return scroller
}
