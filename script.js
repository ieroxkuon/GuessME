document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("greeting");
    const suggestionElement = document.getElementById("suggestion");
    const suggestBtn = document.getElementById("suggestBtn");
    const shareBtn = document.getElementById("shareBtn");
    const historyList = document.getElementById("historyList");
    const activityType = document.getElementById("activityType");
    const body = document.body;

    // Danh sách hoạt động thư giãn, đơn giản
    const activities = [
        { text: "Nghe một playlist nhạc thư giãn", type: "indoor" },
        { text: "Đi dạo trong công viên gần nhà", type: "outdoor" },
        { text: "Vẽ một bức tranh doodle đơn giản", type: "creative" },
        { text: "Đọc một chương sách yêu thích", type: "indoor" },
        { text: "Tập yoga nhẹ nhàng 10 phút", type: "indoor" },
        { text: "Tưới cây hoặc chăm sóc vườn nhỏ", type: "outdoor" },
        { text: "Viết nhật ký về một điều vui hôm nay", type: "creative" },
        { text: "Xem một tập phim sitcom ngắn", type: "indoor" },
        { text: "Nấu một món ăn nhẹ như bánh mì kẹp", type: "indoor" },
        { text: "Chụp ảnh phong cảnh hoàng hôn", type: "outdoor" },
        { text: "Thiền định 5 phút để thư giãn", type: "indoor" },
        { text: "Sắp xếp lại góc bàn làm việc", type: "indoor" },
        { text: "Đi bộ quanh khu phố và nghe podcast", type: "outdoor" },
        { text: "Tạo một playlist nhạc mới", type: "creative" },
        { text: "Làm một cốc trà hoặc cà phê và thưởng thức", type: "indoor" },
        { text: "Ngắm sao trên bầu trời đêm", type: "outdoor" },
        { text: "Vẽ mandala để thư giãn", type: "creative" },
        { text: "Gọi điện trò chuyện với bạn thân", type: "indoor" },
        { text: "Tập hít thở sâu trong 5 phút", type: "indoor" },
        { text: "Đi chợ và mua một bó hoa tươi", type: "outdoor" }
    ];

    let history = [];

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

    // Lấy gợi ý ngẫu nhiên theo bộ lọc
    function getRandomSuggestion() {
        const selectedType = activityType.value;
        const filteredActivities = selectedType === "all" 
            ? activities 
            : activities.filter(activity => activity.type === selectedType);
        
        if (filteredActivities.length === 0) {
            suggestionElement.textContent = "Không có hoạt động nào phù hợp!";
            shareBtn.classList.add("hidden");
            return;
        }

        const randomIndex = Math.floor(Math.random() * filteredActivities.length);
        const suggestion = filteredActivities[randomIndex].text;
        suggestionElement.textContent = suggestion;
        shareBtn.classList.remove("hidden");

        // Cập nhật lịch sử
        history.unshift(suggestion);
        if (history.length > 5) history.pop();
        updateHistory();
    }

    // Cập nhật danh sách lịch sử
    function updateHistory() {
        historyList.innerHTML = "";
        history.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            li.classList.add("animate-fade-in");
            historyList.appendChild(li);
        });
    }

    // Chia sẻ gợi ý
    shareBtn.addEventListener("click", () => {
        if (navigator.share) {
            navigator.share({
                title: "Hôm nay làm gì?",
                text: `Hôm nay tôi sẽ: ${suggestionElement.textContent}`,
                url: window.location.href
            }).catch(err => console.error("Lỗi chia sẻ:", err));
        } else {
            alert("Trình duyệt không hỗ trợ chia sẻ. Bạn có thể sao chép gợi ý!");
        }
    });

    // Cập nhật khi tải trang
    updateGreetingAndTheme();
    
    // Xử lý sự kiện
    suggestBtn.addEventListener("click", getRandomSuggestion);
    activityType.addEventListener("change", () => {
        suggestionElement.textContent = "";
        shareBtn.classList.add("hidden");
    });
});