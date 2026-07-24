const bag = {"여권":1, 스마트폰:2, 지갑:3}
function showMyBag(){
    let result = "[내 가방 속 물품 목록]"
    let key_count=0;
    for(key in bag){
        result = result + `\n-${key}:${bag[key]}개`;
        key_count+=Number(bag[key]);
    }
    result+=`\n총 물품 개수:${key_count}개`;
    alert(result);
}
document.querySelector("#in-my-bag").addEventListener("click",showMyBag);
