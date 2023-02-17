const fs = require("fs")

// Synchronous [Difficulty: EASY]

// Read Data
const data = fs.readFileSync("./fake-app.csv", "utf-8")
console.log(data)

// Write data
fs.writeFileSync("./app.txt", data, "utf-8")
console.log("BERHASIL WRITE")


// ================================================================
// Asynchronous [Difficulty: HARD]

fs.readFile("./fake-app.csv", "utf-8", (err, data) => {
    if(err) {
        console.log(err);
    }

    const result = data.split("\n")
    result.shift();
   
    let arrayApp = []
    for(let i = 0; i < result.length; i++) {
        const splittedString = result[i].split(",");
        // console.log(splittedString, `<<<<<<<<<<< INDEX ${i}`)


        const newObject = {
            id: splittedString[0],
            title: splittedString[1]
        }
        arrayApp.push(newObject)
    }
    console.log(arrayApp)

    fs.writeFile("./arrayapp.pdf", JSON.stringify(arrayApp), "utf-8", (err, data) => {
        if(err) {
            console.log(err);
        }

        console.log("Write successfully")
    })
})

