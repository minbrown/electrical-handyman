import React, { useEffect } from 'react';

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Alluph Trades LLC";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Terms of Service and legal framework for Alluph Trades LLC.");
    }
  }, []);

  return (
    <div className="bg-white pt-32 pb-24 text-gray-700">

      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark uppercase tracking-tighter mb-4">Terms of Service</h1>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-12 border-b border-gray-200 pb-8">Effective Date: January 27, 2025</p>

        <div className="space-y-10 prose prose-lg max-w-none text-gray-600">
          <p>
            Welcome to Alluph Trades LLC. By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms").
          </p>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">1. Services</h2>
            <p>
              Alluph Trades LLC provides licensed electrical and handyman services, home renovations, and related contracting solutions ("Services").
              We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">2. Account Registration</h2>
            <p>To use certain Services, you may need to create an account. You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">3. Acceptable Use</h2>
            <p>You agree to use our Services in compliance with all applicable laws and regulations. You must not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Use the Services for any unlawful purpose</li>
              <li>Interfere with or disrupt the Services or connected networks</li>
              <li>Attempt to gain unauthorized access to any systems</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Impersonate another person or entity</li>
              <li>Violate any intellectual property rights</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">4. SMS Messaging Terms</h2>
            <p>If you opt in to receive SMS messages from Alluph Trades LLC:</p>
            
            <h3 className="text-lg font-bold text-brand-dark mt-4">Consent to Receive Messages</h3>
            <p>By providing your phone number, checking the consent box, and submitting the form, you consent to receive SMS text messages and voice calls from Alluph Trades LLC.</p>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Message Types</h3>
            <p>Messages may include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Account notifications and customer care (information about your services and support)</li>
              <li>Marketing offers and promotions (only if you opt in to marketing messages)</li>
            </ul>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Message Frequency</h3>
            <p>Message frequency may vary depending on your account activity and the services you use.</p>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Opt-Out</h3>
            <p>Reply STOP to any message or contact us at alluphtradesllc@gmail.com.</p>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Help</h3>
            <p>Reply HELP to any message or contact us directly.</p>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Costs & Carrier Disclaimer</h3>
            <p>Message and data rates may apply depending on your mobile carrier's plan. Alluph Trades LLC is not responsible for any charges from your carrier.</p>
            <p>Alluph Trades LLC is not liable for delayed or undelivered messages. Message delivery is subject to your mobile carrier's terms and network availability. Carriers are not liable for delayed or undelivered messages.</p>

            <h3 className="text-lg font-bold text-brand-dark mt-4">Age Requirement</h3>
            <p>You must be 18 years of age or older to consent to receive SMS messages from Alluph Trades LLC. By providing your phone number and consenting to SMS, you confirm that you are at least 18 years old.</p>

            <h3 className="text-lg font-bold text-brand-dark mt-4">No Third-Party Sharing</h3>
            <p>Your SMS opt-in data will never be shared or sold to third parties for promotional or marketing purposes. Consent is provided exclusively to Alluph Trades LLC.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">5. Fees and Payment</h2>
            <p>
              You agree to pay all applicable fees for Services as outlined in your service agreement. Fees are non-refundable except as required by law or as specified in writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our Services are owned by Alluph Trades LLC and are protected by copyright, trademark, and other intellectual property laws.
              You are granted a limited, non-exclusive, non-transferable, and revocable license to use the Services for their intended purpose.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">7. Privacy</h2>
            <p>
              Your use of the Services is governed by our Privacy Policy, which is incorporated by reference into these Terms. Please review our Privacy Policy to understand our practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Alluph Trades LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Loss of Profits or Revenues</li>
              <li>Loss of Data or Information</li>
              <li>Business Interruption</li>
              <li>Loss of Goodwill</li>
            </ul>
            <p className="mt-2">...arising from your use or inability to use the Services.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">9. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Alluph Trades LLC, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorney's fees) arising from:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of third parties</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">10. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Services at our sole discretion, without prior notice, for any reason, including if you breach these Terms.
              Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">11. Third-Party Links</h2>
            <p>
              Our Services may contain links to third-party websites or services that are not owned or controlled by Alluph Trades LLC.
              We have no control over and assume no responsibility for the content, privacy policies, or practices of third-party websites. You acknowledge and agree that Alluph Trades LLC shall not be liable for any damage or loss caused by your use of third-party services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">12. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, conducted in Michigan.
              You agree to waive any right to a jury trial or to participate in a class action.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Michigan, without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">14. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. If we make material changes, we will provide at least 30 days' notice before the new terms take effect.
              Your continued use of the Services after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4">15. Contact Us</h2>
            <p>If you have questions about these Terms, please contact us:</p>
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
              By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
