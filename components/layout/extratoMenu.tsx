import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { getExtrato } from "@/services/extrato.service"
import { getServerSession } from "next-auth"

export default async function ExtratoMenu() {
  
  const session = await getServerSession(nextAuthOptions)
  
  const extrato = await getExtrato(Number(session?.user.id));
  
  return (
    <>
      <div className="flex flex-col justify-center bg-slate-800 text-white">
        <div className="flex justify-center">
          <table>
            <tbody>
              {extrato.map((transacoes) => (
                <tr key={transacoes.contaId} className="border-2 border- rounded flex flex-col mb-2 bg-[#c29661] font-semibold text-black">
                  <td className="pl-1 pr-2 py-2 mb-">{transacoes.contaId}</td>
                  <td className="pl-1 pr-2 py-2">R$: {transacoes.valor}</td>
                  <td className="pl-1 pr-2 py-2">Ação: {transacoes.tipoTransacao}</td>
                  <td className="pl-1 pr-2 py-2">Destino: {transacoes.contaDestinoId ? transacoes.contaDestinoId : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}