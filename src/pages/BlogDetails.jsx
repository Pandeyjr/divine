import React from "react";
import { useParams, Link } from "react-router-dom";
import { Home } from "lucide-react";
import Navbar from "../components/Navbar";
import japanImage from "../assets/japan.png";

// ✅ Blog images
import nepalistudent from "../assets/nepalistudent.png";
import rulesforstudent from "../assets/rulesforstudent.png";
import stepbystepguide from "../assets/stepbystepguide.png";
import affordableuni from "../assets/affordableuni.png";
import journey from "../assets/journey.png";
import howjapanhelp from "../assets/howjapanhelp.png";

const BlogDetails = () => {
  const { id } = useParams();

  // ✅ Blog data (same images, more detailed content)
  const blogs = [
   {
  id: 1,
  title: "Nepali Students Secure 50+ MEXT Scholarships in 2025",
  desc: "A record number of Nepali students have been awarded Japan’s prestigious MEXT scholarships in 2025, reflecting the growing academic collaboration between the two nations.",
  category: "News",
  author: "Sushmitha Shrestha",
  date: "22 Nov 2023",
  image: nepalistudent,
  content: `
  <p>In 2025, more than 50 Nepali students earned the highly competitive MEXT (Monbukagakusho) Scholarship, marking a historic milestone in educational exchange between Nepal and Japan. 
  This achievement highlights Japan’s continued commitment to supporting international talent and fostering cross-cultural understanding.</p>

  <h3>What the MEXT Scholarship Covers</h3>
  <ul>
    <li>Full tuition coverage</li>
    <li>Monthly living stipend</li>
    <li>Round-trip international airfare</li>
    <li>Research, academic, and cultural support</li>
  </ul>

  <p>These benefits allow students to focus entirely on their academic goals while experiencing life in one of the most technologically advanced nations.</p>

  <h3>Top Japanese Universities Welcoming Nepali Students</h3>
  <p>This year, prestigious institutions such as The University of Tokyo, Kyoto University, Osaka University, and Tohoku University have accepted Nepali scholars under the MEXT program. 
  According to education experts, Japanese universities are increasingly recognizing the academic potential and work ethic of Nepali students.</p>

  <h3>Expert Insights</h3>
  <p>Educational consultants emphasize that early preparation is key to success. Students are encouraged to:</p>
  <ul>
    <li>Begin Japanese language training (preferably achieving JLPT N5 or higher)</li>
    <li>Prepare a strong Statement of Purpose</li>
    <li>Demonstrate consistent academic excellence</li>
  </ul>

  <p>"The MEXT Scholarship is not just financial aid — it’s a gateway to world-class education and global exposure," says Sushmitha Shrestha, an education advisor at Divine Abroad Studies.</p>

  <h3>A Step Toward a Global Future</h3>
  <p>With this growing number of MEXT awardees, the collaboration between Nepal and Japan is set to strengthen even further — creating new opportunities for innovation, research, and mutual cultural exchange.</p>
  `,
},

    {
  id: 2,
  title: "Japan Tightens Visa Documentation Rules for International Students",
  desc: "The Japanese government has introduced stricter documentation requirements to ensure genuine study visa applications.",
  category: "Learn",
  author: "Anil Sharma",
  date: "16 Nov 2023",
  image: rulesforstudent,
  content: `
  <p>Beginning in 2024, the <strong>Japanese Immigration Services Agency (ISA)</strong> has implemented new and stricter documentation rules for international students applying for study visas. The policy changes are designed to strengthen transparency, prevent misuse of the student visa system, and ensure that applicants genuinely intend to pursue higher education in Japan.</p>

  <h3>Why the Policy Change?</h3>
  <p>In recent years, Japan has witnessed a surge in international student applications—especially from South and Southeast Asia. While this reflects Japan’s growing popularity as a global education hub, authorities have identified a small number of fraudulent or incomplete applications. The new measures aim to ensure that only serious and qualified students are granted entry into Japan’s academic institutions.</p>

  <h3>Key Documentation Updates</h3>
  <ul>
    <li><strong>Verified Financial Records:</strong> Applicants must now submit verified bank statements showing sufficient funds to cover tuition, accommodation, and living expenses for at least one year.</li>
    <li><strong>Japanese Language Proof:</strong> A minimum of <strong>150 hours of Japanese language study</strong> (equivalent to JLPT N5 or higher) must be demonstrated through certificates or transcripts.</li>
    <li><strong>Authentic Academic Documents:</strong> All transcripts, mark sheets, and school certificates must be officially verified by the issuing institutions or education boards.</li>
    <li><strong>Sponsor Verification:</strong> If a sponsor (such as a parent or guardian) is funding the student, their occupation, income, and tax documents must also be included.</li>
  </ul>

  <h3>Impact on Nepali Students</h3>
  <p>For Nepali students aspiring to study in Japan, these updates mean better-prepared applications and fewer chances of rejection. Licensed consultancies, such as <strong>Divine Abroad Studies Pvt. Ltd.</strong>, are now offering enhanced documentation support and pre-screening services to ensure compliance with Japan’s new immigration standards.</p>

  <h3>Expert Recommendations</h3>
  <p>Education experts suggest that students start their visa preparation early—ideally six months before the intended intake period. This allows enough time for document verification, language training, and financial planning. Applicants should also make sure to:</p>
  <ul>
    <li>Enroll in certified Japanese language classes</li>
    <li>Keep all financial transactions transparent and traceable</li>
    <li>Choose legitimate consultancies with a proven track record</li>
  </ul>

  <h3>Ensuring a Smooth Application Process</h3>
  <p>With these stricter requirements, Japan aims to maintain the credibility of its education system while creating a secure and supportive environment for genuine learners. Students who prepare thoroughly and submit accurate documentation can expect a smoother visa approval process and a stronger start to their academic journey in Japan.</p>

  <p>For expert guidance and up-to-date information, <strong>Divine Abroad Studies</strong> continues to assist students in understanding these new regulations and preparing their visa documents effectively.</p>
  `,
},

    {
  id: 3,
  title: "Step-by-Step Guide to Japanese Student Visa Process",
  desc: "A complete guide for students who want to study in Japan — from visa forms to embassy interviews.",
  category: "Inspiration",
  author: "Pooja Acharya",
  date: "15 Nov 2023",
  image: stepbystepguide,
  content: `
  <p>Applying for a Japanese student visa can feel overwhelming at first, but with the right preparation and guidance, it’s a clear and well-structured process. This step-by-step guide will help you understand how to successfully apply for your student visa and start your academic journey in Japan.</p>

  <h3>Step 1: Apply to a Recognized Japanese Institution</h3>
  <p>The first step is to apply to a <strong>certified Japanese language school, college, or university</strong>. Once your application is accepted, the institution will begin processing your <strong>Certificate of Eligibility (CoE)</strong> — a document issued by Japan’s Immigration Services Agency that confirms your eligibility to enter Japan as a student.</p>

  <h3>Step 2: Receive Your Certificate of Eligibility (CoE)</h3>
  <p>The CoE is a crucial document in your visa process. It is issued after your school verifies all submitted documents such as academic transcripts, financial proof, and identification. This step usually takes about <strong>1–2 months</strong>. Once the CoE is ready, your school will send it to you in Nepal.</p>

  <h3>Step 3: Prepare and Submit Your Visa Application</h3>
  <p>After receiving your CoE, you can apply for your student visa at the <strong>Embassy of Japan in Kathmandu</strong>. You’ll need to prepare the following documents:</p>
  <ul>
    <li>Valid Passport</li>
    <li>Completed Visa Application Form</li>
    <li>Recent Passport-sized Photo (2x2 inch)</li>
    <li>Certificate of Eligibility (CoE)</li>
    <li>Academic Certificates and Transcripts</li>
    <li>Proof of Financial Support (bank statements or sponsor documents)</li>
  </ul>
  <p>Make sure all documents are complete and organized before submission. Incomplete or inconsistent information may delay your application.</p>

  <h3>Step 4: Embassy Interview (If Required)</h3>
  <p>In some cases, the embassy may request an interview to verify your intent to study and your preparedness for life in Japan. Be confident, honest, and ready to discuss your educational goals, your chosen institution, and your financial plans.</p>

  <h3>Step 5: Visa Approval and Travel Preparation</h3>
  <p>Once your visa is approved, you’ll receive your passport with the visa sticker. This process usually takes around <strong>4–6 weeks</strong> from submission. After receiving your visa, book your flight, arrange your accommodation, and prepare your essential travel documents for a smooth transition to Japan.</p>

  <h3>Pro Tips for Applicants</h3>
  <ul>
    <li>Start your visa process at least <strong>4 months before</strong> your course begins.</li>
    <li>Ensure your documents are genuine and translated properly if required.</li>
    <li>Stay in close contact with your chosen school or consultancy for updates.</li>
  </ul>

  <p>With thorough preparation and professional guidance from trusted education consultancies like <strong>Divine Abroad Studies Pvt. Ltd.</strong>, obtaining a Japanese student visa becomes a straightforward and successful journey toward achieving your global education dream.</p>
  `,
},

   {
  id: 4,
  title: "Top 10 Affordable Universities in Japan for Nepali Students",
  desc: "We’ve compiled a list of top universities offering world-class education without breaking the bank.",
  category: "Tools",
  author: "Wren Noble",
  date: "10 Nov 2023",
  image: affordableuni,
  content: `
  <p>Japan has emerged as one of the most attractive study destinations for Nepali students — not only for its world-class education but also for its affordability. Many Japanese universities offer high academic standards, research opportunities, and scholarships that make studying in Japan more accessible than ever before.</p>

  <h3>Why Japan is Ideal for Budget-Conscious Students</h3>
  <p>Compared to countries like the US, UK, or Australia, Japan offers excellent education at a fraction of the cost. On average, tuition fees at national and public universities range between <strong>¥500,000–¥800,000 per year</strong> — significantly lower than other developed nations. Additionally, Japan’s safe environment, part-time job options, and international student support services make it a welcoming choice for Nepali learners.</p>

  <h3>Top 10 Affordable Universities in Japan</h3>
  <p>Here’s a list of highly reputable yet budget-friendly universities where Nepali students can pursue quality education without financial stress:</p>

  <ol class="list-decimal ml-6 space-y-1">
    <li><strong>Kyushu University</strong> – Known for its engineering and science programs, offering generous international scholarships.</li>
    <li><strong>Tokyo University of Foreign Studies</strong> – A top choice for students interested in languages, international relations, and cultural studies.</li>
    <li><strong>Osaka University</strong> – One of Japan’s leading research institutions with diverse programs and reasonable tuition.</li>
    <li><strong>Hokkaido University</strong> – Offers affordable tuition and scholarships in fields like agriculture, science, and engineering.</li>
    <li><strong>Nagoya University</strong> – Known for innovation and strong partnerships with industries, making it a great option for career-oriented students.</li>
    <li><strong>Ritsumeikan Asia Pacific University (APU)</strong> – Features English-taught programs and a special tuition reduction system for international students.</li>
    <li><strong>Sophia University</strong> – Offers English-based programs in business, global studies, and economics with competitive scholarships.</li>
    <li><strong>Yamanashi Gakuin University</strong> – Renowned for its International College of Liberal Arts (iCLA) and diverse student community.</li>
    <li><strong>Hiroshima University</strong> – Combines high-quality education with an affordable cost of living in western Japan.</li>
    <li><strong>Meiji University</strong> – A private institution with a strong reputation and various scholarship opportunities for foreign students.</li>
  </ol>

  <h3>Scholarship Opportunities</h3>
  <p>Many of these universities offer scholarships to international students, helping reduce financial pressure. Some popular options include:</p>
  <ul>
    <li><strong>JASSO (Japan Student Services Organization) Scholarship</strong> – Monthly stipends for international students demonstrating academic excellence.</li>
    <li><strong>MEXT University Recommendation</strong> – Full scholarships that cover tuition, living expenses, and travel costs.</li>
    <li><strong>APU Tuition Reduction Program</strong> – Offers up to 100% tuition fee reduction based on merit and financial need.</li>
  </ul>

  <h3>Living Costs in Japan</h3>
  <p>On average, students spend about <strong>¥70,000–¥100,000 per month</strong> on accommodation, food, and transportation. However, with part-time work (up to 28 hours/week allowed), many Nepali students successfully manage their living expenses.</p>

  <h3>Final Thoughts</h3>
  <p>Studying in Japan offers an exceptional balance between quality education and affordability. With the right guidance and preparation, Nepali students can achieve their dreams of earning an international degree in a country known for its discipline, innovation, and cultural richness.</p>

  <p>At <strong>Divine Abroad Studies Pvt. Ltd.</strong>, we help students identify the most affordable and reputable universities in Japan that match their goals and financial plans — making higher education abroad a realistic and rewarding journey.</p>
  `,
},
{
  id: 5,
  title: "From Kathmandu to Tokyo: Ramesh’s Journey to His Dream University",
  desc: "Ramesh, a Nepali student, shares his story of overcoming challenges and achieving his dream of studying IT in Tokyo.",
  category: "News",
  author: "Prakash Thapa",
  date: "6 Nov 2023",
  image: journey,
  content: `
  <p>Every great journey begins with a dream — and for <strong>Ramesh Tamang</strong>, a passionate IT student from Kathmandu, that dream was to study in Japan. From navigating paperwork to learning the Japanese language, Ramesh’s path was filled with challenges. But through determination, hard work, and the expert guidance of <strong>Divine Abroad Studies Pvt. Ltd.</strong>, he successfully turned his aspiration into reality.</p>

  <h3>From a Small Town Dream to a Global Vision</h3>
  <p>Ramesh always had a fascination with technology and innovation. While studying computer science in Nepal, he realized that Japan — one of the world’s leaders in robotics, software, and AI — offered unmatched opportunities for students like him. However, the visa process and language requirements seemed daunting at first.</p>

  <p>That’s when he reached out to <strong>Divine Abroad Studies</strong> for help. Their counseling team carefully assessed his profile, guided him on school selection, and supported him throughout the application process. Within months, Ramesh was accepted into a top technology program in Tokyo.</p>

  <h3>The Struggles Behind the Success</h3>
  <p>Preparing to study abroad wasn’t easy. From gathering financial documents to clearing the Japanese Language Proficiency Test (JLPT N5), Ramesh had to manage his time efficiently while balancing work and studies.</p>
  <p>He recalls,</p>
  <blockquote>
  “At first, I was nervous about documentation and language, but Divine guided me at every step. They helped me understand the visa process clearly and even supported my pre-departure preparations. I now study Computer Science in Tokyo and work part-time at a tech startup — something I had only dreamed of before.”
  </blockquote>

  <h3>Life in Japan: A New Beginning</h3>
  <p>Settling in Tokyo opened a whole new world for Ramesh. The disciplined lifestyle, advanced learning environment, and exposure to global technology trends helped him grow both academically and personally. He quickly adapted to Japanese culture, built lasting friendships, and learned to balance study with part-time work.</p>

  <h3>Ramesh’s Advice for Aspiring Students</h3>
  <p>Ramesh believes that any student with passion and persistence can achieve the same success. Here are his top tips for Nepali students planning to study in Japan:</p>
  <ul>
    <li><strong>Start learning Japanese early</strong> – Language is the key to connecting with people and understanding Japan’s education system.</li>
    <li><strong>Keep all documents organized</strong> – From financial proof to academic records, accuracy saves time and stress during visa processing.</li>
    <li><strong>Choose the right consultancy</strong> – Working with trusted experts like Divine Abroad Studies makes the entire process smoother and stress-free.</li>
  </ul>

  <h3>A Journey That Inspires Others</h3>
  <p>Today, Ramesh is not only a university student but also a role model for many Nepali youths who dream of studying abroad. His journey proves that with the right mindset and professional guidance, anything is possible.</p>

  <p>At <strong>Divine Abroad Studies Pvt. Ltd.</strong>, we are proud to have supported hundreds of students like Ramesh in achieving their dreams of studying in Japan — turning ambitions into achievements and dreams into reality.</p>
  `,
},

   {
  id: 6,
  title: "How Divine Abroad Studies Helped 100+ Students Find Their Perfect Program",
  desc: "We recently celebrated a milestone of sending 100+ students to Japan in the past years.",
  category: "Learn",
  author: "Binita Gurung",
  date: "6 Nov 2023",
  image: howjapanhelp,
  content: `
  <p><strong>Divine Abroad Studies Pvt. Ltd.</strong> has achieved a remarkable milestone by helping more than <strong>100 Nepali students</strong> successfully enroll in top Japanese universities and language schools. This achievement reflects our unwavering commitment to guiding students with care, integrity, and expertise throughout their academic journey abroad.</p>

  <h3>Guiding Dreams Into Direction</h3>
  <p>Every student has unique ambitions, strengths, and circumstances. Recognizing this, Divine Abroad Studies offers <strong>personalized counseling</strong> to help students find programs that match their academic goals, career interests, and financial situations. Whether it’s engineering, IT, management, or Japanese language studies — our team ensures every student takes the right first step toward a successful global career.</p>

  <h3>Comprehensive Support Every Step of the Way</h3>
  <p>We believe that the journey to studying abroad shouldn’t be stressful. That’s why Divine provides end-to-end support services, including:</p>
  <ul>
    <li><strong>Personalized Counseling:</strong> Helping students identify the best-fit universities and courses.</li>
    <li><strong>Application & Visa Documentation:</strong> Assisting with accurate document preparation, translation, and submission.</li>
    <li><strong>Pre-Departure Orientation:</strong> Preparing students for cultural, academic, and lifestyle adjustments in Japan.</li>
    <li><strong>Post-Arrival Assistance:</strong> Supporting students in settling into their new environment smoothly.</li>
  </ul>

  <blockquote>
  “Our mission is to make international education accessible, transparent, and life-changing,” says the Director of Divine Abroad Studies.
  </blockquote>

  <h3>Strong Partnerships With Japanese Institutions</h3>
  <p>Over the years, Divine Abroad Studies has built trusted partnerships with several reputed <strong>Japanese language schools, colleges, and universities</strong>. These collaborations ensure that students receive genuine admissions, timely visa approvals, and access to a range of <strong>scholarship opportunities</strong> such as MEXT, JASSO, and institutional tuition waivers.</p>

  <h3>Celebrating Student Success Stories</h3>
  <p>Behind every successful student lies a story of persistence and guidance. From small towns in Nepal to bustling Japanese cities like Tokyo, Osaka, and Fukuoka — Divine has been part of countless success stories. Our alumni now study diverse programs, work part-time jobs, and experience Japan’s unique blend of tradition and innovation firsthand.</p>

  <h3>Looking Ahead: The Road to 2026</h3>
  <p>Encouraged by the success of the past years, Divine Abroad Studies aims to <strong>double this number by 2026</strong>. With expanding partnerships, digital counseling systems, and enhanced scholarship pathways, we’re determined to make studying in Japan more accessible than ever before.</p>

  <p>At <strong>Divine Abroad Studies Pvt. Ltd.</strong>, we don’t just send students abroad — we open doors to opportunity, confidence, and a brighter global future.</p>
  `,
},

  ];

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-gray-500">
        Blog not found 😢
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
     

      {/* Hero Section */}
      <div
        className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${japanImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#3856B2]/85"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{blog.title}</h1>
          <div className="flex items-center justify-center text-sm md:text-base gap-2">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-[#F9B234] transition-colors duration-300"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span className="text-white/70">›</span>
            <Link
              to="/blogs"
              className="hover:text-[#F9B234] transition-colors duration-300"
            >
              Blogs
            </Link>
            <span className="text-white/70">›</span>
            <span className="text-[#F9B234] font-medium">Details</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-2xl shadow-md mb-8"
        />
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>👤 {blog.author}</span>
          <span>{blog.date}</span>
        </div>

        <h2 className="text-2xl font-bold text-[#1a237e] mb-4">
          {blog.title}
        </h2>
        <div
  className="text-gray-800 leading-relaxed space-y-4 blog-content"
  dangerouslySetInnerHTML={{ __html: blog.content }}
></div>


        <div className="mt-10">
          <Link
            to="/blogs"
            className="inline-block bg-[#3856B2] text-white px-6 py-2 rounded-md hover:bg-[#2f4aa3] transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
