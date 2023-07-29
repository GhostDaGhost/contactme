/**
    * A function that is triggered when the page needs to be scrolled up to the top
    * @returns `void` - This returns nothing.
*/
export const ScrollPageToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
