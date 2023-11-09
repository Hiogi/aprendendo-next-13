type ItemSidebarProps = {
  nomeLink: string;
  href: string;
  icone?: React.ReactNode;
}
export default function ItemMenu({ href, nomeLink, icone}: ItemSidebarProps){
  // const sidebar = 'mt-3 hover:text-gray-400 text-';

  return (
    <>
      <li className='mt-3 text-gray-400 text-base hover:bg-sky-800 hover:rounded-sm w-full p-2'>
        <a href={href} className="flex gap-2"> 
          {icone}
          {nomeLink}
        </a>
      </li>
    </>
  );
}