let button = document.querySelector(".button"); // takes the button input
let input = document.querySelector(".date_input"); // takes the date input
let output = document.querySelector(".header-2"); // header value? 

// this reacts to the button event
button.addEventListener("click", calculate);

function calculate() {

    let inputDate, inputArray, year, month, day; //this collects the input values

    inputData = input.value;

    // this checks the input value
    if (inputData !== "") {

        // this splits the input value and store into array
        inputArray = inputData.split("-"); 
        [year, month, day] = inputArray;
        year = Number(year);
        month = Number(month);
        day = Number(day);

        // gets the current date
        let current, currentYear, currentMonth, currentDate, Newdate, newMonth;

        // new date for current date
        current = new Date();
        currentYear = current.getFullYear();
        currentMonth = current.getMonth();
        currentDate = current.getDate();

        // check birthday is real
        if (day === currentDate && month === currentMonth) {
            let birthday = currentYear - year;
            output.innerHTML = `Congratulations! Today is your birthday you are <span class="year">${birthday}</span> Years Old. `;
        } else {

            // this calculates the day
            if (day > currentDate) {
                let prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
Newdate = prevMonthLastDay + currentDate;
                day = Newdate - day;
                currentMonth = currentMonth - 1;
            } else {
                day = currentDate - day;
            }

            // this calculates the month
            if (month > currentMonth) {
                newMonth = currentMonth + 12;
                month = newMonth - month;
                currentYear = currentYear - 1;
            } else {
                month = currentMonth - month;
            }
            year = currentYear - year;

            output.innerHTML = `Your age: <span class"year">${year}</span> Year <span class="month">${month}</span> Month <span class="day">${day}</span> Days.`;
        }
        } else {
            alert("Plese Input your Birthday");
        }
    }
