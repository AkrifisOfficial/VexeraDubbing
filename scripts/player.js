function renderPlayer(videoUrl) {
    const container = document.getElementById('player-container');
    container.innerHTML = '';

    if (videoUrl.includes('youtube.com')) {
        const videoId = videoUrl.split('v=')[1];
        container.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${videoId}" 
                    frameborder="0" 
                    allowfullscreen></iframe>
        `;
    } else if (videoUrl.includes('vk.com')) {
        container.innerHTML = `
            <iframe src="${videoUrl}" 
                    frameborder="0" 
                    allowfullscreen></iframe>
        `;
    }
}
