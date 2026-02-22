import Image from "next/image";

export default function LogoBanner() {
  return (
    <div className="w-full flex items-center justify-center py-6 px-6" style={{ backgroundColor: "white" }}>
      <Image
        src="/logo.jpg"
        alt="SupplyConsult GmbH"
        width={300}
        height={93}
        className="object-contain"
        priority
      />
    </div>
  );
}
