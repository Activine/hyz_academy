export class HtmlFiller{
    constructor(selector, renderFunc, data) {
        this.selector =  document.querySelector(`${selector}`);
        this.renderFunc = renderFunc;
        this.data = data;
        this.selector.className = `${selector.replace(/[#]/gi, '')}`;
    }

    init() {
        const list = document.createElement('div');
        list.className = `${this.selector.className}-wrap`;
        this.selector.append(list);
        const line = document.createElement('ul');
        line.className = `${this.selector.className}-line`;
        list.append(line);
        this.data.forEach(element => {
            line.append(this.renderFunc(this.selector, element));
        });
    }
}