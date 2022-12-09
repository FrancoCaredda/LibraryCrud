export class Book {
    constructor(private title: string, 
                private count: Number) { }

    public setTitle(title: string): void {
        this.title = title;
    }

    public setCount(count: Number): void {
        this.count = count;
    }

    public getTitle(): string {
        return this.title;
    }

    public getCount() {
        return this.count;
    }
}