import React from 'react'
import {v4 as uuid} from 'uuid'

export const AppsInUseContext = React.createContext()

export function AppProvider({children}) {
    const [appsInUse, setAppsInUse] = React.useState([])
    function startApp(appComponent) {
        const id = uuid()
        setAppsInUse([...appsInUse, <div id={id} key={id}>{appComponent}</div>])
    }


  return (
    <AppsInUseContext.Provider value={{apps: appsInUse, startApp}}>
        {children}
    </AppsInUseContext.Provider>
  )
}
