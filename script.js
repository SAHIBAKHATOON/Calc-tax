
function calculateTax() {
    var age = parseInt(document.getElementById('age').value);
    var income = parseFloat(document.getElementById('income').value);
    var extraIncome = parseFloat(document.getElementById('extra-income').value);
    var deductions = parseFloat(document.getElementById('deductions').value || 0);

    var overallIncome = income + extraIncome - deductions;
    var tax = 0;

    if (overallIncome <= 8) {
        tax = 0;
    } else {
        var taxableAmount = overallIncome - 8;
        if (age < 40) {
            tax = 0.3 * taxableAmount;
        } else if (age >= 40 && age < 60) {
            tax = 0.4 * taxableAmount;
        } else {
            tax = 0.1 * taxableAmount;
        }
    }
      let tax_result = document.getElementById('tax-result')
    tax_result.innerHTML = "Tax: " + tax.toFixed(2) + " Lakhs";
    alert(tax);
}
 
