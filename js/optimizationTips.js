/*
=========================================================
 AI SQL - Optimization Tips Library
 File : optimizationTips.js
 Version : 1.0
=========================================================
*/

const OPTIMIZATION = {

    /*=====================================================
      SELECT
    =====================================================*/

    SELECT:[

        "Avoid using SELECT * in production queries.",

        "Retrieve only the required columns to reduce data transfer.",

        "Always filter unnecessary rows using WHERE whenever possible.",

        "Use meaningful column aliases to improve readability.",

        "Avoid selecting large TEXT or BLOB columns unless required.",

        "Return only the data required by the application."

    ],

    /*=====================================================
      DISTINCT
    =====================================================*/

    DISTINCT:[

        "Use DISTINCT only when duplicate removal is required.",

        "DISTINCT may increase query execution time on large datasets.",

        "Create indexes on frequently searched columns.",

        "Consider GROUP BY when aggregation is also required.",

        "Avoid DISTINCT with SELECT * whenever possible."

    ],

    /*=====================================================
      FROM
    =====================================================*/

    FROM:[

        "Query only the required tables.",

        "Avoid unnecessary table joins.",

        "Use table aliases for better readability.",

        "Verify table names before execution.",

        "Keep table relationships properly indexed."

    ],

    /*=====================================================
      WHERE
    =====================================================*/

    WHERE:[

        "Filter data as early as possible.",

        "Index columns frequently used in WHERE conditions.",

        "Avoid applying functions on indexed columns.",

        "Use appropriate comparison operators.",

        "Avoid unnecessary OR conditions.",

        "Prefer EXISTS over IN for very large datasets."

    ],

    /*=====================================================
      ORDER BY
    =====================================================*/

    ORDER_BY:[

        "Sort only when required.",

        "Index frequently sorted columns.",

        "Avoid sorting large result sets unnecessarily.",

        "Sort after filtering data.",

        "Return only required rows using LIMIT or TOP."

    ],

    /*=====================================================
      TOP
    =====================================================*/

    TOP:[

        "Always combine TOP with ORDER BY.",

        "Without ORDER BY the returned rows are unpredictable.",

        "Retrieve only the required number of records.",

        "Use TOP for dashboard summary reports."

    ],

    /*=====================================================
      LIMIT
    =====================================================*/

    LIMIT:[

        "Use LIMIT to reduce network traffic.",

        "Combine LIMIT with ORDER BY.",

        "Avoid retrieving thousands of unnecessary rows.",

        "Useful for pagination."

    ],

    /*=====================================================
      OFFSET
    =====================================================*/

    OFFSET:[

        "Use OFFSET only for pagination.",

        "Large OFFSET values may reduce performance.",

        "Consider keyset pagination for huge tables.",

        "Always use ORDER BY with OFFSET."

    ],

    /*=====================================================
      FETCH
    =====================================================*/

    FETCH:[

        "Always pair FETCH with OFFSET.",

        "Always use ORDER BY.",

        "Ideal for enterprise applications.",

        "Useful for server-side pagination."

    ],

    /*=====================================================
      ALIAS
    =====================================================*/

    ALIAS:[

        "Use meaningful aliases.",

        "Avoid one-letter aliases in complex queries.",

        "Use table aliases in JOIN statements.",

        "Keep alias names consistent across projects."

    ]

};

window.OPTIMIZATION = OPTIMIZATION;