/**
 * Utility functions for handling media URLs, specifically YouTube.
 */

/**
 * Checks if a URL is a YouTube URL.
 * @param {string} url 
 * @returns {boolean}
 */
export const isYouTubeUrl = (url) => {
    if (!url) return false;
    return url.includes('youtube.com') || url.includes('youtu.be');
};

/**
 * Extracts the YouTube video ID from various URL formats.
 * @param {string} url 
 * @returns {string|null}
 */
export const getYouTubeId = (url) => {
    if (!url) return null;

    // Regular YouTube URL: https://www.youtube.com/watch?v=VIDEO_ID
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        return match[2];
    }

    return null;
};

/**
 * Returns the HQ thumbnail URL for a YouTube video.
 * @param {string} url 
 * @returns {string}
 */
export const getYouTubeThumbnail = (url) => {
    const videoId = getYouTubeId(url);
    if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return url;
};

/**
 * Returns the embed URL for a YouTube video.
 * @param {string} url 
 * @returns {string|null}
 */
export const getYouTubeEmbedUrl = (url) => {
    const videoId = getYouTubeId(url);
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=0`;
    }
    return null;
};
