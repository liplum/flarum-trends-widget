import app from 'flarum/common/app';
import Widget, { WidgetAttrs } from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

interface HtmlWidgetAttrs extends WidgetAttrs {

}
const htmlId = "liplum-html-widget"

export default class HtmlWidgetWidget extends Widget<HtmlWidgetAttrs> {
  className(): string {
    return 'liplum-html-widget'
  }

  icon(): string {
    const icon = app.forum.attribute<string>('liplum-html-widget.icon');
    return icon
  }

  title(): string {
    const title = app.forum.attribute<string>('liplum-html-widget.title');
    return title
  }

  content() {
    return <div id={htmlId}></div>;
  }

  oncreate(vnode): void {
    const innerHtml = app.forum.attribute<string>('liplum-html-widget.innerHtml');
    const e = document.getElementById(htmlId)
    if (e) {
      e.innerHTML = innerHtml
    }
  }
}
