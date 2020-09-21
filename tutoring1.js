// Questions array
var questions = [{

    question: "Spock is famous for his Vulcan logic. His father is a Vulcan Embassador. What species is Spocks mother?",
    answerList: ["Klingon", "Romulan", "Human", "Vulcan"],
    answer: 2
}, {
    question: "In Star Trek: Deep Space Nine, Worf marries one of his crew mates. Who does he marry?",
    answerList: ["Jadzia Dax", "Lwaxana Troi", "Kira Nerys", "Deanna Troi"],
    answer: 0
}, {
    question: "In Star Trek: The Next Generation, Captain Picard gets assimilated by the Borg. What is his Borg designation?",
    answerList: ["Seven of Nine", "Locutos of Borg", "Hugh of Borg", "Picard of Borg"],
    answer: 1
}, {
    question: "In Star Trek IV: The Voyage Home, the crew of the Enterprise travel back in time to retrieve an animal to help them communicate with an alien probe. Which animal did they retrieve?",
    answerList: ["Woolly Mammoth", "Blue Nose Dolphin", "Tiger Shark", "Humpback Whale"],
    answer: 3
}, {
    question: "Neelix helps guide Voyager through the Delta Quadrant. Neelix wears many hats aboard Voyager, including a Chef's hat. What other role does Neelix assume?",
    answerList: ["Security Officer", "Chief Medical Officer", "Morale Officer", "None"],
    answer: 2

}, {
    question: "Nichelle Nichols plays Lt. Nyota Uhara in The Original Series and the films that follow. Nichols nearly left the show in the 1960's but was convinced to stay because of the social impacts Uhara had as a female, African American bridge officer. Who convinced Nichols to stay?",
    answerList: ["Gene Roddenberry", "Martin Luther King, Jr", "Malcolm X", "Leonard Nemoy"],
    answer: 1
}, {
    question: "Which famous scientist appeared as himself in Star Trek: The Next Generation?",
    answerList: ["Stephen Hawking", "Noam Chomsky", "Steven Weinberg", "Wernher von Braun"],
    answer: 0

}, {
    question: "Data is a unique android with a strong desire to better understand human nature. Data decides to have a child he names Lal. He does the unthinkable and allows Lal to choose its own gender and appearance. What does Lal choose?",
    answerList: ["Human Female", "Klingon Male", "Klingon Female", "Betazoid Female"],
    answer: 0

}, {
    question: "Starfleet Academy trains new cadets with a simulation of a no-win scenario called: (HINT: Stacy gave us the answer in class)",
    answerList: ["Darmok and Jalad at Tanagra", "Q's Paradise", "Tomagachi Maru", "Kobiyashi Maru"],
    answer: 3
}, {

    question: "Majel Barrett, married to Star Trek creator Gene Roddenberry, is appropriately known as the Mother of Star Trek. She has played a variety of characters throughout the Star Trek universe, including Nurse Chapel and Lwaxana Troi. What was her first Trek appearance? (HINT: Currently played by Rebecca Romijn on Star Trek: Discovery)",
    answerList: ["Nurse Chapel", "Computer", "Number One", "Doctor Pulaski"],
    answer: 2
}];


function storeQuestions(questionsArray) {
    for (var i = 0; i < questionsArray.length; i++) {
        let key = "question" + (i + 1);
        let value = "blah";
        // let value = {}
        //    value.question = questionsArray.question[i]
        //    value.answer = questionsArray.answer[i]
        //     console.log(value);
        localStorage.setItem(key, value)
    }
}