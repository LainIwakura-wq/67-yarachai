import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { PostPage } from './pages/PostPage';
import { AboutPage } from './pages/AboutPage';
import { PublishPage } from './pages/PublishPage';

function useRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return currentPath;
}

export default function App() {
  const currentPath = useRouter();

  const renderPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    } else if (currentPath === '/blog') {
      return <BlogPage />;
    } else if (currentPath === '/publish') {
      return <PublishPage />;
    } else if (currentPath.startsWith('/post/')) {
      const postId = currentPath.split('/')[2];
      return <PostPage postId={postId} />;
    } else if (currentPath === '/about') {
      return <AboutPage />;
    } else {
      return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}