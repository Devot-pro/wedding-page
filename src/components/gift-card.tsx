"use client";
import { Card, ClipboardWithIconText } from "flowbite-react";
import Image, { StaticImageData } from "next/image";

type Props = {
    name: string;
    value: string;
    description: string;
    pixCopyPaste: string;
    imgSrc: string | StaticImageData;
    imgAlt: string;
    qrCode: string;
}
export default function GiftCard({ imgAlt, imgSrc, description, name, pixCopyPaste, qrCode, value }: Props) {
    function renderImage() {
        return <Image width={1000} height={350} src={imgSrc} alt={imgAlt}/>
    }
    return (
           <Card  className="bg-[#B0CDDF] h-150" renderImage={renderImage}
            >
                <div className="overflow-y-hidden">
                    <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white top-5">R$ {value}</h1>
                    <h1 className="font-(family-name:--font-marcellus) text-2xl font-bold tracking-tight text-black dark:text-white">
                        {name}
                    </h1>
                </div>
                <span className="bt-4 text-1xl overflow-y-hidden">{description}</span>
                <div className="flex justify-center">
                    <Image width={120} height={120} src={qrCode} alt="QRCode"/>
                </div>
                <div className="overflow-y-hidden">
                    <div className="relative">
                        <label htmlFor="npm-install" className="sr-only">
                            Label
                        </label>
                        <input
                            id="npm-install"
                            type="text"
                            className="col-span-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            value="Copiar código do QR Code"
                            disabled
                            readOnly
                        />
                        <ClipboardWithIconText valueToCopy={pixCopyPaste} />
                    </div>
                </div>
                
        </Card>
    )
}