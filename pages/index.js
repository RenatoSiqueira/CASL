import React, { useContext } from 'react'
import { AbilityContext } from '../context/AbilityContext'

const Index = () => {
  const { ability, userData } = useContext(AbilityContext)

  return (
    <div>
      Usuário:
      <pre style={{ fontWeight: 'bold' }}>
        {JSON.stringify(userData)}
      </pre>
      <div style={{
        display: 'flex', gap: 40, marginTop: 30
      }}>
        {ability?.can('read', 'Dashboard') && <div>Dashboard</div>}
        {ability?.cannot('read', 'Dashboard') && <div>[Blocked]Dashboard</div>}
        {ability?.can('read', 'Feed') && <div>Feed</div>}
        {ability?.cannot('read', 'Feed') && <div>[Blocked]Feed</div>}
        {ability?.can('read', 'Videos') && <div>Videos</div>}
        {ability?.cannot('read', 'Videos') && <div>[Blocked]Videos</div>}
      </div>
    </div>
  )
}
export default Index