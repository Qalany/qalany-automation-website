import { ArrowUpRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    title: "Getting Started with No-Code Automation",
    excerpt:
      "Learn how to automate your daily tasks without writing a single line of code. A beginner's guide to workflow automation.",
    category: "Guides",
    readTime: "5 min read",
    date: "Dec 15, 2024",
  },
  {
    title: "Why Transparency Matters in Automation",
    excerpt:
      "Understanding what your automation does is crucial. Discover why visual workflows build trust and confidence.",
    category: "Insights",
    readTime: "4 min read",
    date: "Dec 10, 2024",
  },
  {
    title: "5 Ways to Boost Productivity with Qalany",
    excerpt:
      "Real examples of how teams are saving hours every week by automating repetitive tasks with natural language.",
    category: "Tips",
    readTime: "6 min read",
    date: "Dec 5, 2024",
  },
];

const BlogsSection = () => {
  return (
    <section id="blogs" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Latest Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              From Our Blog
            </h2>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0">
            View All Posts
            <ArrowUpRight size={16} className="ml-1" />
          </Button>
        </div>

        {/* Blog cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <article
              key={blog.title}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">Q</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-accent-foreground bg-accent px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-accent transition-colors duration-300"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
