import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ButtonPrimary } from '.';


describe('<ButtonPrimary />', () => {
    it('should render the button', () => {
        render(
            <ButtonPrimary title="Entrar" />
        )

        const buttonLogin = screen.getAllByRole('button', { name: /entrar/i });

        waitFor(() => {
            expect(buttonLogin).toBeInTheDocument();
        })
    })

    it('should have onClick button', () => {
        const onClickMockButton = jest.fn();

        render(
            <ButtonPrimary title="Entrar" onClick={onClickMockButton} />
        )

        const button = screen.getByRole('button', { name: /entrar/i });

        waitFor(() => {
            fireEvent.click(button)
            expect(onClickMockButton).toHaveBeenCalledTimes(1);
        })
    })

})