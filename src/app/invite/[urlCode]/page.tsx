
import React from 'react';
import { Check, Gift,  MapPin, ImageIcon } from 'lucide-react'
import { INVITE_LIST } from '@/const/invite-list';
import Link from 'next/link';

export default async function Invite(
    { params }: { params: Promise<{ urlCode: string } > }
) {
    const urlCode = (await params).urlCode;
    const invited = INVITE_LIST.find(invited => invited.urlCode === urlCode)

    if (!invited)
        return <p>Not Found</p>

  return (
    <div
      className="bg-[#B0CDDF] min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-1"
    
    >
      <div className="backdrop-blur-sm shadow-xl px-20 max-sm:px-5 py-24 max-w-lg max-sm:max-w-full w-full text-center"
        style={{
        backgroundImage: "url('/images/invite-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <h1 className='text-black font-(family-name:--font-marcellus)'>CONVITE DE CASAMENTO</h1>
        <div className='p-5'>
          <h1 className='text-[#354469] text-3xl font-(family-name:--font-dancing)'>Álefe</h1>
          <h2 className='text-[#5378a5] text-1xl mt-3 text-center font-(family-name:--font-young)'>&</h2>
          <h1 className='text-[#354469] text-3xl font-(family-name:--font-dancing)'>Raissa</h1>
        </div>
        <div>
          <h3 className='text-black font-(family-name:--font-marcellus)'>Com os corações cheios de gratidão, convidamos vocês para testemunhar o início da nossa vida a dois.</h3>
          <h3 className='text-black text-2xl font-(family-name:--font-marcellus) mt-2'>{invited.firstInvitedName} {invited.secondInvitedName? `& ${invited.secondInvitedName}`: ''}</h3>
        </div>
        <div className='border-4 flex justify-between items-center p-3 m-5 border-[#354469]'>
          <h1  className='text-black font-(family-name:--font-marcellus)'>DOMINGO</h1>
          <div className='bg-[#354469] size-10 rounded-full flex justify-center items-center'>
            <h1  className='border-[#ffffff] text-white font-(family-name:--font-marcellus) text-2xl'>27</h1>
          </div>
          <h1  className='text-black font-(family-name:--font-marcellus) pl-4'>JULHO</h1>
        </div>
        <h1  className='text-black text-2xl font-(family-name:--font-marcellus)'>Ás 15 HORAS</h1>
        <div className='mt-2'>
          <h3 className='text-black font-(family-name:--font-marcellus) w-65 text-left'>
              Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.
          </h3>
          <h1 className='text-black font-(family-name:--font-marcellus) w-65 text-end'>Colossenses 3:14</h1>
        </div>
        <div className='grid grid-cols-4 gap-6 mt-4'>
          <a className="bg-[#354469] border-2 hover:bg-[#5378a5] shadow-xl flex items-center justify-center size-14 rounded-full" target="_blank" href="https://wa.me/5581971170399?text=Confirmo%20minha%20presen%C3%A7a%20no%20casamento%20de%20Ra%C3%ADssa%20%26%20%C3%81lefe">
            <Check className="h-5 w-5 text-white" />
          </a>
          <Link href="/gift"  className="bg-[#5378a5] border-2 hover:bg-[#354469] shadow-xl flex items-center justify-center size-14 rounded-full" target="_blank">
            <Gift className="h-5 w-5 text-white" />
          </Link>
          <a className="bg-[#5378a5] border-2 hover:bg-[#354469] shadow-xl flex items-center justify-center size-14 rounded-full" target="_blank" href="https://www.google.com/maps/place/Maria+Moura+Eventos/@-7.9241562,-34.8240525,18.03z/data=!4m14!1m7!3m6!1s0x7ab3e7b566ea65b:0x448e07b33f474bb5!2sMaria+Moura+Eventos!8m2!3d-7.924187!4d-34.823889!16s%2Fg%2F11b6nncn4v!3m5!1s0x7ab3e7b566ea65b:0x448e07b33f474bb5!8m2!3d-7.924187!4d-34.823889!16s%2Fg%2F11b6nncn4v?entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D">
            <MapPin className="h-5 w-5 text-white" />
          </a>
          <Link href="/gallery" className="bg-[#5378a5] border-2 hover:bg-[#354469] shadow-xl flex items-center justify-center size-14 rounded-full" target="_blank">
            <ImageIcon className="h-5 w-5 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

