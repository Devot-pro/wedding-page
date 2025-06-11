import Image from "next/image";
import Wait from '/public/images/wait.png'
export default function Gallery() {
  return (
    <div className="w-dvw flex flex-col items-center">
        <Image src={Wait} alt="Aguardando" width={500} height={500} />
    </div>
  );
}
