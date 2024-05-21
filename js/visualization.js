var viz;
var viz2;
var viz3;
var viz4; 
var viz5;
function initViz() {
    var containerDiv = document.getElementById("histogram"),
        url = "https://public.tableau.com/views/PopularLocation/PopularLocation?:language=zh-CN&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",

        options = {
            hideTabs: true,
            onFirstInteractive: function () {
            console.log("Run this code when the viz1 has finished loading.");
            }
        };

    // Create a viz object and embed it in the container div.
    viz = new tableau.Viz(containerDiv, url, options);
}

    

function initViz2() {
    var containerDiv = document.getElementById("boxplot"),
        url = "https://public.tableau.com/views/PriceBoxplot/PriceBoxplot?:language=zh-CN&:sid=&:display_count=n&:origin=viz_share_link",
  
        
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
            console.log("Run this code when the viz2 has finished loading.");
            }
        };

    // Create a viz object and embed it in the container div.
    viz2 = new tableau.Viz(containerDiv, url, options);
}

function initViz3() {
    var containerDiv = document.getElementById("vizContainer3"),
        url = "https://public.tableau.com/views/VisProj_17160551216740/4?:language=zh-CN&:sid=&:display_count=n&:origin=viz_share_link",
        
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
            console.log("Run this code when the viz2 has finished loading.");
            }
        };

    // Create a viz object and embed it in the container div.
    viz3 = new tableau.Viz(containerDiv, url, options);
}


function initViz4() {
    var containerDiv = document.getElementById("gantt"),
        url = "https://public.tableau.com/views/Gantt_17161037664960/6?:language=zh-CN&:sid=&:display_count=n&:origin=viz_share_link",
        
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
            console.log("Run this code when the viz4  has finished loading.");
            }
        };

    // Create a viz object and embed it in the container div.
    viz4 = new tableau.Viz(containerDiv, url, options);
}

function initViz5() {
    var containerDiv = document.getElementById("trajectory"),
        url = "https://public.tableau.com/views/Trajectory14Days/Trajectory14days?:language=zh-CN&:sid=&:display_count=n&:origin=viz_share_link",
    
        
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
            console.log("Run this code when the viz5 has finished loading.");
            }
        };

    // Create a viz object and embed it in the container div.
    viz5 = new tableau.Viz(containerDiv, url, options);
}




    
   


   