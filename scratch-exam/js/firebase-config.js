// Firebase 配置檔案
// Scratch 期末測驗系統

export const firebaseConfig = {
    apiKey: "AIzaSyDjmZsRv5G7V9JQkW77oFZoZiqj1mcdRIQ",
    authDomain: "scratch-exam.firebaseapp.com",
    databaseURL: "https://scratch-exam-default-rtdb.firebaseio.com",
    projectId: "scratch-exam",
    storageBucket: "scratch-exam.firebasestorage.app",
    messagingSenderId: "880157817156",
    appId: "1:880157817156:web:cf05f57ea8101865857f11",
    measurementId: "G-7BN8BRYJJV"
};

// 重要提醒：
// 1. 請確認已在 Firebase Console 啟用 Realtime Database
// 2. 設定資料庫規則為測試模式（允許讀寫）：
/*
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
*/
// 3. 資料庫位置建議選擇：asia-southeast1（新加坡）
