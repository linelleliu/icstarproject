import React from 'react';
import progress from './progress.jpg';

function Progress() {
  return (
    <div>
      <img className="progress" src={progress} width="360vw" height="420vh"></img>
      <h5>38 hours completed</h5>
      <h5>38 hours to go until next milestone</h5>
    </div>
  )
}

export default Progress;

















// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <script src="//www.amcharts.com/lib/4/core.js"></script>
//     <script src="//www.amcharts.com/lib/4/charts.js"></script>
//     <script src="//www.amcharts.com/lib/4/themes/animated.js"></script>
//     <Style>
//     body {
//         font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//       }
      
//       #chartdiv {
//         width: 100%;
//         height: 250px;
//       }
//     </Style>
//     <script>
   

//         am4core.useTheme(am4themes_animated);
        
//         // create chart
//         var chart = am4core.create("chartdiv", am4charts.GaugeChart);
//         chart.innerRadius = -15;
        
//         var axis = chart.xAxes.push(new am4charts.ValueAxis());
//         axis.min = 0;
//         axis.max = 160;
//         axis.strictMinMax = true;
        
//         var colorSet = new am4core.ColorSet();
        
//         var range0 = axis.axisRanges.create();
//         range0.value = 0;
//         range0.endValue = 36;
//         range0.axisFill.fillOpacity = 1;
//         range0.axisFill.fill = colorSet.getIndex(0);
//         range0.axisFill.zIndex = -1;
        
//         var range1 = axis.axisRanges.create();
//         range1.value = 36;
//         range1.endValue = 76;
//         range1.axisFill.fillOpacity = 1;
//         range1.axisFill.fill = colorSet.getIndex(2);
//         range1.axisFill.zIndex = -1;
        
//         var range1 = axis.axisRanges.create();
//         range1.value = 76;
//         range1.endValue = 114;
//         range1.axisFill.fillOpacity = 1;
//         range1.axisFill.fill = colorSet.getIndex(4);
//         range1.axisFill.zIndex = -1;
        
//         var range2 = axis.axisRanges.create();
//         range2.value = 114;
//         range2.endValue = 152;
//         range2.axisFill.fillOpacity = 1;
//         range2.axisFill.fill = colorSet.getIndex(6);
//         range2.axisFill.zIndex = -1;
        
        
    
        
//         var hand = chart.hands.push(new am4charts.ClockHand());
        
//         setInterval(function () {
//           hand.showValue(Math.random() * 100, 1000, am4core.ease.cubicOut);
//         }, 2000);
        
//         // Add chart title
//         var title = chart.titles.create();
//         title.text = "Milestone";
//         title.fontSize = 25;
//         title.marginBottom = 30;
        
//         // Add bottom label
//         var label = chart.chartContainer.createChild(am4core.Label);
//         label.text = "Hours";
//         label.align = "center";
//             </script>
// </head>
// <body>
    
    
// <div id="chartdiv"></div>
// </body>
// </html>






 