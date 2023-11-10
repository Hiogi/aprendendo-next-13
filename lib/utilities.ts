/**
 * Format a name First and Last name
 *
 * @example
 * formatNameFirstAndLast('nelis Nelson Nazaré Pereira')
 * @param name {string} - Name to be formatted.
 * @returns  formatted name - Nelis Pereira
 */
export function formatNameFirstAndLast(name: string) {
  let firstAndLastName = name.split(" ");

  return firstAndLastName.slice(0, 1) + " " + firstAndLastName.slice(-1);
}

/**
 * Format a name First and Last name
 *
 * @example
 * formatNameFirstAndLast('nelis Nelson Nazaré Pereira')
 * @param name {string} - Name to be formatted.
 * @returns  formatted name - Nelis
 */
export function formatFirstName(name: string) {
  let firstAndLastName = name.split(" ");

  return firstAndLastName.slice(0, 1).toString();
}

/**
 * Remove text accent
 *
 * @example
 * formatWithoutAccent('Macapá')
 * @param str {any} - text.
 * @returns text without accent
 */
export function formatWithoutAccent(str: string) {
  return str
    .replace(/[aáã]/gi, '[aáã]')
    .replace(/[eé]/gi, '[eé]')
    .replace(/[ií]/gi, '[ií]')
    .replace(/[oóõ]/gi, '[oóõ]')
    .replace(/[uú]/gi, '[uú]')
    .replace(/[cç]/gi, '[cç]');
}

/**
 * Format string to just number
 *
 * @example
 * formatNumberOnly('68.900-074')
 * @param str {string} - String with number and others caracteres.
 * @returns only numbers -  68900074
 */
export function formatNumberOnly(str:string) {
  return str.replace(/[^0-9]/g,'');
}

/**
 * @example
 * formatZipCodeToScreen(68900000)
 *
 * @param zipCode {string} Zip code to be formatted
 * @returns Zip Code formated - 68900-000
 */
export function formatZipCodeToScreen(zipCode: string) {
  return zipCode.replace(/(\d{5})(\d{3})/, "$1-$2");
}

/**
 * @example formatCPFtoScreen('12345678900')
 * @param cpf {string} - cpf number
 * @returns formatted cpf - 123.456.789-00
 */
export function formatCPFtoScreen(cpf: string) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

/**
 * Format a name
 *
 * @example
 * formatName('cidade DE MACAPÁ')
 * @param name {string} - Name to be formatted.
 * @returns  formatted name - Cidade de Macapá
 */
export function formatName(name: string) {
  return name
    .split(' ')
    .map((word) => {
      const lowercaseWord = word.toLocaleLowerCase();

      if (word.length <= 1) return lowercaseWord;

      if (['de', 'da', 'do', 'ao'].includes(lowercaseWord)) {
        return lowercaseWord;
      }

      const result =
        word[0].toLocaleUpperCase() +
        lowercaseWord.slice(1, word.length);
      const tracoIndex = result.indexOf('-');

      if (tracoIndex === -1 || tracoIndex === result.length - 1) {
        return result;
      }

      return (
        result.slice(0, tracoIndex + 1) +
        result[tracoIndex + 1].toLocaleUpperCase() +
        result.slice(tracoIndex + 2)
      );
    })
    .join(' ');
}

/**
 * Validate CPF
 * @param cpf
 * @returns  True or False
 */
export function isValidCPF(cpf: string) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
  const cpfs = cpf.split('');
  const validator = cpfs
    .filter((digit, index, array) => index >= array.length - 2 && digit)
    .map((el) => +el);
  const toValidate = (pop: number) =>
    cpfs
      .filter((digit, index, array) => index < array.length - pop && digit)
      .map((el) => +el);
  const rest = (count: number, pop: number) =>
    ((toValidate(pop).reduce((soma, el, i) => soma + el * (count - i), 0) *
      10) %
      11) %
    10;
  return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]);
}

/**
 *
 * @param error
 * @returns  Message from fecth error
 */
export function getMessageError(error: any) {
  if (
    typeof error === 'object' &&
    typeof error['response'] === 'object' &&
    typeof error['response']['data'] === 'object' &&
    typeof error['response']['data']['message'] === 'string'
  ) {
    return error['response']['data']['message'];
  }
}


/**
 *
 * @param length
 * @returns Random ID
 */
export function generateID(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}