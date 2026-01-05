# 🔥 Firebase Realtime Database 設定指南

## ✅ Firebase 配置已完成

你的 Firebase 專案配置資訊：
- **專案 ID**: scratch-exam
- **專案名稱**: scratch-exam
- **區域**: 預設

## 📋 重要：立即完成以下設定

### 步驟 1：啟用 Realtime Database

1. **前往 Firebase Console**
   - 網址：https://console.firebase.google.com/project/scratch-exam/database
   
2. **建立 Realtime Database**
   - 點擊左側選單「建構」→「Realtime Database」
   - 點擊「建立資料庫」按鈕
   
3. **選擇資料庫位置**
   - 建議選擇：**asia-southeast1 (Singapore)** 
   - 這是離台灣最近的伺服器，速度最快
   
4. **設定安全性規則**
   - 選擇「以測試模式啟動」
   - 點擊「啟用」

### 步驟 2：設定資料庫規則

資料庫建立後，請確認規則設定：

1. 點擊「規則」分頁
2. 將規則改為以下內容：

```json
{
  "rules": {
    "exams": {
      ".read": true,
      ".write": true,
      ".indexOn": ["class", "completedTime"]
    },
    "leaderboard": {
      ".read": true,
      ".write": true,
      ".indexOn": ["class", "totalScore", "typingWPM"]
    }
  }
}
```

3. 點擊「發布」

### 步驟 3：確認 Database URL

確認你的資料庫 URL 是：
```
https://scratch-exam-default-rtdb.firebaseio.com
```

如果不同，請更新 `js/firebase-config.js` 中的 `databaseURL`。

---

## 🔍 如何確認設定成功

### 方法 1：直接訪問資料庫 URL

在瀏覽器開啟：
```
https://scratch-exam-default-rtdb.firebaseio.com/.json
```

應該會看到：
- 成功：顯示 `null` 或 `{}` 
- 失敗：顯示錯誤訊息

### 方法 2：在 Firebase Console 測試

1. 前往 Realtime Database
2. 點擊「資料」分頁
3. 手動新增測試資料：
   - 點擊「+」
   - 名稱：`test`
   - 值：`hello`
   - 儲存

如果能成功新增，表示設定正確！

---

## 🎯 設定完成後的下一步

### 1. 測試連線

建立一個簡單的測試 HTML 檔案：

```html
<!DOCTYPE html>
<html>
<head>
    <title>Firebase 連線測試</title>
</head>
<body>
    <h1>Firebase 連線測試</h1>
    <button onclick="testConnection()">測試連線</button>
    <div id="result"></div>

    <script type="module">
        import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
        import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

        const firebaseConfig = {
            apiKey: "AIzaSyDjmZsRv5G7V9JQkW77oFZoZiqj1mcdRIQ",
            authDomain: "scratch-exam.firebaseapp.com",
            databaseURL: "https://scratch-exam-default-rtdb.firebaseio.com",
            projectId: "scratch-exam",
            storageBucket: "scratch-exam.firebasestorage.app",
            messagingSenderId: "880157817156",
            appId: "1:880157817156:web:cf05f57ea8101865857f11"
        };

        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

        window.testConnection = async function() {
            try {
                await set(ref(database, 'test'), {
                    message: 'Hello Firebase!',
                    timestamp: Date.now()
                });
                document.getElementById('result').innerHTML = 
                    '<p style="color: green;">✅ 連線成功！Firebase 已正常運作</p>';
            } catch (error) {
                document.getElementById('result').innerHTML = 
                    '<p style="color: red;">❌ 連線失敗：' + error.message + '</p>';
            }
        };
    </script>
</body>
</html>
```

### 2. 部署到 GitHub Pages

現在你的 Firebase 設定已完成，可以：

1. 上傳所有檔案到 GitHub
2. 啟用 GitHub Pages
3. 開始測試！

---

## ⚠️ 重要安全提醒

### 測試模式規則的限制

目前的規則允許任何人讀寫資料，**僅適合：**
- ✅ 學校內網環境
- ✅ 短期測驗使用
- ✅ 非敏感資料

### 如果需要長期使用或對外開放

建議改用更嚴格的規則：

```json
{
  "rules": {
    "exams": {
      ".read": true,
      ".write": "auth != null"
    },
    "leaderboard": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
```

並搭配 Firebase Authentication。

---

## 📊 Firebase 免費方案限額

### Realtime Database 免費額度
- **同時連線**：100 個
- **儲存空間**：1 GB
- **下載流量**：10 GB/月

### 對於學校測驗來說
- ✅ 100 個同時連線 = 可支援 100 位學生同時測驗
- ✅ 1 GB 儲存 = 可儲存數千筆學生資料
- ✅ 10 GB 流量 = 足夠數百次測驗使用

**結論：免費方案完全夠用！**

---

## 🆘 疑難排解

### 問題 1：無法連線到資料庫

**可能原因：**
- Realtime Database 尚未啟用
- Database URL 錯誤
- 規則設定錯誤

**解決方法：**
1. 確認 Realtime Database 已啟用
2. 檢查 databaseURL 是否正確
3. 確認規則允許讀寫

### 問題 2：CORS 錯誤

**可能原因：**
- 本地開啟 HTML 檔案（file:// 協議）

**解決方法：**
- 使用本地伺服器：`python -m http.server 8000`
- 或直接部署到 GitHub Pages

### 問題 3：權限錯誤 (Permission Denied)

**可能原因：**
- 資料庫規則太嚴格

**解決方法：**
- 檢查規則是否允許讀寫
- 暫時使用測試模式規則

---

## 📞 需要協助？

**Firebase Console：** https://console.firebase.google.com/project/scratch-exam

**查看資料庫：** https://console.firebase.google.com/project/scratch-exam/database

**設定規則：** https://console.firebase.google.com/project/scratch-exam/database/rules

---

**設定完成後記得測試一次完整流程！** ✨
