document.getElementById('btn-deposit').addEventListener('click', function() {
    const depoistField = document.getElementById('deposit-field');
    const depositAmountString = depoistField.value;
    const depositAmount = parseFloat(depositAmountString);
    depoistField.value = ''

    const depoistTotalElement = document.getElementById('deposit-amount');
    const depositTotalString = depoistTotalElement.innerText;
    const depositTotalAmount = parseFloat(depositTotalString);
    const newDepositTotal = depositTotalAmount + depositAmount;
    depoistTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    console.log(balanceTotalString)
    const balanceTotalAmount = parseFloat(balanceTotalString);
    const newBalanceTotal = balanceTotalAmount + newDepositTotal;
    balanceTotalElement.innerText = newBalanceTotal;
})

document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    withdrawField.value = ''

    const withdrawTotalElement = document.getElementById('withdraw-amount');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalString);
    const newwithdrawTotal = withdrawTotalAmount + withdrawAmount;
    withdrawTotalElement.innerText = newwithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    console.log(balanceTotalString)
    const balanceTotalAmount = parseFloat(balanceTotalString);
    const newBalanceTotal = balanceTotalAmount - newwithdrawTotal;
    balanceTotalElement.innerText = newBalanceTotal;
})