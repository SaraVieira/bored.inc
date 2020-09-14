import React, { useState } from 'react'
import data from './data/activities'

export const BoredContext = React.createContext()

export const BoredState = ({ children }) => {
  const [activities, links] = useState(Object.keys(data), Object.values(data))
  const random = a => a[Math.floor(Math.random() * a.length)]

  const getRandom = () => random(activities)

  return (
    <BoredContext.Provider value={{ activities, links, getRandom }}>
      {children}
    </BoredContext.Provider>
  )
}
