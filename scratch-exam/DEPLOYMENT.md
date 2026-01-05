# Scratch 期末測驗系統 - 部署指南

## 📋 目錄
1. [系統需求](#系統需求)
2. [Firebase 設定](#firebase-設定)
3. [GitHub 部署](#github-部署)
4. [測試系統](#測試系統)
5. [常見問題](#常見問題)

## 系統需求

### 開發環境
- Git
- 文字編輯器（VSCode 推薦）
- 網頁瀏覽器（Chrome/Edge 推薦）

### 線上服務
- GitHub 帳號
- Google/Firebase 帳號

## Firebase 設定

### 步驟 1：創建 Firebase 專案

1. 前往 [Firebase Console](https://console.firebase.google.com/)
2. 點擊「新增專案」
3. 輸入專案名稱：`scratch-exam-system`（或自訂名稱）
4. 選擇是否啟用 Google Analytics（建議關閉，學生測驗不需要）
5. 點擊「建立專案」

### 步驟 2：啟用 Realtime Database

1. 在左側選單選擇「Realtime Database」
2. 點擊「建立資料庫」
3. 選擇資料庫位置：`asia-southeast1`（新加坡）
4. 安全性規則選擇「測試模式」（暫時允許讀寫）
5. 點擊「啟用」

### 步驟 3：設定安全規則

在 Realtime Database 的「規則」分頁，設定以下規則：

```json
{
  "rules": {
    "exams": {
      ".read": true,
      ".write": true
    },
    "leaderboard": {
      ".read": true,
      ".write": true
    }
  }
}
```

⚠️ **注意**：這是簡化的規則，適合學校內網環境。如果需要更嚴格的安全性，請參考 Firebase 文檔。

### 步驟 4：取得配置資訊

1. 點擊專案設定（齒輪圖示）
2. 選擇「專案設定」
3. 在「一般」分頁下找到「您的應用程式」
4. 點擊「網頁」圖示（</>）
5. 輸入應用程式名稱：`Scratch Exam Web`
6. **不要**勾選 Firebase Hosting
7. 複製顯示的配置程式碼

### 步驟 5：更新配置檔案

將複製的配置資訊更新到 `js/firebase-config.js`：

```javascript
export const firebaseConfig = {
    apiKey: "你的_API_KEY",
    authDomain: "你的_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://你的_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "你的_PROJECT_ID",
    storageBucket: "你的_PROJECT_ID.appspot.com",
    messagingSenderId: "你的_SENDER_ID",
    appId: "你的_APP_ID"
};
```

## GitHub 部署

### 步驟 1：創建 GitHub Repository

1. 登入 [GitHub](https://github.com)
2. 點擊右上角「+」→「New repository」
3. Repository 名稱：`scratch-exam-system`
4. 選擇「Public」（GitHub Pages 免費版需要公開）
5. **不要**勾選「Add a README file」
6. 點擊「Create repository」

### 步驟 2：上傳專案檔案

#### 方法 A：使用 GitHub 網頁介面（簡單）

1. 在 Repository 頁面，點擊「uploading an existing file」
2. 將所有專案檔案拖曳到上傳區域
3. 確保目錄結構正確：
   ```
   scratch-exam/
   ├── index.html
   ├── exam.html
   ├── typing.html
   ├── leaderboard.html
   ├── admin.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── firebase-config.js
   ├── images/
   │   └── typing-text.png
   └── data/
       └── questions.json
   ```
4. 填寫 Commit message：「Initial commit - Scratch exam system」
5. 點擊「Commit changes」

#### 方法 B：使用 Git 指令（進階）

```bash
# 在專案資料夾中
git init
git add .
git commit -m "Initial commit - Scratch exam system"
git branch -M main
git remote add origin https://github.com/你的用戶名/scratch-exam-system.git
git push -u origin main
```

### 步驟 3：啟用 GitHub Pages

1. 在 Repository 頁面，點擊「Settings」
2. 在左側選單找到「Pages」
3. Source 選擇：
   - Branch: `main`
   - Folder: `/ (root)`
4. 點擊「Save」
5. 等待 1-2 分鐘後，頁面上方會顯示網址：
   ```
   Your site is published at https://你的用戶名.github.io/scratch-exam-system/
   ```

### 步驟 4：測試部署

1. 開啟顯示的網址
2. 確認頁面正常載入
3. 測試登入功能
4. 進行一次完整測驗流程

## 測試系統

### 功能測試清單

#### ✅ 登入系統
- [ ] 可以輸入姓名、班級、座號
- [ ] 必填欄位驗證正常
- [ ] 成功跳轉到測驗頁面

#### ✅ 程式知識測驗
- [ ] 題目正確顯示（24題）
- [ ] 可以選擇答案
- [ ] 上一題/下一題按鈕正常
- [ ] 進度條更新正確
- [ ] 提交測驗成功

#### ✅ 打字測驗
- [ ] 計時器正常運作（8分鐘倒數）
- [ ] 打字內容圖片正確顯示
- [ ] 即時統計更新（速度、正確率）
- [ ] 時間到自動結束
- [ ] 成績成功儲存

#### ✅ 排行榜
- [ ] 班級排行榜正常顯示
- [ ] 校園排行榜正常顯示
- [ ] 打字排行榜正常顯示
- [ ] 資料即時更新

#### ✅ 管理後台
- [ ] 密碼驗證正常（預設：scratch2024）
- [ ] 統計資訊正確
- [ ] 可以匯出 CSV
- [ ] 可以匯出 JSON
- [ ] 可以刪除單筆資料

### 壓力測試

建議在正式施測前：
1. 邀請 5-10 位學生同時測試
2. 觀察 Firebase 資料庫是否正常
3. 確認排行榜即時更新
4. 檢查網路連線穩定性

## 常見問題

### Q1: Firebase 連線失敗

**問題**：頁面無法載入資料
**解決方案**：
1. 檢查 `js/firebase-config.js` 設定是否正確
2. 確認 Firebase Database 規則允許讀寫
3. 檢查瀏覽器 Console 錯誤訊息

### Q2: GitHub Pages 404 錯誤

**問題**：開啟網址顯示 404 Not Found
**解決方案**：
1. 確認 Repository 是 Public
2. 確認 GitHub Pages 已啟用
3. 等待 5-10 分鐘讓部署完成
4. 清除瀏覽器快取

### Q3: 打字測驗圖片無法顯示

**問題**：打字內容圖片不見
**解決方案**：
1. 確認 `images/typing-text.png` 檔案存在
2. 檢查檔案路徑是否正確
3. 確認圖片已上傳到 GitHub

### Q4: 排行榜沒有資料

**問題**：排行榜顯示空白
**解決方案**：
1. 確認至少有一位學生完成測驗
2. 檢查 Firebase Console 是否有資料
3. 重新整理頁面

### Q5: 管理員密碼忘記

**問題**：無法進入管理後台
**解決方案**：
1. 預設密碼是 `scratch2024`
2. 若要修改，編輯 `admin.html` 中的 `ADMIN_PASSWORD`
3. 重新部署到 GitHub

## 進階設定

### 自訂班級清單

編輯所有 HTML 檔案中的班級選項：
```html
<option value="三年甲班">三年甲班</option>
<option value="三年乙班">三年乙班</option>
<!-- 新增更多班級 -->
```

### 修改測驗時間

在 `typing.html` 中修改：
```javascript
let timeRemaining = 480; // 改為你要的秒數（例如：600 = 10分鐘）
```

### 調整題目

編輯 `data/questions.json` 檔案：
- 修改題目內容
- 新增/刪除題目
- 更新答案選項

### 更改評分方式

在 `typing.html` 中修改總分計算：
```javascript
totalScore: (examResult.score || 0) + (finalStats.wpm / 2)
// 改為你想要的計算方式
```

## 備份與恢復

### 定期備份

建議每週從管理後台匯出資料：
1. 登入管理後台
2. 點擊「匯出成績 JSON」
3. 儲存檔案到安全位置

### 恢復資料

如需恢復資料：
1. 前往 Firebase Console
2. 選擇 Realtime Database
3. 點擊「匯入 JSON」
4. 選擇備份檔案

## 技術支援

遇到問題時：
1. 檢查瀏覽器 Console 錯誤訊息
2. 查看 Firebase Console 資料狀態
3. 確認網路連線正常
4. 聯絡系統管理員

---

**祝測驗順利！** 🎉
