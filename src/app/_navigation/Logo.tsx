import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/">
            <Image src="/images/logo.png" alt="Logo" className="w-full max-h-[40px]" width={150} height={50}/>
        </Link>
    );
}