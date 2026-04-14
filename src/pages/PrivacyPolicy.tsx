import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Alluph Trades LLC";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Privacy Policy and handling of data at Alluph Trades LLC.");
    }
  }, []);

  return (
    <div className="bg-white pt-32 pb-24 text-gray-700">

      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark uppercase tracking-tighter mb-4">Privacy Policy</h1>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-12 border-b border-gray-200 pb-8">Effective Date: January 27, 2025</p>

        <div className="space-y-10 prose prose-lg max-w-none text-gray-600">
          <p>
            Alluph Trades LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">SMS Messaging Terms</h2>
            <p>If you opt in to receive SMS messages from Alluph Trades LLC:</p>
            
            <h3 className="text-lg font-bold text-brand-dark mt-4">Consent to Receive Messages</h3>
            <p>By providing your phone number and checking the consent box, you agree to receive SMS text messages and voice calls from Alluph Trades LLC.</p>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Message Types</h3>
            <p>Messages may include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Account notifications and customer care (information about your services and support)</li>
              <li>Marketing offers (only if you opt in to marketing messages)</li>
            </ul>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Message Frequency</h3>
            <p>Message frequency may vary depending on your account activity and services.</p>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Help</h3>
            <p>For assistance, reply HELP to any message or contact us directly.</p>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Opt-Out</h3>
            <p>You can opt out of SMS messages at any time by:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Replying <strong>STOP</strong> to any message</li>
              <li>Contacting us at <strong>alluphtradesllc@gmail.com</strong> or <strong>(248) 308-5960</strong></li>
            </ul>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Costs</h3>
            <p>Message and data rates may apply depending on your mobile carrier's plan. Alluph Trades LLC is not responsible for any charges from your carrier.</p>

            <h3 className="text-lg font-bold text-brand-dark mt-4">No Third-Party Sharing</h3>
            <p>Your SMS opt-in data will never be shared or sold to third parties for promotional or marketing purposes. Consent is provided exclusively to Alluph Trades LLC.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">Information We Collect</h2>
            
            <h3 className="text-lg font-bold text-brand-dark mt-4">Personal Data</h3>
            <p>We may collect personally identifiable information such as:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Name, email address, phone number, mailing address</li>
              <li>Property information for service estimates</li>
              <li>Payment information (when applicable)</li>
            </ul>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Usage Data</h3>
            <p>We automatically collect information about your visit to our website, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Cookies and Tracking Technologies</h3>
            <p>We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Essential Cookies:</strong> Enable core website functionality</li>
              <li><strong>Analytics Cookies:</strong> Understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements (with your consent)</li>
            </ul>
            <p className="mt-2">You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Process your requests and transactions</li>
              <li>Communicate with you (customer service, updates, marketing)</li>
              <li>Send SMS notifications for appointments, reminders, and updates</li>
              <li>Improve and personalize our services</li>
              <li>Analyze usage patterns and optimize our website</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">Disclosure of Your Information</h2>
            
            <h3 className="text-lg font-bold text-brand-dark mt-4">Service Providers</h3>
            <p>Third-party vendors who perform services on our behalf, such as:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>SMS & Communication platforms</li>
              <li>Payment processors</li>
              <li>Website hosting & maintenance</li>
              <li>Analytics providers</li>
            </ul>
            <p className="mt-2">These third parties are contractually obligated to keep your information confidential and use it only for specified purposes.</p>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Business Transfers</h3>
            <p>If Alluph Trades LLC undergoes a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.</p>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to valid legal requests.</p>

            <h3 className="text-lg font-bold text-brand-dark mt-4">No Third-Party Marketing</h3>
            <p>We do not sell, rent, or share your personal information with third parties for their promotional or marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">Data Security and Handling</h2>
            <p>We implement reasonable security measures to protect your personal information, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Encryption of sensitive data</li>
              <li>Secure server infrastructure</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
            </ul>
            <p className="mt-2">However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access personal information</li>
              <li>Request correction</li>
              <li>Request deletion</li>
              <li>Opt out of marketing</li>
              <li>Withdraw SMS consent</li>
              <li>Object to processing</li>
              <li>Request data portability</li>
            </ul>
            <p className="mt-2">To exercise these rights, contact us at alluphtradesllc@gmail.com or (248) 308-5960.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">California Residents (CCPA)</h2>
            <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Right to know what data is collected</li>
              <li>Right to know if data is sold/disclosed</li>
              <li>Right to request deletion</li>
              <li>Right to opt-out of sale</li>
              <li>Right to non-discrimination</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">Mobile Information Sharing</h2>
            <p>We do not share mobile phone numbers or SMS opt-in data with third parties for marketing purposes. Mobile information is used solely by Alluph Trades LLC to communicate with you as authorized by your consent.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">Changes to this Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Effective Date."</p>
            <p>Your continued use of our services after changes are posted constitutes acceptance of the updated Privacy Policy.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <div className="bg-gray-50 border border-gray-100 p-6 mt-4">
              <p className="font-bold text-brand-dark mb-2">Alluph Trades LLC</p>
              <p>900 Wilshire Dr., Suite 202<br />Troy, MI 48084</p>
              <p className="mt-4">
                <a href="mailto:alluphtradesllc@gmail.com" className="text-brand-primary hover:underline">alluphtradesllc@gmail.com</a><br />
                <a href="tel:2483085960" className="text-brand-primary hover:underline">(248) 308-5960</a>
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 mt-12">
            <p className="italic">
              By using our website and services, you consent to the terms of this Privacy Policy.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
