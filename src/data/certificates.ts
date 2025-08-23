// SEO keywords globally merged by Bolt AI on 2025-01-27 for maximum ranking – excludes milestone page
// Import images (adjust path/filenames as needed)
import conociendoCanva from '../assets/conociendoCanva.jpg';
import oracleCloudAiFoundationsAssociate from '../assets/Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.jpg';
import oracleCloudGenerativeAiProfessional from '../assets/Oracle Cloud Infrastructure 2025 Certified Generative AI Professional.jpg';
import buildWithIndiaVolunteer from '../assets/Certificate of Achievement BuildWithIndia Volunteer.jpg';
import buildSecureGoogleCloudNetwork from '../assets/Build a Secure Google Cloud Network Skill Badge.jpg';
import promptDesignInVertexAi from '../assets/Prompt Design in Vertex AI Skill Badge.jpg';
import developGenAiAppsWithGemini from '../assets/Develop GenAI Apps with Gemini and Streamlit Skill Badge.jpg';
import engineerDataWithBigQueryMl from '../assets/Engineer Data for Predictive Modeling with BigQuery ML Skill Badge.jpg';
import exploreGenAiWithGeminiApi from '../assets/Explore Generative AI with the Vertex AI Gemini API Skill Badge.jpg';
import buildComputerVisionAppAzure from '../assets/Build a computer vision app with Azure Cognitive Services.jpg';
import freakOMatrixAxis25 from '../assets/Certificate of Participation Freak O Matrix AXIS 25.jpg';
import enigmaCybersecurityCtf from '../assets/Certificate of Participation ENIGMA The Cybersecurity CTF.jpg';
import introductionToModernAi from '../assets/Introduction to Modern AI.jpg';
import pythonEssentials1 from '../assets/Python Essentials 1.jpg';
import dataAnalyticsEssentials from '../assets/Data Analytics Essentials.jpg';
import introductionToDataScience from '../assets/Introduction to Data Science.jpg';
import dataScienceFoundationsLevel1 from '../assets/Data Science Foundations - Level 1.jpg';
import dataScienceMethodologies from '../assets/Data Science Methodologies.jpg';
import pythonForDataScience from '../assets/Python for Data Science.jpg';
import dataScienceTools from '../assets/Data Science Tools.jpg';







