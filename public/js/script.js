$(function() {
    var DateTime = luxon.DateTime;
    
    $('.from2014').html(getDiffYears('2014'));
    $('.from2015').html(getDiffYears('2015'));
    $('.from2017').html(getDiffYears('2017'));
    $('.from2020').html(getDiffYears('2020'));

    function getDiffYears(fromYear) {
        return Math.round(
            Math.abs(
                DateTime.fromISO(fromYear + '-04-01').diffNow('years').years
            )
        );
    }
});
