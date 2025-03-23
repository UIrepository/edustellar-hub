
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CardCustom } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { ExternalLink } from "lucide-react";

// In a real application, this would come from an API or CMS
const partners = [
  {
    id: 1,
    name: "EduTech Solutions",
    logo: "https://placehold.co/200x100/e9ecef/495057?text=EduTech",
    description: "Leading provider of educational technology solutions for schools and colleges.",
    website: "https://example.com",
  },
  {
    id: 2,
    name: "MediPrep Institute",
    logo: "https://placehold.co/200x100/e9ecef/495057?text=MediPrep",
    description: "Specialized coaching institute for medical entrance examinations.",
    website: "https://example.com",
  },
  {
    id: 3,
    name: "EngineerHub",
    logo: "https://placehold.co/200x100/e9ecef/495057?text=EngineerHub",
    description: "Resource center for engineering students with tools and study materials.",
    website: "https://example.com",
  },
  {
    id: 4,
    name: "DataMinds Academy",
    logo: "https://placehold.co/200x100/e9ecef/495057?text=DataMinds",
    description: "Training institute for data science and analytics education.",
    website: "https://example.com",
  },
  {
    id: 5,
    name: "CareerLaunch",
    logo: "https://placehold.co/200x100/e9ecef/495057?text=CareerLaunch",
    description: "Career counseling and placement services for students and fresh graduates.",
    website: "https://example.com",
  },
  {
    id: 6,
    name: "TechSkills Pro",
    logo: "https://placehold.co/200x100/e9ecef/495057?text=TechSkills",
    description: "Platform for learning programming and technical skills for IIT students.",
    website: "https://example.com",
  }
];

const Partnerships = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
              Know Our Partnerships
            </h1>
            <p className="text-lg text-muted-foreground animate-slide-up animate-delay-100">
              We collaborate with leading educational institutions and companies to provide comprehensive resources and opportunities for our students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <CardCustom 
                key={partner.id}
                glass
                hover
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="h-28 flex items-center justify-center mb-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3">{partner.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {partner.description}
                  </p>
                  
                  <a href={partner.website} target="_blank" rel="noopener noreferrer">
                    <ButtonCustom 
                      variant="outline" 
                      size="sm" 
                      icon={<ExternalLink className="h-4 w-4" />} 
                      iconPosition="right"
                    >
                      Visit Website
                    </ButtonCustom>
                  </a>
                </div>
              </CardCustom>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 animate-slide-up">
              Interested in Partnering with Us?
            </h2>
            <p className="text-muted-foreground mb-6 animate-slide-up animate-delay-100">
              We're always looking to collaborate with organizations that share our mission of making quality education accessible to all
            </p>
            <ButtonCustom>
              Contact for Partnership
            </ButtonCustom>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Partnerships;
