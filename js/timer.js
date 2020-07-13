$(function () {

    function timer(){
        $('#timer').yycountdown({
            endDateTime:'2019/03/1 11:00:00',
            unit          : {d: 'day', h: 'h', m: 'm', s: 's'},  //カウントダウン単位
        });
        
    }
    timer();

    
    
});