import React from 'react';
import { Form } from 'react-final-form';
import s from './News.module.css';
import { Field } from 'react-final-form';


const News = (props) => {

    const onSubmit = (values) => { 
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

        const myVinyls =  
            [ 
            //     food: values.food,
            //  alcohol: values.alcohol,
            //  apartment: values.apartment,
            //  transport: values.transport
            //155,65,8,2
            Number(values.food),Number(values.alcohol),Number(values.apartment),Number(values.transport)
            ]
            const wqe = Number(values.food)
            console.log(typeof(wqe))
            console.log(typeof(myVinyls[1]))
        
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
                    }

                    var start_angle = 0;
                    for ( let categ in this.options.data) {
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
                    for (let categ in this.options.data){
                        let val = this.options.data[categ];
                        slice_angle = 2 * Math.PI * val / total_value;
                        var pieRadius = Math.min(this.canvas.width/2,this.canvas.height/2);
                        var labelX = this.canvas.width/2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle/2);
                        var labelY = this.canvas.height/2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle/2);
              
                        if (this.options.doughnutHoleSize){
                            var offset = (pieRadius * this.options.doughnutHoleSize ) / 2;
                            labelX = this.canvas.width/2 + (offset + pieRadius / 2) * Math.cos(start_angle + slice_angle/2);
                            labelY = this.canvas.height/2 + (offset + pieRadius / 2) * Math.sin(start_angle + slice_angle/2);
                        }
              
                        var labelText = Math.round(100 * val / total_value);
                        this.ctx.fillStyle = 'white';
                        this.ctx.font = 'bold 20px Arial';
                        this.ctx.fillText(labelText+'%', labelX,labelY);
                        start_angle += slice_angle;
                };
            }
        }
    }

        var myPiechart = new Piechart(
            {
                canvas: myCanvas,
                data: myVinyls,
                colors: ['#fde23e', '#f16e23', '#57d9ff', '#937e88']
            }
        )
        myPiechart.draw();
    
}

    

    return (
        <div className={s.formExpenses}>
            <Form
                onSubmit={onSubmit}
                // initialValues={{
                //     ...props.profile
                // }}

                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} className={s.form}>

                        <div>
                            <label>Еда : </label>
                            <Field name="food" placeholder="" component="input" type="text" />
                        </div>
                        <div>
                            <label>Алкоголь : </label>
                            <Field name="alcohol" placeholder="" component="input" type="text" />
                        </div>
                        <div>
                            <label>Квартира : </label>
                            <Field name="apartment" placeholder="" component="input" type="text" />
                        </div>
                        <div>
                            <label>Транспорт : </label>
                            <Field name="transport" placeholder="" component="input" type="text" />
                        </div>

                        <div className={s.button}>
                            <button type="submit"
                            //disabled={submitting || pristine} //сделать видимой невидимой
                            >
                                Добавить
                            </button>
                            <button type="button"
                                onClick={form.reset}
                            >
                                Очистить
                            </button>

                        </div>
                    </form>
                )}
            />

            <canvas id="tutorial" ></canvas>
            
        </div>

    )
                
            }
export default News;



