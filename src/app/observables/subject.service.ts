import { Subject } from "rxjs";

export class SubjectServices {
    public dataEmitter = new Subject<string>();

    public dataObservable(data: string) {
        this.dataEmitter.next(data);
    }

    public closeObservable() {
        this.dataEmitter.complete();
    }
    
}