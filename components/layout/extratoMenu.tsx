import { getExtrato } from "@/services/extrato.service"

export default async function ExtratoMenu() {
  const extrato = await getExtrato();
  
  return (
    <>
      <div className="flex flex-col items-center w-full ">
        <div className="bg-gray-700 border border-zinc-800 rounded py-4 px-2 bg- mt-20">
            {extrato.map((transacoes: any) => (
              <table key={transacoes.contaId}>
                <tbody>
                  <tr >
                    <td>{transacoes.valor}</td>
                  </tr>
                </tbody>
              </table>
            ))}
        </div>
      </div>
    </>
  )
}