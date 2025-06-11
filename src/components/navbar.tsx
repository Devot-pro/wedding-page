'use Client'
import React from 'react';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav classNameName="bg-none border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <h1 className='text-[#354469] text-5xl font-(family-name:--font-dancing)'>A</h1>
                    <h2 className='text-[#5378a5] text-2xl mt-3 text-center font-(family-name:--font-young)'>&</h2>
                    <h1 className='text-[#354469] text-5xl font-(family-name:--font-dancing)'>R</h1>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <MenuIcon color='#354469'/>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="#" className="font-(family-name:--font-marcellus) block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#354469] md:p-0 dark:text-white md:dark:hover:text-[#354469] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">LISTA DE PRESENTES</Link>
                        </li>
                        <li>
                            <a target='_blank' href="https://www.google.com/maps/place/Maria+Moura+Eventos/@-7.9241562,-34.8240525,18.03z/data=!4m14!1m7!3m6!1s0x7ab3e7b566ea65b:0x448e07b33f474bb5!2sMaria+Moura+Eventos!8m2!3d-7.924187!4d-34.823889!16s%2Fg%2F11b6nncn4v!3m5!1s0x7ab3e7b566ea65b:0x448e07b33f474bb5!8m2!3d-7.924187!4d-34.823889!16s%2Fg%2F11b6nncn4v?entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D" className="font-(family-name:--font-marcellus) block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#354469] md:p-0 dark:text-white md:dark:hover:text-[#354469] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">LOCAL DO CASAMENTO</a>
                        </li>
                        <li>
                            <Link href="/gallery" className="font-(family-name:--font-marcellus) block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#354469] md:p-0 dark:text-white md:dark:hover:text-[#354469] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FOTOS DO EVENTO</Link>
                        </li>
                        <li className='bg-[#354469] p-2 rounded-sm cursor-pointer hover:bg-[#5378a5]'>
                            <a href="https://wa.me/5581971170399?text=Confirmo%20minha%20presen%C3%A7a%20no%20casamento%20de%20Ra%C3%ADssa%20%26%20%C3%81lefe" className="font-(family-name:--font-marcellus) block py-2 px-3 text-white ">CONFIRMAR PRESENÇA</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    ) 
}
