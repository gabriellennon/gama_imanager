import { CaretRight } from "phosphor-react";
import { ButtonPrimary } from "../../components/Button";
import { NavBar } from "../../components/NavBar";
import {
    Container,
    ContentBody,
    ContentTitle,
    TableSales,
    InfoTable,
    ContainerTable
} from './styles';

export const Sales = () => {
    return (
        <>
            <NavBar />
            <Container>
                <ContentTitle>
                    <h1>
                        <strong>Olá, Gabriel!</strong>
                        Gerencie as vendas abaixo ou cadastre uma nova venda
                    </h1>
                    <ButtonPrimary title='Nova Venda'  />
                </ContentTitle>
                <ContentBody>
                    <InfoTable>
                        <p>Vendas realizadas: <span>13</span></p>
                    </InfoTable>
                    <ContainerTable>
                        <TableSales>
                            <thead>
                                <tr>
                                    <th>Data de venda</th>
                                    <th>Produto</th>
                                    <th>Vendedor</th>
                                    <th>Valor</th>
                                    <th>Forma de pagamento</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>14/05/2022</td>
                                    <td>Carburador</td>
                                    <td>Gabriel Lennon</td>
                                    <td>R$ 500,00</td>
                                    <td>Crédito</td>
                                    <td align="center">
                                        <CaretRight size={24} color="#50555A" weight="bold" />
                                    </td>
                                </tr>
                            </tbody>
                        </TableSales>
                    </ContainerTable>
                </ContentBody>
            </Container>
        </>
    )
}