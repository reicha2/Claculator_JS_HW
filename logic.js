var num1 = 0;
var clear_flag = false;
var oper = "";

function calculate(op) {
    num1 = res.value;
    clear_flag = true;
    oper = op;
}

function give_res() {
    console.log(`num1 ${num1}`);
    console.log(`num2 ${res.value}`);
    console.log(`oper ${oper}`);
    if (oper === "+") {
        res.value = +res.value + +num1;
    }
    if (oper === "-") {
        res.value = +num1 - +res.value;
    }
    if (oper === "*") {
        res.value = +res.value * +num1;
    }
    if (oper === "/") {
        res.value = +num1 / +res.value;
    }
}

function add_num(num) {
    if (clear_flag == true || res.value == "0") {
        res.value = "";
        clear_flag = false;
    }
    if (res.value.length < 10) {
        res.value += num;
    }
}

function clear_result() {
    res.value = "0";
}