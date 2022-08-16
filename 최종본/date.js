var clockTarget = document.getElementById("clock");
        //상단 현재 시간
        function clock() {
            var date = new Date();
            // date Object를 받아오고 
            var month = date.getMonth() + 1;
            // 달을 받아오기
            var clockDate = date.getDate();
            // 날짜 받아오기
            var day = date.getDay();
            // 요일 받아오기
            var week = ['SUN', 'MON', 'TUES', 'WEDNES', 'THURS', 'FRI', 'SATUR'];
            // 요일 형태를 숫자에서 문자열로 바꾸기 
            var hours = date.getHours();
            // 시 받아오고 
            var minutes = date.getMinutes();
            // 분 받아오기
            var seconds = date.getSeconds();
            // 초 받아오기
            clockTarget.innerText = `${month}/${clockDate} ${week[day]}DAY ` +
                `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
        }

        function init() {
            clock(); 
            setInterval(clock, 1000);
        }

        init();