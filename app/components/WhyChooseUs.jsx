export default function WhyChooseUs() {
  const features = [
    { icon: "⚡", title: "Fast Payouts", desc: "Get your money within 24 hours." },
    { icon: "🔒", title: "Secure Process", desc: "We ensure your data and transactions are safe." },
    { icon: "📈", title: "Best Valuations", desc: "Transparent and competitive pricing." },
    { icon: "🤝", title: "Trusted by Thousands", desc: "Happy clients across the globe." }
  ];

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((f, idx) => (
          <div key={idx} className="p-4 bg-gray-100 rounded-lg">
            <div className="text-4xl mb-2">{f.icon}</div>
            <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
            <p className="text-sm text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}