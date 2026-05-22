import Checkbox from "./Field/Checkbox.js";
import Email from "./Field/Email.js";
import Password from "./Field/Password.js";
import Text from "./Field/Text.js";

export default class FormFactory {
    constructor(item) {
        switch (item.type) {
            case "text":
                return new Text(item);
            case "password":
                return new Password(item);
            case "email":
                return new Email(item);
            case "checkbox":
                return new Checkbox(item);
            default:
                return new Text(item);
        }
    }
}