import { useEffect, useState } from 'react';
import { Table } from '../../components/Table';
import { Tbody } from '../../components/Table/Tbody';
import { Td } from '../../components/Table/Td';
import { Th } from '../../components/Table/Th';
import { Thead } from '../../components/Table/Thead';
import { Tr } from '../../components/Table/Tr';

interface Props {
    ispb: string;
    name: string;
    code: string;
    fullName: string;
}

export default function TableHome() {
    const [data, setData] = useState<Props[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(
                    'https://brasilapi.com.br/api/banks/v1',
                );
                const data = await response.json();

                setData(data);
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="flex w-full h-screen p-16">
            <div className="flex w-5xl mx-auto">
                {error ? (
                    <h1>Ocorreu um erro</h1>
                ) : loading ? (
                    <h1>Carregando dados...</h1>
                ) : (
                    <Table>
                        <Thead>
                            <Tr className="h-16 bg-blue-800 text-white">
                                <Th>ISPB</Th>
                                <Th>Código</Th>
                                <Th>Nome</Th>
                                <Th>Nome Completo</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((bank) => (
                                <Tr>
                                    <Td>{bank.ispb}</Td>
                                    <Td>{bank.code}</Td>
                                    <Td>{bank.name}</Td>
                                    <Td>{bank.fullName}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                )}
            </div>
        </div>
    );
}
