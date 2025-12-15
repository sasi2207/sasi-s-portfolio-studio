import { useEffect } from 'react';
import AOS from 'aos';
import { Layout } from '@/components/layout/Layout';
import { ParallaxSection } from '@/components/common/ParallaxSection';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn best practices for structuring large-scale React projects with TypeScript.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'React',
  },
  {
    id: 2,
    title: 'Getting Started with Tailwind CSS',
    excerpt: 'A comprehensive guide to using Tailwind CSS for rapid UI development.',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'CSS',
  },
  {
    id: 3,
    title: 'Node.js Performance Optimization',
    excerpt: 'Tips and tricks to improve the performance of your Node.js applications.',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Node.js',
  },
  {
    id: 4,
    title: 'Database Design Best Practices',
    excerpt: 'Essential principles for designing efficient and scalable databases.',
    date: '2023-12-28',
    readTime: '12 min read',
    category: 'Database',
  },
];

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <ParallaxSection 
        className="pt-32 pb-16 bg-hero-pattern"
        bgClassName="bg-gradient-to-b from-primary/5 to-transparent"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-aos="fade-up">
              <span className="gradient-text">Blog</span> & Insights
            </h1>
            <p className="text-lg text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              Thoughts on web development, technology, and building great products.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="card-hover p-6 group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="chip mb-4">{post.category}</div>
                <h2 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <p className="text-muted-foreground">
              More articles coming soon. Stay tuned!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
