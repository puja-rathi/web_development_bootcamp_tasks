let water_Used = prompt("Enter the number of litres of water used:");

if(water_Used<=6000){
    const msg = `You need to pay : R15.73/kl`;
    alert(msg);
}
else if(water_Used > 6000 && water_Used <= 10500){
    const msg = `You need to pay : R22.38/kl`;
    alert(msg);
}
else if(water_Used > 10500 && water_Used <= 35000){
    const msg = `You need to pay : R31.77/kl`;
    alert(msg);
}
else{
    const msg = `You need to pay : R69.76/kl`;
    alert(msg);
}