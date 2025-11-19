# Wassim Elmoufakkir  Portfolio (Next.js + Tailwind)

A clean, fast, and mobile‑friendly portfolio website for **Data Engineering / AI** profiles. Built on top of a Next.js template and customized for my projects, skills, and experience.

---

## ✨ Features

* ⚡ **Next.js 15** (App Router) + React + TypeScript .
* 🎨 **Tailwind CSS** with a modern dark UI
* 🧩 Modular sections: Intro/Hero, About, Skills, Projects, Experience, Contact
* 📱 Fully **responsive**
* 🔍 SEO ready (Open Graph + Twitter tags)
* ☁️ **Vercel** one‑click deployment
* 📧 Contact form wired to a server action (with optional Resend integration)

---

## 🧱 Tech Stack

* **Framework:** Next.js (React, App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Icons & UI:** shadcn/ui (Radix), Lucide Icons
* **Animations/UX:** CSS/Tailwind utilities (simple and light)
* **Deployment:** Vercel

---

## 📸 Screenshots



| Home                             | Projects                                 |
| -------------------------------- | ---------------------------------------- |
| <img width="1895" height="904" alt="image" src="https://github.com/user-attachments/assets/eb035c78-c462-4365-b989-12185c51ac16" /> |<img width="1890" height="905" alt="image" src="https://github.com/user-attachments/assets/4ef288f5-5b91-4dbc-890f-15a8151a5fe2" />

---

## 🚀 Getting Started (Local)

```bash
# 1) Clone
git clone https://github.com/YOUR_GH_USERNAME/portfolio.git
cd portfolio

# 2) Install deps
npm install

# 3) Dev server
npm run dev
# open http://localhost:3000
```

### Environment (recommended)

Create a file **`.env.local`** at the project root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# If you enable Resend later, add:
# RESEND_API_KEY=re_************************
```


---

## 🧩 Project Structure

```
src/
  actions/
    send-email.ts        # server action for contact form
  app/                   # Next.js App Router pages/layouts
  components/            # UI sections (intro, projects, skills, etc.)
  hooks/
  lib/
  styles/
public/
  screens/               # (optional) screenshots used in README
```

---

## ✍️ Customize Content

### 1) Header / Navbar

**`src/components/header.tsx`** → replace the site name with your own:

```tsx
<span className="font-semibold">Wassim Elmoufakkir</span>
```

### 2) Intro / Hero

**`src/components/intro.tsx`** → edit your headline, subtext, and buttons (LinkedIn/GitHub).

### 3) About

**`src/components/about.tsx`** → write a short bio + education highlights.

### 4) Skills

**`src/components/skills.tsx`** → update the skills array:

```tsx
const skills = [
  "Python", "SQL", "Pandas / NumPy", "Power BI", "Airflow",
  "AWS (S3, Athena)", "Docker", "Git & GitHub", "Dash / Plotly",
  "WordPress & WooCommerce",
];
```

### 5) Projects

**`src/components/projects.tsx`** (or wherever project cards are created) → replace with your real projects (title, description, tags, links).

---

## 🧠 SEO & Metadata



```ts
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Wassim Elmoufakkir | Data Engineering for AI", template: "%s | Wassim Elmoufakkir" },
  description: "MSc in Data Engineering for AI @ DSTI. I build data pipelines and analytics dashboards.",
  openGraph: { title: "Wassim Elmoufakkir | Data Engineering for AI", url: process.env.NEXT_PUBLIC_SITE_URL },
  twitter: { card: "summary_large_image" },
};
```


---

## 📧 Contact Form (with or without Resend)



```ts
"use server";
import { z } from "zod";

const contactFormSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  message: z.string().min(10),
});

export async function sendEmailAction(formData: FormData) {
  const parsed = contactFormSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  });
  if (!parsed.success) return { success: false, error: "Invalid form data" };

  // Fallback: log only (no external API required)
  console.log("Contact form submission:", parsed.data);
  return { success: true, message: "Thanks! Email sending is disabled in this build." };
}
```

---

## 🌍 Deploy

### Vercel (recommended)

1. Push your code to GitHub.
2. Go to **Vercel → New Project** and import the repo.
3. Set **Environment Variables**:

   * `NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN.vercel.app`
   * (optional) `RESEND_API_KEY=...`
4. Deploy → Done ✅

### Custom Domain

In **Vercel → Project → Settings → Domains**:

* Add `wassim-portfolio.vercel.app` (pretty subdomain) or your own domain.
* Set as **Primary**.
* Update `NEXT_PUBLIC_SITE_URL` accordingly.

---

## 🧰 Troubleshooting

* **npm blocked by PowerShell**: run in `cmd` or set policy:

  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
  ```
* **Error: Missing API key (Resend)**: keep the fallback `sendEmailAction` above or add `RESEND_API_KEY`.
* **Dev server not reloading**: stop with `Ctrl+C` then `npm run dev` again.
* **Build errors on Vercel**: ensure Node version from `engines` in `package.json` (or use default), and env var `NEXT_PUBLIC_SITE_URL` is set.

---

## 🗺️ Roadmap / Ideas

* Add a blog section (MDX)
* Add dark/light toggle (if not already)
* Replace project images with real screenshots
* Add analytics (Vercel Analytics or Plausible)

---



