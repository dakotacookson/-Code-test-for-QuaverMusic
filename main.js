let preamble = "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.";
function preambleparse() {

    // function splits the string into seprate words
    preamblesplit = preamble.split(" ")
    console.log(preamblesplit)

    // sets a counter  for all three points
    let TCounter = 0
    let ECounter = 0
    let TAndECounter = 0

    // for each word grabs the char at the 0 pos and checks if its an T if it is it adds to the counter
    preamblesplit.forEach(element => {
        let TfirstCount = element.charAt(0).toUpperCase()
        if (TfirstCount == "T") {
            TCounter++
        }

        // for each word grabs the char at the -1  pos or the last pos and checks if its an E if it is it adds to the counter
        let ElastCount = element.charAt(element.length - 1).toUpperCase()
        if (ElastCount == "E") {
            ECounter++
        }

        // for each word grabs the char at the -1  pos or the last pos and checks if its an a E and for each word grabs the char at the 0 pos and checks if its an T if both check are a match  is it adds to the counter 
        if (TfirstCount == "T" && ElastCount == "E") {
            TAndECounter++
        }
    });
    // grabs the body's wraper and body
    let body1 = document.querySelector("#BodyForView1");
    let body2 = document.querySelector("#BodyForView2");
    let body3 = document.querySelector("#BodyForView3");

    //  fills out the data on the webpage
    body1.innerHTML += `words beginning with T = ${TCounter} `
    body2.innerHTML += `words ending with E = ${ECounter} `
    body3.innerHTML += `words beginning with T and ending with E = "${TAndECounter} `
}
// calls the function
preambleparse()