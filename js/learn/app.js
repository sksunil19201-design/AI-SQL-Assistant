/* =========================================================
   AI SQL LEARNING PORTAL
   File: js/learn/app.js

   FEATURES
   ✓ Module navigation
   ✓ Lesson navigation
   ✓ Global topic search
   ✓ Search across all modules
   ✓ Search title / description / keywords / examples
   ✓ Search interview questions
   ✓ Search related topics
   ✓ Search ranking
   ✓ Exact module + lesson navigation
   ✓ Search result auto clear
   ✓ Scroll page to top when topic opens
   ✓ Previous / Next navigation
   ✓ Mark lesson complete
   ✓ Progress tracking
   ✓ LocalStorage progress persistence
   ✓ Quiz placeholder
   ✓ No lesson locking
   ✓ Safe HTML rendering
   ✓ Handles missing data gracefully
   ✓ NO duplicate rendering
   ✓ NO duplicate startLearning()
   ✓ Centralized navigation scrolling
   ✓ Scroll position preserved across re-renders
========================================================= */


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentModuleId = null;
let currentLessonId = null;

let learningSearchTerm = "";

const LEARNING_PROGRESS_KEY =
    "ai_sql_learning_progress_v1";


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initializeLearningPortal
);


/* =========================================================
   INITIALIZE PORTAL
========================================================= */

function initializeLearningPortal() {

    console.log(
        "AI SQL Learning Portal Started"
    );


    if (
        typeof LEARNING_MODULES === "undefined"
    ) {

        console.error(
            "LEARNING_MODULES is not defined."
        );

        return;

    }


    if (
        !Array.isArray(
            LEARNING_MODULES
        )
    ) {

        console.error(
            "LEARNING_MODULES must be an array."
        );

        return;

    }


    if (
        LEARNING_MODULES.length === 0
    ) {

        console.warn(
            "LEARNING_MODULES is empty."
        );

        return;

    }


    /* -----------------------------------------------------
       LOAD PROGRESS
    ----------------------------------------------------- */

    loadLearningProgress();


    /* -----------------------------------------------------
       FIRST MODULE
    ----------------------------------------------------- */

    const firstModule =
        LEARNING_MODULES[0];


    if (!firstModule) {

        return;

    }


    currentModuleId =
        normalizeId(
            firstModule.moduleId,
            1
        );


    /* -----------------------------------------------------
       FIRST LESSON
    ----------------------------------------------------- */

    const firstTopics =
        getTopics(
            firstModule
        );


    if (
        firstTopics.length > 0
    ) {

        currentLessonId =
            normalizeId(
                firstTopics[0].lessonId,
                1
            );

    }


    /* -----------------------------------------------------
       INITIAL RENDER
    ----------------------------------------------------- */

    renderEverything(
        false
    );


    /* -----------------------------------------------------
       BUTTON SETUP

       IMPORTANT:
       Only ONE setup call handles module cards.
       There is no separate "startModule1Btn"
       handler anymore, because that caused
       startLearning(1) to fire TWICE (once from
       the id-specific handler, once from the
       generic .module-card button handler) since
       Module 1's card also carries data-module-id.
    ----------------------------------------------------- */

    setupModuleButtons();

}


/* =========================================================
   DATA HELPERS
========================================================= */


/* ---------------------------------------------------------
   NORMALIZE ID
--------------------------------------------------------- */

function normalizeId(
    value,
    fallback = null
) {

    const number =
        Number(value);


    return Number.isFinite(number)
        ? number
        : fallback;

}


/* ---------------------------------------------------------
   GET MODULE
--------------------------------------------------------- */

function getModule(
    moduleId
) {

    if (
        !Array.isArray(
            LEARNING_MODULES
        )
    ) {

        return null;

    }


    return (
        LEARNING_MODULES.find(
            function (module) {

                return (
                    normalizeId(
                        module?.moduleId
                    ) ===
                    normalizeId(
                        moduleId
                    )
                );

            }
        ) || null
    );

}


/* ---------------------------------------------------------
   GET CURRENT MODULE
--------------------------------------------------------- */

function getCurrentModule() {

    return getModule(
        currentModuleId
    );

}


/* ---------------------------------------------------------
   GET TOPICS
--------------------------------------------------------- */

function getTopics(
    module
) {

    if (
        !module ||
        !Array.isArray(
            module.topics
        )
    ) {

        return [];

    }


    return module.topics;

}


/* ---------------------------------------------------------
   GET LESSON
--------------------------------------------------------- */

function getLesson(
    module,
    lessonId
) {

    const topics =
        getTopics(
            module
        );


    return (
        topics.find(
            function (lesson) {

                return (
                    normalizeId(
                        lesson?.lessonId
                    ) ===
                    normalizeId(
                        lessonId
                    )
                );

            }
        ) || null
    );

}


/* ---------------------------------------------------------
   GET CURRENT LESSON
--------------------------------------------------------- */

function getCurrentLesson() {

    return getLesson(
        getCurrentModule(),
        currentLessonId
    );

}


/* =========================================================
   START LEARNING
   IMPORTANT:
   ONLY ONE startLearning() EXISTS
   ONLY ONE listener path ever calls it
   (see setupModuleButtons)
========================================================= */

