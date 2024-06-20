function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert('Please enter valid numbers');
        return;
    }
    
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
    
    document.getElementById('result').textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
}