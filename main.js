window.onload = () => {

    async function api () {
        let a = fetch("https://api.apify.com/v2/key-value-stores/lFItbkoNDXKeSWBBA/records/LATEST?").then((datas)=> {
            return datas.json();
        }).then((completedata) => {
            document.getElementById("activeCases").innerHTML = completedata.country + " active cases is " + completedata.activeCases;
        })
    }
    api()
    realdate();
    
}
function realdate() {
    //Date object
    let date = new Date();
    
    //variables for the date
    let month = date.getMonth()
    switch(month+=1) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March"
            break
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July"
            break
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November"
            break
        case 12:
            month = "December";
            break;    
    }
    let day = date.getDate()
    let year = date.getFullYear()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let amPm = (hours < 12 ) ? "AM":"PM";

    hours = (hours > 12) ? hours-12: hours;
    hours = ("0" + hours).slice(-2)
    minutes = ("0" + minutes).slice(-2)
    seconds = ("0"+seconds).slice(-2)

    let spanDate = document.getElementById("date")
    spanDate.innerHTML = month + "/" + day + "/" + year + "-"+hours + ":" + minutes + ":" + seconds + " " + amPm;
    var t = setTimeout(realdate,500)
}