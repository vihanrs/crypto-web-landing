
# 🚀 Crypto Code Landing Page | React | SCSS

A modern and responsive landing page designed for CryptoCode, a cutting-edge cryptocurrency platform.Built using React and SCSS, the landing page ensures a sleek design and seamless user experience.


## 🌐 Live Demo

Take a look the live demo here 👉 https://crypto-web-landing.vercel.app/

## 🛠️ Tech Stack

**Frontend:** React, SCSS

**Build Tool:** Vite ⚡


## 📚 Lessons Learned

**SCSS Mastery:** This project significantly enhanced my understanding of SCSS including:

- Structuring styles using partials for better organization and reusability.
- Leveraging SCSS variables for consistent theming.
- Using mixins and nesting to write cleaner, more maintainable code.

## 🧩 Challenges and How I Overcame Them

**Challenge:** Adapting to the deprecation of the ***@import*** annotation in SCSS

- **Details:** While building the project, I discovered that ***@import*** is now deprecated in SCSS, which initially caused confusion as many older tutorials and resources still referenced it.
- **Solution:** I transitioned to using the newer ***@use*** and ***@forward*** rules, which provide better modularity and namespace management for SCSS files. I followed the official SCSS documentation and updated my workflow to:

    - Replace ***@import*** with ***@use*** for importing styles.
    - Use ***@forward*** in shared partials to re-export reusable styles.
- **Outcome:** This not only resolved the issue but also improved the overall structure and maintainability of my stylesheets.
