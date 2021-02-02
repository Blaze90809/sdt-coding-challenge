export interface user {

        oid: string,
        verified: boolean,
        firstLogin: Date,
        latestLogin: Date,
        userAgreement: string,
        accountLocked: boolean,
        failedVerificationAttempts: number
}

export interface participant {
    maxisParticipantId: number;
    firstName: string;
    lastName: string;
}

export class document {
    public docSubmissionId?: number;
    public documentType? : number;
    public documentSubType?: number;
    public caseNumber?: number;
    public caseParticipant?: number;
    public pageCount?: number;
    public receiptCode?: string;
    public numberOfFiles?: number;
    public email?: string;
    public submitterOID?: string;
    public submittedDate?: Date;
    public processedDate?: Date;

    // Additional properties
    public caseType?: string;
    public participant?: participant;

    constructor(public document: document) { }

    public async update() {
        if (this.document.documentType === 1 && this.document.documentSubType === 1) {
            this.document.caseType = "Income Employer verification"
        } else if (this.document.documentType === 1 && this.document.documentSubType === 3) {
            this.document.caseType = "Income Award letter from Social Security Administration"
        } else if (this.document.documentType === 2) {
           this.document.caseType = "Identity document"
        } else if (this.document.documentType === 3) {
            this.document.caseType = "Shelter document"
        } else if (this.document.documentType === 4) {
            this.document.caseType = "Combined Six Month report"
        }
    }
}
