"use client"; // Lägg till denna rad

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    MyApp
                </Link>

                <ul className="flex space-x-6">
                    <li>
                        <Link
                            href="/"
                            className={`hover:text-blue-200 transition ${pathname === '/' ? 'font-bold border-b-2 border-white' : ''}`}
                        >
                            Hem
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={`hover:text-blue-200 transition ${pathname === '/about' ? 'font-bold border-b-2 border-white' : ''}`}
                        >
                            Om oss
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={`hover:text-blue-200 transition ${pathname === '/contact' ? 'font-bold border-b-2 border-white' : ''}`}
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}