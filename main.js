if (window.location.hostname === 'upbit.com' && !window.fInterval) {
	window.fCount = 0;

	const div = document.createElement('div');
	div.style.zIndex = '1000';
	div.style.position = 'fixed';
	div.style.top = '0';
	div.style.right = 'calc(50% - 446px)';
	div.style.padding = '0 .4em';
	div.style.background = 'yellow';
	div.style.color = 'black';
	div.style.cursor = 'help';
	div.title = '로그인 "연장" 버튼이 나타나면 자동으로 클릭할 거에요. 그만 사용하려면 페이지를 새로고침 하세요';
	div.innerHTML = `👻 자동연장 사용중(<span id="extend-count">${window.fCount}</span>)`;
	document.body.prepend(div);

	window.fInterval = setInterval(() => {
		const target = document.evaluate('//a[text()="연장"]', document).iterateNext();
		if (target) {
			target.click();
			window.fCount++;
			document.getElementById('extend-count').innerText = window.fCount;
		}
	}, 1000 * 60 * 30);
}
