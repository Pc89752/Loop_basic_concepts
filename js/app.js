var toLoop = [null, null, null, null, null];

// For loop
async function simulation_for() {
    // Check if the last loop is completed
    // If isn't, then stop it and current function
    if (toLoop[0] !== null) {
        toLoop[0] = null;
        alert("上次的迴圈未結束，已停止該迴圈");
        return;
    }
    // Get variables
    const init_value = parseInt(document.getElementById("init_value_for").value);
    const smaller_than = parseInt(document.getElementById("smaller_than_for").value);
    const output_str = document.getElementById("output_str_for").value;
    // Check variables
    if (isNaN(init_value) || isNaN(smaller_than)) {
        alert("輸入不正確!");
        return;
    }
    // Output
    const textarea = document.getElementById("textarea_for");
    let text = "";
    textarea.value = "";
    for (let i = init_value, j=1; i < smaller_than; i++, j++) {
        text += output_str;
        textarea.value += "第"+ j+ "次 (i="+ i+ ") :"+ text+ "\n";
        toLoop[0] = false;
        // Wait for user to click "下一步" button
        while (toLoop[0] === false)
            await timeout(100);
        // User stopped the loop
        if (toLoop[0] === null)
            break;
    }
    textarea.value += "\n===============================\n迴圈結束";
    toLoop[0] = null;
}
function clear_for() {
    if (toLoop[0] !== null) {
        alert("目前迴圈尚未完全執行!");
        return;
    }
    document.getElementById("init_value_for").value = "";
    document.getElementById("smaller_than_for").value = "";
    document.getElementById("output_str_for").value = "";
    document.getElementById("textarea_for").value = "";
}

// While loop
async function simulation_while() {
    // Check if the last loop is completed
    // If isn't, then stop it and current function
    if (toLoop[1] !== null) {
        toLoop[1] = null;
        alert("上次的迴圈未結束，已停止該迴圈");
        return;
    }
    // Get variables
    const init_value = parseInt(document.getElementById("init_value_while").value);
    const smaller_than = parseInt(document.getElementById("smaller_than_while").value);
    const output_str = document.getElementById("output_str_while").value;
    // Check variables
    if (isNaN(init_value) || isNaN(smaller_than)) {
        alert("輸入不正確!");
        return;
    }
    // Output
    const textarea = document.getElementById("textarea_while");
    let text = "";
    textarea.value = "";
    let i = init_value, j=1;
    while (i < smaller_than) {
        text += output_str;
        textarea.value += "第"+ j+ "次 (i="+ i+ ") :"+ text+ "\n";
        toLoop[1] = false;
        // Wait for user to click "下一步" button
        while (toLoop[1] === false)
            await timeout(100);
        // User stopped the loop
        if (toLoop[1] === null)
            break;

        i++;
        j++;
    }
    textarea.value += "\n===============================\n迴圈結束";
    toLoop[1] = null;
}

function clear_while() {
    if (toLoop[1] !== null) {
        alert("目前迴圈尚未完全執行!");
        return;
    }
    document.getElementById("init_value_while").value = "";
    document.getElementById("smaller_than_while").value = "";
    document.getElementById("output_str_while").value = "";
    document.getElementById("textarea_while").value = "";
}

// Do while loop
async function simulation_do_while() {
    // Check if the last loop is completed
    // If isn't, then stop it and current function
    if (toLoop[2] !== null) {
        toLoop[2] = null;
        alert("上次的迴圈未結束，已停止該迴圈");
        return;
    }
    // Get variables
    const init_value = parseInt(document.getElementById("init_value_do_while").value);
    const smaller_than = parseInt(document.getElementById("smaller_than_do_while").value);
    const output_str = document.getElementById("output_str_do_while").value;
    // Check variables
    if (isNaN(init_value) || isNaN(smaller_than)) {
        alert("輸入不正確!");
        return;
    }
    // Output
    const textarea = document.getElementById("textarea_do_while");
    let text = "";
    textarea.value = "";
    let i = init_value, j=1;
    do {
        text += output_str;
        textarea.value += "第"+ j+ "次 (i="+ i+ ") :"+ text+ "\n";
        toLoop[2] = false;
        // Wait for user to click "下一步" button
        while (toLoop[2] === false)
            await timeout(100);
        // User stopped the loop
        if (toLoop[2] === null)
            break;

        i++;
        j++;
    } while (i < smaller_than);
    textarea.value += "\n===============================\n迴圈結束";
    toLoop[2] = null;
}

