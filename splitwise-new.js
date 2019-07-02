// var input = require('./input-new')
var input = {
    "input": [{
        "paidBy": "A",
        "paidFor": [
            {
                "user": "A",
                "paid": "0"
            },
            {
                "user": "B",
                "paid": "0"
            },{
                "user": "C",
                "paid": "300"
            },
            {
                "user": "D",
                "paid": "35"
            },
            {
                "user": "E",
                "paid": "35"
            }
        ]
    }, {
        "paidBy": "B",
        "paidFor": [
            {
                "user": "A",
                "paid": "0"
            },
            {
                "user": "B",
                "paid": "0"
            },
            {
                "user": "C",
                "paid": "0"
            },
            {
                "user": "D",
                "paid": "40"
            },
            {
                "user": "E",
                "paid": "10"
            }
        ]
    },
    {
        "paidBy": "B",
        "paidFor": [
            {
                "user": "A",
                "paid": "0"
            },
            {
                "user": "B",
                "paid": "0"
            },
            {
                "user": "C",
                "paid": "10"
            },
            {
            "user": "D",
            "paid": "0"
            },
            {
            "user": "E",
            "paid": "0"
            }]
    }, {
        "paidBy": "C",
        "paidFor": [
             {
                "user": "A",
                "paid": "0"
            },
            {
                "user": "B",
                "paid": "0"
            },
            {
                "user": "C",
                "paid": "0"
            },
            {
            "user": "D",
            "paid": "10"
        },
        {
            "user": "E",
            "paid":"0"
        }
        ]
    }, {
        "paidBy": "D",
        "paidFor": [
         {
                "user": "A",
                "paid": "0"
            },
            {
                "user": "B",
                "paid": "0"
            },
            {
                "user": "C",
                "paid": "0"
            },
            {
              "user": "D",
              "paid": "0"
            },
            {
            "user": "E",
            "paid": "10"
        }]
    }, {
        "paidBy": "E",
        "paidFor": [
             {
                "user": "A",
                "paid": "10"
            },
            {
                "user": "B",
                "paid": "0"
            },
            {
                "user": "C",
                "paid": "0"
            },
            {
            "user": "D",
            "paid": "0"
        },
        {
            "user": "E",
            "paid": "0"
        }
        ]
    }]
};

function simplifyDebts() {
    // var data = [];
    var output = [];
    var inputArray = input.input;
    var userName = [];
    inputArray.forEach(element => {
        if (userName.length === 0) {
            userName.push(element.paidBy);
        } else {
            var index = -1;
            index = userName.indexOf(element.paidBy);
            if (index == -1) {
                userName.push(element.paidBy);
            }
        }
    })
    console.log(userName);
    console.log("-------------------------------");
    
    inputArray.forEach(element => {
        var person = element.paidBy;
        var paidByArray = [];
        for (var i = 0; i < element.paidFor.length; i++) {
            // var user = element.paidFor[i];
            var user = {
                user: element.paidFor[i].user,
                paid: element.paidFor[i].paid
            }
            // console.log("28---------- ",user);

            paidByArray.push(user);
        }
        var data = {
            paidBy: person,
            paidFor: paidByArray
        }

        if (output.length === 0) {
            output.push(data);
        } else {
            var flag = {
                personFlag: false,
                index: -1
            };
            for (var i = 0; i < output.length; i++) {
                if (output[i].paidBy === person) {
                    flag.personFlag = true;
                    flag.index = i;
                }
            }
            if (flag.personFlag) {
                if (output[flag.index].paidBy == person) {
                    for (var i = 0; i < output[flag.index].paidFor.length; i++) {
                        if (output[flag.index].paidFor[i].user == data.paidFor[i].user) {
                            output[flag.index].paidFor[i].paid = Number(output[flag.index].paidFor[i].paid) + Number(data.paidFor[i].paid)
                        }
                    }
                }
            } else {
                output.push(data);
            }
        }
    });
    var balance = [];
    var index = 0;
    output.forEach(element => {
        var balance_data = {
            user: element.paidBy,
            balance: 0
        }
        for (var i = 0; i < output[index].paidFor.length; i++) {
            balance_data.balance = balance_data.balance + Number(output[index].paidFor[i].paid);
        }
        balance.push(balance_data);
        index++;
    });
    // console.log(JSON.stringify(balance));
// 
    // console.log(JSON.stringify(output));
    var i = 0;
    var gettingDebt = [];
    output.forEach(element => {
        var owe = {
            from: element.paidBy,
            by: element.paidFor
        }
        // console.log(owe);

        output.forEach(element_owe => {
            // console.log(element_owe.index);
            if (element != element_owe) {
                for (var j = 0; j < owe.by.length; j++) {
                    // owe.by[j].user
                    for (var k = 0; k < element_owe.paidFor.length; k++) {
                        if (owe.from !== element_owe.paidBy && owe.from === element_owe.paidFor[k].user && owe.by[j].user === element_owe.paidBy && element.paidFor[j].paid !== 0 && element_owe.paidFor[k].paid !== 0) {
                            // if (element_owe.paidFor[k].user == owe.from) {
                            // if (Number(owe.by[j].paid > Number(element_owe.paidFor[k].paid))) {
                            owe.by[j].paid = Number(element.paidFor[j].paid) - Number(element_owe.paidFor[k].paid)
                            // }
                            // }
                        }
                    }
                }
            }
        });
        gettingDebt.push(owe)
        // console.log("----------------------------------------------------",owe);
        // console.log(owe);
        i++;
    });
    // console.log(JSON.stringify(gettingDebt));
    // gettingDebt[0]
    // console.log(gettingDebt[0].by"");
    gettingDebt.forEach(element => {
        for (var i = 0; i < element.by.length; i++) {
            if (element.by[i].paid !== 0) {
                console.log(element.by[i].user, " owes ", Math.abs(element.by[i].paid), " to ", element.from);
            }
        }
        console.log("-------------------------------");
    });

}

simplifyDebts();