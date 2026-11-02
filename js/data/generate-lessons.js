
const fs = require("fs");
const path = require("path");
const vm = require("vm");

// ==========================================
// PROJECT PATHS
// ==========================================

const ROOT = path.resolve(__dirname, "../..");
const DATA_FILE = path.join(__dirname, "learndata.js");
const OUTPUT_DIR = path.join(ROOT, "learn");
const SITE_URL = "https://aisqlassistant.in";

// ==========================================
// HELPERS
// ==========================================

function escapeHtml(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function slugify(value = "") {
    return String(value)
        .replace(/^\d+\.\s*/, "")
        .replace(/\b(is|are)\s+(a|an|the)\s+/gi, "$1 ")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function loadModules() {
    const source = fs.readFileSync(DATA_FILE, "utf8");
    const sandbox = {};

    vm.runInNewContext(
        source + "\nglobalThis.__MODULES = LEARNING_MODULES;",
        sandbox
    );

    return sandbox.__MODULES;
}

function renderList(items = []) {
    if (!Array.isArray(items) || !items.length) {
        return "<p>Content will be added soon.</p>";
    }

    return `<ul>${items.map(item =>
        `<li>${escapeHtml(item)}</li>`
    ).join("")}</ul>`;
}

function renderInterviews(items = []) {
    if (!Array.isArray(items) || !items.length) {
        return "<p>Interview questions will be added soon.</p>";
    }

    return items.map((item, index) => `
        <details class="interview-item">
            <summary>
                ${escapeHtml(item.question || `Question ${index + 1}`)}
            </summary>
            <p>${escapeHtml(item.answer || "")}</p>
        </details>
    `).join("");
}

// ==========================================
// LESSON PAGE GENERATOR
// ==========================================

function generatePage(module, lesson, lessons, index, slugMap) {

    const moduleSlug = module.slug || slugify(module.title);
    const lessonSlug = slugMap.get(lesson);

    const relativePath = `${moduleSlug}/${lessonSlug}.html`;
    const pageUrl = `${SITE_URL}/learn/${relativePath}`;

    const title = `${lesson.title} | ${module.title} | AI SQL Assistant`;

    const description =
        lesson.description ||
        lesson.definition ||
        title;

    const previous = lessons[index - 1];
    const next = lessons[index + 1];

    const previousSlug = previous ? slugMap.get(previous) : "";
    const nextSlug = next ? slugMap.get(next) : "";

    // ======================================
    // SIDEBAR LESSON LINKS
    // ======================================

    const lessonLinks = lessons.map((item, itemIndex) => {
        const slug = slugMap.get(item);
        const href = `/learn/${moduleSlug}/${slug}.html`;
        const active = item === lesson ? "active" : "";

        return `
            <a class="sidebar-lesson ${active}"
               href="${href}"
               data-title="${escapeHtml(item.title.toLowerCase())}">
                <span class="lesson-number">${itemIndex + 1}</span>
                <span class="lesson-name">${escapeHtml(item.title)}</span>
                <span class="completed-icon" aria-hidden="true">✓</span>
            </a>
        `;
    }).join("");

    // ======================================
    // STRUCTURED DATA
    // ======================================

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LearningResource",
        "name": lesson.title,
        "description": description,
        "learningResourceType": "Lesson",
        "educationalLevel": lesson.difficulty || module.level || "Beginner",
        "inLanguage": "en",
        "url": pageUrl,
        "isPartOf": {
            "@type": "Course",
            "name": module.title,
            "url": `${SITE_URL}/learn.html`
        }
    };

    // ======================================
    // HTML
    // ======================================

    const html = `<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>${escapeHtml(title)}</title>

<meta name="description" content="${escapeHtml(description)}">

<link rel="canonical" href="${pageUrl}">

<meta name="theme-color" content="#2563eb">

<script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2).replace(/</g, "\\u003c")}
</script>

<style>

:root {
    color-scheme: light;
    --bg: #f5f7fb;
    --surface: #ffffff;
    --surface-soft: #f1f5f9;
    --text: #172033;
    --muted: #64748b;
    --border: #e2e8f0;
    --primary: #2563eb;
    --primary-soft: #eff6ff;
    --code-bg: #111827;
    --code-text: #e5e7eb;
    --sidebar-width: 300px;
}

body.dark {
    color-scheme: dark;
    --bg: #0f172a;
    --surface: #1e293b;
    --surface-soft: #263449;
    --text: #e2e8f0;
    --muted: #a3b1c6;
    --border: #334155;
    --primary: #60a5fa;
    --primary-soft: #1e3a5f;
    --code-bg: #020617;
    --code-text: #e2e8f0;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: Arial, sans-serif;
    line-height: 1.7;
    transition: background .2s, color .2s;
}

a {
    color: var(--primary);
    text-decoration: none;
}

button,
input {
    font: inherit;
}

.topbar {
    position: sticky;
    top: 0;
    z-index: 20;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
}

.brand {
    font-size: 19px;
    font-weight: 800;
    color: var(--text);
}

.top-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.action-btn {
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text);
    padding: 9px 13px;
    border-radius: 8px;
    cursor: pointer;
}

.action-btn:hover {
    border-color: var(--primary);
}

.layout {
    display: grid;
    grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
    min-height: calc(100vh - 60px);
}

.sidebar {
    background: var(--surface);
    border-right: 1px solid var(--border);
    padding: 20px 14px;
    height: calc(100vh - 60px);
    position: sticky;
    top: 60px;
    overflow-y: auto;
}

.sidebar-heading {
    font-size: 17px;
    font-weight: 800;
    margin: 0 0 5px;
}

.sidebar-subtitle {
    font-size: 13px;
    color: var(--muted);
    margin: 0 0 15px;
}

.search-box {
    width: 100%;
    padding: 11px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    border-radius: 8px;
    margin-bottom: 15px;
    outline: none;
}

.search-box:focus {
    border-color: var(--primary);
}

.sidebar-progress {
    background: var(--surface-soft);
    padding: 12px;
    border-radius: 9px;
    margin-bottom: 15px;
}

.progress-label {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-bottom: 8px;
    color: var(--muted);
}

.progress-track {
    height: 7px;
    background: var(--border);
    border-radius: 20px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    width: 0%;
    background: var(--primary);
    transition: width .25s;
}

.sidebar-lesson {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    border-radius: 8px;
    color: var(--text);
    font-size: 13px;
    margin-bottom: 4px;
}

.sidebar-lesson:hover {
    background: var(--surface-soft);
}

.sidebar-lesson.active {
    background: var(--primary-soft);
    color: var(--primary);
    font-weight: 700;
}

.lesson-number {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 6px;
    background: var(--surface-soft);
    display: grid;
    place-items: center;
    font-size: 11px;
}

.lesson-name {
    flex: 1;
}

.completed-icon {
    display: none;
    color: #16a34a;
    font-weight: bold;
}

.sidebar-lesson.completed .completed-icon {
    display: inline;
}

.no-results {
    color: var(--muted);
    font-size: 13px;
    display: none;
    padding: 10px;
}

.main-content {
    min-width: 0;
    width: 100%;
    max-width: 1050px;
    padding: 35px;
    margin: 0 auto;
}

.breadcrumb {
    color: var(--muted);
    font-size: 13px;
    margin-bottom: 22px;
}

.breadcrumb span {
    margin: 0 6px;
}

.lesson-header {
    background: var(--surface);
    padding: 28px;
    border: 1px solid var(--border);
    border-radius: 14px;
    margin-bottom: 22px;
}

.level-label {
    display: inline-block;
    background: var(--primary-soft);
    color: var(--primary);
    padding: 5px 11px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
}

.lesson-header h1 {
    font-size: clamp(26px, 4vw, 36px);
    line-height: 1.25;
    margin: 14px 0 10px;
}

.lesson-description {
    color: var(--muted);
    margin: 0;
}

.lesson-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 18px;
    font-size: 12px;
    color: var(--muted);
}

.lesson-card {
    background: var(--surface);
    padding: 26px;
    border: 1px solid var(--border);
    border-radius: 14px;
}

.content-section {
    border-bottom: 1px solid var(--border);
    padding: 0 0 20px;
    margin-bottom: 20px;
}

.content-section:last-child {
    border-bottom: 0;
    margin-bottom: 0;
}

.content-section h2 {
    font-size: 20px;
    margin: 0 0 12px;
}

.content-section p {
    color: var(--muted);
    white-space: pre-line;
}

.section-toggle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    border: 0;
    background: transparent;
    color: var(--text);
    padding: 0;
    cursor: pointer;
    text-align: left;
}

.section-toggle h2 {
    margin: 0;
}

.section-body {
    padding-top: 12px;
}

.content-section.collapsed .section-body {
    display: none;
}

.toggle-icon {
    color: var(--muted);
    font-size: 19px;
}

.code-container {
    background: var(--code-bg);
    border-radius: 10px;
    overflow: hidden;
    margin-top: 12px;
}

.code-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    background: rgba(255,255,255,.06);
    color: #cbd5e1;
    font-size: 12px;
}

.copy-btn {
    border: 1px solid #64748b;
    background: transparent;
    color: white;
    border-radius: 6px;
    padding: 5px 10px;
    cursor: pointer;
}

.copy-btn:hover {
    background: #334155;
}

pre {
    margin: 0;
    padding: 18px;
    overflow-x: auto;
    color: var(--code-text);
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    font-size: 14px;
}

.takeaway-list {
    padding-left: 22px;
}

.takeaway-list li {
    margin-bottom: 9px;
}

.interview-item {
    background: var(--surface-soft);
    border-radius: 8px;
    padding: 14px;
    margin-bottom: 10px;
}

.interview-item summary {
    cursor: pointer;
    font-weight: 700;
}

.interview-item p {
    margin-bottom: 0;
}

.complete-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 25px;
    padding: 18px;
    background: var(--surface-soft);
    border-radius: 10px;
}

.complete-btn {
    border: 0;
    border-radius: 8px;
    padding: 12px 18px;
    background: var(--primary);
    color: white;
    font-weight: 700;
    cursor: pointer;
}

.complete-btn.completed {
    background: #15803d;
}

.navigation {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin: 22px 0;
}

.nav-btn {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 12px 16px;
    border-radius: 9px;
    color: var(--text);
    font-size: 13px;
}

.nav-btn:hover {
    border-color: var(--primary);
}

.nav-btn.disabled {
    opacity: .4;
    pointer-events: none;
}

.module-list {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 22px;
    margin-top: 25px;
}

.module-list h2 {
    font-size: 18px;
}

.module-list ul {
    columns: 2;
    padding-left: 20px;
}

.module-list li {
    margin-bottom: 8px;
    break-inside: avoid;
    font-size: 13px;
}

.footer {
    text-align: center;
    color: var(--muted);
    font-size: 12px;
    padding: 25px;
}

.mobile-overlay {
    display: none;
}

@media(max-width: 850px) {

    .layout {
        display: block;
    }

    .sidebar {
        position: fixed;
        z-index: 30;
        top: 60px;
        left: 0;
        width: min(320px, 85vw);
        height: calc(100vh - 60px);
        transform: translateX(-105%);
        transition: transform .25s;
    }

    .sidebar.open {
        transform: translateX(0);
    }

    .mobile-overlay.open {
        display: block;
        position: fixed;
        inset: 60px 0 0;
        z-index: 25;
        background: rgba(0,0,0,.45);
    }

    .main-content {
        padding: 22px 16px;
    }

}

@media(max-width: 550px) {

    .topbar {
        padding: 10px 12px;
    }

    .brand {
        font-size: 15px;
    }

    .action-btn {
        padding: 8px 10px;
        font-size: 12px;
    }

    .lesson-header,
    .lesson-card {
        padding: 19px;
    }

    .module-list ul {
        columns: 1;
    }

    .navigation {
        flex-direction: column;
    }

    .nav-btn {
        text-align: center;
    }

}

</style>

</head>

<body>

<header class="topbar">

    <div class="brand">
        AI SQL Assistant
    </div>

    <div class="top-actions">

        <button class="action-btn"
                id="menuToggle"
                aria-label="Open lesson menu"
                aria-expanded="false">
            ☰ Lessons
        </button>

        <button class="action-btn"
                id="themeToggle"
                aria-label="Toggle dark mode">
            🌙 Theme
        </button>

    </div>

</header>

<div class="mobile-overlay" id="mobileOverlay"></div>

<div class="layout">

    <aside class="sidebar" id="sidebar">

        <h2 class="sidebar-heading">
            ${escapeHtml(module.title)}
        </h2>

        <p class="sidebar-subtitle">
            ${lessons.length} SQL lessons
        </p>

        <input
            type="search"
            id="lessonSearch"
            class="search-box"
            placeholder="Search lessons..."
            aria-label="Search lessons">

        <div class="sidebar-progress">

            <div class="progress-label">
                <span>Your Progress</span>
                <strong id="progressText">0%</strong>
            </div>

            <div class="progress-track">
                <div class="progress-fill" id="progressFill"></div>
            </div>

            <p class="progress-label" id="progressCount">
                0 of ${lessons.length} lessons completed
            </p>

        </div>

        <nav id="lessonList" aria-label="All module lessons">

            ${lessonLinks}

        </nav>

        <p class="no-results" id="noResults">
            No lessons found.
        </p>

    </aside>

    <main class="main-content">

        <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/learn.html">Learn SQL</a>
            <span>›</span>
            ${escapeHtml(module.title)}
        </nav>

        <header class="lesson-header">

            <span class="level-label">
                ${escapeHtml(module.level || "SQL Learning")}
            </span>

            <h1>${escapeHtml(lesson.title)}</h1>

            <p class="lesson-description">
                ${escapeHtml(description)}
            </p>

            <div class="lesson-meta">
                <span>📘 Lesson ${index + 1} of ${lessons.length}</span>
                <span>⏱ ${escapeHtml(lesson.duration || module.duration || "Self-paced")}</span>
                <span>🎯 ${escapeHtml(lesson.difficulty || "Learning")}</span>
            </div>

        </header>

        <article class="lesson-card">

            <section class="content-section">

                <button class="section-toggle" type="button">
                    <h2>Learn the Concept</h2>
                    <span class="toggle-icon">−</span>
                </button>

                <div class="section-body">
                    <p>${escapeHtml(lesson.definition || description)}</p>
                </div>

            </section>

            <section class="content-section">

                <button class="section-toggle" type="button">
                    <h2>Why It Matters</h2>
                    <span class="toggle-icon">−</span>
                </button>

                <div class="section-body">
                    <p>${escapeHtml(lesson.whyItMatters || "")}</p>
                </div>

            </section>

            <section class="content-section">

                <button class="section-toggle" type="button">
                    <h2>Practical Example</h2>
                    <span class="toggle-icon">−</span>
                </button>

                <div class="section-body">
                    <p>${escapeHtml(lesson.example || "")}</p>
                </div>

            </section>

            <section class="content-section">

                <button class="section-toggle" type="button">
                    <h2>SQL Query</h2>
                    <span class="toggle-icon">−</span>
                </button>

                <div class="section-body">

                    <div class="code-container">

                        <div class="code-toolbar">
                            <span>SQL</span>

                            <button class="copy-btn" type="button">
                                Copy Code
                            </button>
                        </div>

                        <pre><code class="sql-code">${escapeHtml(lesson.exampleQuery || "No SQL query provided for this lesson.")}</code></pre>

                    </div>

                </div>

            </section>

            <section class="content-section">

                <button class="section-toggle" type="button">
                    <h2>Real-World Use</h2>
                    <span class="toggle-icon">−</span>
                </button>

                <div class="section-body">
                    <p>${escapeHtml(lesson.realWorldUse || "")}</p>
                </div>

            </section>

            <section class="content-section">

                <button class="section-toggle" type="button">
                    <h2>Key Takeaways</h2>
                    <span class="toggle-icon">−</span>
                </button>

                <div class="section-body takeaway-list">
                    ${renderList(lesson.keyPoints)}
                </div>

            </section>

            <section class="content-section">

                <button class="section-toggle" type="button">
                    <h2>SQL Interview Questions</h2>
                    <span class="toggle-icon">−</span>
                </button>

                <div class="section-body">
                    ${renderInterviews(lesson.interviewQuestions)}
                </div>

            </section>

        </article>

        <div class="complete-area">

            <span id="completeStatus">
                Have you finished this lesson?
            </span>

            <button class="complete-btn" id="completeBtn" type="button">
                ✓ Mark as Complete
            </button>

        </div>

        <nav class="navigation" aria-label="Lesson navigation">

            <a class="nav-btn ${previous ? "" : "disabled"}"
               href="${previous ? `/learn/${moduleSlug}/${previousSlug}.html` : "#"}">
                ← Previous Lesson
            </a>

            <a class="nav-btn" href="/learn.html">
                All SQL Lessons
            </a>

            <a class="nav-btn ${next ? "" : "disabled"}"
               href="${next ? `/learn/${moduleSlug}/${nextSlug}.html` : "#"}">
                Next Lesson →
            </a>

        </nav>

        <section class="module-list">

            <h2>${escapeHtml(module.title)} – All Lessons</h2>

            <ul>
                ${lessons.map(item => `
                    <li>
                        <a href="/learn/${moduleSlug}/${slugMap.get(item)}.html">
                            ${escapeHtml(item.title)}
                        </a>
                    </li>
                `).join("")}
            </ul>

        </section>

    </main>

</div>

<footer class="footer">
    AI SQL Assistant | Learn SQL Step by Step
</footer>

<script>

(function() {

    "use strict";

    const MODULE_KEY = ${JSON.stringify(moduleSlug)};
    const LESSON_KEY = ${JSON.stringify(lessonSlug)};
    const TOTAL_LESSONS = ${lessons.length};

    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menuToggle");
    const mobileOverlay = document.getElementById("mobileOverlay");
    const themeToggle = document.getElementById("themeToggle");
    const searchInput = document.getElementById("lessonSearch");
    const completeBtn = document.getElementById("completeBtn");

    const progressText = document.getElementById("progressText");
    const progressFill = document.getElementById("progressFill");
    const progressCount = document.getElementById("progressCount");
    const completeStatus = document.getElementById("completeStatus");

    // ==================================
    // SAFE LOCAL STORAGE
    // ==================================

    function readProgress() {

        try {
            const saved = JSON.parse(
                localStorage.getItem("sqlLessonProgress") || "{}"
            );

            return saved && typeof saved === "object" ? saved : {};

        } catch (error) {
            return {};
        }

    }

    function saveProgress(progress) {

        try {
            localStorage.setItem(
                "sqlLessonProgress",
                JSON.stringify(progress)
            );

        } catch (error) {
            console.warn("Progress could not be saved.", error);
        }

    }

    // ==================================
    // LESSON COMPLETION
    // ==================================

    function updateProgress() {

        const progress = readProgress();
        const completed = Array.isArray(progress[MODULE_KEY])
            ? progress[MODULE_KEY]
            : [];

        const completedCount = completed.length;
        const percentage = TOTAL_LESSONS
            ? Math.round((completedCount / TOTAL_LESSONS) * 100)
            : 0;

        progressText.textContent = percentage + "%";
        progressFill.style.width = percentage + "%";

        progressCount.textContent =
            completedCount + " of " + TOTAL_LESSONS +
            " lessons completed";

        document.querySelectorAll(".sidebar-lesson").forEach(link => {

            const href = link.getAttribute("href");
            const slug = href.split("/").pop().replace(".html", "");

            link.classList.toggle("completed", completed.includes(slug));

        });

        const isCompleted = completed.includes(LESSON_KEY);

        completeBtn.classList.toggle("completed", isCompleted);

        completeBtn.textContent = isCompleted
            ? "✓ Completed"
            : "✓ Mark as Complete";

        completeStatus.textContent = isCompleted
            ? "You have completed this lesson."
            : "Have you finished this lesson?";

    }

    completeBtn.addEventListener("click", function() {

        const progress = readProgress();

        if (!Array.isArray(progress[MODULE_KEY])) {
            progress[MODULE_KEY] = [];
        }

        const completed = progress[MODULE_KEY];
        const position = completed.indexOf(LESSON_KEY);

        if (position === -1) {
            completed.push(LESSON_KEY);
        } else {
            completed.splice(position, 1);
        }

        saveProgress(progress);
        updateProgress();

    });

    // ==================================
    // LESSON SEARCH
    // ==================================

    searchInput.addEventListener("input", function() {

        const query = this.value.trim().toLowerCase();
        const links = document.querySelectorAll(".sidebar-lesson");

        let visibleCount = 0;

        links.forEach(link => {

            const title = link.dataset.title || "";
            const visible = title.includes(query);

            link.style.display = visible ? "flex" : "none";

            if (visible) visibleCount++;

        });

        document.getElementById("noResults").style.display =
            visibleCount ? "none" : "block";

    });

    // ==================================
    // COLLAPSIBLE SECTIONS
    // ==================================

    document.querySelectorAll(".section-toggle").forEach(button => {

        button.addEventListener("click", function() {

            const section = this.closest(".content-section");
            const collapsed = section.classList.toggle("collapsed");

            this.querySelector(".toggle-icon").textContent =
                collapsed ? "+" : "−";

            this.setAttribute("aria-expanded", String(!collapsed));

        });

        button.setAttribute("aria-expanded", "true");

    });

    // ==================================
    // COPY SQL QUERY
    // ==================================

    document.querySelectorAll(".copy-btn").forEach(button => {

        button.addEventListener("click", async function() {

            const code = this.closest(".code-container")
                .querySelector(".sql-code").textContent;

            try {

                await navigator.clipboard.writeText(code);

                this.textContent = "Copied!";

                setTimeout(() => {
                    this.textContent = "Copy Code";
                }, 1500);

            } catch (error) {

                const textarea = document.createElement("textarea");
                textarea.value = code;
                textarea.style.position = "fixed";
                textarea.style.opacity = "0";

                document.body.appendChild(textarea);
                textarea.select();

                try {
                    document.execCommand("copy");
                    this.textContent = "Copied!";
                } catch (copyError) {
                    this.textContent = "Copy failed";
                }

                textarea.remove();

                setTimeout(() => {
                    this.textContent = "Copy Code";
                }, 1500);

            }

        });

    });

    // ==================================
    // DARK / LIGHT MODE
    // ==================================

    function applyTheme(theme) {

        document.body.classList.toggle("dark", theme === "dark");

        themeToggle.textContent =
            theme === "dark" ? "☀️ Theme" : "🌙 Theme";

    }

    let savedTheme = "light";

    try {
        savedTheme = localStorage.getItem("sqlTheme") || "light";
    } catch (error) {}

    applyTheme(savedTheme);

    themeToggle.addEventListener("click", function() {

        const nextTheme = document.body.classList.contains("dark")
            ? "light"
            : "dark";

        applyTheme(nextTheme);

        try {
            localStorage.setItem("sqlTheme", nextTheme);
        } catch (error) {}

    });

    // ==================================
    // MOBILE SIDEBAR
    // ==================================

    function closeSidebar() {

        sidebar.classList.remove("open");
        mobileOverlay.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");

    }

    menuToggle.addEventListener("click", function() {

        const open = sidebar.classList.toggle("open");

        mobileOverlay.classList.toggle("open", open);
        menuToggle.setAttribute("aria-expanded", String(open));

    });

    mobileOverlay.addEventListener("click", closeSidebar);

    sidebar.querySelectorAll(".sidebar-lesson").forEach(link => {
        link.addEventListener("click", closeSidebar);
    });

    // ==================================
    // INITIALIZE
    // ==================================

    updateProgress();

})();

</script>

</body>
</html>`;

    // ======================================
    // SAVE PAGE
    // ======================================

    const outputPath = path.join(
        OUTPUT_DIR,
        moduleSlug,
        `${lessonSlug}.html`
    );

    fs.mkdirSync(path.dirname(outputPath), {
        recursive: true
    });

    fs.writeFileSync(outputPath, html, "utf8");

    return relativePath;
}

// ==========================================
// MAIN
// ==========================================

function main() {

    if (!fs.existsSync(DATA_FILE)) {
        throw new Error("learndata.js not found: " + DATA_FILE);
    }

    console.log("Reading:", DATA_FILE);

    const modules = loadModules();

    if (!Array.isArray(modules)) {
        throw new Error("LEARNING_MODULES is not a valid array.");
    }

    fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    let count = 0;
    let duplicateCount = 0;
    const lessonUrlIndex = [];

    for (const module of modules) {

        if (!Array.isArray(module.topics)) continue;

        const lessons = module.topics.filter(lesson =>
            lesson.type === "lesson" && lesson.title
        );

        const slugMap = new Map();
        const usedSlugs = new Set();

        // Generate unique URLs for duplicate titles
        lessons.forEach((lesson, index) => {

            let slug = slugify(lesson.title);

            if (usedSlugs.has(slug)) {

                const uniqueId = lesson.lessonId || index + 1;
                slug = `${slug}-${uniqueId}`;

                duplicateCount++;

                // Ensure generated slug is unique
                let suffix = 2;

                while (usedSlugs.has(slug)) {
                    slug = `${slugify(lesson.title)}-${uniqueId}-${suffix}`;
                    suffix++;
                }

            }

            usedSlugs.add(slug);
            slugMap.set(lesson, slug);

        });

        // Generate lesson pages and URL index
        lessons.forEach((lesson, index) => {

            const generated = generatePage(
                module,
                lesson,
                lessons,
                index,
                slugMap
            );

            lessonUrlIndex.push({
                moduleId: module.moduleId,
                lessonId: lesson.lessonId,
                moduleSlug: module.slug || slugify(module.title),
                lessonSlug: slugMap.get(lesson),
                title: lesson.title,
                url: `/learn/${generated}`
            });

            count++;

            console.log("Generated:", `/learn/${generated}`);

        });

    }

    // ======================================
    // SAVE LESSON URL INDEX
    // ======================================

    fs.writeFileSync(
        path.join(OUTPUT_DIR, "lesson-url-index.json"),
        JSON.stringify(lessonUrlIndex, null, 2),
        "utf8"
    );

    console.log("Lesson URL index generated.");

    console.log("\n==================================");
    console.log(`Successfully generated ${count} lesson pages.`);
    console.log(`Duplicate titles handled: ${duplicateCount}`);
    console.log("Output folder:", OUTPUT_DIR);
    console.log("==================================");

}

main();
