import { useEffect, useRef } from "react"

export function useClickListener(onClick: any) {
  const ref = useRef<HTMLInputElement>(null)

  const handleClickOutside = (event: any) => {
    if (onClick && ref.current && !ref.current.contains(event.target)) {
      onClick()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
    document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref }
}
