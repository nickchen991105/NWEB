
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { auth } from "./index-script-firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

onAuthStateChanged(auth, (user) =>{
    if (user) {
        const panel = document.getElementById("admin-panel");
    panel.innerHTML = `
      <h2>管理員部落格後台</h2>
      <input type="text" id="title" placeholder="請輸入發想標題">
      <textarea id="content" placeholder="請輸入點子內容"></textarea>
      <textarea id="img-url-input" placeholder="請輸入img url"></textarea>
      <button onclick="uploadIdea()">發布到「正在嘗試分頁」</button>
      <button onclick="handleLogout()">登出</button>
      
    `;
    
    
    // 顯示後台、隱藏 Loading
    panel.style.display = "block";
    document.getElementById("loading").style.display = "none";

  } else {
    // ❌ 2. 沒登入，直接踹走，他什麼都看不到
    window.location.href = "../index.html";
    }
} )

const logoutBtn = document.getElementById('logout-btn')

window.handleLogout = async function() {
  try {
    await signOut(auth); // 🪐 銷毀 LocalStorage 的 Token
    alert("登出成功！");
    window.location.href = "../index.html"; // 踹回登入頁（請確認你的 index.html 相對路徑對不對）
  } catch (error) {
    console.error("登出失敗：", error);
  }
};

window.uploadIdea = async function() {
  // 抓取畫面上輸入框的值
  const titleText = document.getElementById("title").value;
  const contentText = document.getElementById("content").value;

  if (!titleText || !contentText) {
    alert("標題和內容不能空著喔！");
    return;
  }

  try {
    // 這裡放你原本的 Firestore 上傳程式碼
    // await addDoc(collection(db, "blog_ideas"), { ... });
    alert("發想上傳成功！");
  } catch (error) {
    console.error("上傳失敗：", error);
    alert("上傳失敗：" + error.message);
  }
};

// window.uploadIdea = async function() {
//     let rawDriveUrl = document.getElementById("img-url-input").value; // 假設你後台多了一個圖片輸入框
//     let finalImageUrl = "";
//     if (rawDriveUrl.includes("drive.google.com")) {
//         // 利用正則表達式把中間那串圖片 ID 抓出來
//         const matches = rawDriveUrl.match(/\/d\/([^/]+)/);
//         if (matches && matches[1]) {
//             const imageId = matches[1];
//             // 這是 Google Drive 專用的直連格式
//             finalImageUrl = `https://lh3.googleusercontent.com/d/${imageId}`;
//         }
//     } else {
//         // 如果是普通網址或本地路徑，維持原樣
//         finalImageUrl = rawDriveUrl || "./img/default.png"; 
//     }

// };