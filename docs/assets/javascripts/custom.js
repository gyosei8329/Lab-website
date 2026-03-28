document.addEventListener("DOMContentLoaded", function() {
    // 檢查網頁中有沒有剛才設定的 hero-banner (確保這個特效只在首頁觸發)
    var heroBanner = document.getElementById("hero-banner");
    
    if (heroBanner) {
        function onScroll() {
            // 如果往下滾動超過 50px，就移除透明狀態 (恢復成天空藍)
            if (window.scrollY > 50) {
                document.body.classList.remove("transparent-header-active");
            } else {
                // 如果在最頂部，就加上透明狀態
                document.body.classList.add("transparent-header-active");
            }
        }
        
        // 監聽滾輪事件
        window.addEventListener("scroll", onScroll);
        // 網頁剛載入時先執行一次，確保一開始是透明的
        onScroll(); 
    }
});