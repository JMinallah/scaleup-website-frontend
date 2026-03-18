import teamBg from "../assets/images/team-bg.jpg";
import franklin from "../assets/images/franklin.jpg";
import adebayo from "../assets/images/adebayo.jpg";
import angel from "../assets/images/angel.jpg";
import benedicta from "../assets/images/benedicta.jpg";
import daniel from "../assets/images/daniel.jpg";
import stephanie from "../assets/images/stephanie.jpeg";
import haulat from "../assets/images/haulat.jpg";
import james from "../assets/images/james.jpg";
import tiolu from "../assets/images/tiolu.jpg";
import ese from "../assets/images/ese.jpeg";
import david from "../assets/images/david.jpeg";
import TeamCard from "./TeamCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Franklin Archibong",
    role: "Chief Product Visionary",
    description:
      "Franklin defines the long-term product vision, ensuring ScaleUp builds meaningful solutions that solve real market problems.",
    image: franklin,
  },
  {
    name: "James Victor",
    role: "Product Visionary",
    description:
      "James partners in defining forward-thinking product ideas and validating opportunities that drive sustainable growth.",
    image: james,
  },
  {
    name: "Daniel Edet",
    role: "Lead, Saas Operations/Project management",
    description:
      "Daniel drives operational excellence by ensuring seamless project execution, optimized workflows, and scalable delivery of our SaaS platform.",
    image: daniel,
  },
  {
    name: " Adebayo Destiny Solomon",
    role: " Lead, Software Engineering",
    description:
      "Ade leads the technical vision and architecture, building secure, scalable, and high performance systems that power ScaleUp’s growth.",
    image: adebayo,
  },
  {
    name: "Olukayode Tioluwanimi Blessing",
    role: " Product Manager",
    description:
      "Blessing Partners with the Product Lead to turn vision into measurable outcomes through research, and cross-functional collaboration.",
    image: tiolu,
  },
  {
    name: "Benedicta Atagamen",
    role: "Lead, UI/UX Design",
    description:
      "Benedicta leads the design vision, ensuring every product interaction is purposeful, usable, and aligned with business goals.",
    image: benedicta,
  },
  {
    name: " Haulat Alobalowa",
    role: " Lead, Product management ",
    description:
      "Haulat shapes and delivers impactful products by aligning user needs, business goals, and strategic vision into a clear, actionable roadmap.",
    image: haulat,
  },
  {
    name: "Stephanie Matthew",
    role: "Lead, Marketing and Growth",
    description:
      "Stephanie accelerates brand visibility and customer acquisition through data-driven marketing strategies and growth initiatives.",
    image: stephanie,
  },
  {
    name: "Angel Egerega",
    role: " Lead, Quality Assurance",
    description:
      "Angel safeguards product quality by identifying risks early, strengthening testing processes, and delivering a seamless user experience.",
    image: angel,
  },
  {
    name: "Ese Ayomah",
    role: " Lead, Content Creation",
    description:
      "Ese crafts engaging content that informs, entertains, and connects with audiences, bringing ideas to life across multiple platforms.",
    image: ese,
  },
  {
    name: "David  Láleye",
    role: " Lead, Accounting",
    description:
      "David ensures financial accuracy and transparency by managing records, analyzing data, and supporting strategic decisions with clear insights.",
    image: david,
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col font-[Poppins]">
      <Navbar />
      <header
        className="relative w-full h-[320px] md:h-[420px] lg:h-[480px] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${teamBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-bold font-inter text-primary text-4xl lg:text-6xl mb-2">
            Our Team
          </h1>
          <p className="font-medium text-primary text-lg lg:text-xl">
            Meet our community members
          </p>
        </div>
      </header>
      <main className="p-4 flex-1">
        <section className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
