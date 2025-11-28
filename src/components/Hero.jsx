import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-gray-900 transition-colors overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-float delay-300"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/5 dark:bg-pink-500/5 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 animate-fadeIn">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-green-700 dark:text-green-400">
            Open to opportunities
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-animated opacity-0 animate-fadeInUp">
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-light opacity-0 animate-fadeInUp delay-100">
          {personalInfo.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto opacity-0 animate-fadeInUp delay-200">
          {personalInfo.bio}
        </p>
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fadeInUp delay-300">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <span className="inline-block group-hover:scale-110 transition-transform">
              Get in Touch
            </span>
          </a>
          <a
            href="/portofolio/resume.pdf"
            download="Peter_Phoenix_Resume.pdf"
            className="group px-8 py-3 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 flex items-center gap-2"
          >
            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="inline-block group-hover:scale-110 transition-transform">
              Download CV
            </span>
          </a>
          <a
            href={`https://${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-105"
          >
            <span className="inline-block group-hover:scale-110 transition-transform">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
