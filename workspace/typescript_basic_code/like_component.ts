export class LikeComponent {
    public likeCount: number;
    public isSelected:boolean;

    constructor(likeCount,isSelected){
        this.likeCount=likeCount;
        this.isSelected=isSelected;
    }

    onclick(){
        if(this.isSelected){
            this.likeCount--;
        } else {
            this.likeCount++;
        }
    }
}