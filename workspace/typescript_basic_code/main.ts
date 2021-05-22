import {LikeComponent} from './like_component';

let component = new LikeComponent(10,true);
component.onclick();
console.log(`likescount : ${component.likeCount}, isselcted : ${component.isSelected}`)


 
/* function log(message){
    console.log(message)
 }
 
 var message = 'hello world';
 log(message);


 interface Point {
    x:number,
    y:number
  }
  
  let drawPoint =(point: Point) => {
    log(point.x + point.y);
  }
  
  drawPoint ({x:1,y:2}) */