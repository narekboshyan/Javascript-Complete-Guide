const posts = [
    {
        title: "Post One",
        body: "This is post one",
    },
    {
        title: "Post Two",
        body: "This is post two",
    },
];

const getPosts = () => {
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true;
            if (!error) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
};

createPost({ title: "Post Three", body: "This is post three" })
    .then(getPosts)
    .catch((err) => console.log(err));
