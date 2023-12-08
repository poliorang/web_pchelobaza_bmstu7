import React, { FC, useEffect, useState } from 'react';
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { UserController } from "../../controller/user/UserController";
import { useToken } from "../../hooks/token.hook";
import { useLogin } from "../../hooks/login.hooks";

import './ProfilePage.css'
import FarmsTable from "./components/FarmsTable/FarmsTable";
import BeemasterForm from "../../components/BeemasterForm/BeemasterForm";
import { useUser } from "../../hooks/user.hook";
import { useNavigate } from "react-router";
import FieldWithLabel from "../../components/FieldWithLabel/FieldWithLabel";
import InputWithLabel from "../../components/FieldWithLabel/InputWithLabel";
import { useAuthData } from "../../hooks/auth-data.hook";
import RequestsTable from "./components/RequestsTable/RequestsTable";

const ProfilePage: FC = () => {

    const {token, clearToken} = useToken();
    const {login, clearLogin, setLogin} = useLogin();

    const { isBeeman, isAdmin } = useAuthData();

    const navigate = useNavigate();

    const {clearUser} = useUser();

    const [id, setId] = useState("");
    const [loginRs, setLoginRs] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [contact, setContact] = useState("");
    const [regDate, setRegDate] = useState("");
    const [role, setRole] = useState("");

    const [password, setPassword] = useState("")

    const getUserInfo = () => {
        setId("Loading...")
        setLoginRs("Loading...")
        setName("Loading...")
        setSurname("Loading...")
        setContact("Loading...")
        setRegDate("Loading...")
        setRole("Loading...")
        new UserController().getUser(login, token).then(
            user => {
                setId(user.getId().toString())
                setLoginRs(user.getLogin())
                setName(user.getName())
                setSurname(user.getSurname())
                setContact(user.getContact())
                setRegDate(user.getRegDate())
                setRole(user.getRole())
                setPassword(user.getPassword());
            }
        ).catch();
    };

    useEffect(() => {
        if (token && login) {
            getUserInfo();
        }
    }, [token, login])

    const logout = () => {
        clearToken();
        clearUser();
        clearLogin();
        navigate('/login');
    }

    const updateProfile = () => {
        new UserController().updateUser(
            token, {
                userId: Number(id),
                login: login,
                password: password,
                name: name,
                surname: surname,
                contact: contact
            }
        ).then(() => {
           window.alert("Профиль обновлен");
           setLogin(login)
        }).catch(() => {
            window.alert("Ошибка обновления профиля");
        });
    };

    return (
        <div className="profile-page soty-bg">
            <Header>
                <Link to="/main">main</Link>
                { isBeeman &&  <a href="#beemaster">beemaster</a> }
                <Link to="/login" onClick={logout}>log out</Link>
                <button className="large-button" onClick={updateProfile}>save</button>
            </Header>

            <div className="profile-info">
                <div className="contacts-column">
                    <div className="contacts-main card">
                        <InputWithLabel label="name" value={name} onChange={setName} isReadOnly={isAdmin} />
                        <InputWithLabel label="surname" value={surname} onChange={setSurname} isReadOnly={isAdmin}/>

                        <FieldWithLabel label="role" value={role} />
                        <FieldWithLabel label="with us from" value={new Date(regDate).toLocaleDateString()} />

                        <FieldWithLabel label="contact" value={contact} />
                    </div>

                    <div className="contacts-login card">
                        <div className="contacts-field">
                            <span>login</span>
                            <p>{login}</p>
                        </div>
                    </div>
                </div>

                <div className="farms-column">
                    { isAdmin ? (
                        <RequestsTable />
                    ) : (
                        <FarmsTable login={login} />
                    )}
                </div>
            </div>

            <BeemasterForm />
        </div>
    );
};

export default ProfilePage;
