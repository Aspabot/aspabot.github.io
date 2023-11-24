const hourDigits = [hour_a,hour_b,hour_c,hour_d,hour_e];
const minuteDigits = [minute_a,minute_b,minute_c,minute_d,minute_e,minute_f];
const secondDigits = [second_a,second_b,second_c,second_d,second_e,second_f];

function clock(){
    time = new Date();
    hour = time.getHours();
    minute = time.getMinutes();
    second = time.getSeconds();

    binaryHour = hour.toString(2).padStart(5,0);
    binaryMinute = minute.toString(2).padStart(6,0);
    binarySecond = second.toString(2).padStart(6,0);

    light(hourDigits, binaryHour);
    light(minuteDigits, binaryMinute);
    light(secondDigits, binarySecond);

    setTimeout("clock()", 1000);
}
function light(row, binaryRow){
    for (let i = row.length - 1; i >= 0; i--){
        
        const element = document.getElementById(row[i].id);
        
        if (binaryRow[i] == 1)
        {
            if (element.classList.contains("symbol_off"))
                element.classList.replace("symbol_off", "symbol_on");
        }
        else{
            if (element.classList.contains("symbol_on"))
                element.classList.replace("symbol_on", "symbol_off");
        }
        
    }
}

clock();