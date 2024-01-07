import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between w-full max-w-[1280px] mx-auto h-16 items-center">
        <div>
            <h2 className="text-2xl font-bold">Portfolio</h2>
        </div>
      <nav>
        <ul className="flex justify-center gap-12  list-none">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/gallary">Gallary</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