const globalKeywords = [
  "Python", "Java", "C", "C++", "C#", "JavaScript", "TypeScript", "Go", "Golang", "Rust", "Kotlin", "Swift", "R", "Ruby", "PHP", "Dart", "Scala", "MATLAB", "Julia", "Haskell", "Perl", "Shell", "Bash", "PowerShell", "Fortran", "Objective-C", "Assembly", "F#", "Elixir", "COBOL", "VBA", "Solidity", "Groovy", "SAS", "PL/SQL", "SQL", "NoSQL", "GraphQL",
  "React", "React Native", "Angular", "Vue", "Next.js", "Nuxt.js", "Svelte", "Preact", "Tailwind CSS", "Bootstrap", "Material UI", "Chakra UI", "jQuery", "Ember.js", "Alpine.js", "Redux", "MobX", "Zustand", "SWR", "TanStack Query", "Node.js", "Express", "NestJS", "Fastify", "Socket.io", "Django", "Flask", "Spring Boot", "Spring", "Hibernate", "ASP.NET", "Laravel", "Symfony", "Ruby on Rails", "Meteor", "Phoenix", "Ktor", "FastAPI", "Fiber", "Gatsby", "Eleventy", "Gridsome", "Remix", "Quasar", "Expo", "Capacitor", "Ionic", "Electron", "Tauri",
  "MongoDB", "PostgreSQL", "MySQL", "MariaDB", "Redis", "SQLite", "Cassandra", "CouchDB", "DynamoDB", "Firestore", "BigQuery", "Snowflake", "Oracle Database", "Elasticsearch", "Supabase", "PlanetScale", "Firebase",
  "AWS", "Amazon Web Services", "Microsoft Azure", "Google Cloud Platform", "GCP", "IBM Cloud", "Oracle Cloud", "DigitalOcean", "Linode", "Heroku", "Netlify", "Vercel", "Cloudflare", "Render", "Railway", "Docker", "Kubernetes", "Helm", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "Travis CI", "ArgoCD", "Pulumi", "Serverless", "Lambda", "Fargate", "App Engine", "S3", "Notion", "Airtable", "Trello", "Jira", "Confluence", "Miro", "Loom", "Calendly", "Asana", "Slack", "Discord", "WhatsApp", "Telegram", "Zoom",
  "Artificial Intelligence", "AI", "Machine Learning", "ML", "Deep Learning", "DL", "Reinforcement Learning", "NLP", "Natural Language Processing", "Computer Vision", "Generative AI", "Prompt Engineering", "Large Language Models", "LLM", "Transformers", "OpenAI", "ChatGPT", "Gemini", "Google Bard", "Claude", "Llama", "Mixtral", "Falcon", "Gemma", "BLOOM", "Stability AI", "Midjourney", "Stable Diffusion", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Hugging Face", "LangChain", "Haystack", "DVC", "Weights & Biases", "Jupyter", "Colab", "Anaconda", "DataCamp", "Kaggle", "DataRobot", "AutoML", "MLflow", "Dataiku", "Data Science", "Big Data", "Analytics", "Business Intelligence", "Data Analytics", "Statistical Learning", "Feature Engineering",
  "Blockchain", "Web3", "Crypto", "Ethereum", "Bitcoin", "Solana", "Polygon", "Smart Contract", "dApps", "NFT", "DeFi", "Metamask", "Chainlink", "ERC20", "ERC721", "Solidity", "Truffle", "Hardhat", "Ethers.js", "Web3.js", "Alchemy", "Moralis", "Binance Smart Chain", "IPFS", "Filecoin", "Zero Knowledge", "zk-SNARKs", "zk-Rollup", "StarkWare", "Arbitrum", "Optimism", "Layer 2", "Staking", "Yield Farming",
  "Cybersecurity", "Penetration Testing", "Bug Bounty", "Ethical Hacking", "SOC", "SIEM", "Firewall", "Zero Trust", "Threat Intelligence", "Infosec", "Red Team", "Blue Team", "Purple Team", "Encryption", "TLS", "SSL", "OWASP", "ISO 27001", "GDPR", "HIPAA", "Phishing",
  "Android", "iOS", "Flutter", "SwiftUI", "Kotlin Multiplatform", "Xamarin", "Jetpack Compose", "Wearables", "IoT", "Raspberry Pi", "Arduino", "ESP32", "MQTT", "Edge Computing", "Robotics", "ROS", "CAN Bus", "Microcontroller",
  "UI", "UX", "UI/UX", "UX Research", "User Research", "Design Thinking", "Figma", "Adobe XD", "Sketch", "InVision", "Canva", "Wireframing", "Prototyping", "Usability", "Accessibility", "Responsive Design", "Dark Mode", "Material Design", "Atomic Design", "Product Management", "Product Designer",
  "Google", "Alphabet", "Apple", "Microsoft", "Amazon", "Meta", "Facebook", "Instagram", "X", "Twitter", "LinkedIn", "GitHub", "GitLab", "Bitbucket", "Netflix", "Tesla", "Spotify", "Uber", "Salesforce", "Shopify", "Stripe", "PayPal", "Atlassian",
  "HackerRank", "LeetCode", "CodeChef", "GeeksforGeeks", "Codeforces", "AtCoder", "TopCoder", "InterviewBit", "Project Euler", "Coursera", "edX", "Udemy", "Pluralsight", "Khan Academy", "DataCamp", "LinkedIn Learning", "Codecademy", "Alison", "FutureLearn", "Great Learning", "NPTEL", "Unacademy", "Simplilearn", "Skillshare", "Forage", "Cognitive Class", "IBM SkillsBuild",
  "IIT Delhi", "IIT Bombay", "IIT Madras", "IIT Kanpur", "IIT Kharagpur", "IIT Roorkee", "IIT Guwahati", "IIT Hyderabad", "IIT Indore", "IIT Bhubaneswar", "IIT Patna", "IIT Gandhinagar", "IIT Jodhpur", "IIT Mandi", "IIT Ropar", "IIT Palakkad", "IIT Tirupati", "NIT Trichy", "NIT Surathkal", "NIT Warangal", "NIT Calicut", "NIT Rourkela", "NIT Durgapur", "NIT Allahabad", "NIT Jaipur", "NIT Kurukshetra", "NIT Bhopal", "NIT Nagpur", "NIT Surat", "NIT Silchar", "NIT Jamshedpur", "NIT Patna", "BITS Pilani", "IIIT Hyderabad", "IIIT Delhi", "IIIT Allahabad", "IIIT Bangalore", "IIIT Bhubaneswar", "IIITDM Jabalpur", "IIITDM Kancheepuram", "MIT", "Stanford", "Harvard", "UC Berkeley", "Princeton", "Yale", "Columbia", "Oxford", "Cambridge", "Imperial College London", "NUS", "NTU", "Tsinghua", "Peking", "Waterloo", "Toronto", "ETH Zurich", "EPFL", "Caltech", "UCLA", "University of Chicago", "Cornell", "Georgia Tech", "University of Edinburgh", "Melbourne",
  "India", "United States", "USA", "UK", "United Kingdom", "Canada", "Germany", "France", "Singapore", "Australia", "China", "Japan", "South Korea", "Brazil", "Mexico", "Spain", "Italy", "Switzerland", "Sweden", "Finland", "Netherlands", "Israel", "Ireland", "UAE", "Russia", "South Africa", "Turkey", "Denmark", "Norway", "Belgium", "New Zealand", "Delhi", "New Delhi", "Mumbai", "Bangalore", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Gurgaon", "Noida", "Indore", "Lucknow", "Patna", "London", "San Francisco", "Silicon Valley", "New York", "Boston", "Toronto", "Vancouver", "Berlin", "Munich", "Sydney", "Melbourne", "Beijing", "Shanghai", "Tokyo", "Seoul", "Paris", "Zurich", "Stockholm", "Dublin", "Dubai", "Tel Aviv", "Amsterdam", "Helsinki", "Hong Kong", "Chicago", "Los Angeles", "Austin", "Miami", "Seattle",
  "Software Engineer", "Software Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Web Developer", "Mobile Developer", "App Developer", "UI Designer", "UX Designer", "CTO", "CEO", "COO", "Product Manager", "Data Scientist", "ML Engineer", "AI Researcher", "DevOps Engineer", "Cloud Architect", "QA Engineer", "Intern", "Researcher", "Founder", "Mentor", "Freelancer", "Consultant", "Tech Lead", "Engineering Manager", "Technical Writer", "Open Source Contributor", "Volunteer", "Ambassador", "Campus Ambassador", "Club President", "Community Manager", "Blogger", "Speaker", "Hackathon", "Competition", "Workshop", "Bootcamp", "Summit", "Conference", "Meetup", "Seminar", "Webinar", "Networking", "Panel", "Fellowship",
  "2025", "Trending", "Trending Skills", "AI Skills", "Prompt Engineering", "AI Agent", "Voice AI", "AI Coding Agent", "Generative AI", "AI Art", "RAG", "LangGraph", "Copilot", "NotebookLM", "Agentic Workflows", "Retrieval Augmented Generation", "Semantic Search", "Open Source AI", "Edge AI", "AI Marketplace", "Responsible AI", "Ethical AI", "Explainable AI", "Regulatory Compliance", "Low Code", "No Code", "Serverless", "API Economy", "API Integration", "Cloud Native", "SRE", "MLOps", "DataOps", "FinOps", "Multicloud", "Hybrid Cloud", "Digital Transformation", "Digital India", "Startup India", "Make in India", "Bharat Stack", "Gig Economy", "Remote Work", "Hybrid Work", "Global Teams", "Creator Economy", "Solopreneur", "Side Hustle", "Tech Blogger", "Next Gen", "Sustainability", "Climate Action", "Global Citizen", "AI Ethics", "Gen Z", "Millennial", "Collab", "Innovation", "Women in Tech", "Diversity in STEM", "Student Leader", "Ambassador", "Mentor", "Coach", "Guide", "Networking Events", "Mentorship Programs", "Internship Opportunities", "Job Openings", "Community Partners", "Problem Solving", "Technology Events", "Professional Network", "Student Startups", "UpSkill Workshops", "Future of Work", "Startup Success", "Vistara Partnership", "Global Investors", "Open Source Projects", "Register Now", "Join the Community", "Trusted Platform", "Spark Innovation", "Pitch Event", "Product Launch", "Career Platform", "Tech Meetup", "Learning Platform", "Online Registration", "Business Excel", "Business Drive", "Business Forum", "Business Fusion", "Make a Difference", "Help Students Succeed", "Using Technology", "Explore Opportunities", "Experience Events", "Interact with Innovators", "Enhance Skills", "Brush up Skills", "Join as a Member", "Excel Experience", "Global Network", "Initiative for Women", "Women Entrepreneurs",
  "Brajesh Kumar", "etech-community.com", "Tech Dev Club", "Agrotech AI", "Emma AI", "Ella AI", "Thea AI", "Globex", "Mathematrix", "FitDeck", "IdeaPool", "ChatterBox", "Cap'nShare", "Career Mapper", "SEMAC", "Inventory Management", "Chatbot Project", "Face Recognition Project", "Lab Agile Planning", "Resource Vault", "Portfolio", "Personal Website", "Resume", "CV", "Projects", "Blog", "Resources", "Learning Resources", "Showcase", "Gallery", "Testimonial", "Certificate", "Award", "Honor", "Achievement", "Skillset", "Networking", "Collaboration", "Global Community"
];

