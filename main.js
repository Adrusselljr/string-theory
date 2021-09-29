function xify(str) {

    let output = ""
    for(let i = 0; i < str.length; i++) {
        output += "x"
    }
    return output

}
console.log(xify("hello"))
console.log(xify("hi there"))

function yellingChars(str) {

    let output = ""
    for(let i = 0; i < str.length; i++) {
        output = output + str[i] + "!"
    }
    return output
}
console.log(yellingChars("goodness"))
console.log(yellingChars("oh hello"))

function indexedChars(str) {

    let output = ""
    for(let i = 0; i < str.length; i++) {
        output = output + i + str[i]
    }
    return output

}
console.log(indexedChars("hello"))
console.log(indexedChars("bye"))

function numberedChars(str) {

    let output = ""
    for(let i = 0; i < str.length; i++) {
        output = output + "("+i+")" + str[i]
    }
    return output

}
console.log(numberedChars("hello"))
console.log(numberedChars("bye"))

function exclaim(str) {

    let output = ""
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "?" || str[i] === ".") {
            output += "!"
        }
        else {
            output += str[i]
        }
    }
    return output

}
console.log(exclaim("What are you doing? Are you a fool?"))
console.log(exclaim("This is fine."))

function repeatIt(str, num) {

    let output = ""
    while(num > 0) {
        output += str
        num--
    }
    return output

}
console.log(repeatIt("beetlejuice", 3))
console.log(repeatIt("oh hi!", 8))

function truncate(str, num) {

    let output = ""
    for(let i = 0; i < 15; i++) {
        output += str[i]
    }
    return output + "..."

}
console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."))
console.log(truncate("Well, that's just, like, your opinion man."))

function ciEmailify(str) {

    let output = ""
    for(let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            output += "."
        }
        else {
            output += str[i].toLowerCase()
        }
    }
    return output + "@codeimmersives.com"

}
console.log(ciEmailify("colin jaffe"))
console.log(ciEmailify("Anthony DeRosa"))

function reverse(str) {

    let output = ""
    for(let i = str.length - 1; i >= 0; i--) {
        output += str[i]
    }
    return output

}
console.log(reverse("colin"))
console.log(reverse("mesuara"))

function onlyVowels(str) {

    let output = ""
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            output += str[i]
        }
    }
    return output

}
console.log(onlyVowels("Colin Jaffe"))
console.log(onlyVowels("quickly"))
console.log(onlyVowels("Anthony DeRosa"))

// ----- STRETCH GOALS -----

function crazyCase(str) {

    let output = ""
    for(let i = 0; i < str.length; i++) {
        if(i % 2 === 0) {
            output += str[i].toLowerCase()
        }
        else {
            output += str[i].toUpperCase()
        }
    }
    return output

}
console.log(crazyCase("hello"))
console.log(crazyCase("multiple words here"))
console.log(crazyCase("YELLING"))