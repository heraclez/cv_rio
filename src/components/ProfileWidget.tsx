import React from "react";
import { cvData } from "@/data/cvData";

/**
 * Widget ringkasan profil bergaya Conky.
 * Hanya memakai data dari cvData; tanpa statistik perangkat atau status palsu.
 */
export const ProfileWidget: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { personal } = cvData;

  return (
    <section
      aria-label="Ringkasan profil"
      className={`conky-widget pointer-events-none select-none ${className}`}
    >
      <p className="conky-name">{personal.name}</p>
      <p className="conky-role">{personal.title}</p>

      <hr className="conky-rule" />

      <dl className="conky-row">
        <dt>lokasi</dt>
        <dd>{personal.location}</dd>
      </dl>

      <hr className="conky-rule" />

      <p className="conky-label">keahlian</p>
      <ul className="conky-list">
        {personal.highlightSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};