function clear_do_while() {
    if (toLoop[2] !== null) {
        alert("目前迴圈尚未完全執行!");
        return;
    }
    document.getElementById("init_value_do_while").value = "";
    document.getElementById("smaller_than_do_while").value = "";
    document.getElementById("output_str_do_while").value = "";
    document.getElementById("textarea_do_while").value = "";
}

// Continue
async function simulation_continue() {
    // Check if the last loop is completed
    // If isn't, then stop it and current function
    if (toLoop[0] !== null) {
        toLoop[0] = null;
        alert("上次的迴圈未結束，已停止該迴圈");
        return;
    }
    // Get variables
    const init_value = parseInt(document.getElementById("init_value_continue").value);
    const smaller_than = parseInt(document.getElementById("smaller_than_continue").value);
    const smaller_than_2 = parseInt(document.getElementById("smaller_than_continue_2").value);
    const output_str = document.getElementById("output_str_continue").value;
    // Check variables
    if (isNaN(init_value) || isNaN(smaller_than || isNaN(smaller_than_2))) {
        alert("輸入不正確!");
        return;
    }
    // Output
    const textarea = document.getElementById("textarea_continue");
    let text = "";
    textarea.value = "";
    for (let i = init_value, j=1; i < smaller_than; i++, j++) {
        if (i >= smaller_than_2) {
            text += output_str;
        }
        textarea.value += "第"+ j+ "次 (i="+ i+ ") :"+ text+ "\n";
        toLoop[0] = false;
        // Wait for user to click "下一步" button
        while (toLoop[0] === false)
            await timeout(100);
        // User stopped the loop
        if (toLoop[0] === null)
            break;
    }
    textarea.value += "\n===============================\n迴圈結束";
    toLoop[0] = null;
}
function clear_continue() {
    if (toLoop[0] !== null) {
        alert("目前迴圈尚未完全執行!");
        return;
    }
    document.getElementById("init_value_continue").value = "";
    document.getElementById("smaller_than_continue").value = "";
    document.getElementById("smaller_than_continue_2").value = "";
    document.getElementById("output_str_continue").value = "";
    document.getElementById("textarea_continue").value = "";
}

// Break
async function simulation_break() {
    // Check if the last loop is completed
    // If isn't, then stop it and current function
    if (toLoop[0] !== null) {
        toLoop[0] = null;
        alert("上次的迴圈未結束，已停止該迴圈");
        return;
    }
    // Get variables
    const init_value = parseInt(document.getElementById("init_value_break").value);
    const smaller_than = parseInt(document.getElementById("smaller_than_break").value);
    const greater_than = parseInt(document.getElementById("greater_than_break").value);
    const output_str = document.getElementById("output_str_break").value;
    // Check variables
    if (isNaN(init_value) || isNaN(smaller_than || isNaN(greater_than))) {
        alert("輸入不正確!");
        return;
    }
    // Output
    const textarea = document.getElementById("textarea_break");
    let text = "";
    textarea.value = "";
    for (let i = init_value, j=1; i < smaller_than; i++, j++) {
        if (i > greater_than)
            break;
        text += output_str;
        textarea.value += "第"+ j+ "次 (i="+ i+ ") :"+ text+ "\n";
        toLoop[0] = false;
        // Wait for user to click "下一步" button
        while (toLoop[0] === false)
            await timeout(100);
        // User stopped the loop
        if (toLoop[0] === null)
            break;
    }
    textarea.value += "\n===============================\n迴圈結束";
    toLoop[0] = null;
}
function clear_break() {
    if (toLoop[0] !== null) {
        alert("目前迴圈尚未完全執行!");
        return;
    }
    document.getElementById("init_value_break").value = "";
    document.getElementById("smaller_than_break").value = "";
    document.getElementById("greater_than_break").value = "";
    document.getElementById("output_str_break").value = "";
    document.getElementById("textarea_break").value = "";
}


function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
