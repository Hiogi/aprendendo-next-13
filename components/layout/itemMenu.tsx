import Link from 'next/link'

type ItemSidebarProps = {
  nomeLink: string;
  href: string;
  icone?: React.ReactNode;
  className?: string
}
export default function ItemMenu({ href, nomeLink, icone, className}: ItemSidebarProps){
  // const sidebar = 'mt-3 hover:text-gray-400 text-';

  return (
    <>
      <li className={`mt-3 text-gray-400 text-base hover:text-white w-full p-2 ${className} `}>
        <Link href={href} className="flex gap-2"> 
          {icone}
          {nomeLink}
        </Link>
      </li>
    </>
  );
}