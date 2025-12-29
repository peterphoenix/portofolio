import { education } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const [ref, isVisible] = useScrollAnimation();
  const [cardRef, cardVisible] = useScrollAnimation();

  return (
    <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={ref}
          className={`text-4xl md:text-5xl font-bold mb-16 text-center dark:text-white transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Education
        </h2>
        <div
          ref={cardRef}
          className={`bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-600 border-t-4 border-blue-600 ${
            cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">🎓</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {education.degree}
                </h3>
              </div>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mt-1 ml-11">
                {education.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 ml-11 font-medium">
                GPA: <span className="text-green-600 dark:text-green-400">{education.gpa}</span>
              </p>
            </div>
            <div className="mt-2 md:mt-0 text-gray-600 dark:text-gray-400 md:text-right">
              <p className="font-medium">{education.period}</p>
              <p className="text-sm">{education.location}</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400">›</span>
              Activities & Achievements
            </h4>
            <div className="space-y-6">
              {education.activities.map((activity, index) => (
                <div
                  key={index}
                  className="relative border-l-2 border-blue-600 dark:border-blue-400 pl-6 pb-4 hover:border-blue-400 dark:hover:border-blue-300 transition-colors group"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <h5 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {activity.title}
                    </h5>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 md:mt-0 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full md:ml-4">
                      {activity.period}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
