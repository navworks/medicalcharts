google.charts.load('current', {'packages':['corechart']});


/* 
    ===========================================
            Billed Vs Gross Revenue
    =========================================== 
*/

google.charts.setOnLoadCallback(bgRevenue);
function bgRevenue() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['API Category', 
            'Billed', { role: 'annotation' }, 
            'Revenue', { role: 'annotation' }
        ],
        ['Jan 17',  1235156,'1235156', 555820.2,'555820.2'],                
        ['Feb 17',  1454874,'1454874', 699681.6,'699681.6'],                
        ['Mar 17',  1454874, '1454874', 654693.3, '654693.3'],       
        ['Apr 17',  2152465, '2152465', 968609.25, '968609.25'],       

    ]);
    var options = {
        seriesType: 'bars',
        isStacked: true,
        colors: ['#23649e', '#2e7bad', '#65b5c2', '#3993bb', '#63daed'],
        bar: {groupWidth: '30%'},
        animation:{
            startup: true,
            duration: 1000,
            easing: 'in'
        },
        vAxes: {
            0:{
                gridlines: {
                    count:7
                }
            }
        }
    };
    var chart = new google.visualization.ComboChart(document.getElementById('bgRevenue'));
    chart.draw(data, options);
}

/* 
    ===========================================
            Days in AR - Monthly
    =========================================== 
*/
google.charts.setOnLoadCallback(drawVisualization);
function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Month',   'VA',   'AV'],           
        ['Week 1',  32, 35],                
        ['Week 2',  36, 35],                
        ['Week 3',  35, 35],                
        ['Week 4',  35, 35]
    ]);
    var options = {
      seriesType: 'bars',
      bar: {groupWidth: 20},
      series: {1: {type: 'line'}},
      colors: ['#23649e', '#ff5400', '#65b5c2', '#3993bb', '#63daed'],
    };
    var chart = new google.visualization.ComboChart(document.getElementById('arMonthly'));
    chart.draw(data, options);
}


/* 
    ===========================================
            Days in AR - Yearly
    =========================================== 
*/
google.charts.setOnLoadCallback(drawARYearly);
function drawARYearly() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Month',   'VA',   'AV'],           
        ['Apr 17',  32, 35],                
        ['Mar 17',  36, 35],                
        ['Feb 17',  35, 35],                
        ['Jan 17',  35, 35]
    ]);
    var options = {
        seriesType: 'bars',
        bar: {groupWidth: 20},
        series: {1: {type: 'line'}},
        colors: ['#23649e', '#ff5400', '#65b5c2', '#3993bb', '#63daed'],
    };
    var chart = new google.visualization.ComboChart(document.getElementById('arYearly'));
    chart.draw(data, options);
}

google.charts.setOnLoadCallback(firstTimeMonthly);
function firstTimeMonthly() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Month',   'VA',   'AV'],           
        ['Week 1',   97 ,  98],
        ['Week 2',   97 ,  98],
        ['Week 3',   98 ,  98],
        ['Week 4',   99 ,  98]
    ]);
    var options = {
        colors: ['#23649e', '#ff5400', '#65b5c2', '#3993bb', '#63daed'],
        vAxis: {minValue: 90},
        pointsVisible: true,
        pointSize: 5,
    };
    var chart = new google.visualization.ComboChart(document.getElementById('firstTimeMonthly'));
    chart.draw(data, options);
}

google.charts.setOnLoadCallback(firstTimeYearly);
function firstTimeYearly() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Month',   'VA',   'AV'],           
        ['Apr 17',  95, 98],                
        ['Mar 17',  95, 98],                
        ['Feb 17',  97, 98],                
        ['Jan 17',  98, 98]
    ]);
    var options = {
        colors: ['#23649e', '#ff5400', '#65b5c2', '#3993bb', '#63daed'],
        vAxis: {minValue: 90},
        pointsVisible: true,
        pointSize: 5,
    };
    var chart = new google.visualization.ComboChart(document.getElementById('firstTimeYearly'));
    chart.draw(data, options);
}

/* 
    ===========================================
            AR Ageing - PIE donut chart
    =========================================== 
*/

