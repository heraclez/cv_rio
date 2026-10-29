# Reunard Rio E.K — Windows 98 Interactive CV & Portfolio Desktop

Website profil pribadi dan Curriculum Vitae interaktif bertema **Windows 98** untuk **Reunard Rio E.K**, seorang Web Core Banking Developer, Backend Programmer, dan IT Specialist.

---

## 🖥️ Fitur Utama & Visual Windows 98

- **Desktop Khas Windows 98:**
  - Latar belakang *Teal* autentik (`#008080`) dengan watermark vintage.
  - Ikon shortcut desktop pixel-art dengan seleksi putus-putus dan label nama khas Windows 98.
  - Shortcut langsung ke: **About Me**, **My Resume**, **My Projects**, **Skills**, **Certificates**, **Contact**, **Download CV**, dan **Recycle Bin**.
- **Sistem Pengelolaan Jendela (Window Management):**
  - Efek bevel 3D timbul (*outset*) dan cekung (*inset*).
  - Title bar gradasi biru tua aktif (`#000080` ke `#1084d0`) dan abu-abu inaktif.
  - Tombol kontrol jendela klasik: Minimize (`_`), Maximize / Restore (`□` / `❐`), dan Close (`✕`).
  - Mendukung drag & drop untuk reposisi jendela di desktop, double-click title bar untuk toggle maximize, dan fokus z-index interaktif.
- **Taskbar & Start Menu:**
  - Tombol Start dengan bendera 4-warna Windows klasik.
  - Menu navigasi lengkap ke seluruh bagian profil dan unduhan CV.
  - Daftar jendela aktif di taskbar (tombol timbul/cekung sesuai status fokus).
  - System Tray di kanan dengan tombol mute/unmute audio dan jam digital real-time (`HH:mm`).
- **Efek Audio & Layar CRT (Opsional):**
  - Sintesis audio retro via Web Audio API (suara klik, buka jendela, notifikasi, dan akord) tanpa file audio eksternal. *Default: tidak memutar suara otomatis (sesuai panduan user)*.
  - Opsi efek garis pindai monitor CRT retro di panel Settings.
- **Responsif & Aksesibel:**
  - Tampilan otomatis menyesuaikan layar ponsel (*full-width window*) tanpa interaksi drag yang mengganggu.
  - Dilengkapi struktur HTML semantik untuk crawler SEO dan pembaca layar (*screen readers*).
  - Menghormati preferensi `prefers-reduced-motion`.

---

## 📄 Konten Profil & Sumber Data (CV Asli)

Seluruh informasi disusun secara akurat berdasarkan dokumen resmi CV Reunard Rio E.K:
- **Profil:** Reunard Rio E.K (Nama resmi di sertifikat: Reunnard Rio Erixchon Kakisina).
- **Pengalaman Kerja:**
  - `2020 - 2022`: **PT. Akselara Raksa Optima** — Programmer (Web Core Banking Developer spesialisasi backend).
  - `2019 - 2020`: **PT. Segoro Kedung Agoeng** — IT (IT Support & Administrasi Linux).
- **Pendidikan:**
  - `2010 - 2015`: **Universitas 17 Agustus 1945 Surabaya (UNTAG Surabaya)**.
  - `2007 - 2010`: **SMA Bhayangkari 1 Surabaya**.
- **Keahlian:**
  - Backend & Web: PHP, CodeIgniter (CI), Web Core Banking, RESTful API, WordPress.
  - Basis Data: MySQL, PostgreSQL, Relational Database Management Systems (RDBMS), SQL Lanjut (DDL/DML).
  - Infrastruktur & OS: Linux (Ubuntu & CentOS), Administrasi Server, IT Support, Hardware & Jaringan LAN.
- **Sertifikasi Resmi:**
  - **Klaster Junior Database Programming** dari **LSP Telematika Indonesia** (15 Desember 2014, Surabaya). Dilengkapi scan asli halaman sertifikat.
- **Unduh CV:** Berkas asli PDF (`cv-reunard-rio.pdf`) dapat diunduh langsung melalui dialog File Download Windows 98.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI & Bahasa:** React 19, TypeScript
- **Styling:** Vanilla CSS 3D Bevel Utilities & Tailwind CSS
- **Audio:** Web Audio API Native Synthesizer
- **Deployment Target:** Vercel & GitHub

---

## 🚀 Menjalankan Secara Lokal

```bash
# 1. Install dependensi
npm install

# 2. Jalankan mode pengembangan
npm run dev

# 3. Akses melalui browser
http://localhost:3000
```

### Build Produksi:
```bash
npm run build
npm run start
```

---

## 🌐 Panduan Deploy ke Vercel & Git

Proyek ini telah dikonfigurasi dengan file `vercel.json` dan siap dideploy:

1. **Git Commit & Push:**
   ```bash
   git init
   git add .
   git commit -m "feat: Windows 98 interactive CV and portfolio for Reunard Rio E.K"
   git remote add origin https://github.com/heraclez/cv_rio.git
   git branch -M master
   git push -u origin master
   ```

2. **Vercel Deployment:**
   - Hubungkan repository GitHub `heraclez/cv_rio` di dashboard [Vercel](https://vercel.com/new).
   - Vercel akan otomatis mendeteksi konfigurasi Next.js dan melakukan build secara instan di cloud server Vercel.
