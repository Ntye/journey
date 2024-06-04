import Image from "next/image"
import "../styles/auth.css"
export default function AuthLayout({ children }) {
  return (
    <section>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="logo"
        width={300}
        height={440}
        priority
      />
      {children}
    </section>
  )

}