function startLearning(
    moduleId
) {

    const module =
        getModule(
            moduleId
        );


    if (!module) {

        console.error(
            "Module not found:",
            moduleId
        );

        return;

    }


    currentModuleId =
        normalizeId(
            module.moduleId
        );


    const topics =
        getTopics(
            module
        );


    if (
        topics.length > 0
    ) {

        currentLessonId =
            normalizeId(
                topics[0].lessonId
            );

    } else {

        currentLessonId =
            null;

    }


    learningSearchTerm =
        "";


    /*
       false = do not force-scroll to top.
       Scroll position is preserved automatically
       by renderEverything().
    */

    renderEverything(
        false
    );

}


/* =========================================================
   OPEN LESSON
========================================================= */

function openLesson(
    lessonId
) {

    const module =
        getCurrentModule();


    if (!module) {

        return;

    }


    const lesson =
        getLesson(
            module,
            lessonId
        );


    if (!lesson) {

        console.error(
            "Lesson not found:",
            lessonId
        );

        return;

    }


    currentLessonId =
        normalizeId(
            lesson.lessonId
        );


    learningSearchTerm =
        "";


    renderEverything(
        false
    );

}


/* =========================================================
   JUMP TO LESSON
========================================================= */

function jumpToLesson(
    moduleId,
    lessonId
) {

    const module =
        getModule(
            moduleId
        );


    if (!module) {

        console.error(
            "Module not found:",
            moduleId
        );

        return;

    }


    const lesson =
        getLesson(
            module,
            lessonId
        );


    if (!lesson) {

        console.error(
            "Lesson not found:",
            lessonId
        );

        return;

    }


    currentModuleId =
        normalizeId(
            module.moduleId
        );


    currentLessonId =
        normalizeId(
            lesson.lessonId
        );


    learningSearchTerm =
        "";


    renderEverything(
        false
    );

}


/* =========================================================
   CENTRAL RENDER CONTROLLER

   This is the ONLY place where
   navigation scrolling is controlled.

   NEW: it also actively PRESERVES the user's
   scroll position across re-renders unless a
   scroll-to-top was explicitly requested.

   WHY:
   Re-rendering large chunks of the DOM (sidebar,
   lesson area) can cause a browser to shift scroll
   position on its own — e.g. if the focused element
   gets removed/replaced mid-render, or if content
   height changes above the fold. Rather than trying
   to chase every possible browser cause, we just
   snapshot scrollY before rendering and force it
   back afterward when we don't want a scroll.
========================================================= */

/* =========================================================
   CENTRAL RENDER CONTROLLER

   IMPORTANT:
   - Saves current page scroll position
   - Re-renders the DOM
   - Restores EXACT previous scroll position
   - Only scrolls to top when explicitly requested
========================================================= */

function renderEverything(
    shouldScrollTop = false
) {

    /*
       IMPORTANT:
       Capture scroll position BEFORE
       changing any DOM content.
    */

    const savedScrollY =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;


    /*
       Remove focus from the clicked element.

       This prevents the browser from trying
       to scroll the newly-rendered DOM back
       to the old focused button.
    */

    if (
        document.activeElement &&
        typeof document.activeElement.blur === "function"
    ) {

        document.activeElement.blur();

    }


    /*
       Render all dynamic areas.
    */

    renderBreadcrumb();

    renderProgress();

    renderSidebar();

    renderLesson();


    /*
       Explicit top scroll only when requested.
    */

    if (shouldScrollTop) {

        scrollPageToTop();

        return;

    }


    /*
       Restore the EXACT position the user
       was already viewing.

       Multiple animation frames are intentional.
       They allow the browser to finish layout,
       DOM replacement and CSS transitions first.
    */

    restoreScrollPosition(
        savedScrollY
    );
}


/* =========================================================
   SCROLL PAGE TO TOP
========================================================= */

function scrollPageToTop() {

    requestAnimationFrame(
        function () {

            requestAnimationFrame(
                function () {

                    requestAnimationFrame(
                        function () {

                            withInstantScroll(
                                function () {

                                    window.scrollTo(
                                        0,
                                        0
                                    );

                                    document.documentElement.scrollTop =
                                        0;

                                    document.body.scrollTop =
                                        0;

                                }
                            );

                        }
                    );

                }
            );

        }
    );
}


/* =========================================================
   RESTORE SCROLL POSITION

   IMPORTANT:
   This function restores the user's previous
   position after the complete DOM re-render.
========================================================= */

function restoreScrollPosition(
    targetScrollY
) {

    const safeScrollY =
        Math.max(
            0,
            Number(targetScrollY) || 0
        );


    requestAnimationFrame(
        function () {

            requestAnimationFrame(
                function () {

                    requestAnimationFrame(
                        function () {

                            withInstantScroll(
                                function () {

                                    window.scrollTo(
                                        0,
                                        safeScrollY
                                    );

                                    document.documentElement.scrollTop =
                                        safeScrollY;

                                    document.body.scrollTop =
                                        safeScrollY;

                                }
                            );

                        }
                    );

                }
            );

        }
    );
}


/* =========================================================
   INSTANT PROGRAMMATIC SCROLL

   Prevents CSS:
       html {
           scroll-behavior: smooth;
       }

   from interfering with our restore operation.
========================================================= */

function withInstantScroll(
    scrollAction
) {

    const root =
        document.documentElement;


    const previousBehavior =
        root.style.scrollBehavior;


    root.style.scrollBehavior =
        "auto";


    try {

        scrollAction();

    } finally {

        root.style.scrollBehavior =
            previousBehavior;

    }
}

