const {
    getInizials,
    createSlug,
    avarage,
    isPalindrome,
    findPostById,
    addPost,
    removePost
} = require("./snacks.js");

let posts;
beforeEach(() => {
    posts = [
        { id: 1, titolo: "Introduzione a JavaScript", slug: "introduzione-a-javascript" },
        { id: 2, titolo: "Cos'è il DOM", slug: "cos-e-il-dom" },
        { id: 3, titolo: "Guida a React", slug: "guida-a-react" }
    ];
})


describe("Manipolazione di stringhe", () => {
    // Snack 1
    test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
        expect(getInizials("Mario Rossi")).toBe("M R");
        expect(getInizials("luca Rossi")).toBe("L R");
    });

    // Snack 5
    test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
        expect(isPalindrome("anna")).toBeTruthy();
        expect(isPalindrome("casa")).toBeFalsy();
    });
});


describe("Manipolazione di array", () => {
    // Snack 3
    test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
        expect(avarage([5, 15])).toBe(10);
    });

    // Snack 7 
    test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
        expect(findPostById(posts, 1)).toEqual({ id: 1, titolo: "Introduzione a JavaScript", slug: "introduzione-a-javascript" });
        expect(findPostById(posts, 99)).toBe(null);
        expect(() => findPostById(posts, "ciao")).toThrow("Id non valido");
    });

    // Snack 8 - BONUS
    test("Dopo aver aggiunto un post con la funzione addPost, l\'array posts deve contenere un elemento in più", () => {
        addPost(posts, { id: 4, titolo: "Nuovo Post", slug: "nuovo-post" });
        expect(posts).toHaveLength(4);
    });

    test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
        removePost(posts, 2);
        expect(posts).toHaveLength(2);
    });

    // Snack 9 - BONUS
    test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.", () => {
        expect(() => addPost(posts, { id: 2, titolo: "Post Duplicato", slug: "post-duplicato" })).toThrow("Id già esistente");
        expect(() => addPost(posts, { id: 5, titolo: "Guida a React", slug: "guida-a-react" })).toThrow("Slug già esistente");
    });

});


describe("Generazione di slug", () => {
    // Snack 2
    test("La funzione createSlug restituisce una stringa in lowercase.", () => {
        expect(createSlug("Stringa in LowerCase")).toBe("stringa-in-lowercase");
    });

    // Snack 4
    test("La funzione createSlug sostituisce gli spazi con -.", () => {
        expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
    });

    // Snack 6
    test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
        expect(() => createSlug("")).toThrow("Titolo non valido");
        expect(() => createSlug(null)).toThrow("Titolo non valido");
    });

    // Snack 10 - BONUS
    test("Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già.", () => {
        expect(createSlug("Guida a React", posts)).toBe("guida-a-react-1");
    });
});