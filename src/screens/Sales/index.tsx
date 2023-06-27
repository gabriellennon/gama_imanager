import { useEffect, useState } from 'react';
import { CaretRight } from "phosphor-react";
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import { format } from 'date-fns'
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
import { getSales } from '../../services/sales.service';
import { IPaymentForm, IResponseGetSales } from '../../services/types';

export const Sales = () => {
    const [sales, setSales] = useState<IResponseGetSales[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorRequest, setErrorRequest] = useState(false);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy');
    }

    const numberFormat = (value: number) => {
        const money = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
        return money;
    }

    const paymentFormTranslate = (paymentType: IPaymentForm) => {
        switch (paymentType) {
            case 'credit':
                return 'Crédito'
            case 'debit':
                return 'Débito'
            case 'pix':
                return 'Pix'
            default:
                return 'Dinheiro'
        }
    }

    const getSalesData = () => {
        setLoading(true);
        
        getSales().then((response) => {
            setSales(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error)
            toast.error("Ops! Algo deu errado, tente novamente. 😵‍💫")
            setLoading(false);
            setErrorRequest(true)
        })
    }

    useEffect(() => {
        if (!sales.length) {
            getSalesData();
        }
    },[sales])

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
                    {!loading && !errorRequest && (
                        <InfoTable>
                            <p>Vendas realizadas: <span>{sales.length}</span></p>
                        </InfoTable>
                    )}
                    <ContainerTable>
                        {loading && (
                            <div>
                                <ClipLoader color="#444654" size={40} />
                                <h1>Carregando</h1>
                            </div>
                        )}
                        {!loading && !errorRequest && (
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
                                    {sales.map(sale => (
                                        <tr key={sale.id}>
                                            <td>{formatDate(sale.create_at)}</td>
                                            <td>{sale.product}</td>
                                            {/* @To-DO conversao */}
                                            <td>{sale.seller_id}</td>
                                            <td>{numberFormat(sale.value)}</td>
                                            <td>{paymentFormTranslate(sale.payment_form)}</td>
                                            <td align="center">
                                                <CaretRight size={24} color="#50555A" weight="bold" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </TableSales>
                        )}
                        {!loading && errorRequest && (
                            <div>
                                <h1>Algo deu errado!</h1>
                                <button>Tentar novamente</button>
                            </div>
                        )}
                    </ContainerTable>
                </ContentBody>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </Container>
        </>
    )
}