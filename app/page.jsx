import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image
          src="/Landing.svg"
          alt="Hey"
          width={650}
          height={300}
          className="landing-img"
        />
      </div>

      HELLLLLLLOOOOOOOOOOOOOOOOOOOOOOOOOO The WORLDDDDDDDDDDDDDDDD
      <Link href="/auth">Signup</Link>
    </main>
  );
}
