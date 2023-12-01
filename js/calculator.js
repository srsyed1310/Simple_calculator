let outputScreen = document.getElementById('input_data');


function display(num){

    outputScreen.value += num;
}


function Calculate() {

    try {
        outputScreen.value = eval(outputScreen.value)

    }
    catch (error) {
        alert('Invalid Number')
    }
}


function Clear() {

    outputScreen.value = " ";
}


function DEL() {

    outputScreen.value = outputScreen.value.slice(0, -1)
}
