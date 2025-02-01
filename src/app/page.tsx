import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/images/bg.jpg"
        fill
        alt="Background image"
        className="object-cover brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-white">Bebooo!</h1>
          <div className="flex flex-col justify-center w-full">
            <p className="text-center">Mali korak za nas,</p>
            <p className="text-center">Veliki za Svijetli Raj</p>
          </div>
        </div>
      </div>
    </div>
  );
}
