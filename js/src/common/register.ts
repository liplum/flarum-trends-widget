import Application from 'flarum/common/Application';
import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';
import TrendsWidget from './components/widget';
import { extName } from '../r';

export default function (app: Application) {
  new Widgets()
    .add({
      key: 'liplum-trends-widget',
      component: TrendsWidget,
      isDisabled: () => !("liplum-trends" in flarum.extensions),
      isUnique: true,
      placement: 'top',
      position: 1,
    })
    .extend(app, extName);
}
