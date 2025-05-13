document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("greeting");
    const suggestionElement = document.getElementById("suggestion");
    const suggestBtn = document.getElementById("suggestBtn");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const loadingSpinner = document.getElementById("loadingSpinner");
    const body = document.body;

    // Danh sách hoạt động thư giãn cho sinh viên 20-25 tuổi, dùng Facebook, YouTube, Discord, Google, Spotify, app vẽ, Steam, thích anime và văn hóa Nhật
    const activities = [
        "Xem vlog YouTube thư giãn",
        "Vẽ tranh trên app",
        "Lướt ảnh aesthetic Facebook",
        "Chơi game Steam đẹp mắt",
        "Xem stream Discord chill",
        "Xem anime ngắn YouTube",
        "Lướt meme hài Facebook",
        "Ngắm fanart trên Google",
        "Xem video du lịch YouTube",
        "Vẽ doodle trên app",
        "Lướt ảnh nghệ thuật Facebook",
        "Chơi game Steam phong cảnh",
        "Xem video Discord thư giãn",
        "Xem phim ngắn trên YouTube",
        "Tìm hình nền Google",
        "Lướt bài viết Facebook chill",
        "Chơi game Steam màu pastel",
        "Xem video vẽ trên YouTube",
        "Vẽ phong cảnh trên app",
        "Lướt ảnh thiên nhiên Facebook",
        "Tìm ảnh anime trên Google",
        "Xem video cafe YouTube",
        "Pha cà phê hòa tan",
        "Đốt nến thơm rẻ",
        "Nấu mì gói thơm",
        "Nhâm nhi bim bim",
        "Đốt nhang thơm tiết kiệm",
        "Pha trà xanh túi lọc",
        "Xịt nước hoa nhẹ",
        "Nấu cháo gói nhanh",
        "Pha cà phê sữa đá",
        "Đốt tinh dầu rẻ",
        "Nấu súp gói thơm",
        "Pha trà đào lon",
        "Xịt xịt thơm phòng",
        "Nấu mì trộn cay",
        "Pha sữa Milo nóng",
        "Đốt nến mùi vani",
        "Pha trà chanh tươi",
        "Nấu phở gói nhanh",
        "Xịt tinh dầu bạc hà",
        "Pha cà phê đen đá",
        "Ăn mì gói cay",
        "Gặm bánh Pocky socola",
        "Làm sandwich đơn giản",
        "Uống trà sữa lon",
        "Ăn bánh quy",
        "Nhâm nhi kẹo dẻo",
        "Làm sữa chua trộn",
        "Ăn mì trộn trứng",
        "Nhâm nhi hạt dưa",
        "Gặm bánh mì pate",
        "Uống nước ngọt có ga",
        "Nhâm nhi kẹo bạc hà",
        "Làm trứng chiên nhanh",
        "Uống cà phê lon",
        "Nhâm nhi socola đen",
        "Làm bánh mì bơ",
        "Uống trà chanh lon",
        "Nghe lo-fi trên Spotify",
        "Chat Discord thư giãn",
        "Xem ASMR trên YouTube",
        "Nghe nhạc game Steam",
        "Tìm âm thanh Google",
        "Nghe podcast trên Spotify",
        "Xem video nhạc Discord",
        "Nghe mưa rơi YouTube",
        "Nghe J-pop trên Spotify",
        "Chat voice Discord chill",
        "Xem ASMR nấu ăn",
        "Nghe nhạc phim Steam",
        "Tìm tiếng sóng Google",
        "Nghe acoustic trên Spotify",
        "Nghe stream Discord nhẹ",
        "Xem video piano YouTube",
        "Nghe lo-fi game Steam",
        "Tìm tiếng chim Google",
        "Nghe K-pop trên Spotify",
        "Xem ASMR vẽ tranh",
        "Nghe nhạc chill Discord",
        "Nghe gió thổi YouTube",
        "Dọn bàn học gọn",
        "Chơi game Steam nhẹ",
        "Lướt meme trên Facebook",
        "Thiền với Spotify",
        "Sắp xếp kênh Discord",
        "Tìm ảnh nền Google",
        "Viết status trên Facebook",
        "Chơi game mobile chill",
        "Dọn góc phòng nhỏ",
        "Lướt tin tức Facebook",
        "Tập thở với Spotify",
        "Sắp xếp file Discord",
        "Tìm quote hay Google",
        "Comment bài Facebook vui",
        "Chơi game offline nhẹ",
        "Trang trí góc học",
        "Lướt video ngắn Facebook",
        "Nghe hướng dẫn thiền Spotify",
        "Sắp xếp vai trò Discord",
        "Tìm mẹo học Google",
        "Viết note cảm xúc",
        "Tập động tác giãn cơ",
        "Xem AMV anime YouTube",
        "Vẽ nhân vật anime",
        "Lướt fanpage anime Facebook",
        "Chơi game anime Steam",
        "Pha trà matcha túi",
        "Đốt nến mùi sakura",
        "Làm onigiri đơn giản",
        "Ăn bánh mochi",
        "Nhâm nhi kẹo matcha",
        "Nghe nhạc anime Spotify",
        "Xem ASMR Nhật YouTube",
        "Nghe tiếng chuông gió",
        "Tìm ảnh manga Google",
        "Chơi game Nhật Steam",
        "Gấp origami đơn giản",
        "Xem video hanami YouTube",
        "Vẽ tranh phong cách Nhật",
        "Lướt bài cosplay Facebook",
        "Pha trà hoa nhài",
        "Ăn thạch trái cây",
        // 60 new activities
        "Xem opening anime YouTube",
        "Vẽ cảnh anime app",
        "Lướt ảnh cosplay Facebook",
        "Chơi game visual novel",
        "Pha trà sen túi",
        "Đốt nến mùi trà",
        "Làm cơm nắm nhanh",
        "Ăn kẹo dẻo ume",
        "Nhâm nhi rong biển sấy",
        "Nghe OST anime Spotify",
        "Xem ASMR origami YouTube",
        "Nghe tiếng koto YouTube",
        "Tìm tranh ukiyo-e Google",
        "Chơi game RPG Steam",
        "Tập viết kanji cơ bản",
        "Xem video trà đạo",
        "Vẽ chibi trên app",
        "Lướt nhóm anime Facebook",
        "Pha cà phê túi lọc",
        "Ăn bánh dorayaki",
        "Nghe tiếng rừng YouTube",
        "Tìm ảnh kimono Google",
        "Chơi game thư giãn Steam",
        "Gấp hạc giấy đơn giản",
        "Xem video sumo YouTube",
        "Vẽ cảnh sakura app",
        "Lướt bài Nhật Facebook",
        "Pha trà ô long",
        "Ăn mứt trái cây",
        "Nghe nhạc enka Spotify",
        "Xem ASMR thư pháp",
        "Nghe tiếng suối YouTube",
        "Tìm ảnh samurai Google",
        "Chơi game indie Steam",
        "Tập vẽ manga cơ bản",
        "Xem video matsuri YouTube",
        "Vẽ nhân vật chibi",
        "Lướt ảnh kawaii Facebook",
        "Pha trà gừng tươi",
        "Ăn đậu phộng rang",
        "Nghe nhạc lo-fi Nhật",
        "Xem ASMR trà đạo",
        "Nghe tiếng cá YouTube",
        "Tìm ảnh onsen Google",
        "Chơi game pixel Steam",
        "Sắp xếp ảnh anime",
        "Xem video bento YouTube",
        "Vẽ tranh anime app",
        "Lướt fanpage Nhật Facebook",
        "Pha trà bạc hà",
        "Ăn bánh gạo nướng",
        "Nghe nhạc shamisen Spotify",
        "Xem ASMR gấp giấy",
        "Nghe tiếng gió chimes",
        "Tìm ảnh chùa Nhật",
        "Chơi game otome Steam",
        "Tập viết haiku ngắn",
        "Xem video ikebana YouTube",
        "Vẽ cảnh Nhật app",
        "Lướt bài manga Facebook"
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
    
    // Weather Fetching
const weatherWidget = document.querySelector("#weatherWidget");
const apiKey = "60b0126e9ffbc27a747b2c03af299d58"; // Replace with your API key
const city = "Hanoi";
const units = "metric";

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}& lang=vi`);
        const data = await response.json();

        const temp = Math.round(data.main.temp);
        const condition = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        weatherWidget.innerHTML = `
            <img src="${iconUrl}" alt="${condition}" class="w-6 h-6">
            <span>${city}: ${temp}°C, ${condition}</span>
        `;
    } catch (error) {
        weatherWidget.innerHTML = `<span>Không lấy được thời tiết 😥</span>`;
        console.error("Weather fetch error:", error);
    }
}

fetchWeather();

    // Lấy gợi ý ngẫu nhiên
    async function getRandomSuggestion() {
        suggestBtn.disabled = true;
        loadingSpinner.classList.remove("hidden");
        suggestionElement.textContent = "";

        await new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập loading

        const randomIndex = Math.floor(Math.random() * activities.length);
        const suggestion = activities[randomIndex];
        suggestionElement.textContent = suggestion;

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