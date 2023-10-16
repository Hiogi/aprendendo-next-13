import MenuEsquerda from "./components/menuEsquerda";
import PaginaCentral from "./components/paginaCentral";

export default function PaginaPrincipal() {
  return(
    <div className="h-screen bg-home flex">
      <div className="w-2/4 flex flex-col bg-menu">
        <div className="m-2">
          <MenuEsquerda />
        </div>
      </div>
      <div className="w-screen flex justify-center"> 
        <PaginaCentral />
      </div>
      <div className="w-screen flex justify-end">
        oi
      </div>
    </div>)
}