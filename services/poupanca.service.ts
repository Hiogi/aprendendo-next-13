import { executeFetch } from "@/lib/utils";

export async function criaPoupanca(idCliente: number) {

  return await executeFetch('http://localhost:3000/api/poupanca/' + idCliente, 'post');
}

export async function pegaContaParaAPoupanca(idCliente: number){

  return await executeFetch('https://localhost:300/api/conta/' + idCliente, 'get');
}

