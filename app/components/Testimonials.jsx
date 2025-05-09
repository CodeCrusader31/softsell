
export default function Testimonials() {
  const reviews = [
    { name: "Alice Johnson", role: "IT Manager", company: "TechNova" },
    { name: "David Lee", role: "Freelancer", company: "SoloDev" }
  ];

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {reviews.map((r, idx) => (
          <div key={idx} className="p-6 rounded-lg shadow-md transition-colors duration-300">
            <p className="italic mb-4">"Selling my unused licenses was quick and easy. Highly recommend!"</p>
            <h4 className="font-semibold">{r.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{r.role} at {r.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
