import blog1 from '../assets/blog-1.webp'
import blog2 from '../assets/blog-2.webp'
import blog3 from '../assets/blog-3.webp'
import blog4 from '../assets/blog-4.webp'
import blog5 from '../assets/blog-5.webp'


const Blog = () => {
  const posts = [
    {
      title: "Qui lorem imperdiet non turpis nec",
      date: "August 28, 2019",
      image: blog1,
    },
    {
      title: "Nunc faucibus eros eget sagittis",
      date: "June 28, 2019",
      image: blog2,
    },
    {
      title: "Nunc erat arcu venenatis ac congue",
      date: "June 26, 2019",
      image: blog3,
    },
    {
      title: "Donec at amet magna tempor tincidunt",
      date: "June 29, 2019",
      image: blog4,
    },
    {
      title: "Interdum vitae pharetra ullamcorper sem",
      date: "June 26, 2019",
      image: blog5,
    },
  ];

  const recentPosts = posts.slice(0, 5); // Top 5 for recent posts section

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <div className="h-72 bg-slate-500">
            <h1 className="text-center font-bold pt-24 text-white text-4xl">BLOG</h1>
        </div>

      {/* Main Content */}
      <main className="container mx-auto mt-8 flex">
        {/* Blog Posts */}
        <section className="w-3/4">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="w-1/4 ml-8">
          {/* Recent Posts */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul>
              {recentPosts.map((post, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-blue-600 hover:underline">
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Promotion Section */}
          <div className="bg-orange-500 text-white p-4 rounded-lg shadow mb-6">
            <h3 className="text-lg font-semibold mb-2">Flat 20% Discount</h3>
            <ul className="space-y-2">
              <li>Women Special 70% Off</li>
              <li>Men Special 50% Off</li>
              <li>Get Extra 15% Off</li>
              <li>New-In Clothing</li>
            </ul>
          </div>

          {/* Subscribe Form */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Dont miss the deals</h3>
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-2 border rounded"
            />
            <button className="bg-slate-600 text-white w-full py-2 rounded">Subscribe Now</button>
          </div>
        </aside>
      </main>

      
      
    </div>
  );
};

export default Blog;
