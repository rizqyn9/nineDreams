import { useState, useEffect, useCallback } from 'react'

export const useScroll = () => {
  const [state, setState] = useState({
    lastScrollTop: 0,
    bodyOffset: null,
    scrollY: null,
    scrollX: null,
    scrollDirection: '', // down, up
  })

  const handleScrollEvent = useCallback((e) => {
    setState((prevState) => {
      const prevLastScrollTop = prevState.lastScrollTop
      const bodyOffset = document.body.getBoundingClientRect()

      return {
        setBodyOffset: bodyOffset,
        scrollY: -bodyOffset.top,
        scrollX: bodyOffset.left,
        scrollDirection: prevLastScrollTop > -bodyOffset.top ? 'down' : 'up',
        lastScrollTop: -bodyOffset.top,
      }
    })
  }, [])

  useEffect(() => {
    const scrollListener = (e) => {
      handleScrollEvent(e)
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [handleScrollEvent])

  return {
    scrollY: state.scrollY,
    scrollX: state.scrollX,
    scrollDirection: state.scrollDirection,
  }
}

export default useScroll