/* =========================================================
   SIDEBAR
========================================================= */

function renderSidebar() {

    const sidebar =
        document.getElementById(
            "learningSidebar"
        );


    if (!sidebar) {

        return;

    }


    const module =
        getCurrentModule();


    if (!module) {

        sidebar.innerHTML =
            renderEmptyState(
                "Module not found"
            );

        return;

    }


    const topics =
        getTopics(
            module
        );


    let html = "";


    html += `

        <div class="learn-sidebar">

            <div class="sidebar-header">

                <div class="sidebar-icon">

                    <i class="${escapeAttribute(
                        module.icon ||
                        "fa-solid fa-book"
                    )}"></i>

                </div>

                <div>

                    <h5>
                        ${escapeHTML(
                            module.title ||
                            "SQL Learning"
                        )}
                    </h5>

                    <small>
                        ${escapeHTML(
                            module.level ||
                            ""
                        )}
                    </small>

                </div>

            </div>


            <div class="lesson-search-box">

                <div class="search-input-wrapper">

                    <i class="
                        fa-solid
                        fa-magnifying-glass
                        search-icon
                    "></i>


                    <input
                        type="text"
                        id="lessonSearchInput"
                        class="lesson-search-input"
                        placeholder="Search or jump to a topic..."
                        value="${escapeAttribute(
                            learningSearchTerm
                        )}"
                        autocomplete="off"
                    />


                    ${
                        learningSearchTerm.trim()
                            ? `

                                <button
                                    type="button"
                                    id="clearLessonSearch"
                                    class="search-clear-btn"
                                    title="Clear search"
                                >

                                    <i class="
                                        fa-solid
                                        fa-xmark
                                    "></i>

                                </button>

                            `
                            : ""
                    }

                </div>


                <div
                    id="lessonSearchResults"
                    class="lesson-search-results"
                ></div>

            </div>


            <div class="lesson-list">

    `;


    if (
        topics.length === 0
    ) {

        html += `

            <div class="empty-state">

                <i class="
                    fa-solid
                    fa-book-open
                "></i>

                <p>
                    No lessons available.
                </p>

            </div>

        `;

    } else {

        topics.forEach(
            function (lesson) {

                const lessonId =
                    normalizeId(
                        lesson.lessonId
                    );


                const isActive =
                    lessonId ===
                    normalizeId(
                        currentLessonId
                    );


                const isCompleted =
                    lesson.completed === true;


                let icon =
                    "fa-regular fa-circle";


                if (
                    lesson.type === "quiz"
                ) {

                    icon =
                        "fa-solid fa-circle-question";

                }


                if (
                    isCompleted
                ) {

                    icon =
                        "fa-solid fa-circle-check";

                }


                html += `

                    <button
                        type="button"
                        class="
                            lesson-item
                            ${isActive ? "active" : ""}
                            ${isCompleted ? "completed" : ""}
                        "
                        data-lesson-id="${escapeAttribute(
                            lessonId
                        )}"
                    >

                        <span class="
                            lesson-number
                        ">

                            <i class="${icon}"></i>

                        </span>


                        <span class="
                            lesson-info
                        ">

                            <strong>

                                ${escapeHTML(
                                    lesson.title ||
                                    `Lesson ${lessonId}`
                                )}

                            </strong>


                            <small>

                                ${escapeHTML(
                                    lesson.duration ||
                                    ""
                                )}

                            </small>

                        </span>

                    </button>

                `;

            }
        );

    }


    html += `

            </div>

        </div>

    `;


    sidebar.innerHTML =
        html;


    setupLessonButtons();

    setupLessonSearch();


    if (
        learningSearchTerm.trim()
    ) {

        renderSearchResults(
            learningSearchTerm
        );

    }

}


/* =========================================================
   LESSON BUTTONS
========================================================= */

function setupLessonButtons() {

    const buttons =
        document.querySelectorAll(
            "#learningSidebar .lesson-item"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    this.blur();


                    const lessonId =
                        normalizeId(
                            this.dataset.lessonId
                        );


                    if (
                        lessonId === null
                    ) {

                        return;

                    }


                    openLesson(
                        lessonId
                    );

                }
            );

        }
    );

}


/* =========================================================
   SEARCH
========================================================= */

function setupLessonSearch() {

    const input =
        document.getElementById(
            "lessonSearchInput"
        );


    if (!input) {

        return;

    }


    input.addEventListener(
        "input",
        function () {

            learningSearchTerm =
                this.value || "";


            renderSearchResults(
                learningSearchTerm
            );

        }
    );


    input.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();


                const firstResult =
                    document.querySelector(
                        "#lessonSearchResults .search-result-item"
                    );


                if (firstResult) {

                    firstResult.click();

                }

            }


            if (
                event.key === "Escape"
            ) {

                clearLessonSearch();

            }

        }
    );


    const clearButton =
        document.getElementById(
            "clearLessonSearch"
        );


    if (clearButton) {

        clearButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                clearLessonSearch();

            }
        );

    }

}


/* =========================================================
   CLEAR SEARCH
========================================================= */

function clearLessonSearch() {

    learningSearchTerm =
        "";


    /*
       Do NOT scroll here.
       User is only clearing search.
    */

    renderSidebar();


    requestAnimationFrame(
        function () {

            const input =
                document.getElementById(
                    "lessonSearchInput"
                );


            if (input) {

                input.focus();

            }

        }
    );

}


