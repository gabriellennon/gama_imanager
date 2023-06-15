import styled from "styled-components";

export const Container = styled.div`
    background: var(--background);
    min-height: 100vh;
    padding: 55px 120px;
`;

export const ContentTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 52px;
    background: #FFF;
    padding: 37px;
    border: 1px solid #D7E5F2;
    border-radius: 4px;

    h1 {
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: var(--grey-400);

        strong {
            color: var(--blue-700);
            margin-right: 6px;
        }
    }
`;

export const ContentBody = styled.div`
    
`;

export const InfoTable = styled.div`
    text-align: right;

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--grey-400);

        span {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: var(--orange-600);
        }
    }
`;

export const ContainerTable = styled.div`
    padding: 30px;
    background: #ffffff;
    box-shadow: 0px 14px 16px rgba(0, 0, 0, 0.11);
    border-radius: 6px;
`;

export const TableSales = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;

    thead {  
        tr {
            th {
                font-weight: 700;
                font-size: 16px;
                line-height: 15px;
                color: var(--grey-400);
                padding: 20px;
            }
        }
    }

    tbody {
        tr {
            background-color: #EAEEF0;
            td {
                color: var(--grey-400);
                padding: 20px;
            }

            &:nth-child(even) {
              background-color: transparent;
            }
        }
    }
`;