google.charts.setOnLoadCallback(arAgeing);
function arAgeing() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['<30',      523200.65],
        ['30-60',    348800.43],
        ['60-90',    317091.30],
        ['90-120',   237818.48],
        ['120',      158545.65],
    ]);

    var options = {
        title: '',
        pieHole: 0.6,
        colors: ['#23649e', '#ff5400', '#65b5c2', '#3993bb', '#63daed'],
        animation:{
            startup: true,
            duration: 500,
            easing: 'out'
        },
    };

    var chart = new google.visualization.PieChart(document.getElementById('arAgeing'));
    chart.draw(data, options);
}


/* 
    ===========================================
            Denial Rate
    =========================================== 
*/

google.charts.setOnLoadCallback(denialRate);    
function denialRate() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['API Category', 
            'Denial%', { role: 'annotation' }, 
            'Standard'
        ],
        ['Jan 17', 3, '3' , 3 ],
        ['Feb 17', 2, '2' , 3 ],
        ['Mar 17', 2, '2' , 3 ],                    
        ['Apr 17', 3, '3' , 3 ]                        

    ]);
    var options = {
        seriesType: 'bars',
        series: {1: {type: 'line'}},
        colors: ['#23649e', '#ff5400', '#65b5c2', '#3993bb', '#63daed'],
        bar: {groupWidth: '30%'},
        animation:{
            startup: true,
            duration: 500,
            easing: 'in'
        },
        vAxes: {
            0:{
                gridlines: {
                    count:10
                }
            }
        }
    };
    var chart = new google.visualization.ComboChart(document.getElementById('denialRate'));
    chart.draw(data, options);
}




/* 
    ===========================================
            Payer Mix
    =========================================== 
*/

google.charts.setOnLoadCallback(payerMix);
function payerMix() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Month','Medicare','Medicaid','Humana','Careplus','Wellcare','Self Pay','UHC Other commercials','Total' ],
        ['Jan 17',53,17,1,3,10,10,3,3],
        ['Feb 17',53,15,2,6,9,11,2,2],
        ['Mar 17',55,16,1,4,5,15,3,1],
        ['Apr 17',56,15,3,4,8,10,3,1]
    ]);
    var options = {
        seriesType: 'bars',
        isStacked: 'percent',
        colors: ['#23649e', '#2e7bad', '#65b5c2', '#3993bb', '#63daed'],
        bar: {groupWidth: '30%'},
        animation:{
            startup: true,
            duration: 1000,
            easing: 'in'
        },
       
    };
    var chart = new google.visualization.ComboChart(document.getElementById('payerMix'));
    chart.draw(data, options);
}

/* 
    ===========================================
           New Vs Followup Patient Volume
    =========================================== 
*/

google.charts.setOnLoadCallback(newVsFollowupPatientVolume);
function newVsFollowupPatientVolume() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        [
            'Month', 
            'New',  { role: 'annotation' },  
            'Followup',{ role: 'annotation' }, 
        ],
        ['Jan 17',56,'56',250,'250'], 
        ['Feb 17',62,'62',247,'247'], 
        ['Mar 17',64,'64',310,'310'], 
        ['Apr 17',72,'72',248,'248']
    ]);
    var options = {
        seriesType: 'bars',
        colors: ['#23649e', '#2e7bad', '#65b5c2', '#3993bb', '#63daed'],
        bar: {groupWidth: '30%'},
        animation:{
            startup: true,
            duration: 1000,
            easing: 'in'
        },
       
    };
    var chart = new google.visualization.ComboChart(document.getElementById('newVsFollowupPatientVolume'));
    chart.draw(data, options);
}

/* 
    ===========================================
           Procedure Volume
    =========================================== 
*/

