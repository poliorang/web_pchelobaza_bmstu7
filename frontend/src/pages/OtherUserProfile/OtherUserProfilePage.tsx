import React, { FC, useEffect, useState } from 'react';
import { useToken } from "../../hooks/token.hook";
import { useLogin } from "../../hooks/login.hooks";
import { useNavigate, useParams } from "react-router";
import { useUser } from "../../hooks/user.hook";
import { UserController } from "../../controller/user/UserController";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import FieldWithLabel from "../../components/FieldWithLabel/FieldWithLabel";
import FarmsTable from "../ProfilePage/components/FarmsTable/FarmsTable";
import BeemasterForm from "../../components/BeemasterForm/BeemasterForm";
import { UserBusinessModel } from "../../model/business/user/UserBusinessModel";

interface RouteParams {
    userLogin: string;
    [key: string]: string;
}

const OtherUserProfilePage: FC = () => {

    const {token} = useToken();

    const { userLogin } = useParams<RouteParams>();

    const [user, setUser] = useState<UserBusinessModel>()

    const getUserInfo = () => {
        new UserController().getUser(userLogin!, token).then(
            user => {
                setUser(user);
            }
        ).catch(() => {
            window.alert("Ошибка получения пользователя")
        });
    };

    useEffect(() => {
        if (token && userLogin) {
            getUserInfo();
        }
    }, [token, userLogin])

    return (
        <div className="profile-page soty-bg">
            <Header>
                <Link to="/main">main</Link>
                <Link to="/conferences">conferences</Link>
                <Link to="/profile">profile</Link>
            </Header>

            <div className="profile-info">
                <div className="contacts-column">
                    <div className="contacts-main card">
                        <FieldWithLabel label="name" value={user?.getName() ?? "Loading..."} />
                        <FieldWithLabel label="surname" value={user?.getSurname() ?? "Loading..."} />
                        <FieldWithLabel label="role" value={user?.getRole() ?? "Loading..."} />
                        <FieldWithLabel label="with us from" value={new Date(user?.getRegDate() ?? "").toLocaleDateString()} />
                        <FieldWithLabel label="contact" value={user?.getContact() ?? "Loading..."} />
                    </div>

                    <div className="contacts-login card">
                        <div className="contacts-field">
                            <span>login</span>
                            <p>{userLogin}</p>
                        </div>
                    </div>
                </div>

                <div className="farms-column">
                    <FarmsTable login={userLogin!} noCreate={true}/>
                </div>
            </div>

            <BeemasterForm />
        </div>
    );
};

export default OtherUserProfilePage;
