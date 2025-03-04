    // Custom Sehri & Aftari Timings
    const timings = {
        "04-03-2025": { sehri: "05:22 AM", aftari: "06:29 PM" },
        "05-03-2025": { sehri: "05:20 AM", aftari: "06:30 PM" },
    };

    function updateTime() {
        let now = new Date();
        let formattedDate = now.getDate().toString().padStart(2, '0') + "-" + 
                            (now.getMonth() + 1).toString().padStart(2, '0') + "-" + 
                            now.getFullYear();
        
        if (timings[formattedDate]) {
            let sehri = timings[formattedDate].sehri;
            let aftari = timings[formattedDate].aftari;

            document.getElementById("dateDisplay").innerText = `Date: ${formattedDate}`;
            document.getElementById("sehriTime").innerText = sehri;
            document.getElementById("iftarTime").innerText = aftari;

            let aftariTime = new Date(now.toDateString() + " " + aftari);
            let sehriTime = new Date(now.toDateString() + " " + sehri);
            if (sehri.includes("AM")) sehriTime.setDate(sehriTime.getDate() + 1);

            let timeDiff = aftariTime - now;

            if (timeDiff > 0) {
                updateCountdown(timeDiff);
                document.getElementById("countdown-title").innerText = "Aftaar Remaining Time";
                document.getElementById("footerText").innerText = "Prepare for Aftaar!";
            } else {
                let sehriDiff = sehriTime - now;
                updateCountdown(sehriDiff);
                document.getElementById("iftarBox").style.display = "none";
                document.getElementById("countdown-title").innerText = "Sehri Remaining Time";
                document.getElementById("footerText").innerText = "Eat Suhoor on Time!";
            }
        } else {
            document.getElementById("countdown-title").innerText = "No Timing Available";
        }
    }

    function updateCountdown(ms) {
        let seconds = Math.floor(ms / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        minutes %= 60;
        seconds %= 60;

        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }

    setInterval(updateTime, 1000);
    updateTime();
