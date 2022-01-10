// update-time: 2022/1/10
// Authour: Jim

const problems_data: JSON = JSON.parse("{\"0\":{\"problem\":\"哪個語句用於跳過反覆運算語句主體的其餘部分並繼續迴圈的下一次反覆運算？\",\"options\":[\"jump\",\"break\",\"continue\",\"skip\"],\"answer\":\"2\",\"hint\":\"無\"},\"1\":{\"problem\":\"while (--counter >= 1)<br>{<br>    printf(\\\"%s\\\\n\\\", !(counter % 2) ? \\\"even\\\" : \\\"odd\\\");<br>}<br>以上程式碼可以被改寫為<br>while (counter >= 1)<br>{<br>    if (counter % 2)<br>    {<br>        puts(\\\"even\\\");<br>    }<br>    else<br>    {<br>        puts(\\\"odd\\\");<br>    }<br>}<br>--counter;\",\"options\":[\"是\",\"否\"],\"answer\":\"1\",\"hint\":\"以下程式將印出多少次 “hello”？當i小於等於10時while迴圈不會停止\"},\"2\":{\"problem\":\"在迴圈中有迴圈稱為?\",\"options\":[\"Nesting\",\"double\",\"a redundancy\",\"doubling up\"],\"answer\":\"0\"},\"3\":{\"problem\":\"在迴圈中有迴圈稱為?\",\"options\":[\"Nesting\",\"double\",\"a redundancy\",\"doubling up\"],\"answer\":\"0\",\"hint\":\"無\"},\"4\":{\"problem\":\"在以下for語句中，迴圈計數器的最高值是多少？<br>for(i = 7; i <= 72; i += 7)\",\"options\":[\"7\",\"70\",\"77\",\"72\"],\"answer\":\"2\",\"hint\":\"在i=70時迴圈繼續，i = 70=7，i=77\"},\"5\":{\"problem\":\"迴圈是計算機科學運算領域的用語，也是一種常見的控制流程?\",\"options\":[\"是\",\"否\"],\"answer\":\"0\",\"hint\":\"無\"},\"6\":{\"problem\":\"無窮迴圈一般會用在有一段程式需要永遠執行，或是該程式在沒有發生特殊事件（如故障）時需要永遠執行的場合?\",\"options\":[\"是\",\"否\"],\"answer\":\"0\",\"hint\":\"無\"},\"7\":{\"problem\":\"在此迴圈完成其執行后，該值是什麼？<br>int p = 2;<br>while (p < 2000)<br>{<br>    p = 2 * p;<br>}\",\"options\":[\"2047\",\"2048\",\"1024\",\"1023\"],\"answer\":\"1\",\"hint\":\"p = 1024時迴圈繼續，p = 2*1024，p = 2048\"},\"8\":{\"problem\":\"以下程式將印出多少次 “hello”？<br>int i = 1;<br>while (i <= 10)<br>{<br>    puts(\\\"hello\\\");<br>}<br>\",\"options\":[\"10\",\"8\",\"無限\",\"0\"],\"answer\":\"0\",\"hint\":\"當i小於等於10時while迴圈不會停止\"},\"9\":{\"problem\":\"以下哪項是反覆運算語句？\",\"options\":[\"if\",\"do….while\",\"if….else\",\"switch\"],\"answer\":\"1\",\"hint\":\"無\"}}");
var order: number[]= [];
var problemNo: number= 0;
var isCorrect: boolean;

function nextProblem() {
    if (++problemNo > 9) {
        problemNo--;
        alert("已經是最後一題!");
    } else {
        loadProblem();
    }

    // Reset state
    isCorrect = false;
    document.getElementById('hint').textContent = '';
}

function checkAnswer () {
    // The user hasn't input anything yet
    if (document.getElementById('problem').querySelector('input:checked') === null) {
        alert('尚未選擇答案!');
        return;
    }

    const problem = problems_data[order[problemNo]];
    const problemArea = document.getElementById('problem')
    const optNO:number =
        Number(problemArea.querySelector('input:checked').id.split('').pop());
    const ansNo: number = Number(problem.answer);
    // TODO: Fill the hint of the JSON
    const hintText: string= '';

    if (optNO === ansNo) {
        isCorrect = true;
        document.getElementById('hint').textContent = '恭喜答對!';
    } else {
        let actualAnsNo: number=0;
        for (let e of problemArea.querySelectorAll('input')) {
            if(Number(e.id.split('').pop()) === ansNo)
                break;
            else
                actualAnsNo++;
        }
        // ASCII(65): A
        document.getElementById('hint').textContent =
            '答案: '+ String.fromCharCode(65+ actualAnsNo)+ '\n'+
            '提示: '+ hintText;
    }
    document.getElementById('hint').scrollIntoView(true);
}

