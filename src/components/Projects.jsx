import { projects } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500/20 dark:hover:border-blue-400/20 group hover:-translate-y-2 ${
        isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-3"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
            {project.title}
            <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </h3>
        </a>
      ) : (
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
      )}
      <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
      <ul className="space-y-2 mb-6">
        {project.highlights.map((highlight, idx) => (
          <li key={idx} className="flex items-start group/item">
            <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 transition-transform group-hover/item:scale-125">•</span>
            <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 items-center">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            Visit Site
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={ref}
          className={`text-4xl md:text-5xl font-bold mb-16 text-center dark:text-white ${
            isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
          }`}
        >
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
