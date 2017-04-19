function Update() {
    var now = new Date();
    var daysFull = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var daysShort = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var month = months[now.getMonth()];
    var year = now.getFullYear();
    var dayFull = daysFull[now.getDay()];
    var dayShort = daysShort[now.getDay()];
    var date = now.getDate();
    var hour = now.getHours() % 12 == 0 ? '12': now.getHours() % 12;
    var mins = now.getMinutes();
    var min = mins < 10 ? '0'+mins : mins;
    var pm = now.getHours() >= 12 ? ' PM' : ' AM';
    
    var Hour = function() {
        if (dayShort != "wed") {
            if (hour == 7 && mins >= 40 && mins <= 52) return "hr";
            if ((hour == 7 && mins >= 58 && mins <= 59) || (hour == 8 && mins >= 0 && mins <= 43)) return "h1";
            if ((hour == 8 && mins >= 49 && mins <= 59) || (hour == 9 && mins >= 0 && mins <= 34)) return "h2";
            if ((hour == 9 && mins >= 40 && mins <= 59) || (hour == 10 && mins >= 0 && mins <= 25)) return "h3";
            if ((hour == 10 && mins >= 31 && mins <= 59) || (hour == 11 && mins >= 0 && mins <= 16)) return "h4";
            if ((hour == 11 && mins >= 22 && mins <= 59) || (hour == 12 && mins >= 0 && mins <= 7)) return "h5";
            if (hour == 12 && mins >= 13 && mins <= 58) return "h6";
            if (hour == 1 && mins >= 4 && mins <= 49) return "h7";
            if ((hour == 1 && mins >= 55 && mins <= 59) || (hour == 2 && mins >= 0 && mins <= 40)) return "h8";
        } else {
            if (hour == 7 && mins >= 40 && mins <= 52) return "hr"; 
            if ((hour == 7 && mins >= 58 && mins <= 59) || (hour == 8 && mins >= 0 && mins <= 39)) return "h1";
            if ((hour == 8 && mins >= 45 && mins <= 59) || (hour == 9 && mins >= 0 && mins <= 26)) return "h2";
            if ((hour == 9 && mins >= 32 && mins <= 59) || (hour == 10 && mins >= 0 && mins <= 13)) return "h3";
            if ((hour == 10 && mins >= 19 && mins <= 59) || (hour == 11 && mins == 0)) return "h4";
            if ((hour == 11 && mins >= 6 && mins <= 59) || (hour == 11 && mins >= 0 && mins <= 47)) return "h5";
            if ((hour == 11 && mins >= 53 && mins <= 59) || (hour == 12 && mins >= 00 && mins >= 34)) return "h6";
            if ((hour == 12 && mins >= 40 && mins <= 59) || (hour == 1 && mins >= 0 && mins <= 21)) return "h7";
            if ((hour == 1 && mins >= 27 && mins <= 59) || (hour == 2 && mins >= 0 && mins <= 40)) return "h8";
        }
            
        return "passing";
    }
    
    document.getElementById("date").innerHTML = dayFull + ", " + month + " " + date + ", " + year + "<br>" + hour + ":" + min + pm;
    
    if (Hour() != "passing") {
        document.getElementById(dayShort).getElementsByClassName(Hour())[0].style.color = "#ffffff";
    } else {
         document.getElementById("passing").style.color = "#ffffff";
    }
    
    setTimeout(Update, 15000);
}

Update();