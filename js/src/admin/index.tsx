import app from 'flarum/admin/app';
import commonApp from 'flarum/common/app';
import registerWidget from '../common/register';
import { extName } from '../r';

app.initializers.add(extName, () => {
  registerWidget(commonApp);

  app.extensionData
    .for(extName)
});
