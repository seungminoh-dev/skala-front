const subjects = ["HTML", "CSS", "JavaScript"]

function gradeSum(){
    let total = 0;
    for(let i=0;i<subjects.length;i++){
        let input;
        while(true){
            input = prompt(subjects[i]+"과목의 점수를 입력하세요");
            /* 분기1: 아무것도 입력하지 않거나 취소하면 함수 종료 */
            if (input == null || input ==""){
                return;
            }
            /* 분기2: 유효한 숫자 범위가 아니면 종료 */
            input = Number(input);
            if(input<0 || input>100){
                alert("유효한 숫자 범위를 입력해주세요! 0~100점 ");
                continue;
            }

            break;
        }
        total+=input;
    }
    const result = total >= 180 ? "축하합니다! 합격입니다" : "불합격입니다. 다시 도전하세요";
    alert(
        `========= 성적 결과표 ==========
총점: ${total}점
평균: ${(total/3).toFixed(2)}점
결과: ${result}`
    );
    
}

document.querySelector("#grade-calc").addEventListener("click",gradeSum);