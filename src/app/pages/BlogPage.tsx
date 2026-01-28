import { Link } from '../components/Link';
import { blogPosts } from '../data/blogPosts';
import { Calendar, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ყველა');
  const [allPosts, setAllPosts] = useState(blogPosts);

  useEffect(() => {
    // Load user posts from localStorage
    const userPostsStr = localStorage.getItem('userPosts');
    if (userPostsStr) {
      const userPosts = JSON.parse(userPostsStr);
      // Combine user posts with existing blog posts
      setAllPosts([...userPosts, ...blogPosts]);
    }
  }, []);

  const categories = ['ყველა', ...Array.from(new Set(allPosts.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'ყველა' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-serif mb-4 text-black">ბლოგი</h1>
        <p className="text-xl text-gray-700">
          სტატიები პოლიტიკის, დემოკრატიის და სამოქალაქო საზოგადოების შესახებ
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex gap-2 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 border-2 transition-colors ${
              selectedCategory === category
                ? 'bg-red-700 text-white border-red-700'
                : 'bg-white text-black border-red-700 hover:bg-red-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts List */}
      <div className="grid gap-8">
        {filteredPosts.map((post) => (
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
              <h2 className="text-2xl font-serif mb-3 text-black hover:text-red-700">
                {post.title}
              </h2>
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

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 text-gray-600">
          <p>ამ კატეგორიაში სტატიები არ არის.</p>
        </div>
      )}
    </div>
  );
}