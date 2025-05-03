const question = document.getElementById("question")
const answer = document.getElementById("answer")

let init = 0

const botSay = () => {
    return [
        "Pasti Namanya Dinda kan?🤔 orang yang katanya jarang mandi sama jarang makan, emang bener ya?",
        "Pantesan bauu🤮, jadi sekarang lagi mikirin apa nih?",
        "Ngapain mikirin yang buat gua si, kangen ya sama dia? nanti dibilangin dehh😁",
        "Jadi mau cerita apa hari ini?🤔",
        "Dah ah maless mikir, bye😐"
    ]
}

question.innerHTML = botSay()[0]

function botStart(){
    init++
    if (init === 1){
        setTimeout(question.innerHTML = botSay()[1], 1500)
        answer.value = ""
    }else if(init === 2){
        setTimeout(question.innerHTML = botSay()[2], 1500)
        answer.value = ""
    }else if(init === 3){
        setTimeout(question.innerHTML = botSay()[3], 1500)
        answer.value = ""
    }else if(init === 4){
        setTimeout(question.innerHTML = botSay()[4], 1500)
        answer.value = ""
    }else{
        botEnd()
    }
}

const botEnd = () => {
    location.reload();
}
