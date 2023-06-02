import BackgroundCarPng from '../../assets/images/backgroundCar.png';
import LogoPng from '../../assets/icons/logo.png';

import {
    ContainerHome,
    ContainerImage,
    ContainerFormLogin,
    FormLogin,
    ContainerInputs,
    ContainerButtons,
} from './styles';
import { ButtonPrimary } from '../../components/Button';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    // Hook de estado 
    // const [nomeDaVariavel, nomedaFuncaoQuevaiMudarOEstado] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    //Hook react hourter dom
    const navigate = useNavigate();


    const submitLogin = (event: FormEvent) => {
        event.preventDefault();
        if (email.length && password.length) {
            localStorage.setItem('@userInfo', JSON.stringify({ emailUser: email}))
            navigate('/')
        }
    }

    return (
        <ContainerHome >
            <ContainerImage >
                <img src={BackgroundCarPng} alt="" />
            </ContainerImage>
            <ContainerFormLogin>
                <img src={LogoPng} alt="" />
                <FormLogin onSubmit={submitLogin}>
                    <ContainerInputs>
                        <label>E-mail</label>
                        <input 
                            type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </ContainerInputs>
                    <ContainerInputs>
                        <label>Senha</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </ContainerInputs>
                    <ContainerButtons>
                        <ButtonPrimary type="submit" title='Entrar' />
                        <p>Primeira vez aqui? <a>Clique aqui</a></p>
                    </ContainerButtons>
                </FormLogin>
            </ContainerFormLogin>
        </ContainerHome>
    )
}