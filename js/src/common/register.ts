import Application from 'flarum/common/Application';
import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';
import TrendsWidget from './components/widget';
import { extName } from '../r';

export default function (app: Application) {
  const isTrendsExtensionEnabled = app.data.extensions.find((ext) => ext.id === 'liplum-trends');
  new Widgets()
    .add({
      key: 'liplum-trends-widget',
      component: TrendsWidget,
      isDisabled: () => false,
      isUnique: true,
      placement: 'end',
      position: 2,
    })
    .extend(app, extName);
}
