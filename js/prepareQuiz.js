var order = [];
var problem_num = 0;
function loadProblem() {
    const problemArea = document.getElementById("problem");
    // 1.0> Get JSON
    // 1.1> Create new XHR
    const xhr = new XMLHttpRequest();
    // 1.2> open: type, url/file, async
    xhr.open('GET', 'problems.json', true);
    // 1.3.1> Do when onload:
    xhr.onload = function () {
        // status:
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"
        if (xhr.status == 200) {
            // 1.0> Get the current problem
            const problem = JSON.parse(this.responseText)[order[problem_num]];
            // 1.1> Make problem's text
            const problemText = String(problem_num + 1) + ". " + problem.problem;
            // 1.2> Make options' text
            let optionsText = [];
            // 1.2.1> Random their order
            let tArray = [];
            for (let i = 0; i < problem.options.length; i++) {
                tArray.push(i);
            }
            // 1.2.2> Record the original order
            let noOfOptions = [];
            while (tArray.length > 0) {
                const no = Math.floor(Math.random() * tArray.length);
                console.log(no)
                noOfOptions.push(tArray[no]);
                tArray.splice(no, 1);
            }
            // ! console.log(noOfOptions)
            // 1.2.3> Make text
            for (let i = 0; i < noOfOptions.length; i++) {
                // ASCII(65): A
                optionsText.push(String.fromCharCode(i + 65) + ". " + problem.options[noOfOptions[i]]);
            }
            // 2.0> Make the HTML of the problem area
            let problemAreaText;
            // 2.1> Part of the problem's text 
            problemAreaText =
                "<pre><span style=\"font-size: x-large\">" + problemText + "</span></pre><br>" +
                    "<div class=\"container\">";
            // 2.2> Part of the options' text
            for (let i = 0; i < optionsText.length; i++) {
                problemAreaText +=
                    "<input type=\"radio\" name=\"options\" id=\"opt_" + String(noOfOptions[i]) + "\">" +
                        "<label for=\"opt_" + String(noOfOptions[i]) + "\">" + optionsText[i] + "</label>";
                if (i % 2 === 1)
                    problemAreaText += "<br><br>";
            }
            problemAreaText += "</div>";
            problemArea.innerHTML = problemAreaText;
        }
    };
    // 1.3.2> Do when error
    xhr.onerror = function () {
        console.log("Request error...");
    };
    xhr.send();
}
function sortProblems() {
    // 1.0> Get JSON
    // 1.1> Create new XHR
    const xhr = new XMLHttpRequest();
    // 1.2> open: type, url/file, async
    xhr.open('GET', 'problems.json', true);
    // 1.3.1> Do when onload:
    xhr.onload = function () {
        // status:
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"
        if (xhr.status == 200) {
            // 1.0> Sort the order of problems
            // 1.1> Check the number of problems 
            const numOfProblems = Object.keys(JSON.parse(this.responseText)).length;
            // 1.2> Sort the order of them
            // 1.2.1> Make a array: 0 ~ numOfProblems-1
            let tArray = [];
            for (let i = 0; i < numOfProblems; i++) {
                tArray.push(i);
            }
            // 2.2.2> Random, make the order
            for (let i = 0; tArray.length > 0; i++) {
                const no = Math.floor(Math.random() * tArray.length);
                order.splice(i, 1, tArray[no]);
                tArray.splice(no, 1);
            }
        }
    };
    // 1.3.2> Do when error
    xhr.onerror = function () {
        console.log("Request error...");
    };
    xhr.send();
}
