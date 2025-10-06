# 🐍 Python Learning Platform (GOGOLANA PRO)

An educational platform providing organized, comprehensive content to learn Python, with full bilingual support (Arabic and English). The project uses a pure Front-End stack: `HTML`, `CSS`, and `JavaScript`, with a strong focus on UX and typography (`Cairo` for Arabic and `Merriweather` for English).

---

## 🌟 Features

- **Internationalization (i18n)**: Instant switching between Arabic (RTL) and English (LTR), automatically updating page direction and fonts.
- **Responsive design**: Modern layout that works smoothly on desktop, mobile, and tablets.
- **Professional typography**: `Cairo` for Arabic text and `Merriweather` for English text.
- **Attractive animated background**: Gradient animation to enhance the visual experience.
- **Organized structure**: Clean, well-commented code for easy maintenance and future development.

---

## 🗂️ Project Structure

```
index.html           # Home page
styles.css           # Global styles and responsiveness
translation.js       # Translation system and language switching
byanat.html          # Data Analysis course page
kainat.html          # OOP course page
mo9adima.html        # Intro to Python page
privacy.html         # Privacy Policy
terms.html           # Terms of Use
sitemap.xml          # Sitemap for search engines
ads.txt, robots.txt  # Ads and crawling settings
```

---

## 🛠️ Requirements & Local Run

No special requirements.

1) Clone the repository:
```bash
git clone https://github.com/Khalil307-ak/gogolanapro.git
cd gogolanapro
```
2) Open `index.html` directly in your browser.

Optional (simple local server):
```bash
# Python 3
python -m http.server 8000
# Then open: http://localhost:8000
```

---

## 🌐 Deployment (GitHub Pages)

1) Push to the `main` branch.
2) In repo Settings > Pages, choose source: `main /(root)`.
3) Update `sitemap.xml` with your final published domain/paths after deployment.

Note: Ensure internal links and images resolve correctly after publishing.

---

## 🌍 Internationalization (i18n)

- Uses `data-i18n` attributes on elements.
- `translation.js` contains a `translations` object for `ar` and `en`.
- `document.documentElement.lang` and `dir` are updated automatically on language change.

To add a new translatable text:
1) In HTML: `<span data-i18n="my-key">Default text</span>`
2) In `translation.js`: add `my-key` with values under both `ar` and `en`.

---

## 📢 Ads (AdSense)

- Use the correct `data-ad-client` value.
- Replace `data-ad-slot` with your real slot ID or ads won’t display.

---

## 🔒 Security

- The previous `sw.js` file was removed because it contained obfuscated code fetching an untrusted external script.
- If you need a Service Worker, create a clean local file and register it explicitly in `index.html` after review.

---

## 🗺️ Sitemap (`sitemap.xml`)

- Update all `<loc>` entries to reflect your final published domain/path.
- Optionally submit the sitemap to search engines.

---

## 🤝 Contributing

Contributions are welcome!
1) Fork the repository.
2) Create a feature branch: `git checkout -b feature/your-feature`
3) Commit your changes: `git commit -m "Brief description"`
4) Push the branch: `git push origin feature/your-feature`
5) Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.
