import { Button } from './styles'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export function ButtonPrimary({ title, ...rest }: IButtonProps) {
    return (
        <Button {...rest }>{title}</Button>
    )
}