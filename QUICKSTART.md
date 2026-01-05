# ⚡ 快速開始指南

## 5 分鐘完成部署

### 第一步：Firebase 設定（2 分鐘）

1. **建立專案**
   - 前往 https://console.firebase.google.com/
   - 點擊「新增專案」
   - 名稱：`scratch-exam`
   - 建立專案

2. **啟用資料庫**
   - 左側選單 → Realtime Database
   - 建立資料庫 → 測試模式 → 啟用

3. **取得設定**
   - 專案設定 → 一般 → 您的應用程式
   - 點擊「</>」圖示
   - 複製 firebaseConfig

4. **更新設定檔**
   - 開啟 `js/firebase-config.js`
   - 貼上你的 firebaseConfig
   - 儲存檔案

### 第二步：GitHub Pages 部署（3 分鐘）

1. **上傳到 GitHub**
   - 前往 https://github.com/new
   - Repository 名稱：`scratch-exam-system`
   - Public → Create repository
   - 上傳所有專案檔案

2. **啟用 GitHub Pages**
   - Settings → Pages
   - Source: main branch
   - Save

3. **取得網址**
   - 等待 1-2 分鐘
   - 網址：`https://你的用戶名.github.io/scratch-exam-system/`

### 完成！🎉

現在你可以：
- ✅ 讓學生開始測驗
- ✅ 查看即時排行榜
- ✅ 管理後台查看成績（密碼：scratch2024）

## 重要檔案檢查清單

確認以下檔案都已正確設定：

- [x] `js/firebase-config.js` - Firebase 設定已更新
- [x] `images/typing-text.png` - 打字圖片存在
- [x] `data/questions.json` - 測驗題目正確
- [x] 所有 HTML 檔案都已上傳
- [x] CSS 和 JS 檔案都已上傳

## 測試流程

1. 開啟網站首頁
2. 輸入測試資料（姓名、班級、座號）
3. 完成程式測驗（隨便選幾題）
4. 完成打字測驗（可提前交卷）
5. 查看排行榜是否顯示
6. 進入管理後台確認資料

## 需要協助？

查看完整文檔：
- 📖 [README.md](README.md) - 專案說明
- 📋 [DEPLOYMENT.md](DEPLOYMENT.md) - 詳細部署指南

常見問題：
- Firebase 無法連線 → 檢查 firebase-config.js
- GitHub Pages 404 → 確認 Repository 是 Public
- 排行榜無資料 → 先完成一次測驗
- 圖片無法顯示 → 確認 images 資料夾已上傳

---

**預祝測驗順利！** 🚀
