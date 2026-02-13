import { Link } from 'react-router';
import { Download, Github, Linkedin, ArrowRight, Code, Cog, Workflow } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Pranav
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            Senior SDET | Test Automation Engineer
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            10+ years of experience building automation frameworks and test strategies using Java, Node, C#, Cypress, RestAssured, and CI/CD pipelines.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/pranavj2009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Github className="mr-2 w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pranav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="mr-2 w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Automation Frameworks */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Automation Frameworks
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• TestNG</li>
                <li>• Cucumber</li>
                <li>• Cypress</li>
                <li>• RestAssured</li>
                <li>• ReqNRoll</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Languages
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Java</li>
                <li>• JavaScript / Node</li>
                <li>• C#</li>
              </ul>
            </div>

            {/* DevOps & CI/CD */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Workflow className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                DevOps & CI/CD
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Jenkins</li>
                <li>• GitHub Actions</li>
                <li>• Docker</li>
                <li>• Pipeline Integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Professional Summary
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Experienced SDET specializing in building scalable, maintainable automation frameworks for web, API, and integration testing. Strong background in Java/Node/C# ecosystems with focus on CI/CD-driven quality processes. Proven track record of designing automation strategies that reduce regression time, improve release confidence, and enable faster delivery cycles. Passionate about clean code principles in test automation and shift-left testing methodologies.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Quality into Your Product?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how automation can accelerate your testing strategy.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
