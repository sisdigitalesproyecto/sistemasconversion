document.getElementById('input-number').addEventListener('input', convert);
document.querySelectorAll('input[name="base"]').forEach((elem) => {
    elem.addEventListener('change', convert);
});

function convert() {
    const number = document.getElementById('input-number').value;
    const base = document.querySelector('input[name="base"]:checked').value;

    let decimalNumber;
    try {
        switch (base) {
            case 'binario':
                decimalNumber = parseInt(number, 2);
                break;
            case 'decimal':
                decimalNumber = parseInt(number, 10);
                break;
            case 'hexadecimal':
                decimalNumber = parseInt(number, 16);
                break;
            default:
                decimalNumber = NaN;
        }
    } catch (error) {
        decimalNumber = NaN;
    }

    if (isNaN(decimalNumber)) {
        document.getElementById('binary-output').textContent = '';
        document.getElementById('decimal-output').textContent = '';
        document.getElementById('hexadecimal-output').textContent = '';
    } else {
        document.getElementById('binary-output').textContent = decimalNumber.toString(2);
        document.getElementById('decimal-output').textContent = decimalNumber.toString(10);
        document.getElementById('hexadecimal-output').textContent = decimalNumber.toString(16).toUpperCase();
    }
}
