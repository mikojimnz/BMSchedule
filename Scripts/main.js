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
    var hours = now.getHours();
    var hour = hours % 12 == 0 ? '12': hours % 12;
    var mins = now.getMinutes();
    var min = mins < 10 ? '0' + mins : mins;
    var pm = hours >= 12 ? ' PM' : ' AM';
    
    var ClassHour = function() {
        if (dayShort != "wed") {
            if (hours == 7 && mins >= 40 && mins <= 52) return "hr";
            if ((hours == 7 && mins >= 58 && mins <= 59) || (hours == 8 && mins >= 0 && mins <= 43)) return "h1";
            if ((hours == 8 && mins >= 49 && mins <= 59) || (hours == 9 && mins >= 0 && mins <= 34)) return "h2";
            if ((hours == 9 && mins >= 40 && mins <= 59) || (hours == 10 && mins >= 0 && mins <= 25)) return "h3";
            if ((hours == 10 && mins >= 31 && mins <= 59) || (hours == 11 && mins >= 0 && mins <= 16)) return "h4";
            if ((hours == 11 && mins >= 22 && mins <= 59) || (hours == 12 && mins >= 0 && mins <= 7)) return "h5";
            if (hours == 12 && mins >= 13 && mins <= 58) return "h6";
            if (hours == 13 && mins >= 4 && mins <= 49) return "h7";
            if ((hours == 13 && mins >= 55 && mins <= 59) || (hours == 14 && mins >= 0 && mins <= 40)) return "h8";
        } else if (daysShort == "wed"){
            if (hours == 7 && mins >= 40 && mins <= 52) return "hr"; 
            if ((hours == 7 && mins >= 58 && mins <= 59) || (hours == 8 && mins >= 0 && mins <= 39)) return "h1";
            if ((hours == 8 && mins >= 45 && mins <= 59) || (hours == 9 && mins >= 0 && mins <= 26)) return "h2";
            if ((hours == 9 && mins >= 32 && mins <= 59) || (hours == 10 && mins >= 0 && mins <= 13)) return "h3";
            if ((hours == 10 && mins >= 19 && mins <= 59) || (hours == 11 && mins == 0)) return "h4";
            if ((hours == 11 && mins >= 6 && mins <= 59) || (hours == 11 && mins >= 0 && mins <= 47)) return "h5";
            if ((hours == 11 && mins >= 53 && mins <= 59) || (hours == 12 && mins >= 00 && mins <= 34)) return "h6";
            if ((hours == 12 && mins >= 40 && mins <= 59) || (hours == 13 && mins >= 0 && mins <= 21)) return "h7";
            if ((hours == 13 && mins >= 27 && mins <= 59) || (hours == 14 && mins >= 0 && mins <= 40)) return "h8";
        } else {
            return null;
        }
    }
    
    document.getElementById("date").innerHTML = dayFull + ", " + month + " " + date + ", " + year + "<br>" + hour + ":" + min + pm;
    
    if (ClassHour() != null) {
        var get = document.getElementById(dayShort).getElementsByClassName(ClassHour())[0].style;
        get.boxShadow = "0px 0px 15px #505050";
        get.backgroundColor = "#ffcb3e";
    }
    
    setTimeout(Update, 15000);
}

Update();
