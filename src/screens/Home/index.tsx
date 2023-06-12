import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { NewModal } from "../../components/NewModal"
import { NavBar } from "../../components/NavBar"
import { ContainerHome, ContentTitle, ContentBody } from './styles';
import { cardsHome } from "../../utils/dataCards";
import { Card } from "../../components/Card";

export const Home = () => {
    //Hook react hourter dom
    const navigate = useNavigate();

        //É uma funcao que vai ser executada sempre que a aplicacao for contruida/for aberta ou quando eu quiser em algum momento especifico
        useEffect(() => {
            const userData = localStorage.getItem('@userInfo')
    
            if(!userData){
                navigate('/login')
            }
    
            // O array significa o que ele vai monitorar
        },[])
    
    return (
        <>
            <NavBar />
            <ContainerHome>
                <ContentTitle>
                    <h1>Olá, Gabriel</h1>
                    <p>O que deseja acessar? Escolha abaixo</p>
                </ContentTitle>
                <ContentBody>
                    {cardsHome.map(card => (
                        <Card title={card.title} description={card.description} goTo={card.goTo} key={card.id} />
                    ))}
                </ContentBody>
            </ContainerHome>
                <NewModal 
                    isOpen={false} 
                    onRequestClose={() => {}} 
                    title="Cadastrar Venda"
                    handleSubmitFormModal={() => {}}
                >
                    <input 
                        type="text" 
                        placeholder='Título' 
                    />
                    <input 
                        type="number" 
                        placeholder="Valor" 
                    />
                    <button type="submit">Cadastar</button>
                </NewModal>
        </>
    )
}