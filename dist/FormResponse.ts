export interface FormResponse {
    readonly selection: number;
    readonly canceled: boolean;
    readonly cancelationReason: FormCancelationReason
}
enum FormCancelationReason {
    userBusy = "userBusy",
    userClosed = "userClosed"
}