/**
 * Load the HTML of the quiz area
 */
function loadProblem() {
    const loadFunc = function (data: JSON) {
        // 1.0> Get the current problem
        const problem = data[order[problemNo]];
        // 1.1> Make problem's text
        const problemText: string= problem.problem;
        // 1.2> Make options' text
        let optionsText: string[] = [];
        // 1.2.1> Random their order
        let tArray: number[] = [];
        for (let i = 0; i < problem.options.length; i++) {
            tArray.push(i);
        }
        // 1.2.2> Record the original order
        let noOfOptions:number[] = [];
        while (tArray.length > 0) {
            const no = Math.floor(Math.random()* tArray.length);
            noOfOptions.push(tArray[no]);
            tArray.splice(no, 1);
        }
        // 1.2.3> Make options' text
        for (let i = 0; i < noOfOptions.length; i++) {
            // ASCII(65): A
            optionsText.push(String.fromCharCode(i+65)+ ". "+ problem.options[noOfOptions[i]]);
        }

        // 2.0> Make the HTML of the problem area
        const problemArea = <HTMLDivElement>document.getElementById("problem");
        // 2.1> Clear the area
        problemArea.innerHTML = "";
        // 2.2> Put elements in
        // 2.2.1> Problem's statement
        let currentE: any;
        (currentE as HTMLSpanElement) = document.createElement('span');
        (currentE as HTMLSpanElement).innerHTML = problemText;
        problemArea.appendChild(currentE);
        problemArea.appendChild(document.createElement('br'));
        problemArea.appendChild(document.createElement('br'));
        // 2.2.2> Options
        const optionsArea = document.createElement('div');
        optionsArea.className = 'container';
        for (let i=0; i < optionsText.length; i++) {
            // 2.2.2.1> Radio
            (currentE as HTMLInputElement) = document.createElement('input');
            (currentE as HTMLInputElement).type = 'radio';
            (currentE as HTMLInputElement).name = 'options';
            (currentE as HTMLInputElement).id = 'opt_'+ String(noOfOptions[i]);
            optionsArea.appendChild((currentE as HTMLInputElement));
            // 2.2.2.2> Label
            (currentE as HTMLLabelElement) = document.createElement('label');
            (currentE as HTMLLabelElement).htmlFor = 'opt_'+ String(noOfOptions[i]);
            (currentE as HTMLLabelElement).textContent = optionsText[i];
            optionsArea.appendChild((currentE as HTMLLabelElement));
            if (i%2 == 1) {
                optionsArea.appendChild(document.createElement('br'));
                optionsArea.appendChild(document.createElement('br'));
            }
        }
        problemArea.appendChild(optionsArea);

        // 3> Change problemNo
        document.getElementById('problemNo').textContent = String(problemNo+1);
    };

    // ! Works only when server online
    // $.getJSON("../problems.json", data => loadFunc(data))
    //     .fail(() => console.log("Require error..."));
    // =================================================
    // Backup code
    loadFunc(problems_data);
}

/**
 * Sort the order of the problems
 */
async function sortProblems () {
    const sortFunc: Function = function (data: JSON) {
        // 1.0> Sort the order of problems
        // 1.1> Check the number of problems 
        const numOfProblems = Object.keys(data).length;
        // 1.2> Sort the order of them
        // 1.2.1> Make a array: 0 ~ numOfProblems-1
        let tArray = [];
        for (let i = 0; i < numOfProblems; i++) {
            tArray.push(i);
        }
        // 2.2.2> Random, make the order
        for (let i=0; tArray.length > 0; i++) {
            const no = Math.floor(Math.random() * tArray.length);
            order.splice(i, 1, tArray[no]);
            tArray.splice(no, 1);
        }
    };

    // ! Works only when server online
    // $.getJSON("../problems.json", data => sortFunc(data))
    //     .fail(() => console.log("Require error..."));
    // =================================================
    // Backup code
    sortFunc(problems_data);
}