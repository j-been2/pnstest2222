function showTab(tabNumber) {
    // 모든 탭 내용 숨기기
    const tabs = document.querySelectorAll('.ptab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // 모든 버튼에서 active 클래스 제거
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // 선택한 탭 내용만 표시
    const selectedTab = document.getElementById('tab' + tabNumber);
    selectedTab.classList.add('active');

    // 선택된 버튼에 active 클래스 추가
    const selectedButton = buttons[tabNumber - 1];
    selectedButton.classList.add('active');
}

// 초기 탭 1 내용 보이기
// showTab(1);



function showSection(tabName) {
    document.getElementById('product').classList.add('hidden');
    document.getElementById('inquiry').classList.add('hidden');
    document.getElementById('productTab').classList.remove('active');
    document.getElementById('inquiryTab').classList.remove('active');

    document.getElementById(tabName).classList.remove('hidden');
    document.getElementById(tabName + 'Tab').classList.add('active');
}

function openPopup(title) {
    // 모델명, P&S 정책, 할부원금, 조건을 원에 맞게 설정합니다.
    let realprice, policy, price, conditions;

    switch (title) {
        case 'S25울트라':
            realprice = 1698400;
            policy = 500000;
            break;
        case 'S25플러스':
            realprice = 1353000;
            policy = 500000;

            break;
        case 'S25':
            realprice = 1155000;
            policy = 500000;

            break;
        case '아이폰16프로맥스':
            realprice = 1892000;
            policy = 500000;
            break;
        case '아이폰16프로':
            realprice = 1540000;
            policy = 500000;
            break;
        case '아이폰16플러스':
            realprice = 1342000 ;
            policy = 500000;
            break;
        case '아이폰16':
            realprice = 1243000;
            policy = 500000;
            break;
        case '갤럭시ZFold6':
            realprice = 2229700;
            policy = 500000;
            break;
        case '갤럭시ZFlip6':
            realprice = 1485000;
            policy = 500000
            break;
        
        default:
            realprice = '알 수 없는 모델';
            policy = 'P&S 정책 설명 없음';
            price = '가격 정보 없음';
    }
    price = realprice - policy;
    realprice = realprice.toLocaleString();
    price = price.toLocaleString();
    policy = formatPrice(policy);
    

    // 팝업에 내용 채우기
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupRealPrice').innerText = realprice + '원';
    document.getElementById('popupPolicy').innerText = policy + '원';
    document.getElementById('popupPrice').innerText = price + '원';
    // 팝업 열기
    document.getElementById('popup').classList.remove('hidden');
    document.getElementById("overlay").classList.add("active");
    
}

function formatPrice(price) {

    // If the price is 100,000 or more, format it as "10만", "100만", etc.
    if (price >= 100000) {
        let formattedPrice = (price / 10000).toFixed(0) + '만'; // Dividing by 10,000 and appending "만"
        return formattedPrice;
    } else {
        // Otherwise, format with commas
        return price.toLocaleString(); // Adds commas as thousand separators
    }
}


function closePopup() {
    document.getElementById('popup').classList.add('hidden');
    document.getElementById("overlay").classList.remove("active"); // 오버레이 숨기기
}

function checkAccess() {
    let userInput = document.getElementById("userInput").value;
    let navSection = document.getElementById("navSection");
    let passwordContainer = document.getElementById("passwordContainer");
    const correctPassword = "123456"; // 올바른 비밀번호 설정

    if (userInput.trim() === correctPassword) {
        // 비밀번호가 맞으면 입력창을 숨기고 다음 화면 보이기
        passwordContainer.style.display = "none";
        navSection.style.display = "block";
    } else {
        // 틀리면 경고창 띄우기
        alert("비밀번호가 틀렸습니다. 다시 입력하세요.");
    }
}


document.getElementById("userInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("checkAccessBtn").click();
    }
});
