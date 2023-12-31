import { Method } from "@/types/types";


export function executeFetch(url: string, method: Method, data?: any) {
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export async function getFetch(url: string) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },    
  });

  return response.json();
}


export function isValidCPF(CPF: string) {
  if (typeof CPF !== "string") {
    return false;
  }

  CPF = CPF.replace(/[^\d]+/g, "");

  if (CPF.length !== 11 || !!CPF.match(/(\d)\1{10}/)) {
    return false;
  }

  const values = CPF.split("").map((el) => +el);
  const rest = (count: any) =>
    ((values
      .slice(0, count - 12)
      .reduce((soma, el, index) => soma + el * (count - index), 0) *
      10) %
      11) %
    10;

  return rest(10) === values[9] && rest(11) === values[10];
}

export function generateRandomNumber() {
  const length = 5;
  const min = 10 ** (length - 1);
  const max = 10 ** length - 1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}