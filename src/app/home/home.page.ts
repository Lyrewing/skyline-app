import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options: any;
  constructor() {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {

    this.options = {
      title: {
        text: '身高'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: 'plain'
      },
      grid: {
        left: '3%',
        right: '5%',
        bottom: '40px',
        containLabel: true
      },
      toolbox: {
        left: 'right',
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      dataZoom: [{
        startValue: '0'
      }, {
        type: 'inside'
      }],
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }]
    };


  }
}
