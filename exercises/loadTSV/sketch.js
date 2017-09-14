function setup() {
                createCanvas(displayWidth, displayHeight);
                loadTable('groceries.tsv', 'tsv', 'header', showData);
                //showData is a method but it's a callback. just call me back when you're done. it's made up.
                //loadTable is a permanent code (https://p5js.org/reference/#/p5/loadTable)
                //above wedith and height is now protected term
                //noLoop();
                //frameRate(5);
                //this slows the frame rate from the default 60 to 5
            }
            
            function showData(data) {
                var count = data.getRowCount();
                //count is made up, so need to equal it to getRowCount (https://p5js.org/reference/#/p5.Table/getRowCount)
                //showData(data) data is the "payload"
                //the 'data' could be named anything here. as long as the xyz.getRowCount changes with it
                console.log(count);
                
                for (var i=0; i<count; i++) {
                    var amount = data.getString(i, 0);
                    //getString has two requirements, row and column
                    var unit = data.getString(i, 1);
                    var item = data.getString(i, 2);
                    var source = data.getString(i, 3);
                    
                    text(amount + ' | ' + unit + ' | ' + item + ' | ' + source, width/2, 30 * (i + 1));
                    //width/2 centers it. the 30 is pixels and sets the rows by i value. +1 since 0 is not visible.
                
                        if(source == 'store')
                            fill('darkgray');
                        else
                            fill(255, 120, 0);
                        // no need for curly if only one code, but if second line, then needs a curly
                    text(amount + ' | ' + unit + ' | ' + item + ' | ' + source, width/2, 30 * (i + 1));
                }
            }
            //function draw() {
            //below function it processes after click is released