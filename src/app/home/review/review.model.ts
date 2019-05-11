export class Review {
    reviewerDescription:string;
    reviewerName:string;
    constructor(desc:string, name:string){
        this.reviewerDescription = desc;
        this.reviewerName = name;
    }
}