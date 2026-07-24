function generateNum(max) {
    return Math.floor(Math.random() * max) + 1;
}

function startUpDownGame() {
    const randomNumber = generateNum(50);
    let count = 0;

    while (true) {
        const answer = prompt("1부터 50 사이의 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요?");
        
        if (answer === null || answer.trim() === "") {
            break;
        }

        const inputNumber = Number(answer);

        if (!Number.isInteger(inputNumber) || inputNumber < 1 || inputNumber > 50) {
            alert("1부터 50 사이의 정수를 입력해주세요.");
            continue;
        }

        count++;

        if (inputNumber === randomNumber) {
            alert(`축하합니다! ${count}번 만에 맞추셨습니다.`);
            break;
        }

        if (inputNumber < randomNumber) {
            alert("Up!");
        } else {
            alert("Down!");
        }
    }
}

document.querySelector("#start-up-down").addEventListener("click", startUpDownGame);
