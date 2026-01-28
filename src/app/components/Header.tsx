import { Link } from './Link';

export function Header() {
  return (
    <header className="border-b border-red-700 bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-serif text-red-700">67 ყარაჩაი საქართველო</h1>
          </Link>
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link href="/" className="text-black hover:text-red-700 transition-colors">
                  მთავარი
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-black hover:text-red-700 transition-colors">
                  ბლოგი
                </Link>
              </li>
              <li>
                <Link href="/publish" className="text-black hover:text-red-700 transition-colors">
                  სტატიის დამატება
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-red-700 transition-colors">
                  ჩვენს შესახებ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}