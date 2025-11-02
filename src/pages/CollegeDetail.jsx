import React from "react";
import { useParams, Link } from "react-router-dom";
import { Home } from "lucide-react";

// ✅ Import college images
import college1Img from "../assets/yanago_international_business_college.png";
import college2Img from "../assets/japanese_language_institute_MIRAI.png";
import college3Img from "../assets/okazaki_japanese_language_school.png";
import college4Img from "../assets/Tsuruishi_Gakuen_Sakura_Japanese_Language_Academy.png";
import college5Img from "../assets/Aristo_foreign_language_school.png";
import college6Img from "../assets/IPA_International_Education_Academy.png";

import IPA_International_image from "../assets/IPA_International_image.png";
import Aristo_Foreign_Language_School_fee from "../assets/Aristo_Foreign_Language_School_fee.png";
import Tsuruishi_Gakuen_Sakura_admissionflow from "../assets/Tsuruishi_Gakuen_Sakura_admissionflow.png";
import okazaki_about_tutuion_year2 from "../assets/okazaki_about_tutuion_year2.png";
import okazaki_about_tutuion from "../assets/okazaki_about_tutuion.png";
import okazaki_japanese_course_intro from "../assets/okazaki_japanese_course_intro.png";
import okazaki_japanese_detail from "../assets/okazaki_japanese_detail.png";

const collegesDetail = [
  {
    id: 1,
    name: "Yonago International Business College",
    address: "〒 683-0053, Yonago, Tottori Prefecture Meiji-cho, 178, Japan",
    started: "2018 Year 10 Month",
    courses: [
      {
        type: "April enrollment (1 year course)",
        enrollmentFee: "¥20,000",
        tuitionFee: "¥500,000",
        textBook: "¥20,000",
        practiceFee: "¥20,000",
        total: "¥560,000",
      },
      {
        type: "October enrollment (1 year 6 months course)",
        enrollmentFee: "¥20,000",
        tuitionFee: "¥500,000",
        textBook: "¥20,000",
        practiceFee: "¥20,000",
        total: "¥560,000",
      },
    ],
    classTime:
      "5 days a week (Monday to Friday), Morning class 4 hours, Afternoon class 4 hours",
    notes: [
      "School has a dormitory; dormitory fees required. Contact for details.",
      "Prices are without tax.",
      "34 visas approved till April 2020.",
    ],
    img: college1Img,
  },
  {
    id: 2,
    name: "Japanese Language Institute MIRAI",
    about:
      "The Japanese Language Institute MIRAI is located in Kobe, a leading cosmopolitan city in Japan. Our school, in Sannomiya district, offers new and improved educational facilities with excellent teachers. We aim to enhance student life not only through education but also through rich cultural experiences. Students can make friends worldwide and gain cultural exposure that helps them become global citizens.",
    educationalPolicy:
      "Studying at MIRAI ensures fast and effective learning of Japanese with correct pronunciation. We teach language and culture equally through classroom study, practice, experiences, and activities. We contribute to students' development and skills in an international society.",
    services: [
      "Employment support in Japan (part-time jobs with assistance and interviews)",
      "Guidance for further education (university or college application support)",
      "Student support (daily life assistance and personal growth guidance)",
      "Accommodation options: Weekly Mansion, Home Stay, Student Dormitory, Apartment",
      "Dining: On-campus shopping arcade with restaurants, food court, student lounge with Rokko mountain views",
    ],
    activities: [
      "Volunteer activities to bond with local people and learn Japanese culture",
      "Sports & Culture Club support, including college sports day events",
    ],
    facility:
      "Renovated building (2016) with library, nursing room, student support offices, and student lounge with Rokko mountain views. Conveniently located in Kobe city with access to affordable restaurants and essential stores.",
    img: college2Img,
  },
  {
    id: 3,
    name: "Okazaki Japanese Language School",
    about:
      "Located in Okazaki City, Aichi Prefecture, offering 1-year & 6-month and 2-year courses twice a year. Students from multiple countries enroll.",
    courses: [
      {
        type: "1-year 6-month course (Oct admission)",
        entranceFee: "¥22,000",
        enrollmentFee: "¥88,000",
        tuitionFee: "¥495,000",
        maintenanceFee: "¥99,000",
        facilitiesFee: "¥22,000",
        insurance: "¥18,150",
        activityFee: "¥16,500",
        textbookFee: "¥22,000",
        accommodation: "¥22,000",
        airportPickup: "¥11,000",
        total: "¥672,650",
        img: okazaki_about_tutuion,
      },
      {
        type: "2-year course (April admission)",
        entranceFee: "¥22,000",
        enrollmentFee: "¥88,000",
        tuitionFee: "¥440,000",
        maintenanceFee: "¥88,000",
        facilitiesFee: "¥22,000",
        insurance: "¥14,650",
        activityFee: "¥11,000",
        textbookFee: "¥29,700",
        accommodation: "¥22,000",
        airportPickup: "¥11,000",
        total: "¥605,350",
        img: okazaki_about_tutuion_year2,
      },
    ],
    img: college3Img,
    additionalImages: [
      { title: "Course Introduction", src: okazaki_japanese_course_intro },
      { title: "Details", src: okazaki_japanese_detail },
    ],
  },
  {
    id: 4,
    name: "Tsuruishi Gakuen Sakura Japanese Language Academy",
    about:
      "Sakura Japanese Language Academy guides students in understanding Japanese culture, society, and history. Promotes active cultural exchange and interaction with local residents.",
    admissionFlowImg: Tsuruishi_Gakuen_Sakura_admissionflow,
    img: college4Img,
  },
  {
    id: 5,
    name: "Aristo Foreign Language School",
    about: `海外の方々に日本語を習得いただける、日本語学校です。
私たちアリスト外語学院では、日本語を習得を目指す海外の方々にひろく門戸を開放して、
ひとりでも多くの方々に日本語をマスターしていただけるように丁寧なカリキュラムを実施しています。
現地での審査を行い、合格者については日本在留に必要な手続きから実施しますのでお気軽にお問い合わせください。`,
    feeImg: Aristo_Foreign_Language_School_fee,
    img: college5Img,
  },
  {
    id: 6,
    name: "IPA International Education Academy",
    about: `進学コース
進学コースの特徴
進学を目指す、留学ビザの方対象のコースです。
大学、大学院進学を目標に、JLPT　N2、N1の合格、留学生試験での高得点を目指します。
日本の大学、大学院で授業を受けるのに必要なレベルの4技能「読む、書く、話す、聴く」を習得するとともに、日本の生活に役立つ実践的な日本語も学習します。
毎月キャリアプランニングの時間があり、学習目標を自分で設定して、勉強方法を振り返り、今後の勉強の進め方や将来のことを自律的に考える能力を養います。
3か月ごとの定期試験で自分の日本語レベルが確認でき、勉強の進め方や進学など専門講師と相談しながら実力を伸ばしていきます。

短期コース
短期コースの特徴
留学ビザ以外の方で日本語を勉強したい方対象のコースです。
会話を中心に学習して、日本語でのコミュニケーション能力を伸ばします。
日常会話だけでなく、日本語を通して日本の文化や習慣を習得することができます。
文法や語彙の数を増やしながら、学習者のニーズに合わせて実践的な日本語を学びます。
日本語能力試験（JLPT)受験希望の方には、レベルに合わせて合格指導します。
ご希望により日本の高校進学や大学進学のための国語教育も行います。`,
    img: college6Img,
    detailImg: IPA_International_image,
  },
];


