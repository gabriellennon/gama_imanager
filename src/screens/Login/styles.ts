import styled from 'styled-components';

export const ContainerHome = styled.div`
    /* background: var(--background-login) url('../../assets/images/backgroundCar.png') center; */
    background: var(--background-login) ;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;

`;

export const ContainerImage = styled.div`
    width: 70%;
`;

export const ContainerFormLogin = styled.div`
    width: 30%;
    padding: 0 1.875rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const FormLogin = styled.form`
    width: 100%;
`;

export const ContainerInputs = styled.div`
    margin: 1.375rem 0;

    label {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.1875rem;
        color: var(--blue-700);
    }

    input {
        width: 100%;
        margin-top: 0.4375rem;
        background-color: #FFF;
        border: 1px solid var(--grey-300);
        border-radius: 6px;
        padding: 0.5rem 0.75rem;
        font-weight: 700;
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin-top: 0.625rem;
        font-size: 0.75rem;
        color: var(--grey-600);

        a {
            font-weight: 700;
        }
    }
`;
