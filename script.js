console.log("Chào mừng bạn đến với trang web của tôi!");
function addSkill() {
    let input = document.getElementById("skill-input");
    let skill = input.value.trim();
    if (skill) {
        let li = document.createElement("li");
        li.textContent = skill;
        document.getElementById("skill-list").appendChild(li);
        input.value = ""; // Xóa input sau khi thêm
    }
}

function deleteSkill(){
    let list= document.getElementById("skill-list")
    let items=list.getElementsByTagName("li")
    if(items){
        list.removeChild(items[items.length-1])
    }
}