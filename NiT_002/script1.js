const startBtn = document.querySelector('.start-btn');
const cautionHeading = document.querySelector('.caution');
const popupInfo = document.querySelector('.popup-info');
const randomContents = [
    "Trai xinh, gái đẹp ơi, để có thể nhận được quà 8/3 từ NiT Club, bạn hãy vui lòng điền thông tin của mình vào biểu mẫu dưới nhé ^_^",
    "Ní ơi, nếu muốn nhận quà 8/3 của NiT Club thì hãy điền thông tin của mình ở biểu mẫu dưới nhe. Mãi keo ^_^",
];
const randomContent = randomContents[Math.floor(Math.random() * randomContents.length)];
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const timeText = document.querySelector('.time-text');
const timeCount = document.querySelector('.time-sec');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goWheelBtn = document.querySelector('.goWheel-btn');

document.getElementById('myVideo').addEventListener('ended', function() {
    // Tắt video hoặc ẩn video sau khi phát xong
    this.style.display = 'none';
  }, false); 

// Đảm bảo mã JavaScript được thực thi sau khi tài liệu được tải hoàn tất
document.addEventListener('DOMContentLoaded', function() {
    // Lấy phần tử nút "Bắt đầu ngay" và "Tiếp tục"
    const startBtn = document.querySelector('.start-btn');
    const continueBtn = document.querySelector('.continue-btn');
  
    // Thêm sự kiện click cho nút "Tiếp tục"
    continueBtn.addEventListener('click', function() {
      // Ẩn nút "Bắt đầu ngay" khi nút "Tiếp tục" được nhấn
      startBtn.style.display = 'none';
    });
  });

// Hàm này sẽ được gọi khi người dùng hết giờ
function hetGio() {
    // Lưu trạng thái hết giờ vào localStorage
    localStorage.setItem('daHetGio', 'true');
    alert('Đã hết giờ!');
    window.location.href = 'https://sites.google.com/view/clb-nit-goodluck'; // Thay đổi URL đến trang bạn muốn chuyển hướng
}

// Kiểm tra khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('daHetGio') === 'true') {
        alert('Đã hết giờ!');
        window.location.href = 'https://sites.google.com/view/clb-nit-goodluck'; // Thay đổi URL đến trang bạn muốn chuyển hướng
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contactForm');
    const iframe = document.querySelector('iframe[name="_iframe"]');

    // Kiểm tra khi trang được tải
    if (localStorage.getItem('formSubmitted')) {
        // Hiển thị thông báo alert
        alert('Đã gửi thông tin của bạn đến CLB NiT. Cảm ơn bạn đã tham gia sự kiện');
        // Chuyển hướng người dùng
        window.location.href = "https://www.facebook.com/thptndcnitclub";
    }

    form.addEventListener('submit', function () {
        // Đặt cờ trong localStorage khi form được submit
        localStorage.setItem('formSubmitted', 'true');

        // Đặt sự kiện onload cho iframe để chuyển hướng sau khi form đã được gửi đi thành công
        iframe.onload = function() {
            // Hiển thị thông báo alert
            alert('Đã gửi thông tin của bạn đến CLB NiT. Cảm ơn bạn đã tham gia sự kiện');
            // Chuyển hướng sau khi form đã được gửi đi thành công
            window.location.href = "https://www.facebook.com/thptndcnitclub";
        };
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const userProgress = localStorage.getItem('userProgress');
    if (userProgress) {
        const progress = JSON.parse(userProgress);
        // Thêm điều kiện kiểm tra điểm số của người dùng
        if (progress.completed && progress.score < 10) {
            // Khôi phục tiến trình, ví dụ: hiển thị điểm số
            alert(`Cảm ơn bạn đã tham gia sự kiện. Vui lòng truy cập fanpage CLB NiT - THPT Nguyễn Đình Chiểu để đợi kết quả nhé.`);
            // Tùy chọn: Chuyển hướng người dùng hoặc hiển thị thông tin khác
            window.location.href = "https://www.facebook.com/thptndcnitclub";
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var goWheelBtn = document.querySelector('.goWheel-btn');
    var ggForm = document.querySelector('.gg-form');

    goWheelBtn.addEventListener('click', function () {
        ggForm.classList.remove('hidden');
    });
});



    startBtn.onclick = () => {
        
        popupInfo.classList.add('active');
        main.classList.add('active');
        document.getElementById("customText").style.display = "block"; // Hiển thị đoạn văn

    }
    exitBtn.onclick = () => {
        popupInfo.classList.remove('active');
        main.classList.remove('active');
        
}
continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');



    showQuestions(0);
    questionCounter(1);
    startTimer(15);
    headerScore();
}

tryAgainBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

     timeValue = 15;
     questionCount = 0;
     questionNumb = 1;
     userScore = 0;
     showQuestions(questionCount); 
     questionCounter(questionNumb);
     clearInterval(counter); //clear counter

     startTimer(timeValue);
     timeText.textContent = "Còn lại:";

     headerScore();
}




