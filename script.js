 //adding finctionality to logout button

        const logoutBtn = document.getElementById("logout-btn");

        logoutBtn.addEventListener("click", function(){
            localStorage.removeItem("user");
            window.location.href = "index.html";
        });

        logoutBtn.addEventListener("click", function(){

            const confirmLogout = confirm("Are you sure you want to logout?");

        if(confirmLogout){
            localStorage.removeItem("user");
            window.location.href = "index.html";
        }

        });

        //adding a date element, updating date to current

        const dateElement = document.getElementById("current-date");
        const  today = new Date();

        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        const formattedDate = today.toLocaleDateString("en-us", options);
        dateElement.textContent = formattedDate;
       

        //adding live time/ clock updates 

        const clockElement = document.getElementById("live-clock");

        function updateClock() {
            const now = new Date();
            const time = now.toLocaleTimeString();
            clockElement.textContent = time;
        }

        setInterval(updateClock, 1000);

        //adding a greeting element

        const greetingElement = document.getElementById("greeting");
        const hour = new Date().getHours();

        let greeting;

        if (hour < 12 ) {
            greeting = "Good morning";
        }

        else if (hour < 18) {
            greeting = "Good afternoon";
        }
        
        else {
            greeting = "Good evening";
        }

        const user = localStorage.getItem("user");
        greetingElement.textContent = `${greeting}`; //${user}`;

        //toggling menu

        const toggleBtn = document.getElementById("menu-toggle");
        const sidebar = document.getElementById("sidebar");
        const mainContent = document.querySelector(".main-cont");

        toggleBtn.addEventListener("click", function() {
            sidebar.classList.toggle("collapsed");
             mainContent.classList.toggle("sidebar-collapsed");
        });
