$('#test-btn').click(function () {
    $.ajax({
        url: 'https://official-joke-api.appspot.com/random_joke',
        method: 'get',
        dataType: 'json',
        success:
            function (data) {
                $('#quiz').html(`<br><span class="quiz-css">문제</span><br><br> <span class="quiz-css2">${data.setup}</span><br><br>`);
                console.log('테스트 데이터 불러오기 성공')
                $('#answer-btn').click(function () {
                    $('#bujangTalk').html(`<span class="quiz-css2"><br>${data.punchline}</span><br><br>`);
                    setTimeout(function () {
                        $('#success').html(`<span class="success">🎉통과🎉</span>`);
                    }, 500);
                });
            },
        error:
            function () {
                alert("테스트 데이터를 불러오지 못했습니다. 다시 시도해 주세요.")
                console.log('테스트 데이터 불러오기 실패')
            }
    });
});