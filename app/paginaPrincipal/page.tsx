import MenuEsquerda from "./components/menuEsquerda";
import PaginaCentral from "./components/paginaCentral";

export default function PaginaPrincipal() {
  


  return(
    <div className="h-screen bg-pgPrincipal flex">
      <div className="w-1/4 flex flex-col bg-menu">
        <div className="m-2">
          <MenuEsquerda />
        </div>
      </div>
      <div className="w-screen flex"> 
        <PaginaCentral />
      </div>
      <div className="w-60 flex justify-end text-sm text-white mr-2 mt-2">
        <a href="localhost:3000/">Logout</a>
      </div>
    </div>)
}