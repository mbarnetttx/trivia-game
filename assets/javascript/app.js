$(document).ready(function () {

     var myQuestions = [
            {
                question: "What company created the iPhone?",
                answers: {
                    a: "Pied Piper",
                    b: "Apple",
                    c: "Google",
                correctAnswer: "b"
            },
        
            {
                question: "Who founded the tech company 'Apple'?",
                answers: {
                    a: "Steve Jobs",
                    b: "Adam Sandler",
                    c: "Bill Gates",
                correctAnswer: "a"
            },
        
             {
                question: "What massively successful format came from the 'Adobe' company?",
                answers: {
                    a: "JPEG",
                    b: "PDF",
                    c: "GIF"
                },
                correctAnswer: "b"
            },

            {
                question: "What does CPU stand for?",
                answers: {
                    a: "Computer Payload Undefined",
                    b: "Captcha Protecting U",
                    c: "Central Processing Unit",
                }
            }
        ];
            

   


    //    make a timer
    
    time = 30
    timeLeft = setTimeout(countdown, 1000 * time);

    function countdown() {
        

        //     timeleft = -1
            checkWin()
        // }

        
    }




}





    function checkWin() {

        if
            
            rightAnswers++;
            console.log("Right!")
        })

    else
            
                wrongAnswers++;
                console.log("Wrong!")


                rightAnswers = 0;
                wrongAnswers = 0;
            }
    };

})

// write a function that calls the answers with id=true to be registered as the true answer
// write a function that IF TRUE answer = answer clicked, rightAnswers ++
// IF they click the wrong answer, wrongAnswers ++
