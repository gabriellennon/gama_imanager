import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from './schema';

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
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/modules/user/reducer';
import { login } from '../../services/login.service';

type TLoginFormInputs = z.infer<typeof loginFormSchema>

export const Login = () => {
    //Hook react hourter dom
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    //React Hook Form
    const { 
        register, 
        handleSubmit, 
        formState: { isSubmitting, errors, isValid } 
    } = useForm<TLoginFormInputs>({
        resolver: zodResolver(loginFormSchema)
    });


    const submitLogin = (data: TLoginFormInputs) => {
        if(isValid){
            setLoading(true)
            login().then((response) => {
                dispatch(setUser(response.data))
                localStorage.setItem('@userInfo', JSON.stringify({emailUser: response.data}))
                navigate('/')
            })
            .catch((error) => {
                console.error(error)
                toast.error("Ops! Algo deu errado, tente novamente. 😵‍💫")
                setLoading(false);
            })
        }
    }

    return (
        <ContainerHome >    
            <ContainerImage >
                <img src={BackgroundCarPng} alt="" />
            </ContainerImage>
            <ContainerFormLogin>
                <img src={LogoPng} alt="" />
                <FormLogin onSubmit={handleSubmit(submitLogin)}>
                    <ContainerInputs>
                        <label>E-mail</label>
                        <input 
                            type="text" 
                            {...register('email')}
                        />
                        {errors.email && <p>{errors.email?.message}</p>}
                    </ContainerInputs>
                    <ContainerInputs>
                        <label>Senha</label>
                        <input 
                            type="password" 
                            {...register('password')}
                        />
                        {errors.password &&  <p>{errors.password?.message}</p>}
                    </ContainerInputs>
                    <ContainerButtons>
                        <ButtonPrimary 
                            title='Entrar' 
                            type='submit' 
                            disabled={isSubmitting && loading} 
                            isLoading={loading}
                        />
                        <p>Primeira vez aqui? <a>Clique aqui</a></p>
                    </ContainerButtons>
                </FormLogin>
            </ContainerFormLogin>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </ContainerHome>
    )
}