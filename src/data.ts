export interface ProjectPhoto {
  url: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  image: string;
  link: string;
  gallery?: ProjectPhoto[];
  timeline?: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  type?: string;
  description: string;
  tags?: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  status?: string;
  description: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "kine-syms",
    num: "01",
    title: "Kine-Syms",
    subtitle: "A Faster Way to Prototype",
    category: "University Project",
    description:
      "Kine-Syms is an interactive web platform for creating, simulating, and sharing kinematic systems. It enables engineers and designers to digitally design mechanical structures, simulate their motion in real time, and validate their functionality.",
    tags: [
      "Interactive Systems Development",
      "UX/UI Design",
      "Prototyping",
      "Frontend Engineering",
    ],
    year: "2023",
    image: "/src/assets/images/kinesyms.png",
    link: "#",
    gallery: [
      {
        url: "/src/assets/images/kinestart.png",
        title: "Get started",
        description:
          "The project includes a creative community section that enables users to explore, download, and use templates for various kinematic systems. Each template comes with step-by-step assembly instructions to support easy understanding and practical implementation. In addition, users are encouraged to design their own custom kinematic solutions and share them with the community. This creates an open and collaborative environment where knowledge, ideas, and technical approaches can be exchanged and further developed.",
      },
      {
        url: "/src/assets/images/kinedetail.png",
        title: "Instructions for Assembly and Production",
        description:
          "Once a user selects a system, they receive a step-by-step assembly guide along with all required components. Depending on the application, parts are either provided as links to online shops or as downloadable files for self-production. Connection elements are available as 3D-printable files, while the system geometry is provided as DXF files for laser cutting. This enables a seamless transition from digital design to physical fabrication.",
      },
      {
        url: "/src/assets/images/kineedit.png",
        title: "Design Your Own Systems",
        description:
          "The design space also allows users to create their own custom systems, giving full freedom to explore and develop their creativity. It enables rapid prototyping of ideas and supports quick testing and iteration in everyday contexts. This makes it easy to turn concepts into functional prototypes efficiently and intuitively.",
      },
      {
        url: "/src/assets/images/stab.png",
        title: "From Digital File to Physical Part",
        description:
          "The generated components can either be outsourced to external manufacturing services or produced in-house using a 3D printer. This ensures high-quality results while maintaining flexibility in production. The provided files are optimized for accurate fabrication, allowing reliable and precise assembly of all parts.",
      },
    ],
  },
  {
    id: "zeiss-measure",
    num: "02",
    title: "Zeiss Measure",
    subtitle: "Smart Measurement. Efficient Control.",
    category: "University–Industry Collaboration",
    description:
      "ZEISS Measure is a digital dashboard and process management system for metrology that centralizes and visualizes measurement jobs, machine status, and measurement data. With advanced features for part inspection and measurement process control, it streamlines workflows and improves efficiency in the inspection lab.",
    tags: [
      "Industry 4.0",
      "UX/UI Design",
      "Metrology",
      "Process Management",
      "Quality Assurance",
    ],
    year: "2023",
    image: "/src/assets/images/zeiss.png",
    link: "#",
    gallery: [
      {
        url: "/src/assets/images/Auftrag.png",
        title: "Job Overview",
        description:
          "The job overview provides a centralized view of all active and upcoming measurement tasks. It helps users quickly understand priorities, deadlines, and current processing status. This function exists to improve transparency and reduce coordination effort, ensuring that operators can manage workloads efficiently and make informed decisions at a glance.",
      },
      {
        url: "/src/assets/images/Warteschlange.png",
        title: "Queue Management",
        description:
          "The queue management organizes and prioritizes measurement jobs in a structured workflow. It allows tasks to be dynamically reordered based on urgency, availability, or machine status. This function exists to optimize resource utilization and minimize idle time in the measurement lab, ensuring a smooth and efficient processing flow.",
      },
    ],
  },
  {
    id: "stratum",
    num: "03",
    title: "ReJeans",
    subtitle: "Sustainable online shopping",
    category: "Web / Product",
    description:
      "How can digital product passports make the lifecycle of clothing transparent and create ecological and economic value for users and second-hand platforms?",
    tags: [
      "Digital Product Design",
      "UX/UI Design",
      "Circular Fashion",
      "Sustainability",
    ],
    year: "2025",
    image: "/src/assets/images/mockup.png",
    link: "#",
    gallery: [
      {
        url: "/src/assets/images/textilhalde.png",
        title: "Fast Fashion & Its Environmental Impact",
        description:
          "Fast fashion has become a major global problem, as it promotes overproduction and overconsumption of clothing at extremely low prices. This system has a significant negative impact on the environment, including high water usage, pollution from textile dyeing, and large amounts of clothing waste ending up in landfills. In addition, it is often very difficult to trace where garments actually come from and under what conditions they are produced. The lack of transparency in global supply chains means that workers’ rights, safety standards, and fair wages are not always guaranteed. As a result, consumers rarely have a clear understanding of the true cost behind their clothes, both environmentally and ethically.",
      },
      {
        url: "/src/assets/images/Materialjeans.png",
        title: "Jeans Popular but Environmentally Challenging",
        description:
          "Jeans are one of the most popular clothing items worldwide, appreciated for their durability and timeless style. However, their production has a significant environmental impact, particularly due to high water consumption, chemical treatments, and energy-intensive manufacturing processes. At the same time, they offer strong potential for more sustainable alternatives when made from responsibly sourced or organic cotton and integrated into more circular production systems. With improved materials and longer product lifecycles, jeans can become a more environmentally friendly garment while maintaining their global popularity.",
      },
      {
        url: "/src/assets/images/flowjeans.png",
        title: "AI Clothing Registration",
        description:
          "Users can register their clothing items directly in the app with the support of AI. By uploading basic information and images, the system automatically identifies the garment and estimates its value, similar to traditional resale platforms. However, instead of manual input and fixed rules, the process is enhanced by AI assistance, making it faster, more accurate, and more user-friendly while improving consistency in valuation across the platform.",
      },
      {
        url: "/src/assets/images/rejeans.png",
        title: "Impact Insights",
        description:
          "The digital product passport provides clear insights into the environmental and lifecycle impact of each garment, including information such as origin, water consumption, material composition, and overall ecological footprint. By making these factors visible, users gain a better understanding of the true impact behind their clothing choices. With the planned EU regulation making digital product passports mandatory by 2027, such transparency becomes an essential part of future fashion systems, supporting more responsible consumption and sustainable decision-making.",
      },
    ],
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    id: "rejeans-campaign",
    num: "01",
    title: "Sheep Tag",
    category: "Smart Herd Protection",
    description:
      "SheepTag is a modular livestock protection system that combines technology and practical approaches to help sheep farmers protect their flocks. It was developed in response to growing wolf populations and is based on user research and expert interviews with shepherds, hunters, and conservation groups.\n\nThe system integrates wearables, camera technology, and a mobile app into one solution. Sensors track heart rate, GPS, and environmental data to detect stress and potential threats, while cameras verify events and the app displays real-time data, alerts, and herd movements.",
    tags: ["IoT Systems", "UX/UI Design", "Mobile Design", "Arduino"],
    year: "2024",
    image: "/src/assets/images/sheep.png",
    link: "#",
  },
  {
    id: "stratum-web",
    num: "02",
    title: "Lumi Smart Inkubator",
    category: "Intelligent Environment for Newborns",
    description:
      "Lumi is an intelligent incubator lighting system designed for premature and medically vulnerable newborns. Developed in collaboration with healthcare professionals at Ulm University Hospital, it creates a calming, development-supportive environment while improving conditions for caregivers, parents, and visitors.\n\nUsing liquid crystal smart glass technology, Lumi dynamically adjusts transparency and shading. Different lighting modes support both optimal rest for newborns and efficient medical care.",
    tags: [
      "Medical Product Design",
      "UX/UI Design",
      "Smart Lighting",
      "Human-Centered Design",
    ],
    year: "2025",
    image: "/src/assets/images/lumifront.png",
    link: "#",
    timeline: "5 months",
  },
  {
    id: "vesper",
    num: "03",
    title: "Face Forward",
    category: "AR Therapy Companion",
    description:
      "FaceForward is an augmented reality therapy companion designed to support exposure therapy for people with specific phobias. Using Apple Vision Pro, patients are immersed in controlled AR environments where they can gradually confront their fears in a safe and personalized way. Therapists manage the entire therapy process through an iPad dashboard, allowing them to create tailored scenarios, adjust stimulus intensity in real time, and respond to patient reactions during sessions.\n\nThe system enables a more flexible and adaptive therapeutic experience by combining immersive technology with professional clinical guidance. FaceForward helps make exposure therapy more accessible, engaging, and effective while giving therapists greater control over treatment progression.",
    tags: [
      "Augmented Reality (AR)",
      "Exposure Therapy",
      "Mental Health",
      "Apple Vision Pro",
      "Personalized Treatment",
      "Therapist-Controlled Sessions",
      "Digital Health",
      "Phobia Treatment",
    ],
    year: "2024",
    image: "/src/assets/images/face.png",
    link: "#",
    timeline: "4 months",
  },
  {
    id: "grow-guardian-app",
    num: "04",
    title: "Grow Guardian",
    category: "IoT Plant Care System",
    description:
      "Grow Guardian is an intelligent, automated plant care and environmental monitoring system designed to support botanical health. Equipped with advanced sensors, it monitors soil moisture, ambient light, temperature, and relative humidity in real time, providing actionable insights for plant scaling and automated irrigation.\n\nUsing smart irrigation pumps and custom sensor feedback loops, Grow Guardian ensures optimal horticultural conditions, preventing overwatering and dry spells. Users can monitor growth patterns and environmental metrics via a connected analytics dashboard, making indoor gardening accessible and data-driven.",
    tags: [
      "IoT Systems",
      "UX/UI Design",
      "Botanical Tech",
      "Hardware Prototyping",
      "Environmental Sensors",
    ],
    year: "2022",
    image: "/src/assets/images/sari.png",
    link: "#",
    timeline: "3 months",
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Working Student - Voice UX & Interaction Design",
    company: "Mercedes-Benz",
    location: "Sindelfingen",
    period: "09/2024 - 05/2025",
    type: "20h/week",
    description:
      "Supporting the development and testing of voice-based interactions for MBUX with a focus on Voice UX, ASR prototyping, and user research.",
    tags: [
      "#VoiceUX",
      "#ConversationalAI",
      "#VoiceAssistant",
      "#UXResearch",
      "#InteractionDesign",
      "#AutomotiveUX",
      "#MBUX",
      "#UserTesting",
      "#ASR",
      "#HumanCenteredDesign",
    ],
  },
  {
    role: "Internship - UX Design User Personalization",
    company: "Mercedes-Benz",
    location: "Sindelfingen",
    period: "03/2024 - 08/2024",
    type: "FULL-TIME",
    description:
      "Contributed to the design of personalized MBUX user experiences by creating interactive UI prototypes and translating user research insights into intuitive interface concepts. Supported design system optimization, benchmarking activities, user testing, and the migration from Sketch to a new design tool.",
    tags: [
      "#UXDesign",
      "#UIUX",
      "#Prototyping",
      "#UserResearch",
      "#DesignSystems",
      "#InteractionDesign",
      "#MBUX",
      "#AutomotiveUX",
      "#UserTesting",
    ],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: "M.Sc. Human Centered Design (HCD)",
    school: "Hochschule für Technik, Wirtschaft & Gesundheit, Aalen",
    period: "10/2025 - today",
    status: "IN PROGRESS",
    description:
      "Human-Centered Design focuses on understanding human needs and behaviors to create innovative, accessible, and meaningful solutions that improve everyday life.",
  },
  {
    degree: "B.A. Internet of Things (IoT)",
    school: "Hochschule für Gestaltung, Schwäbisch Gmünd",
    period: "02/2021 - 08/2025",
    status: "COMPLETED",
    description:
      "This Bachelor combines creativity, technology, and IoT, focusing on designing connected, user-centered products and experiences at the intersection of people and technology.",
  },
];

export const SKILLS = {
  tools: [
    "Figma",
    "Adobe Illustrator",
    "Adobe InDesign",
    "ProtoPie",
    "Miro",
    "Microsoft Word",
    "Microsoft Excel",
    "Microsoft PowerPoint",
  ],
  development: ["Arduino", "Raspberry Pi", "HTML", "CSS", "Next.js"],
  design: [
    "UI/UX Design",
    "Human-Centered Design",
    "Interaction Design",
    "Prototyping",
    "Concept Development",
    "Concept Creation",
  ],
  research: [
    "User Research",
    "Interviews",
    "Usability Testing",
    "Iterative Design",
  ],
  management: ["Product Management", "Project Management"],
};
