import React from 'react';


const Diagram = (food,alcohol,apartment,transport,selectDiagramm,Cur_OfficialRate) => {

    let myCanvas = document.getElementById('tutorial');
    myCanvas.width = 300;
    myCanvas.height = 400;

    function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
    }
    console.log() // изменение объекта расходов 

    const myVinyls =
    {
        food:
            food ? Number(food.summ)
                : 15,
        alcohol:
            alcohol ? Number(alcohol.summ)
                : 15,
        apartment:
            apartment ? Number(apartment.summ)
                : 15,
        transport:
            transport ? Number(transport.summ)
                : 15
    }
    const totalSumm = Number(food.summ) + 
    Number(alcohol.summ) + 
    Number(apartment.summ) + 
    Number(transport.summ)


    class Piechart {
        constructor(options) {
            this.options = options;
            this.canvas = options.canvas;
            this.ctx = this.canvas.getContext('2d');
            this.colors = options.colors;

            this.draw = function () {
                let total_value = totalSumm
                let color_index = 0;
                var start_angle = 0;

                for (let categ in this.options.data) {
                    let val = this.options.data[categ];

                    var slice_angle = 2 * Math.PI * val / total_value;

                    drawPieSlice(

                        this.ctx,
                        300/ 2,
                        300 / 2,
                        Math.min(300 / 2, 300 / 2),
                        start_angle,
                        start_angle + slice_angle,
                        this.colors[color_index % this.colors.length]
                    );

                  
                    var pieRadius = Math.max(400/ 2, 300/ 2);
                     
                    var labelX = 300/ 2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle / 2)                    

                    var labelY = 300 / 2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle / 2);


                    var labelText = Math.round(100 * val / total_value);// подпись диаграммы cтиль
                    this.ctx.fillStyle = 'white';
                    this.ctx.font = 'bold 19px Arial';
                    if (selectDiagramm === 'процентах') { this.ctx.fillText(labelText + '%', labelX, labelY) }
                    else  if (selectDiagramm === 'рублях'){ this.ctx.fillText(val.toFixed(0) + 'р', labelX, labelY) }
                    else  if (selectDiagramm === 'долларах'){ this.ctx.fillText((val/Cur_OfficialRate).toFixed(0) + '$', labelX, labelY) }
                    start_angle += slice_angle;
                    color_index++;
                }
            }
        }
    }

    var myPiechart = new Piechart(
        {
            canvas: myCanvas,
            data: myVinyls,
            colors: [
                food.color,
                alcohol.color,
                apartment.color,
                transport.color
            ]
        }
    )
    myPiechart.draw();
    return <div></div>
}


export default Diagram;



