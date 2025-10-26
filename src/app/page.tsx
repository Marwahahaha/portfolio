import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <div className="w-1/2 relative">
        <Image
          src="/profile-image.png"
          alt="Profile Image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="w-1/2 flex items-center justify-center p-8">
        <nav>
          <ul className="space-y-6 text-lg">
            <li>
              <Link
                href="/about"
                className="hover:text-gray-600 dark:text-zinc-50 dark:hover:text-gray-400 transition-colors">
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="#posts"
                className="hover:text-gray-600 dark:text-zinc-50 dark:hover:text-gray-400 transition-colors">
                Blog Posts
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-gray-600 dark:text-zinc-50 dark:hover:text-gray-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
