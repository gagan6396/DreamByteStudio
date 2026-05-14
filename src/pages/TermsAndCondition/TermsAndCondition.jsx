import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style/TermsAndCondition.css";

const TermsAndConditions = () => {
  return (
    <div className="documentation-container">
      <header className="doc-header">
        <div className="container">
          <h1 className="doc-logo">Dream Byte Studio</h1>
        </div>
      </header>

      <div className="doc-content">
        <aside className="doc-sidebar">
          <div className="sidebar-title">Contents</div>
          <ul className="sidebar-menu">
            <li><a href="#introduction" className="active">Introduction</a></li>
            <li><a href="#acceptance">Acceptance of Terms</a></li>
            <li><a href="#definitions">Definitions</a></li>
            <li><a href="#services">Services & Products</a></li>
            <li><a href="#user-accounts">User Accounts</a></li>
            <li><a href="#intellectual-property">Intellectual Property</a></li>
            <li><a href="#user-conduct">User Conduct</a></li>
            <li><a href="#payment">Payment Terms</a></li>
            <li><a href="#liability">Limitation of Liability</a></li>
            <li><a href="#termination">Termination</a></li>
            <li><a href="#changes">Changes to Terms</a></li>
            <li><a href="#contact">Contact Information</a></li>
          </ul>
        </aside>

        <main className="doc-main">
          <h1 className="doc-title">Terms and Conditions</h1>
          <div className="doc-meta">
            Last Updated: November 11, 2025 | Version 1.0
          </div>

          <div className="doc-intro">
            These Terms and Conditions govern your use of Dream Byte Studio's website and services. 
            By accessing or using our services, you agree to be bound by these terms. Please read them carefully.
          </div>

          <section id="acceptance" className="doc-section">
            <h2 className="section-title">
              <span className="section-number">1.</span>
              Acceptance of Terms
            </h2>
            <div className="section-content">
              By accessing and using Dream Byte Studio's website, services, or products, you acknowledge 
              that you have read, understood, and agree to be bound by these Terms and Conditions. 
              If you do not agree with any part of these terms, you must not use our services.
            </div>
            <div className="section-subsection">
              <h3 className="subsection-title">1.1 Binding Agreement</h3>
              <div className="subsection-content">
                These terms constitute a legally binding agreement between you and Dream Byte Studio. 
                Your continued use of our services signifies your acceptance of any modifications to these terms.
              </div>
            </div>
          </section>

          <section id="definitions" className="doc-section">
            <h2 className="section-title">
              <span className="section-number">2.</span>
              Definitions
            </h2>
            <div className="section-content">
              For the purposes of these Terms and Conditions:
            </div>
            <ul className="doc-list">
              <li><strong>"Company"</strong> refers to Dream Byte Studio and its affiliates.</li>
              <li><strong>"Services"</strong> refers to all web development, design, and digital solutions provided by the Company.</li>
              <li><strong>"User"</strong> or <strong>"You"</strong> refers to any individual or entity accessing our services.</li>
              <li><strong>"Content"</strong> refers to all text, graphics, code, designs, and materials on our platform.</li>
              <li><strong>"Website"</strong> refers to dreambytestudio.com and all related subdomains.</li>
            </ul>
          </section>

          <section id="services" className="doc-section">
            <h2 className="section-title">
              <span className="section-number">3.</span>
              Services and Products
            </h2>
            <div className="section-content">
              Dream Byte Studio provides web development, design, and digital solutions to clients. 
              All services are subject to availability and may be modified or discontinued at our discretion.
            </div>
            <div className="section-subsection">
              <h3 className="subsection-title">3.1 Service Description</h3>
              <div className="subsection-content">
                Our services include but are not limited to website design and development, custom web applications, 
                e-commerce solutions, mobile application development, and digital marketing services.
              </div>
            </div>
            <div className="section-subsection">
              <h3 className="subsection-title">3.2 Service Modifications</h3>
              <div className="subsection-content">
                We reserve the right to modify, suspend, or discontinue any service at any time without 
                prior notice. Service descriptions and pricing are subject to change.
              </div>
            </div>
          </section>

          <section id="user-accounts" className="doc-section">
            <h2 className="section-title">
              <span className="section-number">4.</span>
              User Accounts and Responsibilities
            </h2>
            <div className="section-content">
              Some services may require you to create an account. You are responsible for maintaining 
              the confidentiality of your account credentials and for all activities under your account.
            </div>
            <div className="section-subsection">
              <h3 className="subsection-title">4.1 Account Security</h3>
              <div className="subsection-content">
                You must provide accurate and complete information when creating an account. 
                You are responsible for safeguarding your password and must notify us immediately 
                of any unauthorized access or security breach.
              </div>
            </div>
            <div className="section-subsection">
              <h3 className="subsection-title">4.2 Account Termination</h3>
              <div className="subsection-content">
                We reserve the right to suspend or terminate accounts that violate these terms 
                or engage in fraudulent, abusive, or illegal activities.
              </div>
            </div>
          </section>

          <section id="intellectual-property" className="doc-section">
            <h2 className="section-title">
              <span className="section-number">5.</span>
              Intellectual Property Rights
            </h2>
            <div className="section-content">
              All content, designs, graphics, code, trademarks, and materials on this website are 
              the exclusive property of Dream Byte Studio or its licensors and are protected by 
              international copyright and intellectual property laws.
            </div>
            <div className="section-subsection">
              <h3 className="subsection-title">5.1 Usage Restrictions</h3>
              <div className="subsection-content">
                You may not reproduce, distribute, modify, create derivative works from, publicly display, 
                or publicly perform any content from our website without express written permission.
              </div>
            </div>
            <div className="section-subsection">
              <h3 className="subsection-title">5.2 License Grant</h3>
              <div className="subsection-content">
                We grant you a limited, non-exclusive, non-transferable license to access and use 
                our services for personal or business purposes in accordance with these terms.
              </div>
            </div>
          </section>

          <section id="user-conduct" className="doc-section">
            <h2 className="section-title">
              <span className="section-number">6.</span>
              User Conduct and Prohibited Activities
            </h2>
            <div className="section-content">
              You agree not to engage in any of the following prohibited activities:
            </div>
            <ul className="doc-list">
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing on intellectual property rights of others</li>
              <li>Transmitting viruses, malware, or harmful code</li>
              <li>Attempting unauthorized access to our systems</li>
              <li>Using our services for spam or unsolicited communications</li>
              <li>Engaging in fraudulent activities or misrepresentation</li>
              <li>Harassing, threatening, or abusing other users</li>
            </ul>
          </section>

          <section id="payment" className="doc-section">
            <h2 className="section-title">
              <span className="section-number">7.</span>
              Payment Terms
            </h2>
            <div className="section-content">
              Payment terms for services are established in separate service agreements. 
              All fees are non-refundable unless otherwise specified in writing.
            </div>
            <div className="section-subsection">
              <h3 className="subsection-title">7.1 Pricing</h3>
              <div className="subsection-content">
                Prices for services are subject to change. We will provide notice of any price changes 
                for ongoing services with reasonable advance notice.
              </div>
            </div>
            <div className="section-subsection">
              <h3 className="subsection-title">7.2 Late Payments</h3>
              <div className="subsection-content">
                Late payments may result in suspension of services and may incur additional fees. 
                We reserve the right to pursue collection of outstanding debts.
              </div>
            </div>
          </section>

          <section id="liability" className="doc-section">
            <h2 className="section-title">
              <span className="section-number">8.</span>
              Limitation of Liability
            </h2>
            <div className="section-content">
              Dream Byte Studio shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages arising from your use of our services. Our total liability shall not 
              exceed the amount paid for the specific service in question.
            </div>
            <div className="section-subsection">
              <h3 className="subsection-title">8.1 Service Availability</h3>
              <div className="subsection-content">
                We strive to maintain service availability but do not guarantee uninterrupted access. 
                We are not liable for any losses resulting from service interruptions or technical issues.
              </div>
            </div>
            <div className="section-subsection">
              <h3 className="subsection-title">8.2 Third-Party Services</h3>
              <div className="subsection-content">
                We are not responsible for any third-party services, websites, or content linked from 
                our platform. Your use of third-party services is at your own risk.
              </div>
            </div>
          </section>

          <section id="termination" className="doc-section">
            <h2 className="section-title">
              <span className="section-number">9.</span>
              Termination
            </h2>
            <div className="section-content">
              We reserve the right to terminate or suspend your access to our services immediately, 
              without prior notice, for any reason, including breach of these Terms and Conditions.
            </div>
            <div className="section-subsection">
              <h3 className="subsection-title">9.1 Effect of Termination</h3>
              <div className="subsection-content">
                Upon termination, your right to use our services will immediately cease. All provisions 
                that should reasonably survive termination shall remain in effect.
              </div>
            </div>
          </section>

          <section id="changes" className="doc-section">
            <h2 className="section-title">
              <span className="section-number">10.</span>
              Changes to Terms
            </h2>
            <div className="section-content">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be 
              effective immediately upon posting to our website. Your continued use of our services 
              after changes are posted constitutes acceptance of the modified terms.
            </div>
          </section>

          <section id="contact" className="doc-section">
            <h2 className="section-title">
              <span className="section-number">11.</span>
              Contact Information
            </h2>
            <div className="section-content">
              If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
            </div>
            <ul className="doc-list">
              <li><strong>Email:</strong> legal@dreambytestudio.com</li>
              <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              <li><strong>Address:</strong> Dream Byte Studio, 123 Tech Avenue, Digital City, DC 12345</li>
            </ul>
            <div className="section-content" style={{marginTop: '20px'}}>
              We aim to respond to all inquiries within 48 business hours.
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TermsAndConditions;