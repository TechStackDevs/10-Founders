# Tech Stack Devs

A modern static website for our tech business, showcasing our services for building apps and websites.

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have:

- **Node.js** installed (version 18 or higher)
  - Check your version: `node --version`
  - Download: [nodejs.org](https://nodejs.org/)
- **Git** installed
  - Check your version: `git --version`
  - Download: [git-scm.com](https://git-scm.com/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/schlajo/10-Founders.git
cd 10-Founders
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (Astro, Tailwind, etc.)

### Step 3: Start the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

Open that URL in your browser to see the site. The page will automatically reload when you make changes!

### Step 4: Make Your Changes

- Create a feature branch (see [CONTRIBUTING.md](./CONTRIBUTING.md))
- Make your changes
- Test locally with `npm run dev`
- Push and create a Pull Request

**First time adding your profile?** 👉 See the [Adding Your Developer Profile](#-adding-your-developer-profile) section below.

---

## 🚀 Tech Stack

- **Astro** - Static site framework
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## 📁 Project Structure

```
/
├── public/          # Static assets (images, favicons, etc.)
├── src/
│   ├── layouts/    # Layout components
│   ├── pages/      # Page routes
│   └── styles/     # Global styles
└── package.json
```

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👤 Adding Your Developer Profile

### Step 1: Add Your Photo

1. Place your photo in: `public/images/team/`
2. Use a simple filename like `yourname.jpg` (no spaces)
3. Recommended: Square image, 400x400px or larger

### Step 2: Update Your Profile

1. Open `src/pages/developers.astro`
2. Find your entry in the `developers` array (or add a new one)
3. Update the following fields:

```javascript
{
  name: 'Your Name',
  role: 'Your Role',
  bio: 'A short bio about yourself and your expertise.',
  links: [
    { title: 'Portfolio', url: 'https://your-portfolio.com' },
    { title: 'GitHub', url: 'https://github.com/yourusername' },
    { title: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  ],
  image: '/images/team/yourname.jpg',
},
```

**Note:** Only links with a URL filled in will be displayed. Leave `url: ''` empty if you don't want to show that link.

### Image Path Format

- Must start with `/images/team/`
- Must match your filename exactly (case-sensitive)
- Include the file extension (`.jpg`, `.png`, etc.)

---

## 🌐 Live Site

**[TechStackDevs.com](https://techstackdevs.com)**

## 🚀 Deployment

This site is deployed on **Vercel**.

👉 **See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions and domain setup.**

**Quick deploy:**

- Connect your GitHub repo to Vercel
- Vercel auto-detects Astro and deploys
- Add your custom domain in Vercel settings

---

## 🎯 Future Enhancements

- Add React components for interactive features
- Integrate backend API routes
- Add contact form functionality

## 👥 Contributing

**Important:** We use a feature branch workflow with peer reviews.

👉 **See [CONTRIBUTING.md](./CONTRIBUTING.md) for the complete workflow guide.**

Quick summary:

- ✅ Create a branch for your changes
- ✅ Open a Pull Request
- ✅ Get at least 1 peer review before merging
- ❌ Never push directly to `main`

---

## 📝 Notes

This site is built with Astro for optimal performance, with the flexibility to add React components and backend functionality as needed.
