/*==================================
 AI SQL Assistant
 Interview Module
==================================*/

let currentQuestion = -1;

/*==================================
 Page Load
==================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeInterviewPage();

});

/*==================================
 Initialize
==================================*/

function initializeInterviewPage(){

    loadQuestionDropdown();

    document
        .getElementById("questionSelect")
        .addEventListener("change", handleQuestionChange);

    document
        .getElementById("prevQuestion")
        .addEventListener("click", showPreviousQuestion);

    document
        .getElementById("nextQuestion")
        .addEventListener("click", showNextQuestion);

    updateNavigationButtons();

}

/*==================================
 Load Dropdown
==================================*/

function loadQuestionDropdown(){

    const dropdown = document.getElementById("questionSelect");

    SQL_INTERVIEW.forEach((item,index)=>{

        dropdown.innerHTML +=
        `<option value="${index}">
            ${item.id}. ${item.question}
        </option>`;

    });

}

/*==================================
 Dropdown Change
==================================*/

function handleQuestionChange(){

    if(this.value===""){

        hideQuestion();

        return;

    }

    currentQuestion = Number(this.value);

    displayQuestion(currentQuestion);

}

/*==================================
 Display Question
==================================*/

function displayQuestion(index){

    const question = SQL_INTERVIEW[index];

    if(!question) return;

    currentQuestion = index;

    const card = document.getElementById("questionDetails");

    card.classList.remove("d-none");

    card.style.opacity = "0";

    card.style.transition = ".35s";

    setTimeout(()=>{

        card.style.opacity="1";

    },100);

    document.getElementById("questionTitle").textContent =
    question.id + ". " + question.question;

    document.getElementById("questionCategory").textContent =
    question.category;

    document.getElementById("questionDifficulty").textContent =
    question.difficulty;

    document.getElementById("questionAnswer").innerHTML =
    formatAnswer(question.answer);

    document.getElementById("questionExample").textContent =
    question.example || "No SQL Example Available";

    document.getElementById("questionTip").textContent =
    question.interviewTip || "";

    loadRelatedTopics(question.relatedTopics);

    document.getElementById("questionSelect").value=index;

    updateNavigationButtons();

    card.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

}

/*==================================
 Related Topics
==================================*/

function loadRelatedTopics(topics){

    const container =
    document.getElementById("relatedTopics");

    container.innerHTML="";

    if(!topics || topics.length===0){

        container.innerHTML=
        "<span class='text-muted'>No Related Topics</span>";

        return;

    }

    topics.forEach(topic=>{

        container.innerHTML+=`

        <span class="badge rounded-pill bg-primary me-2 mb-2 px-3 py-2">

            ${topic}

        </span>

        `;

    });

}

/*==================================
 Format Answer
==================================*/

function formatAnswer(answer){

    if(!answer) return "";

    return answer.replace(/\n/g,"<br><br>");

}

/*==================================
 Hide Question
==================================*/

function hideQuestion(){

    document
    .getElementById("questionDetails")
    .classList.add("d-none");

}

/*==================================
 Previous
==================================*/

function showPreviousQuestion(){

    if(currentQuestion<=0) return;

    currentQuestion--;

    displayQuestion(currentQuestion);

}

/*==================================
 Next
==================================*/

function showNextQuestion(){

    if(currentQuestion>=SQL_INTERVIEW.length-1) return;

    currentQuestion++;

    displayQuestion(currentQuestion);

}

/*==================================
 Navigation Buttons
==================================*/

function updateNavigationButtons(){

    document.getElementById("prevQuestion").disabled =
    currentQuestion<=0;

    document.getElementById("nextQuestion").disabled =
    currentQuestion>=SQL_INTERVIEW.length-1;

}