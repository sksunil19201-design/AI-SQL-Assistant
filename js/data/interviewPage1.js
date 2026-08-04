/*==================================
 SQL Interview Page
==================================*/

document.addEventListener("DOMContentLoaded", () => {

    loadInterviewQuestions();

});

/*==================================
 Load Interview Questions
==================================*/

function loadInterviewQuestions() {

    const container = document.getElementById("interviewContainer");

    if (!container) return;

    let html = "";

    SQL_INTERVIEW.forEach(item => {

        html += `

        <div class="question-card">

            <div class="question-header" onclick="toggleAnswer(${item.id})">

                <div>

                    <span class="badge-custom">${item.category}</span>

                    <span class="badge-custom">${item.difficulty}</span>

                    <h5 class="question-title mt-2">
                        ${item.id}. ${item.question}
                    </h5>

                </div>

                <div class="question-icon">

                    <i id="icon-${item.id}" class="fa-solid fa-chevron-down"></i>

                </div>

            </div>

            <div id="answer-${item.id}" class="answer">

                <h6>Answer</h6>

                <p>${item.answer}</p>

                <h6>Example</h6>

                <div class="code-box">
                    ${item.example || "No example available."}
                </div>

                <h6 class="mt-4">Interview Tip</h6>

                <p>${item.interviewTip}</p>

            </div>

        </div>

        `;

    });

    container.innerHTML = html;

}

/*==================================
 Toggle Answer
==================================*/

function toggleAnswer(id) {

    const answer = document.getElementById(`answer-${id}`);

    const icon = document.getElementById(`icon-${id}`);

    if (answer.style.display === "block") {

        answer.style.display = "none";

        icon.classList.remove("fa-chevron-up");

        icon.classList.add("fa-chevron-down");

    } else {

        answer.style.display = "block";

        icon.classList.remove("fa-chevron-down");

        icon.classList.add("fa-chevron-up");

    }

}