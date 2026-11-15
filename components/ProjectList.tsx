'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-teal-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Social Mapping Study, PLN Indonesia Power UBP Mrica", en: "Social Mapping Study, PLN Indonesia Power UBP Mrica" },
    description: { id: "Studi pemetaan sosial di 2 desa di Banjarnegara: survei 60 responden dan wawancara 30+ informan kunci.", en: "Social mapping across 2 villages in Banjarnegara: a 60-respondent survey and 30+ key informant interviews." },
    framework: "SODEC UGM 2026",
    techStack: ["Social Mapping", "Survey"],
  },
  {
    number: '02',
    title: { id: "Stakeholder Mapping", en: "Stakeholder Mapping" },
    description: { id: "Pemetaan pemangku kepentingan berdasarkan peran, kepentingan, pengaruh, dan hubungan untuk melihat dinamika masyarakat.", en: "Mapping stakeholders by role, interest, influence, and relationships to understand community dynamics." },
    framework: "SODEC UGM 2026",
    techStack: ["Stakeholders", "Community"],
  },
  {
    number: '03',
    title: { id: "IPESOS, Ministry of Social Affairs", en: "IPESOS, Ministry of Social Affairs" },
    description: { id: "Riset nasional tentang partisipasi sosial, kohesi sosial, dan institusi inklusif; dataset 1.855 responden.", en: "National research on social participation, social cohesion, and inclusive institutions; a dataset of 1,855 respondents." },
    framework: "SODEC UGM 2026",
    techStack: ["National Survey", "Social Cohesion"],
  },
  {
    number: '04',
    title: { id: "Field Data Supervision and Validation", en: "Field Data Supervision and Validation" },
    description: { id: "Mengawasi pengumpulan data lapangan di Makassar serta validasi dan pemrosesan data untuk laporan analisis.", en: "Supervising field data collection in Makassar plus data validation and processing for the analytical report." },
    framework: "SODEC UGM 2026",
    techStack: ["Fieldwork", "Data Validation"],
  },
  {
    number: '05',
    title: { id: "Livestock Market Monitoring", en: "Livestock Market Monitoring" },
    description: { id: "Memantau pasar komoditas peternakan dan menyusun 5+ laporan untuk analisis pasar internal.", en: "Monitoring livestock commodity markets and preparing 5+ reports for internal market analysis." },
    framework: "MINISTRY OF AGRICULTURE 2025",
    techStack: ["Market Analysis", "Reports"],
  },
  {
    number: '06',
    title: { id: "Livestock Market Mapping during the FMD Outbreak", en: "Livestock Market Mapping during the FMD Outbreak" },
    description: { id: "Riset meja dan pemetaan pasar peternakan regional saat wabah PMK untuk diskusi respons kebijakan darurat.", en: "Desk research and regional livestock market mapping during the FMD outbreak for emergency policy discussions." },
    framework: "MINISTRY OF AGRICULTURE 2025",
    techStack: ["FMD", "Desk Research"],
  },
  {
    number: '07',
    title: { id: "Formal Reports, Minutes and Transcripts", en: "Formal Reports, Minutes and Transcripts" },
    description: { id: "Laporan formal, notulen rapat, dan transkrip sidang untuk 7+ acara resmi dewan dan sesi aspirasi publik.", en: "Formal reports, minutes of meetings, and session transcripts for 7+ official council events and public aspiration sessions." },
    framework: "DPD RI DIY 2024",
    techStack: ["Reports", "Legislative Documentation"],
  },
  {
    number: '08',
    title: { id: "Social Media Content and Event Documentation", en: "Social Media Content and Event Documentation" },
    description: { id: "3-5 konten digital untuk media sosial resmi DPD RI DIY serta dokumentasi foto dan video acara.", en: "3-5 digital contents for DPD RI DIY's official social media, plus event photo and video documentation." },
    framework: "DPD RI DIY 2024",
    techStack: ["Content", "Documentation"],
  },
  {
    number: '09',
    title: { id: "Undergraduate Thesis: Environmental Governance in Pekalongan's Batik Industry", en: "Undergraduate Thesis: Environmental Governance in Pekalongan's Batik Industry" },
    description: { id: "Analisis jejaring aktor dan dinamika tata kelola implementasi IPAL komunal di industri batik Pekalongan.", en: "Analysis of actor networks and governance dynamics in implementing communal wastewater treatment plants in Pekalongan's batik industry." },
    framework: "UNIVERSITAS GADJAH MADA 2026",
    techStack: ["Network Governance", "Environmental Policy"],
  },
  {
    number: '10',
    title: { id: "Study on Constitutional Court Decision No. 97/PUU-XIV/2016", en: "Study on Constitutional Court Decision No. 97/PUU-XIV/2016" },
    description: { id: "Mini-riset kualitatif tim 3 orang tentang kebijakan pemerintah untuk komunitas penghayat kepercayaan.", en: "A 3-member qualitative mini-research on government policy for indigenous belief communities." },
    framework: "LPPM SINTESA FISIPOL UGM 2023 — 2024",
    techStack: ["Legal Analysis", "Qualitative"],
  },
  {
    number: '11',
    title: { id: "Integrated Career Days UGM: Partner Liaison", en: "Integrated Career Days UGM: Partner Liaison" },
    description: { id: "Narahubung utama mitra korporasi health-tech dan fasilitator representasi merek bagi peserta acara.", en: "Primary contact for a health-tech corporate partner and facilitator of brand representation for event attendees." },
    framework: "ICD UGM 2023",
    techStack: ["Liaison", "Communication"],
  },
  {
    number: '12',
    title: { id: "Public Action 2023: Sustainable Urban Development Conference", en: "Public Action 2023: Sustainable Urban Development Conference" },
    description: { id: "Konferensi publik dengan 50+ peserta dan kemitraan pra-acara bersama Trash Hero Yogyakarta.", en: "A public conference with 50+ participants and a pre-event partnership with Trash Hero Yogyakarta." },
    framework: "PUBLIC ACTION UGM 2023",
    techStack: ["Event", "Partnership"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'RESEARCH & POLICY PORTFOLIO' : 'PORTOFOLIO RISET & KEBIJAKAN'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Research, Internships & Organisational Work' : 'Riset, Magang & Kegiatan Organisasi'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of research assistance, institutional internships, an undergraduate thesis, and student organisation work.'
              : 'Rekam jejak asisten riset, magang institusi, skripsi, dan kegiatan organisasi mahasiswa.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
