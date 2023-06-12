import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    :root {
        --background-login: #F7F8FD;
        --background: #ECF0F3;

        --blue-400: #134E87;
        --blue-500: #114871;
        --blue-700: #05032E;

        --green-500: #00875F;

        --grey-200: #EAEEF0;
        --grey-300: #B0B6BB;
        --grey-400: #50555A;
        --grey-600: #303030;

        --orange-600: #F56C00;

        --red-600: #FF5C5C
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        /* overlay occupying all screen  */
        /* Ocupando tela toda o overlay */
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        /* White box of the modal stay always in the middle */
        /* Box branco do modal ficar sempre no meio */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

`