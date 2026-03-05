import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="bg-orange-500 text-white h-24 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex justify-center h-full  items-center">
                <div className="flex w-full justify-between items-center h-16">
                    <Link href="/" className="flex items-center hover:opacity-90 transition-opacity bg-white rounded-xl">
                        <Image
                            src="/uploads/logo1.png"
                            alt="Store Online Logo"
                            
                            width={90}
                            height={90}
                            className="object-contain"
                        />
                    </Link>
                    <div className="flex space-x-6">
                        <Link href="/" className="hover:text-orange-100 transition-colors font-medium">
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
