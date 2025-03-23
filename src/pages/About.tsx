
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CardCustom } from "@/components/ui/card-custom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 animate-slide-up">
              About Unknown IITians
            </h1>
            
            <CardCustom glass className="p-8 mb-12 animate-slide-up animate-delay-100">
              <p className="text-lg leading-relaxed mb-6">
                Unknown IITians was founded by two friends with a shared vision of making quality education accessible to all. Initially, they started a YouTube channel focused on providing resources and guidance for the IIT Madras BS Degree program. Their goal was to help students navigate this unique opportunity and excel in their academic journey.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Over time, Unknown IITians expanded its mission to include free, high-quality resources for competitive exams like JEE, NEET, and more. Today, the platform offers mentorship programs, skill-building tools, and a supportive community to empower students from diverse backgrounds.
              </p>
              
              <p className="text-lg leading-relaxed">
                Unknown IITians is committed to reducing the dependence on highly competitive exams and promoting alternative career paths.
              </p>
            </CardCustom>
            
            <div className="bg-primary/5 rounded-xl p-8 border border-primary/10 animate-slide-up animate-delay-200">
              <div className="max-w-3xl mx-auto text-center">
                <blockquote className="text-xl md:text-2xl italic mb-6">
                  "Don't just think about placement; think about building your own empire. Success isn't limited to your degree—it begins with the growth you nurture today. Train yourself, work on your skills, and create something great, because true success comes from starting now, not after your studies."
                </blockquote>
                
                <p className="text-lg font-medium">Anonymous</p>
                <p className="text-muted-foreground">Founder, Unknown IITians</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