/* =========================================================
   SEARCH ALL MODULES
========================================================= */

function renderSearchResults(
    searchTerm
) {

    const results =
        document.getElementById(
            "lessonSearchResults"
        );


    if (!results) {

        return;

    }


    const term =
        String(
            searchTerm || ""
        )
            .trim()
            .toLowerCase();


    if (!term) {

        results.innerHTML =
            "";


        results.classList.remove(
            "has-results"
        );


        return;

    }


    const matches = [];


    if (
        Array.isArray(
            LEARNING_MODULES
        )
    ) {

        LEARNING_MODULES.forEach(
            function (module) {

                const topics =
                    getTopics(
                        module
                    );


                topics.forEach(
                    function (lesson) {

                        const score =
                            calculateSearchScore(
                                lesson,
                                module,
                                term
                            );


                        if (
                            score <= 0
                        ) {

                            return;

                        }


                        matches.push({

                            moduleId:
                                normalizeId(
                                    module.moduleId
                                ),

                            moduleTitle:
                                module.title ||
                                "",

                            lessonId:
                                normalizeId(
                                    lesson.lessonId
                                ),

                            lessonTitle:
                                lesson.title ||
                                "",

                            difficulty:
                                lesson.difficulty ||
                                "",

                            duration:
                                lesson.duration ||
                                "",

                            score:
                                score

                        });

                    }
                );

            }
        );

    }


    matches.sort(
        function (a, b) {

            if (
                b.score !==
                a.score
            ) {

                return (
                    b.score -
                    a.score
                );

            }


            return String(
                a.lessonTitle
            ).localeCompare(
                String(
                    b.lessonTitle
                )
            );

        }
    );


    if (
        matches.length === 0
    ) {

        results.innerHTML = `

            <div class="
                search-no-result
            ">

                <i class="
                    fa-solid
                    fa-circle-exclamation
                "></i>

                <span>
                    No topic found
                </span>

            </div>

        `;


        results.classList.add(
            "has-results"
        );


        return;

    }


    const MAX_RESULTS =
        20;


    const visibleResults =
        matches.slice(
            0,
            MAX_RESULTS
        );


    let html = `

        <div class="
            search-result-count
        ">

            ${matches.length}

            topic${
                matches.length !== 1
                    ? "s"
                    : ""
            }

            found

        </div>

    `;


    visibleResults.forEach(
        function (item) {

            html += `

                <button
                    type="button"
                    class="
                        search-result-item
                    "
                    data-search-module="${escapeAttribute(
                        item.moduleId
                    )}"
                    data-search-lesson="${escapeAttribute(
                        item.lessonId
                    )}"
                >

                    <div class="
                        search-result-icon
                    ">

                        <i class="
                            fa-solid
                            fa-book-open
                        "></i>

                    </div>


                    <div class="
                        search-result-content
                    ">

                        <strong>

                            ${escapeHTML(
                                item.lessonTitle
                            )}

                        </strong>


                        <small>

                            Lesson
                            ${escapeHTML(
                                item.lessonId
                            )}

                            <span>
                                •
                            </span>

                            ${escapeHTML(
                                item.moduleTitle
                            )}

                            ${
                                item.duration
                                    ? `

                                        <span>
                                            •
                                        </span>

                                        ${escapeHTML(
                                            item.duration
                                        )}

                                    `
                                    : ""
                            }

                        </small>

                    </div>


                    <div class="
                        search-result-arrow
                    ">

                        <i class="
                            fa-solid
                            fa-arrow-right
                        "></i>

                    </div>

                </button>

            `;

        }
    );


    if (
        matches.length >
        MAX_RESULTS
    ) {

        html += `

            <div class="
                search-more
            ">

                Showing first
                ${MAX_RESULTS}
                of
                ${matches.length}
                results

            </div>

        `;

    }


    results.innerHTML =
        html;


    results.classList.add(
        "has-results"
    );


    setupSearchResultButtons();

}


/* =========================================================
   SEARCH SCORE
========================================================= */

function calculateSearchScore(
    lesson,
    module,
    term
) {

    let score = 0;


    const title =
        String(
            lesson?.title || ""
        ).toLowerCase();


    const moduleTitle =
        String(
            module?.title || ""
        ).toLowerCase();


    const description =
        String(
            lesson?.description || ""
        ).toLowerCase();


    const definition =
        String(
            lesson?.definition || ""
        ).toLowerCase();


    const whyItMatters =
        String(
            lesson?.whyItMatters || ""
        ).toLowerCase();


    const example =
        String(
            lesson?.example || ""
        ).toLowerCase();


    const realWorldUse =
        String(
            lesson?.realWorldUse || ""
        ).toLowerCase();


    const exampleQuery =
        String(
            lesson?.exampleQuery || ""
        ).toLowerCase();


    if (
        title === term
    ) {

        score += 100;

    } else if (
        title.startsWith(term)
    ) {

        score += 80;

    } else if (
        title.includes(term)
    ) {

        score += 60;

    }


    if (
        moduleTitle.includes(term)
    ) {

        score += 20;

    }


    if (
        description.includes(term)
    ) {

        score += 15;

    }


    if (
        definition.includes(term)
    ) {

        score += 15;

    }


    if (
        whyItMatters.includes(term)
    ) {

        score += 10;

    }


    if (
        example.includes(term)
    ) {

        score += 10;

    }


    if (
        realWorldUse.includes(term)
    ) {

        score += 10;

    }


    if (
        exampleQuery.includes(term)
    ) {

        score += 15;

    }


    score +=
        scoreArrayField(
            lesson?.keyPoints,
            term,
            10
        );


    score +=
        scoreArrayField(
            lesson?.keywords,
            term,
            25
        );


    score +=
        scoreArrayField(
            lesson?.relatedTopics,
            term,
            20
        );


    score +=
        scoreArrayField(
            lesson?.tags,
            term,
            20
        );


    score +=
        scoreInterviewQuestions(
            lesson?.interviewQuestions,
            term
        );


    const lessonId =
        String(
            lesson?.lessonId ?? ""
        );


    if (
        lessonId === term
    ) {

        score += 50;

    }


    return score;

}


