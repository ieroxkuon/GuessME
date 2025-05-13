document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("greeting");
    const suggestionElement = document.getElementById("suggestion");
    const suggestBtn = document.getElementById("suggestBtn");
    const shareBtn = document.getElementById("shareBtn");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const loadingSpinner = document.getElementById("loadingSpinner");
    const body = document.body;

    // Danh sách hoạt động thư giãn, giải trí cho người 20-25 tuổi
    const activities = [
        "Xem một tập phim trên Netflix hoặc YouTube",
        "Chơi một ván game mobile ngắn",
        "Nghe podcast về chủ đề bạn yêu thích",
        "Tập một bài workout ngắn tại nhà",
        "Lướt TikTok hoặc Instagram để giải trí",
        "Đi dạo công viên và chụp ảnh aesthetic",
        "Thử một quán cà phê mới trong khu phố",
        "Đạp xe quanh khu vực gần nhà",
        "Tham gia một buổi chạy bộ nhẹ với bạn bè",
        "Ghé thăm một cửa hàng sách cũ",
        "Tạo một video TikTok hoặc Reels sáng tạo",
        "Vẽ hoặc tô màu trên ứng dụng kỹ thuật số",
        "Thử viết một bài thơ hoặc câu chuyện ngắn",
        "Tự làm một món đồ thủ công đơn giản",
        "Học một điệu nhảy ngắn qua YouTube",
        "Hẹn bạn bè đi ăn tối và trò chuyện",
        "Tổ chức một buổi chơi board game với bạn bè",
        "Tham gia một sự kiện cộng đồng gần nhà",
        "Chat video với một người bạn lâu không gặp",
        "Cùng bạn bè thử một trò chơi nhóm online"
    ];

    // Cập nhật lời chào và chủ đề theo thời gian
    function updateGreetingAndTheme() {
        const hour = new Date().getHours();
        if (hour < 12) {
            greetingElement.textContent = "Chào buổi sáng!";
            body.classList.remove("bg-afternoon", "bg-evening");
            body.classList.add("bg-morning");
        } else if (hour < 18) {
            greetingElement.textContent = "Chào buổi chiều!";
            body.classList.remove("bg-morning", "bg-evening");
            body.classList.add("bg-afternoon");
        } else {
            greetingElement.textContent = "Chào buổi tối!";
            body.classList.remove("bg-morning", "bg-afternoon");
            body.classList.add("bg-evening");
        }
    }

    // Lấy gợi ý ngẫu nhiên
    async function getRandomSuggestion() {
        suggestBtn.disabled = true;
        loadingSpinner.classList.remove("hidden");
        suggestionElement.textContent = "";
        shareBtn.classList.add("hidden");

        await new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập loading

        const randomIndex = Math.floor(Math.random() * activities.length);
        const suggestion = activities[randomIndex];
        suggestionElement.textContent = suggestion;
        shareBtn.classList.remove("hidden");

        suggestBtn.disabled = false;
        loadingSpinner.classList.add("hidden");
    }


    // Chuyển đổi chế độ tối
    darkModeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("darkMode", document.documentElement.classList.contains("dark"));
    });

    // Khôi phục chế độ tối
    if (localStorage.getItem("darkMode") === "true") {
        document.documentElement.classList.add("dark");
    }

    // Cập nhật khi tải trang
    updateGreetingAndTheme();
    
    // Xử lý sự kiện
    suggestBtn.addEventListener("click", getRandomSuggestion);
});