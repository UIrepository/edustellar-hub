
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CardCustom } from "@/components/ui/card-custom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 animate-slide-up">
              Privacy Policy
            </h1>
            
            <div className="text-muted-foreground mb-8 animate-slide-up animate-delay-100">
              <p>Effective Date: 01 January 2025</p>
            </div>
            
            <CardCustom glass className="p-8 mb-8 animate-slide-up animate-delay-200">
              <h2 className="text-xl font-bold mb-4">Introduction</h2>
              <p className="mb-4">
                Welcome to UNKNOWN IITIANS ("we," "us," or "our"). We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and protect your personal data when you visit and use our website ("Site"), where we provide notes, lectures, and other educational materials.
              </p>
              <p>
                By using our Site, you agree to the terms of this Privacy Policy. If you do not agree with this policy, please refrain from using our services.
              </p>
            </CardCustom>
            
            <div className="space-y-8">
              {[
                {
                  title: "1. Information We Collect",
                  content: "We collect information from you when you use our Site, register for an account, or interact with our educational content. The types of information we collect include:\n\nPersonal Identification Information: When you register for an account, subscribe to newsletters, or contact us, we may collect personal details such as your name, email address, phone number, and other necessary contact information.\n\nNon-Personal Identification Information: We may collect non-identifiable information automatically, such as IP addresses, browser types, device information, and browsing patterns. This information helps us understand how users interact with our website and improve our services.\n\nPayment Information: If you purchase paid content (such as premium notes or lectures), we may collect payment details such as credit card information. Payments are processed securely through third-party payment processors, and we do not store sensitive payment data."
                },
                {
                  title: "2. How We Use Your Information",
                  content: "We use the information we collect for the following purposes:\n\nTo Provide and Improve Services: We use your personal and non-personal information to deliver educational content, update you on new notes and lectures, improve the user experience, and tailor the content to your needs.\n\nTo Communicate: We may use your contact details to send you updates, newsletters, and promotional offers related to our services, provided you have given consent to receive such communications.\n\nTo Process Transactions: If you make a purchase, we will use your payment details to process the transaction securely. We do not store payment information, and all transactions are handled by trusted third-party payment processors.\n\nTo Protect and Improve Site Security: We monitor usage data to help secure our website and protect your personal data from unauthorized access."
                },
                {
                  title: "3. How We Protect Your Information",
                  content: "We take appropriate technical and organizational measures to safeguard your personal information. These include secure servers, encryption technologies, and secure payment processing systems. However, no data transmission over the internet is completely secure, and while we strive to protect your data, we cannot guarantee absolute security."
                },
                {
                  title: "4. Cookies and Tracking Technologies",
                  content: "We may use cookies and similar tracking technologies to enhance the user experience on our Site. Cookies are small files stored on your device that help us analyze website traffic, customize your experience, and remember your preferences.\n\nYou can control cookie settings through your browser, but please note that disabling cookies may affect the functionality of certain features on our Site."
                },
                {
                  title: "5. Third-Party Links",
                  content: "Our website may contain links to third-party websites, such as payment processors or external content providers. These websites have their own privacy policies, and we are not responsible for their practices. Please review their privacy policies before submitting any personal data."
                },
                {
                  title: "6. Sharing Your Information",
                  content: "We do not sell, rent, or lease your personal information to third parties. However, we may share your data in the following circumstances:\n\nWith Service Providers: We may share your information with trusted third-party service providers who assist us in running our website, processing payments, or improving our services. These providers are obligated to keep your information confidential.\n\nFor Legal Compliance: We may disclose your personal information if required by law or in response to valid requests by public authorities, such as government agencies or law enforcement.\n\nIn Case of Business Transfer: If we are involved in a merger, acquisition, or sale of assets, your personal data may be transferred as part of that transaction. We will notify you in advance of any such transfer."
                },
                {
                  title: "7. Your Data Rights",
                  content: "You have the following rights regarding your personal data:\n\nAccess: You can request a copy of the personal information we hold about you.\n\nCorrection: If any of your personal information is incorrect or incomplete, you can request that we update it.\n\nDeletion: You can request that we delete your personal data, subject to legal obligations or legitimate business interests.\n\nOpt-Out of Marketing Communications: You can opt out of receiving promotional emails by following the unsubscribe link in our emails or contacting us directly.\n\nTo exercise any of these rights, please contact us at unknowniitians@gmail.com."
                },
                {
                  title: "8. Children's Privacy",
                  content: "Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we discover that we have inadvertently collected personal information from a child under 13, we will take steps to delete that information."
                },
                {
                  title: "9. Copyright and Unauthorized Use of Materials",
                  content: "All educational content, notes, lectures, and other materials provided on our Site are the intellectual property of UNKNOWN IITIANS, unless otherwise specified. These materials are protected by copyright and other intellectual property laws. You may not copy, reproduce, distribute, or otherwise use any of our materials for commercial purposes without prior written permission from us.\n\nUnauthorized use of our materials, including copying or distributing our content without permission, is prohibited. If you would like to use any of our materials for educational or other purposes, please contact us at unknowniitians@gmail.com for permission."
                },
                {
                  title: "10. Changes to This Privacy Policy",
                  content: "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page with the revised \"Effective Date.\" We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your data."
                },
                {
                  title: "11. Contact Us",
                  content: "If you have any questions or concerns regarding this Privacy Policy or how we handle your personal data, please contact us at:\n\nUNKNOWN IITIANS\n\nEmail: unknowniitians@gmail.com\n\nThis Privacy Policy is intended to provide a clear understanding of how we handle your personal data and the use of our intellectual property. By using our services, you consent to the practices described herein."
                }
              ].map((section, index) => (
                <div 
                  key={index} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${(index * 100) + 300}ms` }}
                >
                  <h2 className="text-xl font-bold mb-3">{section.title}</h2>
                  <div className="text-muted-foreground whitespace-pre-line">{section.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
