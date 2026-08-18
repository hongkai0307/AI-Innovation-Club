// ================================================
// AI & INNOVATION CLUB
// AI PAGE INTERACTIVE JAVASCRIPT
// ================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // =========================================
        // INTERACTIVE LEARNING TABS
        // =========================================

        const tabButtons =
            document.querySelectorAll(
                ".learning-tab"
            );


        const tabPanels =
            document.querySelectorAll(
                ".topic-panel"
            );


        function openTab(button) {


            const targetId =
                button.getAttribute(
                    "data-tab"
                );


            const targetPanel =
                document.getElementById(
                    targetId
                );


            if (!targetPanel) {
                return;
            }


            // Remove active from buttons

            tabButtons.forEach(
                function (item) {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            // Hide all panels

            tabPanels.forEach(
                function (panel) {

                    panel.classList.remove(
                        "active"
                    );

                }
            );


            // Activate selected tab

            button.classList.add(
                "active"
            );


            targetPanel.classList.add(
                "active"
            );


            // Remember selected tab

            localStorage.setItem(
                "selectedAITab",
                targetId
            );

        }


        // =========================================
        // TAB CLICK
        // =========================================

        tabButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        openTab(
                            button
                        );

                    }
                );

            }
        );


        // =========================================
        // RESTORE LAST TAB
        // =========================================

        const savedTab =
            localStorage.getItem(
                "selectedAITab"
            );


        if (savedTab) {


            const savedButton =
                document.querySelector(
                    '.learning-tab[data-tab="' +
                    savedTab +
                    '"]'
                );


            if (savedButton) {

                openTab(
                    savedButton
                );

            }

        }


        // =========================================
        // KEYBOARD ARROW CONTROL
        // =========================================

        tabButtons.forEach(
            function (button, index) {

                button.addEventListener(
                    "keydown",
                    function (event) {

                        let newIndex =
                            index;


                        if (
                            event.key ===
                            "ArrowRight"
                        ) {

                            newIndex++;

                            if (
                                newIndex >=
                                tabButtons.length
                            ) {

                                newIndex = 0;

                            }

                        }


                        else if (
                            event.key ===
                            "ArrowLeft"
                        ) {

                            newIndex--;

                            if (
                                newIndex < 0
                            ) {

                                newIndex =
                                    tabButtons.length - 1;

                            }

                        }


                        else {

                            return;

                        }


                        event.preventDefault();


                        tabButtons[
                            newIndex
                        ].focus();


                        openTab(
                            tabButtons[
                                newIndex
                            ]
                        );

                    }
                );

            }
        );


        // =========================================
        // TYPES OF AI CARD INTERACTION
        // =========================================

        const typeCards =
            document.querySelectorAll(
                ".type-card"
            );


        typeCards.forEach(
            function (card) {

                card.addEventListener(
                    "click",
                    function () {

                        typeCards.forEach(
                            function (item) {

                                item.classList.remove(
                                    "active-type"
                                );

                            }
                        );


                        card.classList.add(
                            "active-type"
                        );

                    }
                );

            }
        );


        // =========================================
        // SMOOTH HERO BUTTON
        // =========================================

        const startButton =
            document.querySelector(
                ".start-button"
            );


        if (startButton) {

            startButton.addEventListener(
                "click",
                function (event) {

                    const section =
                        document.getElementById(
                            "ai-learning"
                        );


                    if (section) {

                        event.preventDefault();


                        section.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        }


        // =========================================
        // CLICK EFFECT ON INFORMATION CARDS
        // =========================================

        const cards =
            document.querySelectorAll(
                ".real-app-card, " +
                ".daily-point, " +
                ".benefit-row, " +
                ".challenge-item"
            );


        cards.forEach(
            function (card) {

                card.addEventListener(
                    "click",
                    function () {

                        card.classList.add(
                            "card-clicked"
                        );


                        setTimeout(
                            function () {

                                card.classList.remove(
                                    "card-clicked"
                                );

                            },
                            200
                        );

                    }
                );

            }
        );


    }
);