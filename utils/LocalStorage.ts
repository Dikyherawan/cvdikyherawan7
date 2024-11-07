const RATING_KEY = 'portfolio-rating';

export function getRatingFromStorage(): number {
    try {
        const rating = localStorage.getItem(RATING_KEY);
        return rating ? parseFloat(rating) : 0;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return 0;
    }
}

export function setRatingInStorage(value: number): void {
    try {
        localStorage.setItem(RATING_KEY, value.toString());
    } catch (error) {
        console.error('Error writing to localStorage:', error);
    }
}