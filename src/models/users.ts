export interface User {
    oid: string,
    verified: boolean,
    firstLogin: Date,
    latestLogin: Date,
    userAgreement: string,
    accountLocked: boolean,
    failedVerificationAttempts: number
}

export interface Participant {
    maxisParticipantId: number;
    firstName: string;
    lastName: string;
}

export class Document {
    docSubmissionId: number;
    documentType: number;
    documentSubType: number;
    caseNumber: number;
    caseParticipant: number;
    pageCount: number;
    receiptCode: string;
    numberOfFiles: number;
    email: string;
    submitterOID: string;
    submittedDate: Date;
    processedDate: Date;

    // Additional properties
    caseType?: string;
    participant?: Participant;

    constructor(public document: Document) {
        this.docSubmissionId = document.docSubmissionId;
        this.documentSubType = document.documentSubType;
        this.documentType = document.documentType;
        this.caseNumber = document.caseNumber;
        this.caseParticipant = document.caseParticipant;
        this.pageCount = document.pageCount;
        this.receiptCode = document.receiptCode;
        this.numberOfFiles = document.numberOfFiles;
        this.email = document.email;
        this.submitterOID = document.submitterOID;
        this.submittedDate = document.submittedDate;
        this.processedDate = document.processedDate;
        this.caseType = this.update(document.documentType, document.documentSubType)
    }

    update(documentType: number, documentSubType: number) {
        let docType = '';
        switch (documentType) {
            case 1:
                if (documentSubType === 1) {
                    docType = "Income Employer verification"
                    break;
                } else if (documentSubType === 3) {
                    docType = "Income Award letter from Social Security Administration"
                    break;
                }
                break;
            case 2:
                docType = "Identity document"
                break;
            case 3:
                docType = "Shelter document"
                break;
            case 4:
                docType = "Combined Six Month report"
                break;
            default:
                docType = ''
                break;
        }
        return docType
    }
}
