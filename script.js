document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Chart.js Function
    function createChart(canvasId, label, data, color) {
        const ctx = document.getElementById(canvasId).getContext("2d");

        return new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [{
                    label: label,
                    data: data,
                    borderColor: color,
                    borderWidth: 2,
                    backgroundColor: color.replace('1)', '0.2)'),
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { ticks: { color: "#666" } },
                    y: { ticks: { color: "#666" } }
                },
                plugins: {
                    legend: { labels: { color: "#333" } }
                }
            }
        });
    }

    // Initialize Charts
    let salesChart = createChart("salesChart", "Sales", [10, 20, 15, 30, 25], "rgba(52, 152, 219, 1)");
    let revenueChart = createChart("revenueChart", "Revenue", [5, 15, 10, 25, 20], "rgba(231, 76, 60, 1)");

    // Dark Mode Toggle
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
});
