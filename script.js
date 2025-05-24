document.addEventListener("DOMContentLoaded", () => { 
    const memes = document.querySelectorAll(".meme");
    memes.forEach((meme, i) => {
      setTimeout(() => {
        meme.classList.remove("hidden");
        meme.classList.add("show");
      }, 500 + i * 500);
    });
  
    const status = document.getElementById("status");
    const statuses = [
      "💬 'Шкаф не тумба, Тимон не Пумба'",
      "👾 'Легче попой сьехать с тёрки, чем учиться на пятёрки'",
      "🌈 'Работа – не волк. Работа – это ворк, а волк – это ходить.'",
      "🔥 'Пишу стили, как дышу'",
    ];
    let index = 0;
  
    status.addEventListener("click", () => {
      index = (index + 1) % statuses.length;
      status.textContent = statuses[index];
    });
  
    // 💡 Модальное окно
    const interestInfo = {
      "Бои": " Я много лет дерусь и могу сказать, что это и в правду интересно. Главное, чтобы противнвк был равен тебе, иначе ты не получишь эмоций или какого либо интереса. ",
      "Музыка": "Музыка - это хороший способ разообразить скучный день",
      "Веб-разработка": "Ето интересно. Тыкаешь по кнопкам тык-тык.",
      "Гулянки": "Гулять весело и получать по заднице всело. А что если это совместить?"
    };
  
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const closeModal = document.getElementById("closeModal");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.textContent.trim();
        modalTitle.textContent = title;
        modalDesc.textContent = interestInfo[title] || "Информация скоро появится.";
        modal.style.display = "flex";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  