/* =========================================================
   SCORE ARRAY FIELD
========================================================= */

function scoreArrayField(
    value,
    term,
    weight
) {

    if (
        !Array.isArray(
            value
        )
    ) {

        return 0;

    }


    const text =
        value
            .map(
                function (item) {

                    if (
                        typeof item ===
                        "object"
                    ) {

                        return JSON.stringify(
                            item
                        );

                    }


                    return String(
                        item ?? ""
                    );

                }
            )
            .join(" ")
            .toLowerCase();


    return text.includes(term)
        ? weight
        : 0;

}


/* =========================================================
   SCORE INTERVIEW QUESTIONS
========================================================= */

function scoreInterviewQuestions(
    questions,
    term
) {

    if (
        !Array.isArray(
            questions
        )
    ) {

        return 0;

    }


    let score = 0;


    questions.forEach(
        function (item) {

            const question =
                String(
                    item?.question ||
                    ""
                ).toLowerCase();


            const answer =
                String(
                    item?.answer ||
                    ""
                ).toLowerCase();


            if (
                question.includes(term)
            ) {

                score += 20;

            }


            if (
                answer.includes(term)
            ) {

                score += 10;

            }

        }
    );


    return score;

}


/* =========================================================
   SEARCH RESULT BUTTONS
========================================================= */

function setupSearchResultButtons() {

    const buttons =
        document.querySelectorAll(
            "#lessonSearchResults .search-result-item"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    this.blur();


                    const moduleId =
                        normalizeId(
                            this.dataset.searchModule
                        );


                    const lessonId =
                        normalizeId(
                            this.dataset.searchLesson
                        );


                    if (
                        moduleId === null ||
                        lessonId === null
                    ) {

                        return;

                    }


                    jumpToLesson(
                        moduleId,
                        lessonId
                    );

                }
            );

        }
    );

}


/* =========================================================
   BREADCRUMB
========================================================= */

function renderBreadcrumb() {

    const area =
        document.getElementById(
            "breadcrumbArea"
        );


    if (!area) {

        return;

    }


    const module =
        getCurrentModule();


    const lesson =
        getCurrentLesson();


    if (
        !module ||
        !lesson
    ) {

        area.innerHTML =
            "";

        return;

    }


    area.innerHTML = `

        <nav
            aria-label="breadcrumb"
            class="mb-3"
        >

            <ol class="breadcrumb">

                <li class="
                    breadcrumb-item
                ">

                    <i class="
                        fa-solid
                        fa-house
                    "></i>

                    Learn SQL

                </li>


                <li class="
                    breadcrumb-item
                ">

                    ${escapeHTML(
                        module.title ||
                        ""
                    )}

                </li>


                <li
                    class="
                        breadcrumb-item
                        active
                    "
                    aria-current="page"
                >

                    ${escapeHTML(
                        lesson.title ||
                        ""
                    )}

                </li>

            </ol>

        </nav>

    `;

}


/* =========================================================
   PROGRESS
========================================================= */

function renderProgress() {

    const area =
        document.getElementById(
            "progressArea"
        );


    if (!area) {

        return;

    }


    const module =
        getCurrentModule();


    if (!module) {

        area.innerHTML =
            "";

        return;

    }


    const topics =
        getTopics(
            module
        );


    const total =
        topics.length;


    const completed =
        topics.filter(
            function (lesson) {

                return (
                    lesson.completed === true
                );

            }
        ).length;


    const percentage =
        total === 0
            ? 0
            : Math.round(
                (
                    completed /
                    total
                ) *
                100
            );


    area.innerHTML = `

        <div class="
            progress-card
            mb-4
        ">

            <div class="
                d-flex
                justify-content-between
                align-items-center
                mb-2
            ">

                <div>

                    <strong>
                        Your Progress
                    </strong>

                    <small class="
                        text-muted
                        ms-2
                    ">

                        ${completed}
                        /
                        ${total}
                        lessons

                    </small>

                </div>


                <strong class="
                    text-primary
                ">

                    ${percentage}%

                </strong>

            </div>


            <div class="progress">

                <div
                    class="progress-bar"
                    role="progressbar"
                    style="width:${percentage}%"
                    aria-valuenow="${percentage}"
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>

            </div>

        </div>

    `;

}


/* =========================================================
   RENDER LESSON
========================================================= */

