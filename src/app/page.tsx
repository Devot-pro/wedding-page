
export default function Home() {
  return (
    <div className="w-dvw">
        <div className="w-dvw h-screen backdrop-blur-sm shadow-xl px-20 flex items-center"
          style={{
          backgroundImage: "url('/images/home-us.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="pl-10">
            <h1 className='text-[#354469] text-5xl font-(family-name:--font-dancing)'>Álefe</h1>
            <h2 className='text-[#5378a5] text-2xl mt-3 font-(family-name:--font-young)'>&</h2>
            <h1 className='text-[#354469] text-5xl font-(family-name:--font-dancing)'>Raissa</h1>
          </div>
        </div>
    </div>
  );
}
