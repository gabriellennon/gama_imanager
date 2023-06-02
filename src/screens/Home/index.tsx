import { Link, NavLink, useNavigate } from "react-router-dom"
import LogoPng from '../../assets/icons/logo.png'
import { ArrowCircleRight, CurrencyCircleDollar, House, Package } from "phosphor-react"
import { useEffect } from "react"

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
            <header>
                <div>
                    <img src={LogoPng} alt="" />
                    <nav>
                        <a href=""></a>
                        <NavLink to="/" title="Home" >
                            <House size={16} color="#50555A" />
                            <span>Home</span>
                        </NavLink>
                        <NavLink to="/vendas" title="Vendas" >
                            <CurrencyCircleDollar size={16} color="#50555A" />
                            <span>Vendas</span>
                        </NavLink>
                        <NavLink to="/estoque" title="Estoque" >
                            <Package size={16} color="#50555A" />
                            <span>Estoque</span>
                        </NavLink>
                    </nav>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </header>
            <div>
                <div>
                    <h1>Olá, Gabriel</h1>
                    <p>O que deseja acessar? Escolha abaixo</p>
                </div>
                <div>
                    <Link to="">
                        <div>
                            <h5>Vendas</h5>
                            <p>Gerencie suas vendas e saídas de estoque</p>
                        </div>
                        <ArrowCircleRight size={25} color="#134E87" />
                    </Link>
                </div>
            </div>
        </>
    )
}