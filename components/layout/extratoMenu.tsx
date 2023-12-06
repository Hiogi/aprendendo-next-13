import { getExtrato } from "@/services/extrato.service"

export default async function ExtratoMenu() {
  const extrato = await getExtrato();
  
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col justify-center bg-slate-800 text-white">
        <div className="flex justify-center">
          <table>
            <tbody>
              {extrato.map((transacoes) => (
                <tr key={transacoes.contaId} className="border rounded flex flex-col mb-2 ">
                  <td className="px-2 py-4 mb-">{transacoes.contaId}</td>
                  <td className="px-2 py-4">R$: {transacoes.valor}</td>
                  <td className="px-2 py-4">Ação: {transacoes.tipoTransacao}</td>
                  <td className="px-2 py-4">Destino: {transacoes.contaDestinoId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}