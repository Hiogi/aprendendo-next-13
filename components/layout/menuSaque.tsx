export default function MenuSaque() {
  return (
    <>
      <div className="h-screen w-full flex-col justify-between   ">
        <div>oi</div>

        <div className="max-w-md w-full mt-28 ml-5">

          <label htmlFor="saque" className="text-gray-700 text-sm">Valor do saque</label>
          <div className="flex items-center justify-center relative mt-2">
            <input
              name="saque"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 "
            />
          </div>

        </div>
      </div>
    </>
  );
}
