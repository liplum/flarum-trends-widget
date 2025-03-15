import app from 'flarum/common/app';
import Widget, { WidgetAttrs } from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import { extName } from '../../r';

interface TrendsWidgetAttrs extends WidgetAttrs {

}

export default class TrendsWidget extends Widget<TrendsWidgetAttrs> {
  className(): string {
    return 'liplum-trends-widget'
  }

  icon(): string {
    return "fas fa-fire-alt"
  }

  title(): string {
    return app.translator.trans(`${extName}.forum.widget.title`) as string
  }

  content() {
    return <div></div>
  }
}
