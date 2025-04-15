function getInizials(name) {
    const [nome, cognome] = name.split(" ");
    return `${nome.charAt(0).toUpperCase()} ${cognome.charAt(0).toUpperCase()}`;
};

function createSlug(string, posts) {
    if (!string) {
        throw new Error("Titolo non valido")
    }
    let slug = string.toLowerCase().replaceAll(" ", "-");
    if (posts) {
        for (let i = 1; i < posts.length; i++) {
            const post = posts[i];
            if (post.slug === slug) {
                return slug + "-1";
            }
        }
    }
    return slug;
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

function addPost(posts, post) {
    const ids = posts.map(post => post.id);
    const slugs = posts.map(post => post.slug);
    if (ids.includes(post.id)) {
        throw new Error("Id già esistente");
    }
    if (slugs.includes(post.slug)) {
        throw new Error("Slug già esistente");
    }
    posts.push(post);
};

function removePost(posts, id) {
    const index = posts.findIndex(post => post.id === id);
    posts.splice(index, 1);
};

module.exports = {
    getInizials,
    createSlug,
    avarage,
    isPalindrome,
    findPostById,
    addPost,
    removePost
};