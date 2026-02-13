import { Code, Zap, TestTube, Cloud, GitBranch, Settings } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Automation Tools',
      icon: Zap,
      skills: ['TestNG', 'Cucumber', 'Cypress', 'RestAssured', 'ReqNRoll', 'Selenium WebDriver', 'Playwright', 'JUnit', 'NUnit', 'xUnit'],
    },
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java', 'JavaScript / Node.js', 'C#', 'TypeScript', 'Python', 'Bash/Shell Scripting'],
    },
    {
      title: 'Testing Types',
      icon: TestTube,
      skills: ['API Testing', 'UI Automation', 'Integration Testing', 'E2E Testing', 'Performance Testing Basics', 'BDD (Behavior-Driven Development)', 'Regression Testing', 'Smoke Testing'],
    },
    {
      title: 'DevOps & CI/CD',
      icon: Cloud,
      skills: ['Jenkins', 'GitHub Actions', 'Docker', 'CI/CD Pipeline Design', 'Azure DevOps', 'GitLab CI', 'AWS Basics', 'Container Orchestration'],
    },
    {
      title: 'Version Control & Collaboration',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Code Reviews', 'Pull Request Workflows', 'Branching Strategies'],
    },
    {
      title: 'Framework & Architecture',
      icon: Settings,
      skills: ['Test Framework Design', 'Page Object Model (POM)', 'Test Strategy Development', 'Agile/Scrum', 'Clean Code Principles', 'Design Patterns', 'Reporting & Analytics', 'Parallel Test Execution'],
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600">
            A comprehensive toolkit for building quality into software
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-600 transition-all hover:shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Context */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Technical Proficiency
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            My expertise spans the entire testing lifecycle—from requirements analysis and test strategy to framework design, implementation, and continuous integration. I'm equally comfortable working in Java, JavaScript/Node, and C# ecosystems, and I bring a strong engineering mindset to quality assurance.
          </p>
        </div>
      </div>
    </div>
  );
}
