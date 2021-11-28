import React, {useState} from 'react';
import "./Authentication.css"
import Input from "../../utils/input/input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
        <div className="authentication">
            <div className="authentication__header">Регистрация</div>
            <Input value={email} setValue={setEmail} type="email" placeholder="Введите email..."/>
            <Input valee={password} setValue={setPassword} type="password" placeholder="Ведите пароль..."/>
            <button className="authentication__btn" onClick={() => registration(email,password)}>Зарегистрироваться</button>
        </div>
    );
};

export default Registration;