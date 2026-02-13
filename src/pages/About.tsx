import { CheckCircle, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600">
            A decade of building quality into software through automation
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Professional Summary
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              With over 10 years of experience in quality assurance and test automation, I've specialized in building robust, scalable automation frameworks that enable teams to ship quality software faster.
            </p>
            <p className="mb-4">
              My career has spanned diverse industries including finance, healthcare, e-commerce, and enterprise SaaS, where I've worked on systems ranging from microservices architectures to monolithic applications. Throughout this journey, I've maintained an automation-first mindset, treating test code with the same rigor as production code.
            </p>
            <p>
              I thrive at the intersection of development and testing, bringing strong software engineering principles to quality assurance. My focus is on creating sustainable testing solutions that integrate seamlessly into CI/CD pipelines and enable continuous delivery.
            </p>
          </div>
        </section>

        {/* Career Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Career Highlights
          </h2>
          <div className="space-y-6">
            {[
              'Designed and implemented automation frameworks from scratch using TestNG, Cypress, and ReqNRoll, reducing manual testing effort by 70%',
              'Reduced regression test execution time from 8 hours to 45 minutes through parallel execution and optimized test architecture',
              'Built comprehensive CI/CD pipelines integrating automated tests with Jenkins and GitHub Actions, enabling continuous quality gates',
              'Led automation initiatives across multiple teams, establishing coding standards and best practices for test automation',
              'Implemented API testing strategies using RestAssured that caught critical integration issues before production',
              'Mentored junior SDETs and QA engineers in automation principles, code reviews, and testing strategies',
            ].map((highlight, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            My Testing Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Shift-Left Testing
              </h3>
              <p className="text-gray-600">
                Integrate quality early in the development cycle. Catching bugs before they reach production saves time and resources.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Automation as Quality Gate
              </h3>
              <p className="text-gray-600">
                Automated tests should be reliable enough to block deployments. If the tests fail, the code doesn't ship.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Clean Code in Tests
              </h3>
              <p className="text-gray-600">
                Test code deserves the same care as production code. Maintainable tests are the foundation of sustainable automation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
