import styled from 'styled-components';

export const Container = styled.form`

    h2 {
        color: var(--grey-600);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.25rem;
        background: #e7e9ee;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--grey-400);
        }

        /* All input before, have margin-top */
        /* Todo input que tiver antes dele, tenha margin-top */
        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        background: var(--green-500);
        color: #FFF;
        font-weight: 600;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;