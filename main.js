document.addEventListener("DOMContentLoaded", function () {
    var date = document.querySelector('.date');
    var hour = document.querySelector('.hour');
    var min = document.querySelector('.min');
    var second = document.querySelector('.second');
    function showDate() {
        var dayT = new Date(2018, 10, 06);
        var dayH = new Date();
        console.log(dayH-dayT);
        var datee = Math.ceil((dayH - dayT) / 1000/ 24 / 60 / 60 );
        if(datee == 1) {
            datee = '0' + datee;
        }
        // console.log(new Date());
        
        // console.log(c);
        // console.log(typeof dayT.getDate());
        date.innerHTML = datee;
    };
    function showTime() {
        var now = new Date();
        var getHour = now.getHours();
        var getMin = now.getMinutes();
        var getSecond = now.getSeconds();
        if(getMin < 10){
            getMin = '0' + getMin;
        }
        if(getSecond < 10){
            getSecond = '0' + getSecond;
        }
        
        second.textContent = getSecond;
        hour.textContent = getHour;
        min.textContent =getMin;
    }
    setInterval(showTime, 1000);
    showTime();
    showDate();
});
