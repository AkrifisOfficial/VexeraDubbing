async function loadAnimeForAdmin() {
    const animeList = await loadAnime();
    const select = document.getElementById('anime-select');
    
    animeList.forEach(anime => {
        const option = document.createElement('option');
        option.value = anime.id;
        option.textContent = anime.title;
        select.appendChild(option);
    });
}

async function addAnime() {
    const title = document.getElementById('anime-title').value;
    const imageUrl = document.getElementById('anime-image').value;
    
    await db.collection("anime").add({
        title,
        imageUrl
    });
    
    alert("Аниме добавлено!");
    loadAnimeForAdmin();
}

async function addEpisode() {
    const animeId = document.getElementById('anime-select').value;
    const episodeNumber = parseInt(document.getElementById('episode-number').value);
    const videoUrl = document.getElementById('episode-url').value;
    
    await db.collection("episodes").add({
        animeId,
        episodeNumber,
        videoUrl
    });
    
    alert("Серия добавлена!");
}