export const certificates = [
  {
    id: "1",
    title: "Conociendo Canva, tu nueva herramienta de diseño favorita",
    issuer: "Coursera",
    date: "August 2025",
    credentialId: "3WDB86ONNYMT",
    image: conociendoCanva,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "2",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle Corporation",
    date: "August 2025",
    credentialId: "1023097610CI25AICFA",
    image: oracleCloudAiFoundationsAssociate,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "3",
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle Corporation",
    date: "August 2025",
    credentialId: "1023097610C125GAIOCP",
    image: oracleCloudGenerativeAiProfessional,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "4",
    title: "Certificate of Achievement: BuildWithIndia Volunteer",
    issuer: "HackWithIndia",
    date: "July 2025", // <-- Please provide the date for this certificate
    credentialId: "BUILDBWITHINDIAVOLUNTEER4",
    image: buildWithIndiaVolunteer,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "5",
    title: "Build a Secure Google Cloud Network Skill Badge",
    issuer: "Google Cloud",
    date: "MONTH_YEAR", // <-- Please provide the date for this badge
    credentialId: "BUILDSECUREGCNETWORK5",
    image: buildSecureGoogleCloudNetwork,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "6",
    title: "Prompt Design in Vertex AI Skill Badge",
    issuer: "Google Cloud",
    date: "July 2025",
    credentialId: "PROMPTDESIGNVERTEXAI6",
    image: promptDesignInVertexAi,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "7",
    title: "Develop GenAI Apps with Gemini and Streamlit Skill Badge",
    issuer: "Google Cloud",
    date: "July 2025",
    credentialId: "DEVELOPGENAIAPPS7",
    image: developGenAiAppsWithGemini,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "8",
    title: "Engineer Data for Predictive Modeling with BigQuery ML Skill Badge",
    issuer: "Google Cloud",
    date: "July 2025",
    credentialId: "ENGINEERDATABIGQUERYML8",
    image: engineerDataWithBigQueryMl,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "9",
    title: "Explore Generative AI with the Vertex AI Gemini API Skill Badge",
    issuer: "Google Cloud",
    date: "July 2025",
    credentialId: "EXPLOREGENAIGEMINIAPI9",
    image: exploreGenAiWithGeminiApi,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "10",
    title: "Build a computer vision app with Azure Cognitive Services",
    issuer: "Microsoft",
    date: "March 2025",
    credentialId: "RKKF6ZJFM0IQ",
    image: buildComputerVisionAppAzure,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "11",
    title: "Certificate of Participation: Freak O Matrix (AXIS '25)",
    issuer: "VNIT Nagpur",
    date: "June 2025", // <-- Please provide the month for this event
    credentialId: "FREAKOMATRIXAXIS25-11",
    image: freakOMatrixAxis25,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "12",
    title: "Certificate of Participation: ENIGMA - The Cybersecurity CTF",
    issuer: "Manav Rachna International Institute of Research and Studies",
    date: "April 2025",
    credentialId: "f9da92bf-52af-46dd-8f62-0118bf45b051",
    image: enigmaCybersecurityCtf,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "13",
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    date: "March 2025",
    credentialId: "INTRODUCTIONMODERNAI-13",
    image: introductionToModernAi,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "14",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "March 2025",
    credentialId: "PYTHONESSENTIALS1-14",
    image: pythonEssentials1,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "15",
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "March 2025",
    credentialId: "DATAANALYTICSESSENTIALS-15",
    image: dataAnalyticsEssentials,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "16",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "March 2025",
    credentialId: "INTRODUCTIONTODATASCIENCE-16",
    image: introductionToDataScience,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "17",
    title: "Data Science Foundations - Level 1",
    issuer: "IBM",
    date: "July 2024",
    credentialId: "c6f8f4c7-9018-4b8e-b630-96ebb1847301",
    image: dataScienceFoundationsLevel1,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "18",
    title: "Data Science Methodologies",
    issuer: "IBM",
    date: "July 2024",
    credentialId: "f53a2321-87ef-4a00-8f3e-189438cd87dd",
    image: dataScienceMethodologies,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "19",
    title: "Python for Data Science",
    issuer: "IBM",
    date: "May 2024",
    credentialId: "d1c3bb27-b4b5-4f10-8c9e-01062865b1df",
    image: pythonForDataScience,
    featured: false,
    keywords: globalKeywords.slice(0, 533)
  },
  {
    id: "20",
    title: "Data Science Tools",
    issuer: "IBM",
    date: "July 2024",
    credentialId: "cba4e940-8457-4e99-984b-56c6cc35f9e3",
    image: dataScienceTools,
    featured: true,
    keywords: globalKeywords.slice(0, 533)
  }



];

