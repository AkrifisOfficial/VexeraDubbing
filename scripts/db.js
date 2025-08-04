// Загрузка списка аниме
async function loadAnime() {
    const snapshot = await db.collection("anime").get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Загрузка эпизодов аниме
async function loadEpisodes(animeId) {
    const snapshot = await db.collection("episodes")
        .where("animeId", "==", animeId)
        .orderBy("episodeNumber")
        .get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
