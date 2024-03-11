
function numberchecker() {
    var inputValue = document.getElementById('Number').value
        if (Number.isInteger(parseFloat(inputValue))) {
            document.getElementById('result').innerText = 'The number is an integer.';
        } else {
            document.getElementById('result').innerText = 'The number is a float.';
        }
    }

