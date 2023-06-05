function createAccount(pin, amount) {
    let userPin = pin;
    let currentAmount = amount||0;

    function checkPin(enteredPin){
        if(userPin === enteredPin){
            return true;
        } else{
            return false;
        }
    }
    return {
        checkBalance: function(pin){
            if(!checkPin(pin)) return 'Invalid PIN.';
            return `$${currentAmount}`;
        },
        deposit: function(pin, deposit){
            if(!checkPin(pin)) return 'Invalid PIN.';
            currentAmount += deposit;
            return `Succesfully deposited $${deposit}. Current balance: $${currentAmount}.`
        },
        withdraw: function(pin, withdraw){
            if(!checkPin(pin)) return 'Invalid PIN.';
            if(currentAmount < withdraw){ return `Withdrawal amount exceeds account balance. Transaction cancelled.`;}
            currentAmount-=withdraw;
            return `Succesfully withdrew $${withdraw}. Current balance: $${currentAmount}.`;
        },
        changePin: function(pin, newPin){
            if(!checkPin(pin)) return 'Invalid PIN.';
            userPin = newPin;
            return `PIN successfully changed!`;
        }
    }

}

module.exports = { createAccount };
