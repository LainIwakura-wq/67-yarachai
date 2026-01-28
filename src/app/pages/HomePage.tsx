import { Link } from '../components/Link';
import { blogPosts } from '../data/blogPosts';
import { Calendar, User } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HomePage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[500px] bg-black">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1769117695482-a85bb90287f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmUlMjBlZHVjYXRpb258ZW58MXx8fHwxNzY5NjI2NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Banner"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/50 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">67 ყარაჩაი საქართველო</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              საგანმანათლებლო მიზნებისთვის შექმნილი პოლიტიკური ორგანიზაცია
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/about" className="px-8 py-3 bg-red-700 text-white hover:bg-red-800 transition-colors">
                გაიგე მეტი
              </Link>
              <Link href="/blog" className="px-8 py-3 bg-white text-black hover:bg-gray-100 transition-colors">
                ბლოგი
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-6 text-center text-black">ჩვენი მისია</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white border-2 border-red-700">
              <h3 className="text-xl font-serif mb-3 text-red-700">განათლება</h3>
              <p className="text-gray-700">
                ჩვენტვის მთავარი არა განათლება, არამედ სიდებილეა. ჩვენ ვგეგმავთ მასიურ
                ტვინის გამორეცხვას 06/07/2067
              </p>
            </div>
            <div className="text-center p-6 bg-white border-2 border-red-700">
              <h3 className="text-xl font-serif mb-3 text-red-700">ჩართულობა</h3>
              <p className="text-gray-700">
                გვკიდია.
              </p>
            </div>
            <div className="text-center p-6 bg-white border-2 border-red-700">
              <h3 className="text-xl font-serif mb-3 text-red-700">განვითარება</h3>
              <p className="text-gray-700">
                კრიტიკული აზროვნების, ლიდერობის და სამოქალაქო 
                უნარების განვითარება მხოლოდ და მხოლოდ ჩვენში.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif text-black">ბოლო პუბლიკაციები</h2>
            <Link href="/blog" className="text-red-700 hover:text-red-800 hover:underline">
              ყველას ნახვა →
            </Link>
          </div>
          <div className="grid gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="border-b-2 border-red-700 pb-8">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <span className="px-3 py-1 bg-red-700 text-white">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="size-4" />
                    {new Date(post.date).toLocaleDateString('ka-GE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="size-4" />
                    {post.author}
                  </span>
                </div>
                <Link href={`/post/${post.id}`}>
                  <h3 className="text-2xl font-serif mb-3 text-black hover:text-red-700">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/post/${post.id}`} 
                  className="text-red-700 hover:text-red-800 hover:underline font-medium"
                >
                  სრულად წაკითხვა →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}