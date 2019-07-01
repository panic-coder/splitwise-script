module.exports = {
    "input": [{
        "paidBy": "A",
        "paidFor": [
            { "user": "A", "paid": "0" },
            { "user": "B", "paid": "100" },
            { "user": "C", "paid": "50" }
        ]
    }, {
        "paidBy": "A",
        "paidFor": [
            { "user": "A", "paid": "0" },
            { "user": "B", "paid": "0" },
            { "user": "C", "paid": "500" }
        ]
    }, {
        "paidBy": "B",
        "paidFor": [
            { "user": "A", "paid": "150" },
            { "user": "B", "paid": "0" },
            { "user": "C", "paid": "200" }
        ]
    }, {
        "paidBy": "C",
        "paidFor": [
            { "user": "A", "paid": "250" },
            { "user": "B", "paid": "200" },
            { "user": "C", "paid": "0" }
        ]
    }]
}