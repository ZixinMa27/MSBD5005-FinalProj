// import * as echarts from 'echarts/core';
// import { TooltipComponent } from 'echarts/components';
// import { SankeyChart } from 'echarts/charts';
// import { CanvasRenderer } from 'echarts/renderers';

//echarts.use([TooltipComponent, SankeyChart, CanvasRenderer]);


document.addEventListener('DOMContentLoaded', function () {

    var chartDom = document.getElementById("sankey");
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: {
          type: 'sankey',
          layout: 'none',
          emphasis: {
            focus: 'adjacency'
          },
          data: [
            {
              name: '1286'
            },
            {
              name: 'L3288'
            },
            {
              name: 'L3572'
            },
            {
              name: '1310'
            },
            {
              name: 'L8012'
            },
            {
              name: '1321'
            },
            {
              name: 'L4149'
            },
            {
              name: '1415'
            },
            {
              name: 'L7783'
            },
            {
              name: '1874'
            },
            {
              name: 'L4424'
            },
            {
              name: '1877'
            },
            {
              name: 'L3014'
            },
            {
              name: '2142'
            },
            {
              name: 'L9637'
            },
            {
              name: '2276'
            },
            {
              name: 'L3317'
            },
            {
              name: '2418'
            },
            {
              name: 'L9018'
            },
            {
              name: '2463'
            },
            {
              name: 'L6886'
            },
            {
              name: '2540'
            },
            {
              name: 'L5947'
            },
            {
              name: '2681'
            },
            {
              name: 'L1107'
            },
            {
              name: '3484'
            },
            {
              name: 'L2490'
            },
            {
              name: '3492'
            },
            {
              name: 'L7814'
            },
            {
              name: '3506'
            },
            {
              name: 'L7761'
            },
            {
              name: '3547'
            },
            {
              name: 'L9362'
            },
            {
              name: '3853'
            },
            {
              name: 'L1485'
            },
            {
              name: '4434'
            },
            {
              name: 'L2169'
            },
            {
              name: '4530'
            },
            {
              name: 'L8477'
            },
            {
              name: '4795'
            },
            {
              name: 'L2070'
            },
            {
              name: 'L8566'
            },
            {
              name: '4948'
            },
            {
              name: 'L3295'
            },
            {
              name: 'L9406'
            },
            {
              name: '5010'
            },
            {
              name: 'L2459'
            },
            {
              name: '5368'
            },
            {
              name: 'L2247'
            },
            {
              name: 'L6119'
            },
            {
              name: '5407'
            },
            {
              name: 'L4034'
            },
            {
              name: '5921'
            },
            {
              name: '6691'
            },
            {
              name: 'L6267'
            },
            {
              name: '6816'
            },
            {
              name: 'L8148'
            },
            {
              name: '6895'
            },
            {
              name: 'L3366'
            },
            {
              name: '6899'
            },
            {
              name: '6901'
            },
            {
              name: 'L9363'
            },
            {
              name: '7108'
            },
            {
              name: 'L6544'
            },
            {
              name: '7117'
            },
            {
              name: 'L6417'
            },
            {
              name: '7253'
            },
            {
              name: 'L1682'
            },
            {
              name: '7354'
            },
            {
              name: 'L9254'
            },
            {
              name: '7384'
            },
            {
              name: 'L3800'
            },
            {
              name: '7688'
            },
            {
              name: 'L4164'
            },
            {
              name: '7792'
            },
            {
              name: 'L5756'
            },
            {
              name: '7819'
            },
            {
              name: 'L5259'
            },
            {
              name: '7889'
            },
            {
              name: '8129'
            },
            {
              name: 'L8328'
            },
            {
              name: '8156'
            },
            {
              name: 'L5224'
            },
            {
              name: '8202'
            },
            {
              name: 'L2343'
            },
            {
              name: '8332'
            },
            {
              name: '8411'
            },
            {
              name: 'L6110'
            },
            {
              name: '8642'
            },
            {
              name: 'L2769'
            },
            {
              name: '9152'
            },
            {
              name: 'L5485'
            },
            {
              name: '9220'
            },
            {
              name: 'L4063'
            },
            {
              name: '9241'
            },
            {
              name: '9405'
            },
            {
              name: 'L3259'
            },
            {
              name: '9551'
            },
            {
              name: 'L5777'
            },
            {
              name: '9614'
            },
            {
              name: 'L5924'
            },
            {
              name: '9617'
            },
            {
              name: 'L5553'
            },
            {
              name: '9635'
            },
            {
              name: 'L3191'
            },
            {
              name: '9683'
            },
            {
              name: 'L7291'
            },
            {
              name: '9735'
            },
            {
              name: 'L9633'
            }
          ],
          links: [
            {
              source: '1286',
              target: 'L3288',
              value: 15
            },
            {
              source: '1286',
              target: 'L3572',
              value: 13
            },
            {
              source: '1310',
              target: 'L8012',
              value: 21
            },
            {
              source: '1321',
              target: 'L4149',
              value: 22
            },
            {
              source: '1415',
              target: 'L7783',
              value: 24
            },
            {
              source: '1874',
              target: 'L4424',
              value: 25
            },
            {
              source: '1877',
              target: 'L3014',
              value: 18
            },
            {
              source: '2142',
              target: 'L9637',
              value: 25
            },
            {
              source: '2276',
              target: 'L3317',
              value: 10
            },
            {
              source: '2418',
              target: 'L9018',
              value: 20
            },
            {
              source: '2463',
              target: 'L6886',
              value: 23
            },
            {
              source: '2540',
              target: 'L5947',
              value: 20
            },
            {
              source: '2681',
              target: 'L1107',
              value: 20
            },
            {
              source: '3484',
              target: 'L2490',
              value: 24
            },
            {
              source: '3492',
              target: 'L7814',
              value: 22
            },
            {
              source: '3506',
              target: 'L7761',
              value: 6
            },
            {
              source: '3547',
              target: 'L9362',
              value: 14
            },
            {
              source: '3853',
              target: 'L1485',
              value: 22
            },
            {
              source: '4434',
              target: 'L2169',
              value: 26
            },
            {
              source: '4530',
              target: 'L8477',
              value: 10
            },
            {
              source: '4795',
              target: 'L2070',
              value: 1
            },
            {
              source: '4795',
              target: 'L8566',
              value: 25
            },
            {
              source: '4948',
              target: 'L3295',
              value: 1
            },
            {
              source: '4948',
              target: 'L9406',
              value: 22
            },
            {
              source: '5010',
              target: 'L2459',
              value: 5
            },
            {
              source: '5368',
              target: 'L2247',
              value: 24
            },
            {
              source: '5368',
              target: 'L6119',
              value: 1
            },
            {
              source: '5407',
              target: 'L4034',
              value: 20
            },
            {
              source: '5921',
              target: 'L3295',
              value: 12
            },
            {
              source: '5921',
              target: 'L9406',
              value: 1
            },
            {
              source: '6691',
              target: 'L6267',
              value: 20
            },
            {
              source: '6816',
              target: 'L8148',
              value: 20
            },
            {
              source: '6895',
              target: 'L3366',
              value: 21
            },
            {
              source: '6899',
              target: 'L6267',
              value: 23
            },
            {
              source: '6901',
              target: 'L9363',
              value: 28
            },
            {
              source: '7108',
              target: 'L6544',
              value: 16
            },
            {
              source: '7117',
              target: 'L6417',
              value: 28
            },
            {
              source: '7253',
              target: 'L1682',
              value: 24
            },
            {
              source: '7354',
              target: 'L9254',
              value: 21
            },
            {
              source: '7384',
              target: 'L3800',
              value: 26
            },
            {
              source: '7688',
              target: 'L4164',
              value: 22
            },
            {
              source: '7792',
              target: 'L5756',
              value: 20
            },
            {
              source: '7819',
              target: 'L5259',
              value: 27
            },
            {
              source: '7889',
              target: 'L2247',
              value: 1
            },
            {
              source: '7889',
              target: 'L6119',
              value: 20
            },
            {
              source: '8129',
              target: 'L8328',
              value: 21
            },
            {
              source: '8156',
              target: 'L5224',
              value: 22
            },
            {
              source: '8202',
              target: 'L2343',
              value: 25
            },
            {
              source: '8332',
              target: 'L2070',
              value: 27
            },
            {
              source: '8332',
              target: 'L8566',
              value: 1
            },
            {
              source: '8411',
              target: 'L6110',
              value: 27
            },
            {
              source: '8642',
              target: 'L2769',
              value: 12
            },
            {
              source: '9152',
              target: 'L5485',
              value: 2
            },
            {
              source: '9220',
              target: 'L4063',
              value: 9
            },
            {
              source: '9241',
              target: 'L3288',
              value: 13
            },
            {
              source: '9405',
              target: 'L3259',
              value: 21
            },
            {
              source: '9551',
              target: 'L5777',
              value: 12
            },
            {
              source: '9614',
              target: 'L5924',
              value: 2
            },
            {
              source: '9617',
              target: 'L5553',
              value: 26
            },
            {
              source: '9635',
              target: 'L3191',
              value: 24
            },
            {
              source: '9683',
              target: 'L7291',
              value: 18
            },
            {
              source: '9735',
              target: 'L9633',
              value: 16
            }
          ]
        }
      };
      
      option && myChart.setOption(option);

});


