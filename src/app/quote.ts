export class Quote {
    showForm:boolean;
    constructor(public id:number,public name:string,public quotes: string,public datePosted: Date, 
      public numberOfLikes:number,public numberOfDislikes:number){
        this.showForm=false;
    }
}
