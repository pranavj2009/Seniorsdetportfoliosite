import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'How to Design a Test Automation Framework from Scratch',
      excerpt: 'A comprehensive guide to building scalable, maintainable automation frameworks. Learn the key principles, design patterns, and best practices.',
      date: 'January 15, 2026',
      readTime: '8 min read',
      category: 'Framework Design',
    },
    {
      title: 'Cypress vs Selenium: A Practical Comparison',
      excerpt: 'An honest comparison based on real-world experience. When to choose Cypress, when to stick with Selenium, and what to consider for your project.',
      date: 'December 20, 2025',
      readTime: '6 min read',
      category: 'Tools & Technology',
    },
    {
      title: 'Integrating TestNG with Jenkins: Complete CI/CD Guide',
      excerpt: 'Step-by-step tutorial on setting up Jenkins pipelines for TestNG automation. Includes parallel execution, reporting, and failure notifications.',
      date: 'November 30, 2025',
      readTime: '10 min read',
      category: 'CI/CD',
    },
    {
      title: 'API Testing with RestAssured: Best Practices',
      excerpt: 'Essential patterns for effective API testing. From basic requests to advanced validation, authentication, and performance considerations.',
      date: 'November 10, 2025',
      readTime: '7 min read',
      category: 'API Testing',
    },
    {
      title: 'Building a BDD Framework with ReqNRoll',
      excerpt: 'Modern BDD in .NET with ReqNRoll. How to write effective Gherkin scenarios, organize step definitions, and create living documentation.',
      date: 'October 25, 2025',
      readTime: '9 min read',
      category: 'BDD',
    },
    {
      title: 'The Page Object Model: Beyond the Basics',
      excerpt: 'Advanced POM techniques for complex applications. Managing dynamic elements, handling shared components, and avoiding common pitfalls.',
      date: 'October 5, 2025',
      readTime: '8 min read',
      category: 'Design Patterns',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Insights, tutorials, and best practices in test automation
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-600 transition-all hover:shadow-lg group cursor-pointer"
            >
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-3">
                  {post.category}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            More Articles Coming Soon
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I regularly write about test automation, CI/CD pipelines, and software quality. Subscribe to get notified when new articles are published.
          </p>
        </div>
      </div>
    </div>
  );
}
