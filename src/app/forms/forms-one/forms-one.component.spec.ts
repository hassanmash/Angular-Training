import { ComponentFixture, TestBed, async, fakeAsync, tick } from "@angular/core/testing";
import { FormsOneComponent } from "./forms-one.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { ChangeDetectionStrategy } from "@angular/compiler";
import { DebugElement } from "@angular/core";

describe("Forms-one component", () => {
    let component: FormsOneComponent;
    let fixture: ComponentFixture<FormsOneComponent>;
    let debugElem: DebugElement;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ FormsOneComponent ],
            imports: [ FormsModule,
                ReactiveFormsModule]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormsOneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        debugElem = fixture.debugElement;
    });

    it("should render 2 titles", () => {
        const htmlElem = fixture.nativeElement;
        const h4Elems = htmlElem.querySelectorAll('h4');
        expect(h4Elems.length).toBe(2);
    });

    it("should render 2 forms", () => {
        const htmlElem = fixture.nativeElement;
        const forms = htmlElem.querySelectorAll('form');
        expect(forms.length).toBe(2);
    });


    it("should validate reactive form to valid", (done) => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const usernameHTMLelem = debugElem.query(By.css("#rUsername")).nativeElement as HTMLInputElement;
            usernameHTMLelem.value = "hassan@gmail.com";
            const passwordHTMLelem = debugElem.query(By.css("#rPassword")).nativeElement as HTMLInputElement;
            passwordHTMLelem.value = "Aabcde123@";
            usernameHTMLelem.dispatchEvent(new Event('input'));
            passwordHTMLelem.dispatchEvent(new Event('input'));
            expect(usernameHTMLelem.value).toEqual(component.user.value);
            expect(passwordHTMLelem.value).toEqual(component.password.value);
            expect(component.rLoginForm.invalid).toBeFalsy();
            done();
        })
    });

    it("should validate reactive form to invalid", (done) => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const usernameHTMLelem = debugElem.query(By.css("#rUsername")).nativeElement as HTMLInputElement;
            usernameHTMLelem.value = "hassan@gmail.com";
            const passwordHTMLelem = debugElem.query(By.css("#rPassword")).nativeElement as HTMLInputElement;
            passwordHTMLelem.value = "abd124";
            usernameHTMLelem.dispatchEvent(new Event('input'));
            passwordHTMLelem.dispatchEvent(new Event('input'));
            expect(usernameHTMLelem.value).toEqual(component.user.value);
            expect(passwordHTMLelem.value).toEqual(component.password.value);
            expect(component.rLoginForm.invalid).toBeTruthy();
            done();
        })
    });

    it("should display error message when reactive form username is invalid", (done) => {
        component.rLoginForm.controls.user.setValue('hassangmail.com');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const usernameHTMLelem = debugElem.query(By.css("#rUsername")).nativeElement as HTMLInputElement;
            expect(usernameHTMLelem.value).toEqual(component.rLoginForm.controls.user.value);
            expect(component.rLoginForm.controls.user.invalid).toBeTruthy();
            done();
        })
    })
})