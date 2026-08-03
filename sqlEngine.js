/*==================================
 SQL Engine
 AI SQL Assistant
==================================*/


function runSQL(question){


    if(!question){

        return createEmptyResponse();

    }



    question = question.toLowerCase();



    let matchedTopic = null;



//==================================
// Search SQL Topic
//==================================

if(window.SQL_TOPICS){

    //----------------------------------
    // 1. Exact Title Match
    //----------------------------------

    matchedTopic = SQL_TOPICS.find(function(topic){

        return topic.title &&
               topic.title.toLowerCase() === question;

    });

    //----------------------------------
    // 2. Exact Keyword Match
    //----------------------------------

    if(!matchedTopic){

        matchedTopic = SQL_TOPICS.find(function(topic){

            return topic.keywordId &&
                   topic.keywordId.toLowerCase() === question;

        });

    }

    //----------------------------------
    // 3. Exact Related Topic Match
    //----------------------------------

    if(!matchedTopic){

        matchedTopic = SQL_TOPICS.find(function(topic){

            return topic.relatedTopics &&
                   topic.relatedTopics.some(function(item){

                       return item.toLowerCase() === question;

                   });

        });

    }

    //----------------------------------
    // 4. Partial Match (Fallback)
    //----------------------------------

    if(!matchedTopic){

        matchedTopic = SQL_TOPICS.find(function(topic){

            let title = topic.title
                ? topic.title.toLowerCase()
                : "";

            let keyword = topic.keywordId
                ? topic.keywordId.toLowerCase()
                : "";

            let relatedMatch =
                topic.relatedTopics &&
                topic.relatedTopics.some(function(item){

                    return item.toLowerCase().includes(question);

                });

            return (

                title.includes(question)

                ||

                keyword.includes(question)

                ||

                relatedMatch

            );

        });

    }

}




    //==================================
    // No Match Found
    //==================================


    if(!matchedTopic){


        return createEmptyResponse();


    }






    //==================================
    // Get Sample Data
    //==================================


    let tableData = [];



    if(

        window.SAMPLE_DATA

        &&

        matchedTopic.sampleDataId

        &&

        SAMPLE_DATA[matchedTopic.sampleDataId]

    ){


        tableData =
        SAMPLE_DATA[
            matchedTopic.sampleDataId
        ];

    }





    //==================================
    // Create Result
    //==================================


    let result = {



        title:

        matchedTopic.title,



        sql:

        matchedTopic.sql
        ||
        "SQL query not available",




        explanation:

        matchedTopic.shortDescription
        ||
        "Explanation not available",





        breakdown:

        `
        <div class="breakdown-item">
        <strong>Syntax</strong>
        ${matchedTopic.syntax || ""}
        </div>

        <div class="breakdown-item">
        <strong>Category</strong>
        ${matchedTopic.category || ""}
        </div>

        <div class="breakdown-item">
        <strong>Difficulty</strong>
        ${matchedTopic.difficulty || ""}
        </div>
        `,





        businessCase:

        matchedTopic.businessCaseId
        ||
        "Business example not available",





        sampleData:

        tableData,





        output:

        matchedTopic.output
        ||
        [],





        tips:

        matchedTopic.optimizationTips
        ||
        [

        "Use proper indexes for better performance",

        "Avoid SELECT * in production queries"

        ],





        errors:

        matchedTopic.commonErrors
        ||
        [

        "Check table and column names",

        "Verify WHERE conditions"

        ],






        alternativeSQL:

        matchedTopic.alternativeSQL
        ||
        "No alternative query available",






        interview:

        matchedTopic.interviewQuestions
        ||
        [

        "Explain this SQL concept"

        ]



    };



    return result;



}







//==================================
// Default Response
//==================================


function createEmptyResponse(){



return {



title:

"SQL Suggestion",




sql:

"No SQL query found",




explanation:

`
Try questions like:

• Show employees

• Find highest salary

• Calculate total sales

• Department wise employee count

`,




breakdown:

"No matching SQL topic available.",




businessCase:

"SQL helps analyse and retrieve business data.",




sampleData:

[],




output:

[],




tips:

[

"Try using SQL keywords",

"Example: SELECT, WHERE, GROUP BY"

],




errors:

[

"No matching SQL topic found"

],




alternativeSQL:

"",




interview:

[]

};



}




// Global Access

window.runSQL = runSQL;