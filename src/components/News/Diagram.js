import React from 'react';


    const Diagram = (props) => {
       
         let myCanvas = document.getElementById('tutorial');
         myCanvas.width = 300;
         myCanvas.height = 300;

         function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
             ctx.fillStyle = color;
             ctx.beginPath();
             ctx.moveTo(centerX, centerY);
             ctx.arc(centerX, centerY, radius, startAngle, endAngle);
             ctx.closePath();
             ctx.fill();
         }
console.log(props)
         const myVinyls =
             {                
                   food: 
                   props.food ? Number(props.food) 
                   : 15,
                   alcohol: 
                   props.alcohol ? Number(props.alcohol) 
                   : 15, 
                   apartment: 
                   props.apartment ? Number(props.apartment) 
                   : 15,
                   transport: 
                   props.transport ? Number(props.transport) 
                   : 15
             }


         class Piechart {
             constructor(options) {
                 this.options = options;
                 this.canvas = options.canvas;
                 this.ctx = this.canvas.getContext('2d');
                 this.colors = options.colors;

                 this.draw = function () {
                     let total_value = 0;
                     let color_index = 0;

                     for (let categ in this.options.data) {
                         let val = this.options.data[categ];
                         total_value += val;
                     
                     var start_angle = 0;
                     for (let categ in this.options.data) {
                         let val = this.options.data[categ];
                         var slice_angle = 2 * Math.PI * val / total_value;

                         drawPieSlice(

                             this.ctx,
                             this.canvas.width / 2,
                             this.canvas.height / 2,
                             Math.min(this.canvas.width / 2, this.canvas.height / 2),
                             start_angle,
                             start_angle + slice_angle,
                             this.colors[color_index % this.colors.length]
                    );

                         start_angle += slice_angle;
                         color_index++;
                     }
                     start_angle = 0;
                 for (let categ in this.options.data) {
                         let val = this.options.data[categ];
                         slice_angle = 2 * Math.PI * val / total_value;
                         var pieRadius = Math.min(this.canvas.width / 2, this.canvas.height / 2);
                         var labelX = this.canvas.width / 2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle / 2);
                         var labelY = this.canvas.height / 2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle / 2);


                         var labelText = Math.round(100 * val / total_value);
                         this.ctx.fillStyle = 'white';
                         this.ctx.font = 'bold 20px Arial';
                         this.ctx.fillText(labelText + '%', labelX, labelY);
                         start_angle += slice_angle;
                     };

                 }
             }
         }
        }

         var myPiechart = new Piechart(
             {
                 canvas: myCanvas,
                 data: myVinyls,
                 colors: ['#fde23e', 'rgb(34, 34, 209)', '#57d9ff', '#169928']
             }
         )
          myPiechart.draw();   
          return <h2> Диаграмма расходов в процентах</h2>   
    }
   
               
export default Diagram;



