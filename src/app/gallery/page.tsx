import Image from "next/image";
import Wait from '/public/images/wait.png'
import { Card,  ClipboardWithIconText } from "flowbite-react";
export default function Gallery() {
  return (
    <div className="w-dvw flex flex-col items-center">
         <Card className="w-full px-20 py-5 my-2 max-sm:px-0">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Local do Evento:
            </h5>
            <div className="grid w-full max-w-124">
              <div className="relative">
                <label htmlFor="npm-install" className="sr-only">
                  Label
                </label>
                <input
                  id="npm-install"
                  type="text"
                  className="col-span-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  value="R. Humberto Pimentel Costa, 285 - Janga, Paulista - PE, 53437-820"
                  disabled
                  readOnly
                />
                <ClipboardWithIconText valueToCopy="R. Humberto Pimentel Costa, 285 - Janga, Paulista - PE, 53437-820" />
              </div>
          </div>
        </Card>
        <Image src={Wait} alt="Aguardando" width={500} height={500} />
    </div>
  );
}
