import { awards } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AwardCard({ award, index }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-yellow-500 hover:-translate-y-1 group ${
        isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-start gap-3 flex-1">
          <span className="text-2xl group-hover:scale-125 transition-transform">🏆</span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
            {award.title}
          </h3>
        </div>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-4 whitespace-nowrap bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
          {award.date}
        </span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed ml-11">{award.description}</p>
    </div>
  );
}

export default function Awards() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="awards" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={ref}
          className={`text-4xl md:text-5xl font-bold mb-16 text-center dark:text-white ${
            isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
          }`}
        >
          Awards & Recognition
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <AwardCard key={index} award={award} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
