import Keyable from "./Keyable";
import formatSafeKey from "./formatSafeKey";

export default class Link implements Keyable {
    title: string;
    href: string;

    constructor(title: string, href : string) {
        this.title = title;
        this.href = href;
    }

    key() {
        return formatSafeKey([this.title])
    }
}