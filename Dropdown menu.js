// Run this code ONLY after the whole page has finished loading
document.addEventListener("DOMContentLoaded", function () {

    // This is the horizontally scrollable navbar area
    const scroller = document.querySelector(".toastmasters-navbar .navbar-collapse");

    // This function positions the dropdown menu directly under its toggle button
    function positionMenu(toggle, menu) {

        // Get the toggle button's exact position on the screen
        // (toggle = the link you click, like "Excom Members" or "Club Members")
        const rect = toggle.getBoundingClientRect();

        // Make the dropdown menu use fixed positioning
        // so it stays attached to the toggle even when the navbar scrolls
        menu.style.position = "fixed";

        // Place the dropdown menu directly below the toggle button
        menu.style.top = rect.bottom + "px";

        // Align the dropdown menu horizontally with the toggle button
        menu.style.left = rect.left + "px";

        // Allow the menu to size itself based on its content
        menu.style.width = "max-content";

        // Make sure the dropdown appears above all other elements
        menu.style.zIndex = 5000;
    }

    // Loop through every dropdown in the navbar
    document.querySelectorAll(".nav-item.dropdown").forEach(function (item) {

        // 🔹 THIS is the toggle button (the clickable link that opens the dropdown)
        // Example: "Excom Members", "Club Members"
        const toggle = item.querySelector(".dropdown-toggle");

        // 🔹 THIS is the dropdown menu that appears when the toggle is clicked
        const menu = item.querySelector(".dropdown-menu");

        // When the user clicks the toggle button
        toggle.addEventListener("click", function () {

            // Wait a little longer (50ms) for Bootstrap to fully open the menu,
            // then position the menu under the toggle button
            setTimeout(() => positionMenu(toggle, menu), 50);
        });

        // When the navbar is scrolled horizontally
        scroller.addEventListener("scroll", function () {

            // Only reposition the menu if it is currently open
            if (menu.classList.contains("show")) {

                // Move the dropdown so it stays aligned with the toggle button
                positionMenu(toggle, menu);
            }
        });
    });
});
