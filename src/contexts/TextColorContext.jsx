import React, { useCallback, useContext, useMemo, useState } from 'react';

const TEXTCOLOR_KEY = 'color'

const TextColor = React.createContext()

export const useTextColor = () => useContext(TextColor)

const supportedColors = ['dark', 'primary']

const validateColor = (color) => supportedColors.includes(color) ? color : 'dark'

export const TextColorProvider = ({ children }) => {
  const [color, setColor] = useState(
    validateColor(localStorage.getItem(TEXTCOLOR_KEY)) || 'dark'
  )

  const toggleColor = useCallback(() => {
    const nextColor = color === 'dark' ? 'primary' : 'dark'
    setColor(nextColor)
    localStorage.setItem(TEXTCOLOR_KEY, nextColor)
  }, [color])

  const value = useMemo(() => ({
    color, toggleColor
  }), [color, toggleColor])

  return (
    <TextColor.Provider value={value}>
      {children}
    </TextColor.Provider>
  )
}

export default TextColor