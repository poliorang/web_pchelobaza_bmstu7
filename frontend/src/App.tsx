import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";
import { AuthContext, User } from "./context/AuthContext";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ConferencesPage from "./pages/ConferencesPage/ConferencesPage";
import CreateFarmPage from "./pages/CreateFarmPage/CreateFarmPage";
import { TOKEN_KEY } from "./hooks/token.hook";
import { LOGIN_KEY } from "./hooks/login.hooks";
import { USER_KEY } from "./hooks/user.hook";
import FarmPage from "./pages/FarmPage/FarmPage";
import ConcreteConferencePage from "./pages/ConcreteConferencePage/ConcreteConferencePage";
import OtherUserProfile from "./pages/OtherUserProfile/OtherUserProfilePage";
import CreateConferencePage from "./pages/CreateConferencePage/CreateConferencePage";
import EditFarmPage from "./pages/EditFarmPage/EditFarmPage";

function App() {
    const [token, setToken] = useState("")
    const [login, setLogin] = useState("")
    const [user, setUser] = useState<User>({ role: "", id: "" })

    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            setToken(token);
        }

        const user = localStorage.getItem(USER_KEY);
        if (user) {
            setUser(JSON.parse(user));
        }

        const login = localStorage.getItem(LOGIN_KEY);
        if (login) {
            setLogin(login);
        }
    }, [])

    const isAuthorized = Boolean(token);

    return (
        <AuthContext.Provider value={{ token, setToken, login, setLogin, user, setUser }}>
            <BrowserRouter>
                <Routes>
                    {
                        !isAuthorized ? (
                            <>
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/register" element={<RegisterPage />} />

                                <Route path="*" element={<Navigate to='/login' />} />
                            </>
                        ) : (
                            <>
                                <Route path="/main" element={<MainPage />} />
                                <Route path="/profile" element={<ProfilePage />} />
                                <Route path="/conferences" element={<ConferencesPage />} />
                                <Route path="/create-farm" element={<CreateFarmPage />} />
                                <Route path="/farm/:name" element={<FarmPage />} />
                                <Route path="/conference/:name" element={<ConcreteConferencePage />} />
                                <Route path="/user-profile/:userLogin" element={<OtherUserProfile />} />
                                <Route path="/create-conference" element={<CreateConferencePage />} />
                                <Route path="/edit-farm/:farmName" element={<EditFarmPage />} />

                                <Route path="*" element={<Navigate to="/main" />} />
                            </>
                        )
                    }
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
