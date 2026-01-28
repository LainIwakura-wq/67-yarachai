import { Link } from '../components/Link';
import { blogPosts } from '../data/blogPosts';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

interface PostPageProps {
  postId: string;
}

export function PostPage({ postId }: PostPageProps) {
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

  const post = allPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4 text-black">სტატია ვერ მოიძებნა</h1>
          <Link href="/blog" className="text-red-700 hover:text-red-800 hover:underline">
            ← დაბრუნება ბლოგზე
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/blog" className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 hover:underline mb-8">
        <ArrowLeft className="size-4" />
        დაბრუნება ბლოგზე
      </Link>

      <article>
        <div className="mb-8">
          <span className="px-3 py-1 bg-red-700 text-white text-sm">{post.category}</span>
        </div>

        <h1 className="text-4xl font-serif mb-6 leading-tight text-black">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 mb-8 text-sm text-gray-600 pb-8 border-b-2 border-red-700">
          <span className="flex items-center gap-2">
            <User className="size-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="size-4" />
            {new Date(post.date).toLocaleDateString('ka-GE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-800 leading-relaxed whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* Related Posts */}
      <div className="mt-16 pt-8 border-t-2 border-red-700">
        <h2 className="text-2xl font-serif mb-6 text-black">სხვა სტატიები</h2>
        <div className="grid gap-6">
          {allPosts
            .filter(p => p.id !== postId && p.category === post.category)
            .slice(0, 2)
            .map(relatedPost => (
              <div key={relatedPost.id} className="border-l-4 border-red-700 pl-4">
                <Link href={`/post/${relatedPost.id}`}>
                  <h3 className="font-serif text-lg mb-2 text-black hover:text-red-700">
                    {relatedPost.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600">{relatedPost.excerpt}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}