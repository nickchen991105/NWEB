const USERNAME = "1274014";
const API_URL = 'https://api.bgm.tv/v0/users/1274014/collections?subject_type=2&type=3';

async function getMyBangumiAnime() {
    const container = document.getElementById("anime-list");

    try {
        const response = await fetch(API_URL)
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
      const summary = anime.short_summary || "暫無簡介"; //簡介

      // 建立 HTML 元素
      const card = document.createElement("div");
      card.className = "anime-card";
      card.innerHTML = `<div class="anime-item"><a href=https://bgm.tv/subject/${animeid} target="_blank" style=" text-decoration: none;">
        
      <div class="card-content">
      <img src="${cover}" alt="${title}" class="anime-img"/>
        <p class="anime-title">${title}</p></div>

        <p2 class="ep">進度：第 ${epStatus} 話</p2>
        <p class="anime-more">${summary}</p>
        </a>
        </div>
        
      `;

      container.appendChild(card);
    });
    } catch (error) {
        console.error("抓取失敗：", error);
        container.innerText = "連線失敗原因：${error.name} - ${error.message}";
    }
}

getMyBangumiAnime();