goWheelBtn.onclick = () => {
    document.getElementById("customText").style.display = "none"; // Ẩn đoạn văn
    const randomContentElement = document.querySelector('.popup-info .random-content');
    popupInfo.classList.add('active');
    cautionHeading.classList.add('hidden');
    main.classList.add('active');  
    continueBtn.style.display = 'none';
    exitBtn.style.display = 'none';
    randomContentElement.textContent = randomContent;   
}


let timeValue = 15;
let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
let counter;


const nextBtn = document.querySelector('.next-btn');

    nextBtn.onclick = () => {
        if (questionCount < questions.length - 1) {
            questionCount++;
            showQuestions(questionCount); 
            
            questionNumb++;
            questionCounter(questionNumb);
            clearInterval(counter); //clear counter
            startTimer(timeValue);
            timeText.textContent = "Còn lại:";
            
            nextBtn.classList.remove('active');

        }
    else {
        clearInterval(counter); //clear counter
        showResultBox();
    }
}

const optionList = document.querySelector('.option-list');

//random questions and options
   function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // while there remain elements to shuffle ...
        while (0 !== currentIndex) {

            //Pick a remaining element ...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            
            // And swap it with the current element
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

        //use the shuffle function on your questions array
        questions = shuffle(questions);

        //and also on the options inside each question
        question.forEach((question) => {
            question.options = shuffle(question.options);
        });

    //getting questions and options array
    function showQuestions(index) {
        
        const questionText = document.querySelector('.question-text');
         questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

        let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
            <div class="option"><span>${questions[index].options[1]}</span></div>
            <div class="option"><span>${questions[index].options[2]}</span></div>
            <div class="option"><span>${questions[index].options[3]}</span></div>`;

        optionList.innerHTML = optionTag;

        const option = document.querySelectorAll('.option');
        for (let i = 0; i < option.length; i++) {
            option[i].setAttribute('onclick', 'optionSelected(this)');
        }
    }

    function optionSelected(answer) {
        clearInterval(counter); //clear counter
        let userAnswer = answer.textContent;
        let correctAnswer = questions[questionCount].answer;
        let allOptions = optionList.children.length;
        
        if (userAnswer == correctAnswer) {
            answer.classList.add('correct');
            userScore +=1;
            headerScore();
        }
        else {
            answer.classList.add('incorrect');
            
            // if answer incorrect, auto selected correct answer
            for (let i = 0; i < allOptions; i++) {
                if (optionList.children[i].textContent == correctAnswer) {
                    optionList.children[i].setAttribute('class', 'option correct');
                }
            }
        }


            // if user has selected, disabled all options
          for (let i = 0; i < allOptions; i++) {
            optionList.children[i].classList.add('disabled');
          }

          nextBtn.classList.add('active');
    }

    

    function questionCounter(index) {
        const questionTotal = document.querySelector('.question-total');
        questionTotal.textContent = `${index} / ${questions.length} câu hỏi`;
    }
    
    function headerScore() {
        const headerScoreText = document.querySelector('.header-score');
        headerScoreText.textContent = `Điểm: ${userScore} / ${questions.length}`;
    }



    function showResultBox() {
        quizBox.classList.remove('active');
        resultBox.classList.add('active');
        
        const scoreText = document.querySelector('.score-text');
        scoreText.textContent = `Điểm của bạn: ${userScore}  /  ${questions.length}`;

        const circularProgress = document.querySelector('.circular-progress');
        const progressValue = document.querySelector('.progress-value');
        let progressStartValue = -1;
        let progressEndValue = (userScore / questions.length) * 100;
        let speed = 20;

        let progress = setInterval(() => {
            progressStartValue++;

            progressValue.textContent = `${progressStartValue}%`;
            circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

            if (progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
            if (userScore < 10) {
                setTimeout(function() {
                    // Hiển thị thông báo alert
                    alert("Cảm ơn bạn đã tham gia sự kiện. Vui lòng truy cập fanpage CLB NiT - THPT Nguyễn Đình Chiểu để đợi kết quả nhé." );
                
                    // Chuyển hướng người dùng đến YouTube sau khi họ nhấn OK trên thông báo alert
                    window.location.href = "https://www.facebook.com/thptndcnitclub";
                }, 1650);
            }
            localStorage.setItem('userProgress', JSON.stringify({score: userScore, completed: true}));
        } , speed);

        
    
        // Chuyển hướng người dùng sau khi họ nhấn OK trên thông báo alert

        if (userScore < 10) {
            const goWheelBtn = document.querySelector('.goWheel-btn');
            goWheelBtn.style.display = 'none'; // Ẩn nút "Đến vòng quay"
        }

        const leaderboardWrapper = document.querySelector('.bxh');
        leaderboardWrapper.classList.remove('hidden');

        

    }



    function startTimer(time) {
        counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0            
            clearInterval(counter); //clear counter
            hetGio();

            timeText.textContent = "Hết giờ"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correctAnswer = questions[questionCount].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correctAnswer){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute('class', 'option correct'); //adding green color to matched option
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add('disabled'); //once user select an option then disabled all options
            }
            nextBtn.classList.add('active'); //show the next button if user selected any option

            
        
        }
    }
}






