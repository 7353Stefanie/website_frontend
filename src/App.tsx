import React from 'react';
                  // import { CssBaseline} from "@mui/material";
                   import './App.css';
                   import { AuthProvider } from "./theme/authContext";
                   import Header from "./components/header";
                   import Footer from "./components/footer";
                   import Startpage from "./pages/startpage";
                   import { ThemeProvider2} from "./theme/ThemeContext";
                   import {BackgroundImageTheme} from "./theme/theme";
                   import {Outlet} from "react-router-dom";

                   const App: React.FC = () => {


                       return (
                               <ThemeProvider2>
                              <BackgroundImageTheme>
                                    <AuthProvider>
                                       <div>
                                           <Header />
                                           <main>
                                           <Outlet />

                                           </main>
                                           <Footer />
                                       </div>
                                   </AuthProvider>
                                 </BackgroundImageTheme>
                               </ThemeProvider2>
                       );
                   }

                   export default App;