class InputFile{
    private files:FileList;
    constructor(file:HTMLInputElement){
        this.files=<FileList>(<HTMLInputElement>file).files
    }
    public getFiles():FileList
    {
        return this.files;
    }
}