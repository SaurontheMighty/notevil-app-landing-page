document.addEventListener('DOMContentLoaded', function() {
    // QR Container effects
    const qrContainer = document.querySelector('.qrContainer');
    if (qrContainer) {
        qrContainer.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation and position based on mouse movement
            const rotateX = (y / rect.height - 0.5) * 20;
            const rotateY = (x / rect.width - 0.5) * 20;
            
            // Add moving class for smooth transition disable
            this.classList.add('moving');
            
            // Update the transform of the before element
            const beforeElement = this.querySelector('::before');
            if (beforeElement) {
                const moveX = (x / rect.width) * 100;
                const moveY = (y / rect.height) * 100;
                beforeElement.style.transform = `
                    translate(${moveX - 50}%, ${moveY - 50}%)
                    rotate(45deg)
                `;
            }
        });

        qrContainer.addEventListener('mouseleave', function() {
            this.classList.remove('moving');
            const beforeElement = this.querySelector('::before');
            if (beforeElement) {
                beforeElement.style.transform = 'translate(-50%, -50%) rotate(45deg)';
            }
        });
    }

    // Reviews Carousel
    const container = document.querySelector('.reviews-container');
    if (container) {
        const reviewsGroup = container.querySelector('.reviews-group');
        const prevButton = container.querySelector('.prev');
        const nextButton = container.querySelector('.next');
        let currentIndex = 0;
        let allReviews = [];
        const reviewsPerPage = 3;

        function truncateText(text, maxLength) {
            if (text.length <= maxLength) return text;
            return text.substr(0, text.lastIndexOf(' ', maxLength)) + '...';
        }

        function updateNavigationButtons() {
            // Disable prev button if at start
            prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
            prevButton.style.cursor = currentIndex === 0 ? 'default' : 'pointer';
            
            // Disable next button if at end
            const lastPossibleIndex = allReviews.length - reviewsPerPage - 1;
            nextButton.style.opacity = currentIndex >= lastPossibleIndex ? '0.5' : '1';
            nextButton.style.cursor = currentIndex >= lastPossibleIndex ? 'default' : 'pointer';
        }

        function showReviews() {
            const visibleReviews = allReviews.slice(currentIndex, currentIndex + reviewsPerPage + 1);
            const reviewsHTML = visibleReviews.map(review => `
                <div class="review-box">
                    <div class="review-header">
                        <h3>${review.title}</h3>
                        <div class="review-author">${review.author}</div>
                    </div>
                    <div class="review-stars">★★★★★</div>
                    <p class="review-text">${truncateText(review.content, 190)}</p>
                </div>
            `).join('');

            reviewsGroup.innerHTML = reviewsHTML;
            updateNavigationButtons();
        }

        function nextSet() {
            const lastPossibleIndex = allReviews.length - reviewsPerPage - 1;
            if (currentIndex < lastPossibleIndex) {
                currentIndex += reviewsPerPage;
                showReviews();
            }
        }

        function prevSet() {
            if (currentIndex > 0) {
                currentIndex -= reviewsPerPage;
                showReviews();
            }
        }

        async function initializeReviews() {
            try {
                const reviews = await getTopFiveStarReviews();
                
                if (!reviews) throw new Error('No reviews available');

                allReviews = reviews; // Store all reviews
                showReviews(); // Show initial set

            } catch (error) {
                console.error('Error setting up reviews:', error);
                // Fallback reviews
                allReviews = [];
                showReviews();
            }
        }

        // Event listeners for buttons
        nextButton.addEventListener('click', nextSet);
        prevButton.addEventListener('click', prevSet);

        // Initialize reviews
        initializeReviews();
    }
});

async function getTopFiveStarReviews() {
    try {
        const url = `https://itunes.apple.com/rss/customerreviews/id=1614071642/sortBy=mostHelpful/json`;
        const response = await fetch(url);
        const data = await response.json();
        const entries = data.feed.entry.slice(1); // skip first, it's app metadata
        
        // Filter 5-star reviews and get more of them
        const fiveStarReviews = entries
            .filter(r => r['im:rating'].label === '5')
            .map(review => ({
                title: review.title.label,
                author: review.author.name.label,
                content: review.content.label
            }));

        return fiveStarReviews;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        // Return fallback reviews if API fails
        return [];
    }
}

