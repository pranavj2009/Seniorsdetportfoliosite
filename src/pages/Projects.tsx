import { Github, ExternalLink, Check } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Java TestNG Automation Framework',
      description: 'Enterprise-grade hybrid automation framework built with Java and TestNG',
      problem: 'Need for a scalable, maintainable framework for web and API testing across multiple environments',
      techStack: ['Java', 'TestNG', 'RestAssured', 'Selenium WebDriver', 'Maven', 'Jenkins'],
      features: [
        'Hybrid framework supporting both UI and API testing',
        'Data-driven testing with Excel/CSV support',
        'Parallel test execution for faster feedback',
        'Extent Reports with screenshots',
        'CI/CD integration with Jenkins',
        'Environment configuration management',
      ],
      githubUrl: 'https://github.com/pranavj2009/java-testng-framework',
      liveUrl: null,
    },
    {
      title: 'Cypress E2E Automation Suite',
      description: 'Modern end-to-end testing suite using Cypress with full CI/CD integration',
      problem: 'Fast, reliable UI automation with excellent developer experience and debugging capabilities',
      techStack: ['Cypress', 'JavaScript', 'Page Object Model', 'GitHub Actions', 'Mochawesome'],
      features: [
        'Page Object Model implementation',
        'Custom commands for reusability',
        'API mocking and stubbing',
        'Visual regression testing',
        'Automated GitHub Actions pipeline',
        'Video and screenshot capture on failure',
      ],
      githubUrl: 'https://github.com/pranavj2009/cypress-e2e-suite',
      liveUrl: null,
    },
    {
      title: 'C# BDD Automation Framework',
      description: 'Behavior-driven development framework using ReqNRoll (SpecFlow alternative)',
      problem: 'Enable collaboration between technical and non-technical stakeholders through executable specifications',
      techStack: ['C#', 'ReqNRoll', 'NUnit', 'Selenium', 'Azure DevOps', 'SpecFlow'],
      features: [
        'Gherkin-based BDD scenarios',
        'Reusable step definitions',
        'Hooks for setup and teardown',
        'Living documentation generation',
        'Integration with Azure DevOps',
        'Cross-browser testing support',
      ],
      githubUrl: 'https://github.com/pranavj2009/csharp-bdd-framework',
      liveUrl: null,
    },
    {
      title: 'API Automation Framework',
      description: 'Comprehensive REST API testing framework with contract validation',
      problem: 'Ensure API reliability, performance, and contract compliance across microservices',
      techStack: ['Java', 'RestAssured', 'TestNG', 'Jackson', 'JSON Schema Validator', 'Docker'],
      features: [
        'RESTful API testing with RestAssured',
        'JSON schema validation',
        'Data-driven API tests',
        'Response time assertions',
        'OAuth2 authentication handling',
        'Docker containerized test execution',
      ],
      githubUrl: 'https://github.com/pranavj2009/api-automation-framework',
      liveUrl: null,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600">
            Automation frameworks and testing solutions I've built
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-600 transition-all hover:shadow-lg"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">
                    {project.title}
                  </h2>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{project.description}</p>

                {/* Problem Solved */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-2">Problem Solved</h3>
                  <p className="text-gray-600">{project.problem}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Explore More on GitHub
          </h2>
          <p className="text-gray-600 mb-6">
            Check out my complete portfolio of automation frameworks, tools, and testing utilities
          </p>
          <a
            href="https://github.com/pranavj2009"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
