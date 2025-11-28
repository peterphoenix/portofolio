import { experience } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ExperienceCard({ job, index }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-500/20 group ${
        isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {job.role}
          </h3>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mt-1">
            {job.company}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{job.description}</p>
        </div>
        <div className="mt-2 md:mt-0 text-gray-600 dark:text-gray-400 md:text-right md:ml-4">
          <p className="font-medium whitespace-nowrap">{job.period}</p>
          <p className="text-sm">{job.location}</p>
        </div>
      </div>
      <ul className="space-y-3 mt-6">
        {job.highlights.map((highlight, idx) => (
          <li key={idx} className="flex items-start group/item">
            <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 transition-transform group-hover/item:scale-125">▹</span>
            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={ref}
          className={`text-4xl md:text-5xl font-bold mb-16 text-center dark:text-white ${
            isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
          }`}
        >
          Experience
        </h2>
        <div className="space-y-12">
          {experience.map((job, index) => (
            <ExperienceCard key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
