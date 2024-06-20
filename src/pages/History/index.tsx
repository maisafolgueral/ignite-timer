import { HistoryContainer, HistoryList } from "./styles";

export function History() {
    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 minutos</td>
                            <td>Há cerca de 2 meses</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa 2</td>
                            <td>20 minutos</td>
                            <td>Há cerca de 2 semanas</td>
                            <td>Em andamento</td>
                        </tr>
                        <tr>
                            <td>Tarefa 3</td>
                            <td>50 minutos</td>
                            <td>Há cerca de 5 meses</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa 4</td>
                            <td>10 minutos</td>
                            <td>Há cerca de 1 semana</td>
                            <td>Interrompido</td>
                        </tr>
                        <tr>
                            <td>Tarefa 5</td>
                            <td>30 minutos</td>
                            <td>Há cerca de 8 meses</td>
                            <td>Em andamento</td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}