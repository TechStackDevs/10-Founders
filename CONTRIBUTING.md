# Contributing Guide

## 🚨 **IMPORTANT: Never Push Directly to Main**

For a team of 10 developers, we use a **feature branch workflow** to prevent conflicts and maintain code quality.

---

## 📋 Workflow Overview

### ✅ **DO THIS:**

1. Create a feature branch from `main`
2. Make your changes
3. Push your branch
4. Create a Pull Request (PR)
5. Get at least 1 peer review
6. Merge after approval

### ❌ **DON'T DO THIS:**

- Push directly to `main`
- Merge your own PRs without review
- Work on the same branch as someone else

---

## 🔀 Step-by-Step Workflow

### 1. **Start Fresh**

```bash
# Always start from the latest main
git checkout main
git pull origin main
```

### 2. **Create Your Feature Branch**

```bash
# Use descriptive names
git checkout -b feature/add-contact-form
# OR
git checkout -b fix/header-navigation-bug
# OR
git checkout -b update/john-developer-profile
```

**Branch Naming Convention:**

- `feature/` - New features
- `fix/` - Bug fixes
- `update/` - Updates to existing content
- `refactor/` - Code improvements

### 3. **Make Your Changes**

Work on your branch, commit frequently:

```bash
git add .
git commit -m "Add contact form validation"
```

### 4. **Push Your Branch**

```bash
git push origin feature/your-branch-name
```

### 5. **Create a Pull Request**

- Go to GitHub: https://github.com/BradenKartchner/10-Founders
- Click "New Pull Request"
- Select your branch
- Add a clear description of what you changed
- Request review from at least 1 teammate

### 6. **Wait for Review**

- Address any feedback
- Make requested changes
- Push updates to the same branch (PR updates automatically)

### 7. **Merge After Approval**

- Once approved, merge the PR
- Delete the branch after merging (GitHub option)

---

## 👥 Code Review Guidelines

### **As a Reviewer:**

- ✅ Check that code works and follows project style
- ✅ Look for bugs or potential issues
- ✅ Verify the changes match the PR description
- ✅ Be constructive and respectful
- ⏱️ Review within 24 hours if possible

### **As a Contributor:**

- ✅ Write clear commit messages
- ✅ Keep PRs focused (one feature/fix per PR)
- ✅ Test your changes before requesting review
- ✅ Respond to feedback promptly

---

## 🔒 Branch Protection (Recommended Setup)

**Repository Admin should enable:**

1. Go to GitHub → Settings → Branches
2. Add rule for `main` branch:
   - ✅ Require pull request reviews (at least 1)
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date
   - ✅ Include administrators (optional, but recommended)

---

## 🚨 Handling Conflicts

If you see conflicts when creating a PR:

```bash
# Update your branch with latest main
git checkout main
git pull origin main
git checkout feature/your-branch
git merge main
# Resolve conflicts, then:
git push origin feature/your-branch
```

---

## 📝 Commit Message Best Practices

**Good:**

```
Add portfolio page with project showcase
Fix header navigation mobile menu
Update John's developer profile photo
```

**Bad:**

```
changes
fix
update
```

---

## 🎯 Quick Reference

| Task              | Command                        |
| ----------------- | ------------------------------ |
| Start new feature | `git checkout -b feature/name` |
| See your branches | `git branch`                   |
| Switch branches   | `git checkout branch-name`     |
| Update from main  | `git pull origin main`         |
| Push your branch  | `git push origin feature/name` |

---

## ❓ Need Help?

- Ask in team chat before pushing if unsure
- Check existing PRs for examples
- Review this guide if you forget the workflow
