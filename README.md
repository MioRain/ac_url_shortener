# 短址產生器

## 功能說明

1. 將輸入的網址轉換為本網站的短網址。
2. 輸入本網站的短網址即可重新導向原輸入網址。

## 環境建置
- Visual Studio Code
- Node.js(16.15.0) + Express(4.18.1)
- Express-handlebars(6.0.6)
- Mongoose(6.3.5) + Mongoose-connect(0.0.3)
- dotenv(16.0.1)
- nodemon(2.0.16)

## 安裝與執行步驟
1. 使用終端機(Terminal)下載此專案
```
git clone https://github.com/MioRain/ac_url_shortener.git
```
2. 進入專案資料夾並載入相關套件
```
cd ac_url_shortener && npm install
```
2. 於根目錄創建 .env 檔案，輸入以下資料並將 id:password 改為欲使用的 MongoDB Atlas 帳號:密碼  
MONGODB_URI = mongodb+srv://`id:password`@cluster0.un1ij.mongodb.net/restaurant-list?retryWrites=true&w=majority

3. 啟動伺服器
```
npm run dev
```
4. 當出現以下畫面，即可於瀏覽器網址內輸入 `http://localhost:3000` 進入短址產生器囉！
```
Express server is running on http://localhost:3000
MongoDB connected!
```