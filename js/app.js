var toLoop = [null, null, null];

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
    textarea.value = "";
    for (let i = init_value; i < smaller_than; i++) {
        textarea.value += output_str;
        toLoop[0] = false;
        // Wait for user to click "下一步" button
        while (toLoop[0] === false)
            await timeout(100);
        // User stopped the loop
        if (toLoop[0] === null)
            break;
    }
    textarea.value += "\n\n===============================\n迴圈結束";
    toLoop[0] = null;
}
function clear_for() {
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
    textarea.value = "";
    let i = init_value;
    while (i < smaller_than) {
        textarea.value += output_str;
        toLoop[1] = false;
        // Wait while user to click "下一步" button
        while (toLoop[1] === false)
            await timeout(100);
        // User stopped the loop
        if (toLoop[1] === null)
            break;

        i++;
    }
    textarea.value += "\n\n===============================\n迴圈結束";
    toLoop[1] = null;
}

function clear_while() {
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
    textarea.value = "";
    let i = init_value;
    do {
        textarea.value += output_str;
        toLoop[2] = false;
        // Wait while user to click "下一步" button
        while (toLoop[2] === false)
            await timeout(100);
        // User stopped the loop
        if (toLoop[2] === null)
            break;

        i++;
    } while (i < smaller_than);
    textarea.value += "\n\n===============================\n迴圈結束";
    toLoop[2] = null;
}

function clear_do_while() {
    document.getElementById("init_value_do_while").value = "";
    document.getElementById("smaller_than_do_while").value = "";
    document.getElementById("output_str_do_while").value = "";
    document.getElementById("textarea_do_while").value = "";
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
