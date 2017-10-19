var fs = require('fs');
var cheerio = require('cheerio');
var content = fs.readFileSync('./chapter14.txt', 'utf-8');
var $ = cheerio.load(content);
var final = [];
var newText = {};

var text = $('body').contents().text();
    // console.log(text)
// newText.cleaner = text.replace((/(^|\s)\w\w\w(\s|$)/gi), ' ')
// newText.Ghana = text.match(/(\w.{1,100})?\s+Ghana+\s?.\W?(\w.{1,100})?/gi)
// newText.Tanzania = text.match(/(\w.{1,100})?\s+Tanzania+\s?.\W?(\w.{1,100})?/gi)
// newText.BurkinaFaso = text.match(/(\w.{1,100})?\s+Burkina+((Faso)?)+\s?.\W?(\w.{1,100})?/gi)
newText.factor = text.match(/(\w.{1,100})?\s+factor+\s?.\W?(\w.{1,100})?/gi);
newText.argriculture = text.match(/(\w.{1,100})?\s+agriculture+\s?.\W?(\w.{1,100})?/gi)
newText.policy = text.match(/(\w.{1,100})?\s+policy+\s?.\W?(\w.{1,100})?/gi)
newText.education = text.match(/(\w.{1,100})?\s+education+\s?.\W?(\w.{1,100})?/gi)

final.push(newText);

// fs.writeFileSync('countries.txt', JSON.stringify(final, null, 1));

function display() {
                background("clear");
                translate(textX, windowHeight / 8); //made up textX. also can use height instead of windowheight at this point.

                newText.forEach(function(element) {
                    // textSize(20);
                    // text(element.word, 0, 0);
                    if (element.word == 'education' || element.word == 'agriculture' || element.word == 'policy') {
                        textSize(30)
                        fill("blue")
                        text(element.word, 0, 0)

                    }
                    else if (element.word == 'Ghana' || element.word == 'Burkina' || element.word == 'Tanzania' || element.word == 'Faso') {
                        textSize(20)
                        fill("red")
                        text(element.word, 0, 0)
                    }
                    // else if (element.word == 'access' || element.word == 'health' || element.word == 'quality' || element.word == 'services' || element.word == 'water'|| element.word == 'productivity' || element.word == 'school') {
                    //     textSize(20)
                    //     fill("red")
                    //     text(element.word, 0, 0)
                    // }
                    else {
                        textSize(15)
                        fill("gray")
                        text(element.word, 0, 0)
                    }

                    var txtWidth = textWidth(element.word);
                    translate(20, 20);
                });
            }

            function mouseDragged() {
                //click down and move, it calls 1 px
                windowHeight += mouseY - pmouseY; //previous mouseX
                display();
            
            }