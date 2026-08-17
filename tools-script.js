const USERNAME = "1274014";
const API_URL = 'https://api.bgm.tv/v0/users/1274014/collections?subject_type=2&type=3&limit=30';

async function getMyBangumiAnime() {
    const container = document.getElementById("anime-list");

    try {
        const response = await fetch(API_URL, {
            method: "GET",
            fetch: {
                "User-Agent": "MyNewTabApp/1.0 (https://bgm.tv)"
            }
        });
        if (!response.ok) {
            throw new Error('連線失敗:${response.status}')
        }

        const result = await response.json();

        loading.innerHTML = "";

        result.data.forEach(item => {
      const anime = item.subject;
      const title = anime.name_cn || anime.name; // 有中文名先用中文名
      const cover = anime.images?.medium || "";  // 動畫封面
      const epStatus = item.ep_status || 0;     // 當前看到第幾集
      const animeid = item.subject.id;  // 動漫ID

      // 建立 HTML 元素
      const card = document.createElement("div");
      card.className = "anime-card";
      card.innerHTML = `<a href=https://bgm.tv/subject/${animeid} target="_blank" style=" text-decoration: none;"><div class="anime-item">
        <img src="${cover}" alt="${title}" class="anime-img"/>
        <p class="anime-title">${title}</p>
        <p class="ep">進度：第 ${epStatus} 話</p>
      </div></a>
        
      `;

      container.appendChild(card);
    });
    } catch (error) {
        console.error("抓取失敗：", error);
        container.innerText = "無法載入收藏，請檢查用戶 ID 是否正確。";
    }
}

getMyBangumiAnime();