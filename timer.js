export class CountDown {
    constructor ({tagId, targetDate}){
        this.coutDownDate = new Date(targetDate);
        this.daysRef = document.querySelector(`${tagId}.value[data-value="days"]`);
        this.hoursRef = document.querySelector(`${tagId}.value[data-value="hours"]`);
        this.minutsRef = document.querySelector(`${tagId}.value[data-value="mins"]`);
        this.secondsRef = document.querySelector(`${tagId}.value[data-value="secs"]`);
    }

    pad(value) {
        return String(value).padStart(2, '0')
    } 
    daysTimeChange () {
        // const targetDate = new Date(1640988000000);
        const todayDate = new Date();
        const time = this.coutDownDate - todayDate;
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        this.daysRef.textContent = this.pad(days);
        this.hoursRef.textContent = this.pad(hours);
        this.minutsRef.textContent = this.pad(mins);
        this.secondsRef.textContent = this.pad(secs);
    }
    


    countDown () {    
        setInterval(() =>{
            daysTimeChange ()        
        }, 1000)
    }



}






// const ref = {
//     daysRef : document.querySelector('span[data-value="days"]'),
//     hoursRef : document.querySelector('span[data-value="hours"]'),
//     minutsRef : document.querySelector('span[data-value="mins"]'),
//     secondsRef : document.querySelector('span[data-value="secs"]'),
// }



// function timeCountDownTextContent () {
    
// }




// countDown ()


