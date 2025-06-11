(() => {
    let lastChecked = null;

    const handleCheckboxClick = (e) => {
        const isCheckbox = e.target?.matches('input[type="checkbox"]');
        if (!isCheckbox) return;

        const checkboxes = [...document.querySelectorAll('input[type="checkbox"]')];

        if (!e.shiftKey || !lastChecked) {
            lastChecked = e.target;
            return;
        }

        const start = checkboxes.indexOf(lastChecked);
        const end = checkboxes.indexOf(e.target);
        if (start === -1 || end === -1) return;

        const [from, to] = [Math.min(start, end), Math.max(start, end)];

        const shouldCheck = lastChecked.checked;
        checkboxes.slice(from, to + 1).forEach(cb => {
            if (cb.checked !== shouldCheck) cb.click();
        });

        lastChecked = e.target;
    };

    const showToast = (message) => {
        const toast = document.createElement("div");
        toast.textContent = message;

        Object.assign(toast.style, {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "rgba(255, 108, 47, 1)",
            color: "#fff",
            padding: "10px 16px",
            borderRadius: "6px",
            fontSize: "14px",
            zIndex: 10000,
            transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
            pointerEvents: "none",
            transform: "translateY(0)"
        });

        document.body.appendChild(toast);

        // Bounce out after 3 seconds
        setTimeout(() => {
            toast.style.transform = "translateY(120px)";
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    };

    document.addEventListener("click", handleCheckboxClick);
    showToast("✅ HubSpot MultiSelect extension loaded.");
})();
