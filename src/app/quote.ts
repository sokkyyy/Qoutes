export class Quote {
    showQuoteDetails: boolean;

    // tslint:disable-next-line: max-line-length
    constructor(public description: string, public author: string, public submittedBy: string, public upVote: number, public downVote: number) {
        this.showQuoteDetails = false;
    }
}
