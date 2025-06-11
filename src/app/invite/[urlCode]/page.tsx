
import React from 'react';

import { INVITE_LIST } from '@/const/invite-list';

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
      <div className="backdrop-blur-sm shadow-xl px-20 max-sm:px-5 py-24 max-sm:py-18 max-w-lg max-sm:max-w-full w-full text-center"
        style={{
        backgroundImage: "url('/images/invite-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <h1 className='text-black font-(family-name:--font-marcellus)'>CONVITE DE CASAMENTO</h1>
        <div className='p-5'>
          <h1 className='text-[#354469] text-5xl font-(family-name:--font-dancing)'>Álefe</h1>
          <h2 className='text-[#5378a5] text-2xl mt-3 text-center font-(family-name:--font-young)'>&</h2>
          <h1 className='text-[#354469] text-5xl font-(family-name:--font-dancing)'>Raissa</h1>
        </div>
        <div>
          <h3 className='text-black font-(family-name:--font-marcellus)'>Com os corações cheios de gratidão, convidamos vocês para testemunhar o início da noss vida a dois.</h3>
          <h3 className='text-black text-2xl font-(family-name:--font-marcellus) mt-2'>{invited.firstInvitedName} & {invited.secondInvitedName}</h3>
        </div>
        <div className='border-4 flex justify-between items-center p-3 m-5 border-[#354469] relative'>
          <h1  className='text-black font-(family-name:--font-marcellus)'>DOMINGO</h1>
          <div className='bg-[#354469] size-20 rounded-full absolute -inset-4 left-30 max-sm:left-25 flex justify-center items-center'>
            <h1  className='border-[#ffffff] text-white font-(family-name:--font-marcellus) text-3xl'>27</h1>
          </div>
          <h1  className='text-black font-(family-name:--font-marcellus)'>JULHO</h1>
        </div>
        <h1  className='text-black font-(family-name:--font-marcellus)'>15 HORAS</h1>
        <div className='mt-2'>
          <h3 className='text-black font-(family-name:--font-marcellus) w-65 text-left'>
              Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.
          </h3>
          <h1 className='text-black font-(family-name:--font-marcellus) w-65 text-end'>3:14</h1>
        </div>
      </div>
  
    </div>
  );
};

