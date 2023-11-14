export default function DashboardMenu() {
  let numeroAgencia = "0";
  let numeroContaCorrente = "0";
  let saldoDaConta = 0;

  return (
    <>
      <div className="flex">
        <div className="mr-3">Ag {numeroAgencia}</div>
      </div>
      <div className="mt-16">R$ {saldoDaConta}</div>
    </>
  );
}
