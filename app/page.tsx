import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">
        Hola Mundo!!!
        {1+1}
        </span>
        <Link href={'/about'}>About Page</Link>
        
    </main>
  );
}
