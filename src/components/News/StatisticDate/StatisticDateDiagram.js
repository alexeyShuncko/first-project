import React from 'react';


const StatisticDateDiagram = (diagramm,eee) => {

    let myCanvas = document.getElementById('period');
    myCanvas.width = 200;
    myCanvas.height = 200;

    function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
    }
    console.log(diagramm) // изменение объекта расходов 

    const myVinyls =
    {
        food:
        diagramm.food ? Number(diagramm.food)
                : 15,
        alcohol:
        diagramm.alcohol ? Number(diagramm.alcohol)
                : 15,
        apartment:
        diagramm.apartment ? Number(diagramm.apartment)
                : 15,
        transport:
        diagramm.transport ? Number(diagramm.transport)
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
            colors: [
                eee.food.color, 
                eee.alcohol.color, 
                eee.apartment.color, 
                eee.transport.color
        ]
        }
    )
    myPiechart.draw();
}


export default StatisticDateDiagram;



