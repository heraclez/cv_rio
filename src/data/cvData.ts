export interface WorkExperience {
  period: string;
  company: string;
  role: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  period: string;
  institution: string;
  degreeOrLevel: string;
  location: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  organization: string;
  role: string;
  description: string;
  impact: string[];
  technologies: string[];
  link?: string;
}

export interface CompetencyUnit {
  code: string;
  title: string;
}

export interface Certificate {
  id: string;
  cluster: string;
  organization: string;
  issuerLocation: string;
  issueDate: string;
  manager: string;
  holderName: string;
  units: CompetencyUnit[];
}

export interface CVData {
  personal: {
    name: string;
    formalName: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    whatsappUrl: string;
    githubUrl: string;
    avatarUrl: string;
    fullPhotoUrl: string;
    fullPhotoFileName: string;
    highlightSkills: string[];
    pdfDownloadUrl: string;
    summaryEn: string;
    summaryId: string;
  };
  experience: WorkExperience[];
  education: Education[];
  skillCategories: SkillCategory[];
  projects: Project[];
  certificates: Certificate[];
}

export const cvData: CVData = {
  personal: {
    name: "Reunard Rio E.K",
    formalName: "Reunnard Rio Erixchon Kakisina",
    title: "Web Developer & IT Specialist",
    location: "Sidoarjo, Jawa Timur, Indonesia",
    email: "heraclez1210@gmail.com",
    phone: "0851 7968 1152",
    whatsappUrl: "https://wa.me/6285179681152",
    githubUrl: "https://github.com/heraclez",
    avatarUrl: "/rio-avatar.png",
    fullPhotoUrl: "/foto-profil.jpg",
    fullPhotoFileName: "Foto Profil.jpg",
    highlightSkills: [
      "PHP & CodeIgniter",
      "Web Core Banking (backend)",
      "MySQL & PostgreSQL",
      "Linux Ubuntu & CentOS",
      "IT Support",
    ],
    pdfDownloadUrl: "/cv-reunard-rio.pdf",
    summaryEn:
      "I have two years of experience as a web core banking developer specializing in the back end. For the past year, I have been working as IT support. I am proficient in using Linux (Ubuntu and CentOS) and have the ability to work effectively in a team.",
    summaryId:
      "Memiliki pengalaman 2 tahun sebagai Web Developer dengan spesialisasi di sisi backend, serta berpengalaman di bidang IT Support. Menguasai sistem operasi Linux (Ubuntu dan CentOS), pengelolaan RDBMS (MySQL & PostgreSQL), dan memiliki kemampuan kerja sama tim yang solid.",
  },
  experience: [
    {
      period: "2020 - 2022",
      company: "PT. Akselara Raksa Optima",
      role: "Programmer (Web Core Banking Developer)",
      location: "Indonesia",
      type: "Full-time",
      description:
        "Spesialisasi pengembangan backend sistem web core banking. Merancang logika bisnis keuangan, pemrosesan transaksi perbankan, rekonsiliasi buku besar, dan integrasi basis data dengan tingkat keandalan tinggi.",
      highlights: [
        "Mengembangkan dan memelihara backend engine sistem web core banking.",
        "Merancang query database relasional yang aman dan teroptimasi untuk transaksi simultan.",
        "Menerapkan standar integritas data dan keamanan ketat pada alur transaksi keuangan.",
        "Berkolaborasi erat dalam tim developer untuk integrasi modul perbankan.",
      ],
      technologies: ["PHP", "Framework CodeIgniter", "MySQL", "PostgreSQL", "RDBMS", "Web Core Banking Backend"],
    },
    {
      period: "2019 - 2020",
      company: "PT. Segoro Kedung Agoeng",
      role: "IT (IT Support & Linux Administration)",
      location: "Indonesia",
      type: "Full-time",
      description:
        "Dukungan teknis IT komprehensif dan administrasi sistem berbasis Linux (Ubuntu dan CentOS) untuk mendukung kelancaran operasional harian perusahaan.",
      highlights: [
        "Instalasi, konfigurasi, dan maintenance server dan workstation berbasis Ubuntu dan CentOS.",
        "Troubleshooting jaringan lokal (LAN), router, dan perangkat keras pendukung operasional.",
        "Memberikan bantuan teknis responsif bagi end-user dalam lingkungan multi-platform.",
      ],
      technologies: ["Linux Ubuntu", "Linux CentOS", "LAN/WAN Networking", "Hardware Diagnostics", "IT Support"],
    },
  ],
  education: [
    {
      period: "2010 - 2015",
      institution: "Universitas 17 Agustus 1945 Surabaya (UNTAG Surabaya)",
      degreeOrLevel: "Pendidikan Tinggi (Perguruan Tinggi)",
      location: "Surabaya, Jawa Timur",
      details: "Fokus pada fondasi ilmu komputer, basis data, dan rekayasa perangkat lunak.",
    },
    {
      period: "2007 - 2010",
      institution: "SMA Bhayangkari 1 Surabaya",
      degreeOrLevel: "Sekolah Menengah Atas",
      location: "Surabaya, Jawa Timur",
    },
  ],
  skillCategories: [
    {
      category: "Backend & Web Architecture",
      icon: "code",
      skills: [
        {
          name: "PHP",
          description: "Pengembangan logika aplikasi server-side yang terstruktur, aman, dan efisien.",
        },
        {
          name: "Framework CodeIgniter (CI)",
          description: "Pembangunan arsitektur MVC, RESTful API, dan sistem enterprise terukur.",
        },
        {
          name: "Web Core Banking Development",
          description: "Spesialisasi backend perbankan, validasi transaksi debit/kredit, dan ledger.",
        },
        {
          name: "WordPress",
          description: "Kustomisasi CMS, tema, plugin, dan pengelolaan situs berbasis WordPress.",
        },
      ],
    },
    {
      category: "Database & Data Management",
      icon: "database",
      skills: [
        {
          name: "MySQL",
          description: "Perancangan skema relasional, optimasi index, dan transactional ACID integrity.",
        },
        {
          name: "PostgreSQL",
          description: "Pengelolaan RDBMS enterprise, relasi data kompleks, dan stored procedures.",
        },
        {
          name: "SQL DDL & DML Lanjut",
          description: "Penguasaan query database tingkat lanjut, aggregation, dan constraint schema.",
        },
        {
          name: "Relational Architecture (RDBMS)",
          description: "Normalisasi data, pencegahan redudansi, dan pemeliharaan integritas referensial.",
        },
      ],
    },
    {
      category: "Operating Systems & Infrastructure",
      icon: "server",
      skills: [
        {
          name: "Linux (Ubuntu)",
          description: "Instalasi, konfigurasi server, manajemen paket APT, dan permission sistem.",
        },
        {
          name: "Linux (CentOS)",
          description: "Administrasi sistem server enterprise, pengelolaan servis, dan stabilitas server.",
        },
        {
          name: "IT Support & Troubleshooting",
          description: "Diagnosa hardware, konfigurasi jaringan lokal (LAN), dan penanganan masalah teknis.",
        },
        {
          name: "System Maintenance",
          description: "Backup data teratur, monitoring stabilitas sistem, dan disaster recovery sederhana.",
        },
      ],
    },
    {
      category: "Professional Competencies",
      icon: "users",
      skills: [
        {
          name: "Kerja Sama Tim (Teamwork)",
          description: "Mampu berkoordinasi secara efektif dalam tim teknis maupun lintas divisi.",
        },
        {
          name: "Etika Profesi TIK",
          description: "Memegang teguh standar etika profesional dan kerahasiaan data (sesuai sertifikasi TIK).",
        },
        {
          name: "Systematic Troubleshooting",
          description: "Pendekatan berbasis akar masalah (root cause analysis) dalam memecahkan bug sistem.",
        },
      ],
    },
  ],
  projects: [
    {
      id: "core-banking",
      title: "Web Core Banking Backend Engine",
      category: "Fintech & Banking",
      period: "2020 - 2022",
      organization: "PT. Akselara Raksa Optima",
      role: "Backend Programmer",
      description:
        "Sistem inti perbankan (core banking) berbasis web yang mengelola alur transaksi tabungan, deposito, pinjaman, dan pembukuan buku besar otomatis dengan validasi data real-time.",
      impact: [
        "Menjamin konsistensi dan integritas saldo rekening melalui mekanisme database transaction yang ketat.",
        "Memproses validasi mutasi debit/kredit dan menghasilkan laporan rekonsiliasi keuangan akurat.",
        "Mengoptimasi kecepatan eksekusi query SQL pada tabel transaksi bernilai ratusan ribu baris.",
      ],
      technologies: ["PHP", "Framework CodeIgniter", "MySQL / PostgreSQL", "Linux CentOS", "RDBMS"],
    },
    {
      id: "it-infrastructure",
      title: "Enterprise Linux Server & IT Infrastructure",
      category: "System Administration & Support",
      period: "2019 - 2024",
      organization: "PT. Segoro Kedung Agoeng",
      role: "IT Specialist",
      description:
        "Penataan dan pemeliharaan lingkungan sistem komputer perusahaan berbasis Linux (Ubuntu & CentOS), jaringan kantor, manajemen workstation, serta dukungan teknis harian.",
      impact: [
        "Meminimalkan downtime sistem operasional kantor melalui pemeliharaan terjadwal.",
        "Membangun alur troubleshooting terstruktur untuk seluruh keluhan teknis workstation dan jaringan.",
        "Mengimplementasikan prosedur backup berkala untuk mengamankan data-data vital operasional.",
      ],
      technologies: ["Linux Ubuntu", "Linux CentOS", "Networking LAN", "Hardware Support", "System Maintenance"],
    },
    {
      id: "database-optimization",
      title: "High-Reliability Relational Database Architecture",
      category: "Database Engineering",
      period: "2020 - Sekarang",
      organization: "Professional Projects",
      role: "Database Specialist",
      description:
        "Implementasi arsitektur database relasional ternormalisasi untuk aplikasi web bisnis, termasuk indeks query, foreign key integrity, dan optimasi performa pengambilan data.",
      impact: [
        "Penerapan standar kompetensi Junior Database Programming dari LSP Telematika.",
        "Mencegah anomali data (update, insert, delete anomalies) dengan struktur 3NF.",
        "Mempercepat waktu respon query kompleks (JOIN multi-tabel) untuk modul pelaporan.",
      ],
      technologies: ["MySQL", "PostgreSQL", "SQL DDL/DML Lanjut", "Database Normalization"],
    },
    {
      id: "web-cms",
      title: "Corporate Web Portal & Custom Solutions",
      category: "Web Development",
      period: "2021 - Sekarang",
      organization: "Professional Implementations",
      role: "Web Developer",
      description:
        "Pengembangan dan pemeliharaan website profil perusahaan serta modul informasi berbasis WordPress dan custom PHP/CodeIgniter.",
      impact: [
        "Membangun struktur konten yang mudah dikelola secara mandiri oleh tim non-teknis.",
        "Integrasi form kontak responsif dan optimasi kecepatan muat halaman.",
      ],
      technologies: ["WordPress", "PHP", "CodeIgniter", "MySQL", "Apache/Nginx"],
    },
  ],
  certificates: [
    {
      id: "lsp-telematika-db",
      cluster: "Klaster Junior Database Programming",
      organization:
        "Lembaga Sertifikasi Profesi Teknologi Informasi dan Telekomunikasi Indonesia (LSP Telematika)",
      issuerLocation: "Surabaya",
      issueDate: "15 Desember 2014",
      manager: "Andrew Febrianto, ST. (Manajer Sertifikasi)",
      holderName: "Reunnard Rio Erixchon Kakisina",
      units: [
        { code: "TIK.PR01.016.01", title: "Menjaga etika" },
        { code: "TIK.PR02.020.01", title: "Mengoperasikan aplikasi basis data" },
        { code: "TIK.PR02.021.01", title: "Menerapkan basis data" },
        {
          code: "TIK.PR03.001.01",
          title: "Mengoperasikan bahasa pemrograman Data Description (SQL - Structured Query Language) dasar",
        },
        {
          code: "TIK.PR03.002.01",
          title: "Mengoperasikan bahasa pemrograman Data Description (SQL - Structured Query Language) lanjut",
        },
      ],
    },
  ],
};
