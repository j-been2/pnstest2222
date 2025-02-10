// manage.json 파일에서 목록을 불러오기
let allowedUsers = [];

// 페이지가 로드될 때 manage.json 파일을 비동기적으로 불러오기
fetch('manage.json')
    .then(response => response.json())
    .then(data => {
        allowedUsers = data.allowedUsers;  // manage.json에서 allowedUsers 값을 불러옴
    })
    .catch(error => {
        console.error('관리자 목록을 불러오는 중 오류 발생:', error);
    });

// 사용자 입력에 따른 권한 확인
document.getElementById('checkAccessBtn').addEventListener('click', function () {
    const userInput = document.getElementById('userInput').value;

    // 사용자 입력이 목록에 있는지 확인
    if (allowedUsers.includes(userInput)) {
        alert("권한이 확인되었습니다.");
        document.getElementById('buttonContainer').style.display = 'block'; // 버튼 표시
        document.getElementById('checkAccessBtn').style.display = 'none';
        document.getElementById('userInput').disabled = true;
    } else {
        alert("권한이 없습니다.");
        document.getElementById('buttonContainer').style.display = 'none'; // 버튼 숨기기
    }
});

// 페이지 이동 함수
function navigateTo(page) {
    if (page === 'product') {
        window.location.href = 'page1.html'; // 상품소개 페이지로 이동
    } else if (page === 'apply') {
        window.location.href = 'apply.html'; // 신청하기 페이지로 이동
    }
}


