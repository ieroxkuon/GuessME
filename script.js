document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("greeting");
    const suggestionElement = document.getElementById("suggestion");
    const suggestBtn = document.getElementById("suggestBtn");

    // Danh sách gợi ý
    const activities = [
        "Đi dạo công viên",
        "Xem một bộ phim thú vị",
        "Học một kỹ năng mới",
        "Nấu một món ăn ngon",
        "Đọc một cuốn sách",
        "Tập thể dục hoặc yoga",
        "Gọi điện cho bạn bè",
        "Viết nhật ký",
        "Chơi một trò chơi",
        "Thiền hoặc thư giãn"
    ];

    // Cập nhật lời chào theo thời gian
    function updateGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) {
            greetingElement.textContent = "Chào buổi sáng!";
        } else if (hour < 18) {
            greetingElement.textContent = "Chào buổi chiều!";
        } else {
            greetingElement.textContent = "Chào buổi tối!";
        }
    }

    // Tạo gợi ý ngẫu nhiên
    function getRandomSuggestion() {
        const randomIndex = Math.floor(Math.random() * activities.length);
        suggestionElement.textContent = activities[randomIndex];
    }

    // Cập nhật lời chào ngay khi tải trang
    updateGreeting();

    // Xử lý sự kiện nhấn nút
    suggestBtn.addEventListener("click", getRandomSuggestion);
});