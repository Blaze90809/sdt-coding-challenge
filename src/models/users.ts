export interface user {

        oid: string,
        verified: boolean,
        firstLogin: Date,
        latestLogin: Date,
        userAgreement: string,
        accountLocked: boolean,
        failedVerificationAttempts: number
}

export interface document {
    docSubmissionId: number,
    documentType: number,
    documentSubType: number,
    caseNumber: number,
    caseParticipant: number,
    pageCount: number,
    receiptCode: string,
    numberOfFiles: number,
    email: string,
    submitterOID: string,
    submittedDate: Date,
    processedDate: Date,
    
}