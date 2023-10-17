export default function PaginaCentral() {
  let saldo = "";

  return (
    <div className="text-white">
      <div className="h-screen w-[1135px] flex flex-col justify-center items-center">
        <div className="mb-4 text-3xl">Saldo da conta</div>
        <div className="text-2xl">R$ {saldo}</div>
      </div>

    </div>
  );
}
