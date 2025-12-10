# 10-Founders

A modern static website for our tech business, showcasing our services for building apps and websites.

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
  skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
  image: '/images/team/yourname.jpg',
},
```

### Image Path Format

- Must start with `/images/team/`
- Must match your filename exactly (case-sensitive)
- Include the file extension (`.jpg`, `.png`, etc.)

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
