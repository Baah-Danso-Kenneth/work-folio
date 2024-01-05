import Link from "next/link";

export function Button({link, text}:{link:string;text:string}) {
  return (
     <Link href={link} className="btn">
       {text}
     </Link>
  )
}