function renderLesson() {

    const area =
        document.getElementById(
            "lessonArea"
        );


    if (!area) {

        return;

    }


    const module =
        getCurrentModule();


    const lesson =
        getCurrentLesson();


    if (
        !module ||
        !lesson
    ) {

        area.innerHTML =
            renderEmptyState(
                "Lesson not found"
            );

        return;

    }


    if (
        lesson.type === "quiz"
    ) {

        renderQuiz();

        return;

    }


    const keyPointsHTML =
        renderKeyPoints(
            lesson
        );


    const interviewHTML =
        renderInterviewQuestions(
            lesson
        );


    const queryHTML =
        renderSQLQuery(
            lesson
        );


    const definitionHTML =
        renderOptionalSection(
            lesson.definition,
            "Definition",
            "fa-circle-info",
            "explanation-card"
        );


    const whyHTML =
        renderOptionalSection(
            lesson.whyItMatters,
            "Why It Matters",
            "fa-bullseye",
            "explanation-card importance-card"
        );


    const exampleHTML =
        renderOptionalSection(
            lesson.example,
            "Simple Example",
            "fa-lightbulb",
            "example-card"
        );


    const realWorldHTML =
        lesson.realWorldUse
            ? `

                <div class="
                    business-case
                    mt-4
                ">

                    <h4>

                        <i class="
                            fa-solid
                            fa-lightbulb
                            me-2
                        "></i>

                        Real-World Connection

                    </h4>


                    <p>

                        ${escapeHTML(
                            lesson.realWorldUse
                        )}

                    </p>

                </div>

            `
            : "";


    area.innerHTML = `

        <div class="
            topic-card
            fade-in
        ">


            <div class="
                topic-header
            ">

                <div>

                    <div class="mb-2">

                        <span class="
                            badge
                            badge-beginner
                        ">

                            ${escapeHTML(
                                lesson.difficulty ||
                                "Beginner"
                            )}

                        </span>

                    </div>


                    <h1 class="
                        topic-title
                    ">

                        ${escapeHTML(
                            lesson.title ||
                            ""
                        )}

                    </h1>


                    <p class="
                        topic-description
                    ">

                        Lesson
                        ${escapeHTML(
                            lesson.lessonId
                        )}

                        of
                        ${escapeHTML(
                            getTopics(module).length
                        )}

                        &nbsp; • &nbsp;

                        ${escapeHTML(
                            lesson.duration ||
                            ""
                        )}

                    </p>

                </div>


                <div>

                    <span class="
                        badge
                        badge-sql
                    ">

                        SQL

                    </span>

                </div>

            </div>


            <div class="
                section-title
            ">

                <i class="
                    fa-solid
                    fa-book-open
                "></i>

                About This Lesson

            </div>


            <div class="
                explanation-card
            ">

                <p>

                    ${escapeHTML(
                        lesson.description ||
                        "Learn this SQL concept step by step."
                    )}

                </p>

            </div>


            ${definitionHTML}


            ${whyHTML}


            ${exampleHTML}


            ${realWorldHTML}


            ${queryHTML}


            ${keyPointsHTML}


            ${interviewHTML}


            ${renderLessonNavigation()}


        </div>

    `;

}


/* =========================================================
   OPTIONAL LESSON SECTION
========================================================= */

function renderOptionalSection(
    value,
    title,
    icon,
    cardClass
) {

    if (!value) {

        return "";

    }


    return `

        <div class="
            lesson-section
            mt-4
        ">

            <div class="
                section-title
            ">

                <i class="
                    fa-solid
                    ${icon}
                "></i>

                ${escapeHTML(
                    title
                )}

            </div>


            <div class="
                ${cardClass}
            ">

                <p>

                    ${escapeHTML(
                        value
                    )}

                </p>

            </div>

        </div>

    `;

}


/* =========================================================
   KEY POINTS
========================================================= */

function renderKeyPoints(
    lesson
) {

    if (
        !Array.isArray(
            lesson.keyPoints
        ) ||
        lesson.keyPoints.length === 0
    ) {

        return "";

    }


    return `

        <div class="
            lesson-section
            mt-4
        ">

            <div class="
                section-title
            ">

                <i class="
                    fa-solid
                    fa-list-check
                "></i>

                Key Points

            </div>


            <div class="
                explanation-card
            ">

                <ul class="
                    lesson-key-points
                ">

                    ${lesson.keyPoints
                        .map(
                            function (point) {

                                return `

                                    <li>

                                        <i class="
                                            fa-solid
                                            fa-circle-check
                                        "></i>

                                        <span>

                                            ${escapeHTML(
                                                point
                                            )}

                                        </span>

                                    </li>

                                `;

                            }
                        )
                        .join("")}

                </ul>

            </div>

        </div>

    `;

}


/* =========================================================
   INTERVIEW QUESTIONS
========================================================= */

function renderInterviewQuestions(
    lesson
) {

    if (
        !Array.isArray(
            lesson.interviewQuestions
        ) ||
        lesson.interviewQuestions.length === 0
    ) {

        return "";

    }


    return `

        <div class="
            lesson-section
            mt-4
        ">

            <div class="
                section-title
            ">

                <i class="
                    fa-solid
                    fa-user-tie
                "></i>

                Interview Questions

            </div>


            <div class="
                interview-list
            ">

                ${lesson.interviewQuestions
                    .map(
                        function (
                            item,
                            index
                        ) {

                            return `

                                <div class="
                                    interview-card
                                    mb-3
                                ">

                                    <div class="
                                        interview-question
                                    ">

                                        <span class="
                                            question-number
                                        ">

                                            Q${index + 1}

                                        </span>


                                        <strong>

                                            ${escapeHTML(
                                                item?.question ||
                                                ""
                                            )}

                                        </strong>

                                    </div>


                                    <div class="
                                        interview-answer
                                    ">

                                        <strong>
                                            Answer:
                                        </strong>

                                        <span>

                                            ${escapeHTML(
                                                item?.answer ||
                                                ""
                                            )}

                                        </span>

                                    </div>

                                </div>

                            `;

                        }
                    )
                    .join("")}

            </div>

        </div>

    `;

}


