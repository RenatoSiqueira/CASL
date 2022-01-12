import { useState, useEffect } from "react"
import axios from 'axios'

import { AbilityContext } from '../context/AbilityContext'
import { buildAbilityFor } from '../lib/defineAbility'

const App = ({ Component, pageProps }) => {
  const [userData, setUserData] = useState()
  const [ability, setAbility] = useState()

  useEffect(async () => {
    const { data } = await axios.get('/api')
    const updateAbility = buildAbilityFor(data.roles)
    setUserData(data)
    setAbility(updateAbility)
  }, [])

  return (
    <AbilityContext.Provider value={{ ability, userData }}>
      <Component {...pageProps} />
    </AbilityContext.Provider>
  )
}

export default App
