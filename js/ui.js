/*==================================
 UI Functions
 AI SQL Assistant
==================================*/



//==================================
// Show SQL Result
//==================================


function showResult(data){



if(!data){

return;

}




// SQL

document.getElementById("sqlBox").textContent =

data.sql ||

"No SQL query generated";






// Explanation

document.getElementById("explanation").innerHTML =

data.explanation ||

"Waiting...";







// Breakdown

document.getElementById("breakdown").innerHTML =

data.breakdown ||

"Waiting...";







// Business Case

document.getElementById("businessCase").innerHTML =

data.businessCase ||

"Waiting...";







// Sample Data Table

renderTable(

"sampleTable",

data.sampleData

);







// Output Table

renderTable(

"outputTable",

data.output

);







// Tips

renderList(

"tipsList",

data.tips,

"✔"

);







// Errors

renderList(

"errorList",

data.errors,

"✖"

);







// Alternative SQL

document.getElementById("alternativeSQL").textContent =

data.alternativeSQL ||

"No alternative query available";







// Interview Questions

renderList(

"interviewQuestions",

data.interview,

"?"

);






}








//==================================
// Create Table
//==================================


function renderTable(id,data){



let container =
document.getElementById(id);



if(!container){

return;

}



if(!data || data.length===0){


container.innerHTML =
"Data not available";


return;


}





let columns =
Object.keys(data[0]);




let html = `

<div class="table-responsive">

<table class="table table-bordered">

<thead>

<tr>

`;





columns.forEach(function(col){


html += `

<th>
${col}
</th>

`;

});



html += `

</tr>

</thead>

<tbody>

`;





data.forEach(function(row){



html += "<tr>";



columns.forEach(function(col){



html += `

<td>
${row[col]}
</td>

`;



});



html += "</tr>";



});





html += `

</tbody>

</table>

</div>

`;




container.innerHTML = html;



}









//==================================
// Create List
//==================================


function renderList(id,items,icon){



let list =
document.getElementById(id);



if(!list){

return;

}



list.innerHTML="";





if(!items || items.length===0){


list.innerHTML =

"<li>Not available</li>";


return;


}





items.forEach(function(item){



let li =
document.createElement("li");



li.innerHTML =

icon + " " + item;



list.appendChild(li);



});



}








//==================================
// Clear Result
//==================================


function clearResult(){



document.getElementById("sqlBox").textContent =

"Your SQL query will appear here...";



document.getElementById("explanation").innerHTML =

"Waiting...";



document.getElementById("breakdown").innerHTML =

"Waiting...";



document.getElementById("businessCase").innerHTML =

"Waiting...";



renderTable(

"sampleTable",

[]

);



renderTable(

"outputTable",

[]

);



}

//==================================
// Copy SQL
//==================================

function copySQL(){


    let sqlBox = document.getElementById("sqlBox");


    if(!sqlBox){

        return;

    }



    let sql = sqlBox.innerText;



    navigator.clipboard.writeText(sql)

    .then(function(){



        let btn =
        document.getElementById("copyCodeBtn");



        if(btn){


            btn.innerHTML =
            `
            <i class="fa-solid fa-check"></i>
            Copied
            `;

            setTimeout(function(){


                btn.innerHTML =
                `
                <i class="fa-solid fa-copy"></i>
                Copy SQL
                `;


            },2000);

        }

    })

    .catch(function(error){


        console.log("Copy Failed:",error);


    });
}
// Global Access

window.showResult = showResult;

window.clearResult = clearResult;
window.copySQL = copySQL;
