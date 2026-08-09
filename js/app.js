/*==================================
 Main Application
 AI SQL Assistant
==================================*/


document.addEventListener("DOMContentLoaded", function(){



const button = document.getElementById("generateBtn");

const inputBox = document.getElementById("question");

const suggestionBox = document.getElementById("searchResults");

const copyBtn = document.getElementById("copyCodeBtn");




//==================================
// Generate SQL Button
//==================================


if(button){


    button.addEventListener("click", function(){

        generateSQL();

    });


}




//==================================
// Copy SQL Button
//==================================


if(copyBtn){


    copyBtn.addEventListener("click", function(){


        const sqlBox = document.getElementById("sqlBox");


        if(sqlBox){


            navigator.clipboard.writeText(sqlBox.innerText)

            .then(function(){


                copyBtn.innerHTML =
                '<i class="fa-solid fa-check"></i> Copied';


                setTimeout(function(){


                    copyBtn.innerHTML =
                    '<i class="fa-solid fa-copy"></i> Copy SQL';


                },2000);



            })

            .catch(function(error){


                console.log("Copy Failed:", error);


            });



        }


    });


}






//==================================
// Enter Key Support
//==================================


if(inputBox){


    inputBox.addEventListener("keydown", function(event){


        if(event.key === "Enter" && !event.shiftKey){


            event.preventDefault();


            generateSQL();


        }


    });


}






//==================================
// Auto Suggestion While Typing
//==================================


if(inputBox){


    inputBox.addEventListener("input", function(){


        let text =
        inputBox.value
        .toLowerCase()
        .trim();



        if(text.length < 2){


            hideSuggestions();

            return;


        }



        showSuggestions(text);



    });


}






//==================================
// Generate SQL Function
//==================================


function generateSQL(){


    let question =
    inputBox.value.trim();



    if(question === ""){


        alert("Please enter your SQL question");

        return;


    }




    let result =
    runSQL(question);



    showResult(result);



    hideSuggestions();



}







//==================================
// Suggestion Search
//==================================


function showSuggestions(text){



    if(!window.SQL_TOPICS){

        return;

    }



    let results =
    SQL_TOPICS.filter(function(topic){



        return (

            topic.title
            .toLowerCase()
            .includes(text)



            ||


            topic.shortDescription
            .toLowerCase()
            .includes(text)



            ||


            topic.relatedTopics.some(function(item){


                return item
                .toLowerCase()
                .includes(text);



            })


        );



    }).slice(0,8);





    if(results.length === 0){


        hideSuggestions();

        return;


    }




    suggestionBox.innerHTML = "";

    suggestionBox.style.display = "block";





    results.forEach(function(topic){



        let div =
        document.createElement("div");



        div.className = "search-item";



        div.innerHTML = `

        <div class="search-left">

        <strong>
        ${topic.title}
        </strong>

        <small>
        ${topic.shortDescription}
        </small>

        </div>


        <div class="search-score">

        ${topic.difficulty}

        </div>

        `;




        div.addEventListener("click", function(){



            inputBox.value =
            topic.title;



            hideSuggestions();



            generateSQL();



        });




        suggestionBox.appendChild(div);



    });



}







//==================================
// Hide Suggestions
//==================================


function hideSuggestions(){


    if(suggestionBox){


        suggestionBox.innerHTML = "";


        suggestionBox.style.display = "none";


    }


}



});