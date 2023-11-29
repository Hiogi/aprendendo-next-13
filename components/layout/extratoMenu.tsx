import { getExtrato } from "@/services/extrato.service"

export default function ExtratoMenu() {

  let valor = 1;
  let acao = 'nada';
  let destino = 'conta';
  let feito = '32 de fevereiro';

  async function listaExtrato(){
    const extrato = await getExtrato();
    console.log(extrato.json());
   return;
  }
  listaExtrato()

  
  return (
    <>
      <div className="flex flex-col items-center w-full ">
        <div className="bg-gray-700 border border-zinc-800 rounded py-4 px-2 bg- mt-20">
            <ul className="text-gray-400">
              <li className="pb-2">Valor: {valor} </li>
              <li className="pb-2">Ação: {acao}</li>
              <li className="pb-2">Destino: {destino}</li>
              <li>Feito em: {feito}</li>
            </ul>
        </div>
      </div>
    </>
  )
}