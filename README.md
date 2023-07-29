# Upbit Web Login Forever
업비트 데스크탑용 웹사이트에서 로그인 자동연장 기능을 제공하는 자바스크립트 코드입니다.
북마클릿으로 변환 후 브라우저 북마크로 등록하여 사용할 수 있습니다.

자세한 내용은 [블로그](http://localhost:8000/blog/upbit-web-login-forever-bookmarklet/)에서 확인하세요.

## 사용하기

1. 아래 북마클릿을 브라우저의 즐겨찾기로 등록합니다.
    ```
    javascript:(function()%7Bif%20(window.location.hostname%20%3D%3D%3D%20'upbit.com'%20%26%26%20!window.fInterval)%20%7Bwindow.fCount%20%3D%200%3Bconst%20div%20%3D%20document.createElement('div')%3Bdiv.style.zIndex%20%3D%20'1000'%3Bdiv.style.position%20%3D%20'fixed'%3Bdiv.style.top%20%3D%20'0'%3Bdiv.style.right%20%3D%20'calc(50%25%20-%20446px)'%3Bdiv.style.padding%20%3D%20'0%20.4em'%3Bdiv.style.background%20%3D%20'yellow'%3Bdiv.style.color%20%3D%20'black'%3Bdiv.style.cursor%20%3D%20'help'%3Bdiv.title%20%3D%20'%EB%A1%9C%EA%B7%B8%EC%9D%B8%20%22%EC%97%B0%EC%9E%A5%22%20%EB%B2%84%ED%8A%BC%EC%9D%B4%20%EB%82%98%ED%83%80%EB%82%98%EB%A9%B4%20%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C%20%ED%81%B4%EB%A6%AD%ED%95%A0%20%EA%B1%B0%EC%97%90%EC%9A%94.%20%EA%B7%B8%EB%A7%8C%20%EC%82%AC%EC%9A%A9%ED%95%98%EB%A0%A4%EB%A9%B4%20%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A5%BC%20%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8%20%ED%95%98%EC%84%B8%EC%9A%94'%3Bdiv.innerHTML%20%3D%20%60%F0%9F%91%BB%20%EC%9E%90%EB%8F%99%EC%97%B0%EC%9E%A5%20%EC%82%AC%EC%9A%A9%EC%A4%91(%3Cspan%20id%3D%22extend-count%22%3E%24%7Bwindow.fCount%7D%3C%2Fspan%3E)%60%3Bdocument.body.prepend(div)%3Bwindow.fInterval%20%3D%20setInterval(()%20%3D%3E%20%7Bconst%20target%20%3D%20document.evaluate('%2F%2Fa%5Btext()%3D%22%EC%97%B0%EC%9E%A5%22%20or%20text()%3D%22Extend%22%5D'%2C%20document).iterateNext()%3Bif%20(target)%20%7Btarget.click()%3Bwindow.fCount%2B%2B%3Bdocument.getElementById('extend-count').innerText%20%3D%20window.fCount%3B%7D%7D%2C%201000%20*%2060%20*%2010)%3B%7D%7D)()
    ```
    * 북마클릿 소스코드: [main.js](main.js)
    * 사용 북마클릿 생성기: https://mrcoles.com/bookmarklet/

2. 업비트 웹사이트에 로그인 후 1)에서 등록한 즐겨찾기를 클릭합니다.
3. 화면 상단에 `자동연장 사용중(0)` 표시 영역이 보입니다.
4. 로그인 '연장' 버튼이 생기면 자동으로 클릭되어 로그인이 연장되고 화면에 연장 횟수가 `자동연장 사용중(1)` 처럼 변경됩니다.

웹사이트의 언어 설정(한국어, 영어)에 관계없이 모두 작동합니다. 

## 그만 사용하기

1. 사용 중인 탭/창에서 화면을 새로고침합니다.
2. 사용 중인 탭/창을 닫습니다.