google.charts.setOnLoadCallback(procedureVolume);
function procedureVolume() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
            ['Procedure Sub Category','Jane Doe'],
            ['Bronchoscopy',1],
            ['Consultation Codes - Inpatient',1],
            ['Consultation Codes - Outpatient',7],
            ['Demonstration of using inhalation equipments',11],
            ['Inhalation treatment',18],
            ['Initial Hospital Care',2],
            ['Intramuscular/subcutaneous injection',1],
            ['Misc',28],
            ['Office Visit - Established Patient',55],
            ['Office Visit - New Patient',15],
            ['pulmonary function test',33],
            ['Pulmonary stress test',4],
            ['Sleep study',29],
            ['Smoking Cessation Codes',1],
            ['Spirometry',23],
            ['Subsequent Hospital care',11],
            ['Thoracentesis',1],
            ['CPAP',1]
    ]);
    var options = {
        seriesType: 'bars',
        colors: ['#23649e', '#2e7bad', '#65b5c2', '#3993bb', '#63daed'],
        bar: {groupWidth: '30%'},
        animation:{
            startup: true,
            duration: 1000,
            easing: 'in'
        },
       
    };
    var chart = new google.visualization.ComboChart(document.getElementById('procedureVolume'));
    chart.draw(data, options);
}

/* 
    ===========================================
           Charge Capture Lag Time
    =========================================== 
*/

google.charts.setOnLoadCallback(chargeCaptureLagTime);
function chargeCaptureLagTime() {
    var data = google.visualization.arrayToDataTable([
        ['Week', 'Days in AR', { role: 'annotation' },'Standard'],
        ['Week4',3.5,'3.5', 5],
        ['Week3',3,  '3', 5],
        ['Week2',2.5,'2.5', 5],
        ['Week1',3.5,'3.5', 5]
    ]);
    var options = {
        seriesType: 'bars',
        bar: {groupWidth: 20},
        series: {1: {type: 'line'}},
        colors: ['#23649e', '#ff5400', '#65b5c2', '#3993bb', '#63daed'],
    };
    var chart = new google.visualization.ComboChart(document.getElementById('chargeCaptureLagTime'));
    chart.draw(data, options); 
}

/* 
    ===========================================
           Encounter to Superbill TAT/Result verification TAT (Standard 2 days)
    =========================================== 
*/

google.charts.setOnLoadCallback(encountertoSuperbillTATResultverificationTAT);
function encountertoSuperbillTATResultverificationTAT() {
    var data = google.visualization.arrayToDataTable([
        ['Week', 'Days in AF',{ role: 'annotation' },'Standard'],
        ['Week4',2.5,'2.5', 2],
        ['Week3',2.0,'2.0', 2],
        ['Week2',1.5,'1.5', 2],
        ['Week1',1.0,'1.0', 2]
    ]);
    var options = {
        seriesType: 'bars',
        bar: {groupWidth: 20},
        series: {1: {type: 'line'}},
        colors: ['#23649e', '#ff5400', '#65b5c2', '#3993bb', '#63daed'],
    };
    var chart = new google.visualization.ComboChart(document.getElementById('encountertoSuperbillTATResultverificationTAT'));
    chart.draw(data, options); 
}

/* 
    ===========================================
           Coding TAT (Standard 1 day)
    =========================================== 
*/

google.charts.setOnLoadCallback(codingTAT);
function codingTAT() {
    var data = google.visualization.arrayToDataTable([
        ['Week', 'Days in AF', {role:'annotation'},'Standard'],
        ['Week4',1.2,'1.2', 1],
        ['Week3',1.0,'1.0', 1],
        ['Week2',0.5,'0.5', 1],
        ['Week1',1.0,'1.0', 1]
    ]);
    var options = {
        seriesType: 'bars',
        bar: {groupWidth: 20},
        series: {1: {type: 'line'}},
        colors: ['#23649e', '#ff5400', '#65b5c2', '#3993bb', '#63daed'],
    };
    var chart = new google.visualization.ComboChart(document.getElementById('codingTAT'));
    chart.draw(data, options); 
}

/* 
    ===========================================
           Billing TAT (Standard 1 day)
    =========================================== 
*/

google.charts.setOnLoadCallback(billingTAT);
function billingTAT() {
    var data = google.visualization.arrayToDataTable([
        ['Week', 'Days in AF','Standard'],
        ['Week4',0.5, 1],
        ['Week3',1.0, 1],
        ['Week2',1.2, 1],
        ['Week1',1.0, 1]
    ]);
    var options = {
        seriesType: 'bars',
        bar: {groupWidth: 20},
        series: {1: {type: 'line'}},
        colors: ['#23649e', '#ff5400', '#65b5c2', '#3993bb', '#63daed'],
    };
    var chart = new google.visualization.ComboChart(document.getElementById('billingTAT'));
    chart.draw(data, options); 
}