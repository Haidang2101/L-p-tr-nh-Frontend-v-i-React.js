const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};

extractData = (response) => {
    console.log(
        `
        Title: ${response.data.title}, 
        Author: [object Object],
        AuthorName: ${response.data.author.name},
        AuthorEmail: ${response.data.author.email}
        `
    );
}

extractData(response);