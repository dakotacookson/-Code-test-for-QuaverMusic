
let Data = "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.";



//Here is an easy test to check funtionality this is done corectly
// T should return 5 t
//  E should return 5
//  T and E combained should return 4
let TestData = "The. the, the? THE! to. he?"

PreambleParse = {
    PreambleParser() {
        // utilizing regexp to remove ending punc
        let reg = Data.replace(/[,]|[.]|[?]|[!]/g, " ")

        // splits on space ((change out data for test data if you would like to test))
        let preamblespliter = reg.split(" ")

        // sets a counter  for all three points
        let TCounter = 0
        let ECounter = 0
        let TAndECounter = 0

        // for each word grabs the char at the 0 pos and checks if its an T if it is it adds to the counter
        preamblespliter.forEach(element => {
            let TfirstCount = element.charAt(0).toUpperCase()
            if (TfirstCount == "T") {
                TCounter++
            }

            // for each word grabs the char at the -1  pos or the last pos and checks if its an E if it is it adds to the counter
            let ElastCount = element.charAt(element.length - 1).toUpperCase()
            if (ElastCount == "E") {
                ECounter++
            }

            // for each word grabs the char at the -1  pos or the last pos and checks if its an a E
            // and for each word grabs the char at the 0 pos and checks if its an T
            // if both check are a match  is it adds to the counter
            if (TfirstCount == "T" && ElastCount == "E") {
                TAndECounter++
            }
        });

        // grabs the body's wraper and body
        let body1 = document.querySelector("#BodyForView1");

        //  fills out the data on the webpage based on the counter info
        body1.innerHTML =
    `words beginning with T = ${TCounter}
    <br> words that  End with E = ${ECounter}
    <br> words beginning with T and End with E = ${TAndECounter}`
    }
}

// calls the function
PreambleParse.PreambleParser()
