
export default function HowItWorks() {
  const steps = [
    { icon: "📤", title: "Upload License", description: "Share your unused software license." },
    { icon: "💰", title: "Get Valuation", description: "Receive a fair market value instantly." },
    { icon: "🏦", title: "Get Paid", description: "Receive your payout securely and fast." }
  ];

  return (
    <section className="py-16 px-6 text-left">
      <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="p-6 rounded-lg shadow-md transition-colors duration-300 text-left">
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
