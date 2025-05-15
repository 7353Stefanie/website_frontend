import { createContext, useState, ReactNode } from "react";

interface AuthContextType {
    infos: Benutzerinfos;
    isLoggedIn: boolean;
    login: (benutzername:string) => void;
    logout: () => void;
}

interface Benutzerinfos {
    benutzername: String;

}

const benutzer: Benutzerinfos =
{
    benutzername : "",

 };

 const benutzerLogout: Benutzerinfos =
 {
     benutzername : "",
  };


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(localStorage.getItem("isLoggedIn") === "true");
    const [infos, setInfos] = useState<Benutzerinfos>({benutzername:  benutzer.benutzername, });

    const login = (benutzername:string) => {

        localStorage.setItem("isLoggedIn", "true");
       // localStorage.setInfos("benutzername", benutzername);

        setIsLoggedIn(true);
        setInfos({ benutzername})
        console.log("ist eingelogged als ", benutzername, " und " , isLoggedIn );
    };

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        setInfos( benutzerLogout);
        window.location.reload();


    };

    return (
        <AuthContext.Provider value={{ infos, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};