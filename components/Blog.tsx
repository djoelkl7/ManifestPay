
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

// Define the structure of a blog post
interface BlogPost {
  image: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  author: {
    name: string;
    avatar: string;
  };
  slug: string;
}

// Dummy data for blog posts
const blogPosts: BlogPost[] = [
  {
    image: 'https://images.unsplash.com/photo-1611974717482-482bc6ee3011?auto=format&fit=crop&q=80&w=800',
    category: 'Market Insights',
    date: 'July 15, 2024',
    title: 'Navigating Volatility: Strategies for a Changing Market',
    summary: 'The financial landscape is ever-evolving. Discover expert strategies to protect your portfolio and identify new opportunities amidst market uncertainty.',
    author: {
      name: 'John Carter',
      avatar: 'https://picsum.photos/100/100?random=6',
    },
    slug: '#',
  },
  {
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    category: 'Technology',
    date: 'July 10, 2024',
    title: 'The Rise of AI in Financial Planning and Investment',
    summary: 'Artificial intelligence is revolutionizing how we manage wealth. Learn how our platform leverages AI to provide personalized, data-driven financial advice.',
    author: {
      name: 'Emily Davis',
      avatar: 'https://picsum.photos/100/100?random=8',
    },
    slug: '#',
  },
  {
    image: 'https://images.unsplash.com/photo-1454165833767-131435bb4496?auto=format&fit=crop&q=80&w=800',
    category: 'Retirement',
    date: 'July 5, 2024',
    title: '5 Essential Steps to Secure Your Retirement Future',
    summary: 'Planning for retirement can seem daunting. We break it down into five manageable steps to help you build a secure and comfortable future.',
    author: {
      name: 'Michael Chen',
      avatar: 'https://picsum.photos/100/100?random=3',
    },
    slug: '#',
  },
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-[#0B0E14]/40 border border-white/5 transition-all duration-500 backdrop-blur-xl rounded-[2rem] overflow-hidden h-full flex flex-col group hover:border-electric-blue/30 hover:-translate-y-2">
        <a href={post.slug} className="block relative h-56 overflow-hidden" aria-label={`Read more about ${post.title}`}>
            <img src={post.image} alt="" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute top-6 left-6">
                <span className="bg-black/80 backdrop-blur-md text-electric-blue text-[10px] font-bold uppercase tracking-[0.2em] rounded-full px-4 py-2 border border-white/10">
                    {post.category}
                </span>
            </div>
        </a>
        <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-4 text-white leading-tight tracking-tight">
                <a href={post.slug} className="hover:text-electric-blue transition-colors duration-300">{post.title}</a>
            </h3>
            <p className="text-white/40 font-light text-sm flex-grow mb-8 leading-relaxed">{post.summary}</p>
            
            <div className="flex items-center mt-auto pt-6 border-t border-white/5">
                <div className="relative">
                  <img className="w-11 h-11 rounded-full mr-4 object-cover ring-1 ring-white/10" src={post.author.avatar} alt={post.author.name} />
                  <div className="absolute -bottom-1 -right-0 w-3 h-3 bg-success-emerald rounded-full border-2 border-primary-dark"></div>
                </div>
                <div>
                    <p className="font-bold text-white text-sm uppercase tracking-wider">{post.author.name}</p>
                    <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mt-0.5">{post.date}</p>
                </div>
            </div>
        </div>
    </div>
);

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Market Insights', 'Technology', 'Retirement'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="py-24 md:py-32 bg-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h4 className="text-electric-blue font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Strategic Intelligence</h4>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">Market <span className="text-white/20">Telemetries</span></h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                    selectedCategory === cat 
                      ? 'bg-electric-blue border-electric-blue text-white shadow-lg shadow-electric-blue/20' 
                      : 'bg-transparent border-white/10 text-white/40 hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, index) => (
            <AnimatedSection key={selectedCategory + index} delay={100 * index}>
              <BlogCard post={post} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
