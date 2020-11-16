$(function () {
    var $leaders = $('#inputGroupSelect1');
    var $members = $('#inputGroupSelect2');
    var leaderCode = `<option value="-1">Select Team Leader</option>`;
    var memberCode = `<option value="-1">Select Team Member</option>`;
    $leaders.html(leaderCode);
    $members.html(memberCode);


    var arrLeaders = [];
    var arrMembers = [];
    var memberObj = {};
    var leaderIndex;
    var memberId = -1;

    var start_date = "";
    var end_date = "";
    var default_date = "";
    var res;
    var chartValueArr = [];

    $.get('/web/get-all-team-leader', function (leaderList) {
        $.each(leaderList, function (id, leader) {
            leaderCode += "<option value='"
                + id +
                "'>"
                + leader.name +
                "</option>";
            arrLeaders.push(leader);
        });
        $leaders.html(leaderCode);
    });

    $leaders.change(function () {
        var memberCode = `<option value="-1">Select Team Member</option>`;
        arrMembers = [];

        leaderIndex = $leaders.val();
        var leader_id = { 'leader_id': arrLeaders[leaderIndex].id };
        if (arrLeaders[leaderIndex].id != -1) {
            $.ajax({
                type: 'POST',
                url: '/web/get-member-for-leader',
                data: JSON.stringify(leader_id),
                contentType: "application/json; charset=utf-8",
                traditional: true,
                success: function (data) {
                    console.log(data);
                    console.log("++++++++++++++++++++++++++++++++++++++");
                    $.each(data.members, function (id, member) {
                        memberObj.id = member.id;
                        memberObj.name = member.firstname + ' ' + member.lastname;
                        arrMembers.push(memberObj);
                        memberCode += "<option value='"
                            + id +
                            "'>"
                            + memberObj.name +
                            "</option>";
                    });
                    $members.html(memberCode);
                }
            });
        }
    });
    $members.change(function () {
        memberId = arrMembers[$members.val()].id;
    });

    $('#date1').change(function () {
        start_date = $('#date1').val();
    });

    $('#date2').change(function () {
        end_date = $('#date2').val();
    });

    const getDefault = function () {
        if (start_date != "" && end_date == "") {
            default_date = start_date;
            start_date = "";
        } else if (start_date == "" && end_date != "") {
            default_date = end_date;
            end_date = "";
        } else if (start_date == "" && end_date == "") {
            bootbox.alert("Please select one dete at least!!")
        } else {
            res = comapareDate();
            if (!res) {
                bootbox.alert("Start Date is grater then End Date!! ");
            }
        }
    };

    function isMember() {
        if (memberId == -1) {
            return false;
        }
        else {
            return true;
        }
    };

    var options;
    var chart;
    $("#btn").click(function () {

        document.getElementById('bar-chart-1').innerHTML = "";

        console.log("----------------------------------------");
        getDefault();
        const date = new CreateDateObject(start_date, end_date, default_date);//2
        const responceObject = new ResponceObject(memberId, date);//3
        console.log(responceObject);
        if (isMember()) {
            $.ajax({
                type: 'POST',
                url: '/web/caf-per-member',
                data: JSON.stringify(responceObject),
                contentType: "application/json; charset=utf-8",
                traditional: true,
                success: function (data) {
                    for (var key in data) {
                        chartValueArr.push(data[key]);
                    }
                    console.log("77777 val-> " + chartValueArr[0]);
                    if (chartValueArr[1] > 0) {
                        options = {
                            chart: {
                                height: 350,
                                type: 'bar',
                            },
                            plotOptions: {
                                bar: {
                                    horizontal: false,
                                    columnWidth: '55%',
                                    endingShape: 'rounded'
                                },
                            },
                            dataLabels: {
                                enabled: false
                            },
                            colors: ["#4099ff", "#0e9e4a", "#bc5090", "#ffa600", "#ff6361"],
                            stroke: {
                                show: true,
                                width: 2,
                                colors: ['transparent']
                            },
                            fill: {
                                type: 'gradient',
                                gradient: {
                                    shade: 'light',
                                    type: "vertical",
                                    shadeIntensity: 0.25,
                                    inverseColors: true,
                                    opacityFrom: 1,
                                    opacityTo: 0.7,
                                    stops: [50, 100]
                                },
                            },
                            series: [{
                                name: 'Total Caf',
                                data: [chartValueArr[1]]
                            }, {
                                name: 'Approved Caf',
                                data: [chartValueArr[0]]
                            }, {
                                name: 'Complete Caf',
                                data: [chartValueArr[2]]
                            }, {
                                name: 'On Hold Caf',
                                data: [chartValueArr[3]]
                            }, {
                                name: 'Rejected Caf',
                                data: [chartValueArr[4]]
                            }],
                            xaxis: {
                                categories: ['Castomer Application from'],
                            },
                            yaxis: {
                                title: {
                                    text: ' Counts '
                                }
                            },
                            tooltip: {
                                y: {
                                    formatter: function (val) {
                                        return "* " + val + " "
                                    }
                                }
                            }
                        }
                        chart = new ApexCharts(
                            document.querySelector("#bar-chart-1"),
                            options
                        );
                        chart.render();
                        console.log(data);

                        document.getElementById('date1').value = "";
                        document.getElementById('date2').value = "";
                        var leader_box = document.getElementById("inputGroupSelect1");
                        leader_box.selectedIndex = 0;
                        var member_box = document.getElementById("inputGroupSelect2");
                        member_box.selectedIndex = 0;
                    } else {
                        console.log(data);

                        document.getElementById("bar-chart-1").style.display = 'none';
                        var no_data = '<img src="/static/assets/images/no_data.jpeg" style="width: 100%;"/>';
                        document.getElementById("Chart-div").innerHTML = no_data;
                        document.getElementById('date1').value = "";
                        document.getElementById('date2').value = "";

                        var leader_box = document.getElementById("inputGroupSelect1");
                        leader_box.selectedIndex = 0;
                        var member_box = document.getElementById("inputGroupSelect2");
                        member_box.selectedIndex = 0;
                    }
                }
            });
        } else {
            bootbox.alert("Select one member!");
        }

    });
});

function CreateDateObject(start_date, end_date, default_date) {
    this.start_date = start_date;
    this.end_date = end_date;
    this.default_date = default_date;
}
function ResponceObject(member_id, date) {
    this.member_id = member_id;
    this.date = date;
}

function comapareDate() {
    var startDateObj = new Date(document.getElementById('date1').value);
    var endDateObj = new Date(document.getElementById('date2').value);
    if (startDateObj < endDateObj) {
        return true;
    } else return false;
}