/* =========================================================
   SQL QUERY
========================================================= */

function renderSQLQuery(
    lesson
) {

    if (
        !lesson.exampleQuery
    ) {

        return "";

    }


    return `

        <div class="
            lesson-section
            mt-4
        ">

            <div class="
                section-title
            ">

                <i class="
                    fa-solid
                    fa-code
                "></i>

                Example SQL

            </div>


            <div class="
                sql-example-card
            ">

                <div class="
                    code-header
                ">

                    <span>

                        <i class="
                            fa-solid
                            fa-database
                            me-2
                        "></i>

                        SQL Query

                    </span>

                </div>


                <pre><code>${escapeHTML(
                    lesson.exampleQuery
                )}</code></pre>

            </div>

        </div>

    `;

}


/* =========================================================
   LESSON NAVIGATION
========================================================= */

function renderLessonNavigation() {

    const module =
        getCurrentModule();


    const topics =
        getTopics(
            module
        );


    if (
        topics.length === 0
    ) {

        return "";

    }


    const currentIndex =
        topics.findIndex(
            function (lesson) {

                return (
                    normalizeId(
                        lesson.lessonId
                    ) ===
                    normalizeId(
                        currentLessonId
                    )
                );

            }
        );


    const previousLesson =
        currentIndex > 0
            ? topics[
                currentIndex - 1
            ]
            : null;


    const nextLesson =
        currentIndex >= 0 &&
        currentIndex <
            topics.length - 1
            ? topics[
                currentIndex + 1
            ]
            : null;


    const currentLesson =
        getCurrentLesson();


    const isCompleted =
        currentLesson?.completed === true;


    let html = `

        <div class="
            d-flex
            justify-content-between
            align-items-center
            gap-2
            mt-4
            pt-4
            border-top
        ">

    `;


    if (
        previousLesson
    ) {

        html += `

            <button
                type="button"
                class="
                    btn
                    btn-outline-primary
                    lesson-prev-btn
                "
                data-navigation="previous"
                data-lesson-id="${escapeAttribute(
                    previousLesson.lessonId
                )}"
            >

                <i class="
                    fa-solid
                    fa-arrow-left
                    me-2
                "></i>

                Previous

            </button>

        `;

    } else {

        html += `
            <div></div>
        `;

    }


    html += `

        <button
            type="button"
            class="
                btn
                btn-success
                lesson-complete-btn
            "
            data-navigation="complete"
        >

            <i class="
                fa-solid
                ${
                    isCompleted
                        ? "fa-circle-check"
                        : "fa-check"
                }
                me-2
            "></i>

            ${
                isCompleted
                    ? "Completed"
                    : "Mark Complete"
            }

        </button>

    `;


    if (
        nextLesson
    ) {

        html += `

            <button
                type="button"
                class="
                    btn
                    btn-primary
                    lesson-next-btn
                "
                data-navigation="next"
                data-lesson-id="${escapeAttribute(
                    nextLesson.lessonId
                )}"
            >

                Next

                <i class="
                    fa-solid
                    fa-arrow-right
                    ms-2
                "></i>

            </button>

        `;

    } else {

        html += `
            <div></div>
        `;

    }


    html += `

        </div>

    `;


    requestAnimationFrame(
        setupNavigationButtons
    );


    return html;

}


/* =========================================================
   NAVIGATION BUTTON EVENTS
========================================================= */

function setupNavigationButtons() {

    const previousButton =
        document.querySelector(
            ".lesson-prev-btn"
        );


    const nextButton =
        document.querySelector(
            ".lesson-next-btn"
        );


    const completeButton =
        document.querySelector(
            ".lesson-complete-btn"
        );


    if (
        previousButton
    ) {

        previousButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                openLesson(
                    normalizeId(
                        this.dataset.lessonId
                    )
                );

            }
        );

    }


    if (
        nextButton
    ) {

        nextButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                openLesson(
                    normalizeId(
                        this.dataset.lessonId
                    )
                );

            }
        );

    }


    if (
        completeButton
    ) {

        completeButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                completeCurrentLesson();

            }
        );

    }

}


/* =========================================================
   COMPLETE CURRENT LESSON

   IMPORTANT:
   NO duplicate rendering.
   NO scrolling.
========================================================= */

function completeCurrentLesson() {

    const lesson =
        getCurrentLesson();


    if (!lesson) {

        return;

    }


    lesson.completed =
        true;


    saveLearningProgress();


    renderEverything(
        false
    );

}


/* =========================================================
   QUIZ
========================================================= */

