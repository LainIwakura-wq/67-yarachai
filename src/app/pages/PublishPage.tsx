import { useState } from 'react';
import { useNavigate } from '../components/Link';

export function PublishPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'დემოკრატია',
    author: ''
  });

  const categories = [
    'დემოკრატია',
    'პოლიტიკური სისტემა',
    'სამოქალაქო საზოგადოება',
    'ადამიანის უფლებები',
    'საერთაშორისო ურთიერთობები',
    'პოლიტიკური განათლება'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new post
    const newPost = {
      id: `post-${Date.now()}`,
      ...formData,
      date: new Date().toISOString().split('T')[0]
    };

    // Get existing posts from localStorage
    const existingPosts = localStorage.getItem('userPosts');
    const posts = existingPosts ? JSON.parse(existingPosts) : [];
    
    // Add new post
    posts.unshift(newPost);
    localStorage.setItem('userPosts', JSON.stringify(posts));

    // Reset form
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: 'დემოკრატია',
      author: ''
    });

    // Navigate to blog page
    navigate('/blog');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-serif mb-4 text-black">სტატიის დამატება</h1>
        <p className="text-xl text-gray-700">
          გააზიარეთ თქვენი აზრები პოლიტიკის, დემოკრატიის და სამოქალაქო საზოგადოების შესახებ
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Author */}
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-black mb-2">
            ავტორი *
          </label>
          <input
            type="text"
            id="author"
            name="author"
            required
            value={formData.author}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
            placeholder="თქვენი სახელი"
          />
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-black mb-2">
            სათაური *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
            placeholder="სტატიის სათაური"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-black mb-2">
            კატეგორია *
          </label>
          <select
            id="category"
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Excerpt */}
        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-black mb-2">
            მოკლე აღწერა *
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            required
            value={formData.excerpt}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border-2 border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
            placeholder="მოკლე აღწერა სტატიის შესახებ"
          />
        </div>

        {/* Content */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-black mb-2">
            სტატიის ტექსტი *
          </label>
          <textarea
            id="content"
            name="content"
            required
            value={formData.content}
            onChange={handleChange}
            rows={15}
            className="w-full px-4 py-2 border-2 border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
            placeholder="დაწერეთ თქვენი სტატია აქ..."
          />
          <p className="mt-2 text-sm text-gray-600">
            გამოიყენეთ ორმაგი ხაზ��ს გადატანა პარაგრაფების გასაყოფად
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-8 py-3 bg-red-700 text-white hover:bg-red-800 transition-colors"
          >
            გამოქვეყნება
          </button>
          <button
            type="button"
            onClick={() => navigate('/blog')}
            className="px-8 py-3 bg-white text-black border-2 border-red-700 hover:bg-gray-50 transition-colors"
          >
            გაუქმება
          </button>
        </div>
      </form>

      {/* Info Box */}
      <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-700">
        <h3 className="font-serif text-lg mb-2 text-black">გაითვალისწინეთ</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• ყველა ველი სავალდებულოა (*)</li>
          <li>• სტატია უნდა იყოს საგანმანათლებლო ხასიათის</li>
          <li>• დაიცავით აკადემიური ეთიკა და ობიექტურობა</li>
          <li>• გამოქვეყნებული სტატიები ხელმისაწვდომი იქნება ყველა მომხმარებლისთვის</li>
        </ul>
      </div>
    </div>
  );
}