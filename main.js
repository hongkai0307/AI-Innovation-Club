document.addEventListener(
    "DOMContentLoaded",
    function () {


        // =========================================
        // COOKIE FUNCTIONS
        // =========================================

        function setCookie(name, value, days) {

            const date = new Date();

            date.setTime(
                date.getTime() +
                (days * 24 * 60 * 60 * 1000)
            );

            document.cookie =
                name +
                "=" +
                encodeURIComponent(value) +
                ";expires=" +
                date.toUTCString() +
                ";path=/;SameSite=Lax";
        }


        function getCookie(name) {

            const cookieName =
                name + "=";

            const cookies =
                document.cookie.split(";");


            for (
                let i = 0;
                i < cookies.length;
                i++
            ) {

                const cookie =
                    cookies[i].trim();


                if (
                    cookie.startsWith(cookieName)
                ) {

                    return decodeURIComponent(
                        cookie.substring(
                            cookieName.length
                        )
                    );
                }
            }

            return "";
        }



        // =========================================
        // COOKIE CONSENT
        // =========================================

        const cookieBanner =
            document.getElementById(
                "cookieBanner"
            );

        const cookieTitle =
            document.getElementById(
                "cookieTitle"
            );

        const cookieMessage =
            document.getElementById(
                "cookieMessage"
            );

        const cookieIcon =
            document.getElementById(
                "cookieIcon"
            );

        const cookieButtons =
            document.getElementById(
                "cookieButtons"
            );

        const acceptCookies =
            document.getElementById(
                "acceptCookies"
            );

        const declineCookies =
            document.getElementById(
                "declineCookies"
            );


        if (
            cookieBanner &&
            cookieTitle &&
            cookieMessage &&
            cookieIcon &&
            cookieButtons &&
            acceptCookies &&
            declineCookies
        ) {

            const cookieChoice =
                getCookie(
                    "cookieConsent"
                );


            // Hide if preference already exists
            if (cookieChoice !== "") {

                cookieBanner.style.display =
                    "none";
            }



            // ACCEPT
            acceptCookies.addEventListener(
                "click",
                function () {

                    setCookie(
                        "cookieConsent",
                        "accepted",
                        30
                    );


                    cookieIcon.textContent =
                        "✓";


                    cookieTitle.textContent =
                        "Cookies Accepted";


                    cookieMessage.textContent =
                        "Your cookie preference has been saved successfully.";


                    cookieButtons.style.display =
                        "none";


                    cookieBanner.classList.add(
                        "cookie-success"
                    );


                    setTimeout(
                        function () {

                            cookieBanner.classList.add(
                                "cookie-hide"
                            );

                        },
                        1200
                    );


                    setTimeout(
                        function () {

                            cookieBanner.style.display =
                                "none";

                        },
                        1700
                    );

                }
            );



            // DECLINE
            declineCookies.addEventListener(
                "click",
                function () {

                    setCookie(
                        "cookieConsent",
                        "declined",
                        30
                    );


                    cookieIcon.textContent =
                        "×";


                    cookieTitle.textContent =
                        "Cookies Declined";


                    cookieMessage.textContent =
                        "Your preference has been saved. Optional cookies will not be used.";


                    cookieButtons.style.display =
                        "none";


                    cookieBanner.classList.add(
                        "cookie-declined"
                    );


                    setTimeout(
                        function () {

                            cookieBanner.classList.add(
                                "cookie-hide"
                            );

                        },
                        1200
                    );


                    setTimeout(
                        function () {

                            cookieBanner.style.display =
                                "none";

                        },
                        1700
                    );

                }
            );

        }



        // =========================================
        // TOP TOPIC SCROLL
        // =========================================

        const topicContainer =
            document.getElementById(
                "topicContainer"
            );

        const scrollLeft =
            document.getElementById(
                "scrollLeft"
            );

        const scrollRight =
            document.getElementById(
                "scrollRight"
            );


        if (
            topicContainer &&
            scrollLeft &&
            scrollRight
        ) {

            scrollLeft.addEventListener(
                "click",
                function () {

                    topicContainer.scrollBy({
                        left: -350,
                        behavior: "smooth"
                    });

                }
            );


            scrollRight.addEventListener(
                "click",
                function () {

                    topicContainer.scrollBy({
                        left: 350,
                        behavior: "smooth"
                    });

                }
            );

        }



        // =========================================
        // COUNTDOWN TIMER
        // =========================================

        const daysElement =
            document.getElementById(
                "days"
            );

        const hoursElement =
            document.getElementById(
                "hours"
            );

        const minutesElement =
            document.getElementById(
                "minutes"
            );

        const secondsElement =
            document.getElementById(
                "seconds"
            );


        if (
            daysElement &&
            hoursElement &&
            minutesElement &&
            secondsElement
        ) {

            const challengeDate =
                new Date(
                    "2026-10-10T10:00:00"
                ).getTime();


            function updateCountdown() {

                const now =
                    new Date().getTime();


                const distance =
                    challengeDate - now;


                if (distance <= 0) {

                    daysElement.textContent =
                        "00";

                    hoursElement.textContent =
                        "00";

                    minutesElement.textContent =
                        "00";

                    secondsElement.textContent =
                        "00";

                    return;
                }


                const days =
                    Math.floor(
                        distance /
                        (1000 * 60 * 60 * 24)
                    );


                const hours =
                    Math.floor(
                        (
                            distance %
                            (1000 * 60 * 60 * 24)
                        )
                        /
                        (1000 * 60 * 60)
                    );


                const minutes =
                    Math.floor(
                        (
                            distance %
                            (1000 * 60 * 60)
                        )
                        /
                        (1000 * 60)
                    );


                const seconds =
                    Math.floor(
                        (
                            distance %
                            (1000 * 60)
                        )
                        /
                        1000
                    );


                daysElement.textContent =
                    String(days).padStart(
                        2,
                        "0"
                    );


                hoursElement.textContent =
                    String(hours).padStart(
                        2,
                        "0"
                    );


                minutesElement.textContent =
                    String(minutes).padStart(
                        2,
                        "0"
                    );


                secondsElement.textContent =
                    String(seconds).padStart(
                        2,
                        "0"
                    );

            }


            updateCountdown();


            setInterval(
                updateCountdown,
                1000
            );

        }

    }
);