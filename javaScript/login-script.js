import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { auth } from "./index-script-firebase-config.js";
//   登入頁面UI邏輯
// 抓取網頁上的元素
const openBtn = document.getElementById('open-btn');
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');

// 1. 點擊頁尾的 login 連結時，彈出登入視窗
openBtn.addEventListener('click', (e) => {
    e.preventDefault(); // 阻止 <a> 標籤跳頁
    loginModal.classList.add('active'); // 顯示彈窗
});

// 2. 點擊彈窗外圍空白處時，自動關閉登入視窗
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
    }
});


loginForm.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log("正在發送資料");
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("成功!!");
        window.location.href = './admin/channels-post.html';

    } catch (error){
        console.error("Firebase 錯誤代碼：", error.code);
        console.error("Firebase 錯誤訊息：", error.message);

        // 根據 Firebase 常見的錯誤代碼給予親切的提示
        if (error.code === 'auth/wrong-password') {
            alert("登入失敗：密碼輸入錯誤！");
        } else if (error.code === 'auth/user-not-found') {
            alert("登入失敗：找不到該管理員帳號！");
        } else {
            alert("登入失敗：" + error.message);
        }

        // 登入失敗後，自動清空密碼框並讓游標重新聚焦，方便重新輸入
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
}) 

