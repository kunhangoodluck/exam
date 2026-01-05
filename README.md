# Scratch 期末測驗系統

## 功能特色

### 測驗模組
1. **程式知識測驗** - 24題 Scratch 程式概念題
2. **中文打字測驗** - 8分鐘打字測驗（王維《鹿柴》）
   - 即時速度統計（字/分鐘）
   - 錯字率計算
   - 進度追蹤

### 排行榜系統
- 班級排行榜
- 校園排行榜
- 即時更新成績

## 技術架構

- **前端**: HTML5, CSS3, Vanilla JavaScript
- **資料儲存**: Firebase Realtime Database
- **部署**: GitHub Pages
- **認證**: 學生登入系統

## 部署步驟

### 1. 創建 GitHub Repository
```bash
# 在 GitHub 創建新倉庫，例如: scratch-exam-system
```

### 2. 設定 Firebase
1. 前往 [Firebase Console](https://console.firebase.google.com/)
2. 創建新專案
3. 啟用 Realtime Database
4. 取得配置資訊並更新 `js/firebase-config.js`

### 3. 本地開發
```bash
# 克隆專案
git clone https://github.com/YOUR_USERNAME/scratch-exam-system.git
cd scratch-exam-system

# 使用本地伺服器測試
python -m http.server 8000
```

### 4. 部署到 GitHub Pages
1. 進入 Repository Settings
2. 找到 Pages 設定
3. Source 選擇 main branch
4. 儲存後等待部署完成

## 資料夾結構

```
scratch-exam/
├── index.html              # 登入頁面
├── exam.html              # 程式知識測驗
├── typing.html            # 打字測驗
├── leaderboard.html       # 排行榜
├── admin.html             # 管理後台
├── css/
│   └── style.css          # 樣式表
├── js/
│   ├── firebase-config.js # Firebase 設定
│   ├── exam.js           # 測驗邏輯
│   ├── typing.js         # 打字測驗
│   └── leaderboard.js    # 排行榜
├── images/
│   └── typing-text.png   # 打字內容圖片
└── data/
    └── questions.json    # 測驗題目
```

## 使用流程

1. 學生輸入姓名、班級
2. 進行程式知識測驗（24題）
3. 進行打字測驗（8分鐘）
4. 查看個人成績和排行榜

## 管理功能

管理員可以：
- 查看所有學生成績
- 匯出成績資料
- 清空測驗記錄
- 設定測驗時間限制
