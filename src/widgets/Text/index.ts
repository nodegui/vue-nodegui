import { VNText } from './VNText';

class TextConfig {
    parentNode: any;

    insertChild() {
      console.log('insert child of text');
    }

    createElement() {
      return new VNText();
    }

    setText(node: VNText, text: string) {
      node.setText(text);
    }

    setElementText(node: VNText, text: string) {
      node.setText(text);
    }
}

export default TextConfig;
