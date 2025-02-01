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
        <h1 className="text-4xl font-bold text-white">Bebooo!</h1>
      </div>
    </div>
  );
}