function renderQuiz() {

    const area =
        document.getElementById(
            "lessonArea"
        );


    if (!area) {

        return;

    }


    const module =
        getCurrentModule();


    const lesson =
        getCurrentLesson();


    if (
        !module ||
        !lesson
    ) {

        return;

    }


    area.innerHTML = `

        <div class="
            quiz-card
            fade-in
        ">

            <div class="
                topic-header
            ">

                <div>

                    <span class="
                        badge
                        badge-sql
                        mb-2
                    ">

                        Module Quiz

                    </span>


                    <h1 class="
                        topic-title
                    ">

                        ${escapeHTML(
                            lesson.title ||
                            "Module Quiz"
                        )}

                    </h1>


                    <p class="
                        topic-description
                    ">

                        Test your understanding
                        of
                        ${escapeHTML(
                            module.title ||
                            ""
                        )}.

                    </p>

                </div>

            </div>


            <div class="
                empty-state
            ">

                <i class="
                    fa-solid
                    fa-circle-question
                "></i>


                <h3>
                    Quiz Coming Next
                </h3>


                <p>

                    The interactive quiz engine
                    will be connected here.

                </p>

            </div>


            <div class="
                text-center
            ">

                <button
                    type="button"
                    class="
                        btn
                        btn-success
                    "
                    id="quizCompleteButton"
                >

                    <i class="
                        fa-solid
                        fa-check
                        me-2
                    "></i>

                    Mark Complete

                </button>

            </div>

        </div>

    `;


    const button =
        document.getElementById(
            "quizCompleteButton"
        );


    if (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                completeCurrentLesson();

            }
        );

    }

}


/* =========================================================
   MODULE BUTTONS

   IMPORTANT:
   This is the ONLY place that binds click
   handlers for module cards, including Module 1.
   Do not add a separate id-based handler for
   any module button — that causes double-firing.
========================================================= */

function setupModuleButtons() {

    const buttons =
        document.querySelectorAll(
            ".module-card button"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    let moduleId =
                        this.dataset.moduleId;


                    if (!moduleId) {

                        moduleId =
                            this.dataset.module;

                    }


                    if (!moduleId) {

                        const card =
                            this.closest(
                                ".module-card"
                            );


                        if (card) {

                            moduleId =
                                card.dataset.moduleId ||
                                card.dataset.module;

                        }

                    }


                    if (
                        moduleId
                    ) {

                        startLearning(
                            normalizeId(
                                moduleId
                            )
                        );

                    } else {

                        console.error(
                            "No moduleId found for clicked module card."
                        );

                    }

                }
            );

        }
    );

}


/* =========================================================
   LOCAL STORAGE PROGRESS
========================================================= */

function saveLearningProgress() {

    try {

        const progress = {};


        if (
            !Array.isArray(
                LEARNING_MODULES
            )
        ) {

            return;

        }


        LEARNING_MODULES.forEach(
            function (module) {

                const moduleId =
                    normalizeId(
                        module.moduleId
                    );


                const topics =
                    getTopics(
                        module
                    );


                progress[moduleId] =
                    {};


                topics.forEach(
                    function (lesson) {

                        const lessonId =
                            normalizeId(
                                lesson.lessonId
                            );


                        progress[moduleId][
                            lessonId
                        ] =
                            lesson.completed === true;

                    }
                );

            }
        );


        localStorage.setItem(
            LEARNING_PROGRESS_KEY,
            JSON.stringify(
                progress
            )
        );

    } catch (error) {

        console.warn(
            "Could not save learning progress.",
            error
        );

    }

}


/* =========================================================
   LOAD LOCAL STORAGE PROGRESS
========================================================= */

function loadLearningProgress() {

    try {

        const saved =
            localStorage.getItem(
                LEARNING_PROGRESS_KEY
            );


        if (!saved) {

            return;

        }


        const progress =
            JSON.parse(
                saved
            );


        if (
            !progress ||
            typeof progress !==
                "object"
        ) {

            return;

        }


        LEARNING_MODULES.forEach(
            function (module) {

                const moduleId =
                    normalizeId(
                        module.moduleId
                    );


                const moduleProgress =
                    progress[moduleId];


                if (
                    !moduleProgress
                ) {

                    return;

                }


                getTopics(
                    module
                ).forEach(
                    function (lesson) {

                        const lessonId =
                            normalizeId(
                                lesson.lessonId
                            );


                        if (
                            Object.prototype.hasOwnProperty.call(
                                moduleProgress,
                                lessonId
                            )
                        ) {

                            lesson.completed =
                                moduleProgress[
                                    lessonId
                                ] === true;

                        }

                    }
                );

            }
        );

    } catch (error) {

        console.warn(
            "Could not load learning progress.",
            error
        );

    }

}


/* =========================================================
   EMPTY STATE
========================================================= */

function renderEmptyState(
    message
) {

    return `

        <div class="
            empty-state
        ">

            <i class="
                fa-solid
                fa-circle-exclamation
            "></i>


            <h3>

                ${escapeHTML(
                    message ||
                    "Nothing found"
                )}

            </h3>

        </div>

    `;

}


/* =========================================================
   SAFE HTML ESCAPE
========================================================= */

function escapeHTML(
    value
) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(
        value
    )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   SAFE ATTRIBUTE ESCAPE
========================================================= */

function escapeAttribute(
    value
) {

    return escapeHTML(
        value
    );

}


/* =========================================================
   PUBLIC API
========================================================= */

window.startLearning =
    startLearning;

window.openLesson =
    openLesson;

window.jumpToLesson =
    jumpToLesson;

window.completeCurrentLesson =
    completeCurrentLesson;

window.renderLearningPortal =
    renderEverything;


/* =========================================================
   END OF APP.JS
========================================================= */
