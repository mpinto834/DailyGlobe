import React, { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
    useEffect(() => {
        document.title = title ? `${title} | Daily Globe` : 'Daily Globe - World News';

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || 'Leading source for world news, interviews, and journal entries.');
        }

        // You would typically handle other meta tags here as well
    }, [title, description, keywords]);

    return null;
};

export default SEO;