export default function CollegeDetail() {
  const { id } = useParams();
  const college = collegesDetail.find((c) => c.id === parseInt(id));

  if (!college) {
    return (
      <div className="text-center mt-20 font-['Oswald']">
        <h2 className="text-2xl font-bold">College Not Found</h2>
        <Link
          to="/college-university"
          className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
        >
          Back to College List
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pb-12 font-['Oswald']">
      {/* Hero Section */}
      <div
        className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center text-center text-white bg-blue-900"
        style={{ backgroundImage: `url(${college.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#3856B2]/85"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{college.name}</h1>
          <div className="flex items-center justify-center text-sm md:text-base gap-2">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-[#F9B234] transition-colors duration-300"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span className="text-white/70">›</span>
            <span className="text-[#F9B234] font-medium">{college.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 mt-12">
        {college.about && <p className="text-gray-700 mb-4">{college.about}</p>}

        {/* Educational Policy */}
        {college.educationalPolicy && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Educational Policy</h2>
            <p className="text-gray-700">{college.educationalPolicy}</p>
          </div>
        )}

        {/* Services */}
        {college.services && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Additional Services</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {college.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Activities */}
        {college.activities && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Activities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {college.activities.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Facilities */}
        {college.facility && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Facilities</h2>
            <p className="text-gray-700">{college.facility}</p>
          </div>
        )}

        {/* Courses & Fees */}
        {college.courses && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Courses & Fees</h2>
            {college.courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-4 mb-4">
                <h3 className="font-semibold text-lg mb-2">{course.type}</h3>
                {Object.entries(course).map(([key, value]) => {
                  if (key === "type" || key === "img") return null;
                  return (
                    <p key={key} className="text-gray-700 text-sm">
                      <span className="font-medium">{key.replace(/([A-Z])/g, " $1")}: </span>
                      {value}
                    </p>
                  );
                })}
                {course.img && <img src={course.img} alt={course.type} className="w-full mt-4 rounded-lg shadow-md" />}
              </div>
            ))}
          </div>
        )}

        {/* Additional Images */}
        {college.additionalImages && college.additionalImages.map((imgObj, idx) => (
          <div key={idx} className="mt-6">
            <h3 className="font-semibold text-lg mb-2">{imgObj.title}</h3>
            <img src={imgObj.src} alt={imgObj.title} className="w-full rounded-lg shadow-md" />
          </div>
        ))}

        {/* Admission Flow, Fee, Detail Images */}
        {college.admissionFlowImg && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Admission Flow</h2>
            <img src={college.admissionFlowImg} alt="Admission Flow" className="w-full rounded-lg shadow-md" />
          </div>
        )}
        {college.feeImg && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Fee Details</h2>
            <img src={college.feeImg} alt="Fee Details" className="w-full rounded-lg shadow-md" />
          </div>
        )}
        {college.detailImg && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            <img src={college.detailImg} alt="Details" className="w-full rounded-lg shadow-md" />
          </div>
        )}

        {/* Notes */}
        {college.notes && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Notes</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {college.notes.map((note, idx) => <li key={idx}>{note}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
