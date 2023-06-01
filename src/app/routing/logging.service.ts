export class LoggingService {
    private isLoggedIn: boolean = false;

    public login() {
        this.isLoggedIn = true;
        console.log("Log in...");
    }
    
    public logout() {
        this.isLoggedIn = false;
        console.log("Log out...");
    }

    public getLogDetails(): Promise<boolean> {
        // return this.isLoggedIn;
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(this.isLoggedIn);
            }, 500);
        })
    }
}