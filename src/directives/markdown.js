import * as md from 'markdown-it';

export default {
  bind(element) {
    const newElement = element;
    newElement.innerHTML = md().render(element.textContent);
  },
};
