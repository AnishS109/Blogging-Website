    import { createContext, useState, useEffect} from "react"


    export const DataContext = createContext(null)

    const DataProvider = ({children}) => {

        const [account, setAccount] = useState({
            username:"",
            name:""
        })

        const [isAuthenticated, setIsAuthenticated] = useState(() => {
            // Initialize `isAuthenticated` from localStorage
            return localStorage.getItem("isAuthenticated") === "true";
          });
        
          useEffect(() => {
            // Sync `isAuthenticated` with localStorage
            localStorage.setItem("isAuthenticated", isAuthenticated);
          }, [isAuthenticated]);

        return (
            <DataContext.Provider value={{
            account,
            setAccount,
            isAuthenticated,
            setIsAuthenticated
            }}>

            {children}

            </DataContext.Provider>
        )
    }

    export default DataProvider;