const express = require("express");

const app = express();

// Simple Pagination

const users = [
    {
        id: 1,
        name: "Yousaf",
    },
    {
        id: 2,
        name: "Yousaf",
    },
    {
        id: 3,
        name: "Yousaf",
    },
    {
        id: 4,
        name: "Yousaf",
    },
    {
        id: 5,
        name: "Yousaf",
    },
    {
        id: 6,
        name: "Yousaf",
    },
    {
        id: 7,
        name: "Yousaf",
    },
    {
        id: 8,
        name: "Yousaf",
    },
    {
        id: 9,
        name: "Yousaf",
    },
    {
        id: 10,
        name: "Yousaf",
    },
    {
        id: 11,
        name: "Yousaf",
    },
    {
        id: 12,
        name: "Yousaf",
    },
    {
        id: 13,
        name: "Yousaf",
    },
    {
        id: 14,
        name: "Yousaf",
    },
    {
        id: 15,
        name: "Yousaf",
    },
    {
        id: 16,
        name: "Yousaf",
    },
    {
        id: 17,
        name: "Yousaf",
    },
    {
        id: 18,
        name: "Yousaf",
    },
    {
        id: 19,
        name: "Yousaf",
    },
    {
        id: 20,
        name: "Yousaf",
    },
];

app.get("/users", (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const result = users.slice(startIndex, endIndex);
    const results = {
        previous: null,
        next: null,
        result,
    };
    // Now pagination
    if (startIndex > 0) {
        results.previous = page - 1;
    }
    if (endIndex < users.length) {
        results.next = page + 1;
    }
    return res.json(results);
});

app.listen(5000, () => console.log("app started on port 3000"));
