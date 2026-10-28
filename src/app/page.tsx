import { Desktop } from "@/components/Desktop";
import { cvData } from "@/data/cvData";

export default function Home() {
  const { personal, experience, education, skillCategories, certificates } = cvData;

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      {/* Interactive Windows 98 Desktop Experience */}
      <Desktop />

      {/* Structured Semantic HTML fallback for Web Crawlers, Screen Readers & Accessibility */}
      <article className="sr-only" aria-label="Curriculum Vitae Reunard Rio E.K">
        <header>
          <h1>{personal.name}</h1>
          <h2>{personal.title}</h2>
          <p>{personal.location}</p>
          <p>Email: {personal.email}</p>
          <p>Telepon: {personal.phone}</p>
          <p>{personal.summaryId}</p>
        </header>

        <section>
          <h2>Pengalaman Kerja</h2>
          <ul>
            {experience.map((exp, i) => (
              <li key={i}>
                <h3>
                  {exp.company} — {exp.role} ({exp.period})
                </h3>
                <p>{exp.description}</p>
                <ul>
                  {exp.highlights.map((h, hi) => (
                    <li key={hi}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Pendidikan</h2>
          <ul>
            {education.map((edu, i) => (
              <li key={i}>
                <h3>{edu.institution}</h3>
                <p>
                  {edu.degreeOrLevel} ({edu.period}) — {edu.location}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Keahlian</h2>
          {skillCategories.map((cat, i) => (
            <div key={i}>
              <h3>{cat.category}</h3>
              <ul>
                {cat.skills.map((s, si) => (
                  <li key={si}>
                    <strong>{s.name}:</strong> {s.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Sertifikasi</h2>
          <ul>
            {certificates.map((cert) => (
              <li key={cert.id}>
                <h3>{cert.cluster}</h3>
                <p>{cert.organization} — {cert.issueDate}</p>
                <ul>
                  {cert.units.map((u) => (
                    <li key={u.code}>
                      {u.code}: {u.title}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
