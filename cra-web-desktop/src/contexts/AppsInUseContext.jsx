import React from 'react'

const AppsInUseContext = React.createContext()

export function AppProvider({children}) {
    const [appsInUse, setAppsInUse] = React.useState([])
    function startApp(appName) {
        setAppsInUse([...appsInUse, appName])
    }


  return (
    <AppsInUseContext.Provider value={{apps: appsInUse, startApp}}>
        {children}
    </AppsInUseContext.Provider>
  )
}
