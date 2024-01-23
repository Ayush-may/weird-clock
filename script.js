$(document).ready(()=>{

    // Variables
    // 360/60 = 6
    const degr = 6;
    const hrDeg = 360/12; 
    var date = new Date();

    // current hour
    var hr = date.getHours();
    // current minute
    var min = date.getMinutes();
    // current second
    var sec = date.getSeconds();

    // Degree , by how much it will rotate initialy/first run
    if(hr==12){ hr_cnt = 1; }
    else if(hr>12){ hr -= 12; var hr_cnt = hrDeg * hr; }
    
    var hr_cnt = hrDeg * hr;
    var min_cnt = degr * min;
    var sec_cnt = degr * sec;

    // Initial
    function init(){
        $('.am-pm').text(` ${new Date().getHours()<12?'AM':'PM'} `);

        // Hour side
        $('.hr-num').text(`${hr<10?'0'+hr:hr}`);
        $('.clock-hr-side').css("transform",`rotateZ(${hr_cnt}deg)`);
    
        // Minute Side
        $('.min-num').text(`${min<10?'0'+min:min}`);
        $('.clock-min-side').css("transform",`rotateZ(${min_cnt}deg)`);    
    }

    function loop(){
        // Second side
        setInterval(() => {
            console.log("hr : ",hr_cnt,"min : ",min_cnt,"sec : ",sec_cnt)
            $('.clock-sec-side').css("transform",`rotateZ(${sec_cnt}deg)`);
            $('.sec-num').text(`${sec<10?'0'+sec:sec}`);
            sec++;

            sec_cnt += degr;

            if(sec_cnt % 360 == 0 ){
                sec = 0;
                min++;
                moveMin();
                $('.min-num').text(`${min<10?'0'+min:min}`);
            }

            if(min_cnt % 360 == 0){
                min = 0;
                moveHr();
            }

        }, 1000);
    }

    function moveMin(){
        min_cnt += degr;
        $('.clock-min-side').css("transform",`rotateZ(${min_cnt}deg)`);
    }

    function moveHr(){
        hr_cnt += hrDeg;
        $('.min-num').text(`${min<10?'0'+min:min}`);
        $('.clock-hr-side').css("transform",`rotateZ(${hr_cnt}deg)`);
    }
    
    init();
    loop();
});