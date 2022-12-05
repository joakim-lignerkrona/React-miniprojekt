import React from 'react'
import {v4 as uuid} from 'uuid'

export const AppsInUseContext = React.createContext()

export function AppProvider({children}) {
    const [appsInUse, setAppsInUse] = React.useState([])
    function startApp(appComponent) {
        const id = uuid()
        setAppsInUse([...appsInUse, {component: <div id={id} style={{position: "absolute", top: 150, left: 150}} key={id}>{appComponent}</div>, id, window: null}])
    }
    function closeApp(id) {
        setAppsInUse(appsInUse.filter(app => app.id !== id))
    }
    function getIDForNewWindow() {
        let app = appsInUse.filter(app => {
            if (!app.window) {
                app.window = uuid()
                return true
            }
            return false
        })
        return app[0]?.id
    }


  return (
    <AppsInUseContext.Provider value={{apps: appsInUse.map(a => {return a.component}), startApp, getIDForNewWindow, closeApp}}>
        {children}
    </AppsInUseContext.Provider>
  )
}
