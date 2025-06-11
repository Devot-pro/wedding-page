'use Client'
import React from 'react';

import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded className='bg-none border-gray-200 dark:bg-gray-900'>
      <NavbarBrand href="/">
        <h1 className='text-[#354469] text-3xl font-(family-name:--font-dancing)'>A</h1>
        <h2 className='text-[#5378a5] text-1xl font-(family-name:--font-young)'>&</h2>
        <h1 className='text-[#354469] text-3xl font-(family-name:--font-dancing)'>R</h1>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className='bg-[#354469] p-1 rounded-sm cursor-pointer hover:bg-[#5378a5]'>
            <a target="_blank" href="https://wa.me/5581971170399?text=Confirmo%20minha%20presen%C3%A7a%20no%20casamento%20de%20Ra%C3%ADssa%20%26%20%C3%81lefe" className="font-(family-name:--font-marcellus) block px-3 text-white ">CONFIRMAR PRESENÇA</a>
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/gift" className="font-(family-name:--font-marcellus) block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#354469] md:p-0 dark:text-white md:dark:hover:text-[#354469] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
           LISTA DE PRESENTES
        </NavbarLink>
        <NavbarLink target='_blank' href="https://www.google.com/maps/place/Maria+Moura+Eventos/@-7.9241562,-34.8240525,18.03z/data=!4m14!1m7!3m6!1s0x7ab3e7b566ea65b:0x448e07b33f474bb5!2sMaria+Moura+Eventos!8m2!3d-7.924187!4d-34.823889!16s%2Fg%2F11b6nncn4v!3m5!1s0x7ab3e7b566ea65b:0x448e07b33f474bb5!8m2!3d-7.924187!4d-34.823889!16s%2Fg%2F11b6nncn4v?entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D" className="font-(family-name:--font-marcellus) block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#354469] md:p-0 dark:text-white md:dark:hover:text-[#354469] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            LOCAL DO CASAMENTO
        </NavbarLink>
        <NavbarLink href="/gallery" className="font-(family-name:--font-marcellus) block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#354469] md:p-0 dark:text-white md:dark:hover:text-[#354469] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            FOTOS DO EVENTO
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
