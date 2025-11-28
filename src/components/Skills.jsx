import { skills } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function SkillCategory({ category, index }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-500/20 ${
        isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <span className="text-blue-600 dark:text-blue-400">›</span>
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.items.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 hover:scale-110 hover:-rotate-2 transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  const skillCategories = [
    { name: 'Languages', items: skills.languages },
    { name: 'Frameworks', items: skills.frameworks },
    { name: 'Databases', items: skills.databases },
    { name: 'Cloud & Infrastructure', items: skills.cloud },
    { name: 'Message Queues', items: skills.messageQueues },
    { name: 'Orchestration', items: skills.orchestration },
    { name: 'Tools', items: skills.tools },
    { name: 'Other Technologies', items: skills.other },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={ref}
          className={`text-4xl md:text-5xl font-bold mb-16 text-center dark:text-white ${
            isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
          }`}
        >
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
