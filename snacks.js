function getInizials(name) {
    const [nome, cognome] = name.split(" ");
    return `${nome.charAt(0).toUpperCase()} ${cognome.charAt(0).toUpperCase()}`;
};

function createSlug(string) {
    if (!string) {
        throw new Error("Titolo non valido")
    }
    return string.toLowerCase().replaceAll(" ", "-");
};

function avarage(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
};

function isPalindrome(string) {
    const reversedString = string.trim().split("").reverse().join("").toLowerCase();
    return string.trim().toLowerCase() === reversedString;
};

function findPostById(posts, id) {
    if (isNaN(id)) {
        throw new Error("Id non valido");
    }
    posts.forEach(posts => {
        if (
            posts.id === undefined || posts.titolo === undefined || posts.slug === undefined
        ) {
            throw new Error("Post non valido");
        }
    })
    return posts.find(post => post.id === id) || null;
};

module.exports = {
    getInizials,
    createSlug,
    avarage,
    isPalindrome,
    findPostById
};