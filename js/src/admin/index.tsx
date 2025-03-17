import app from 'flarum/admin/app';
import commonApp from 'flarum/common/app';
import registerWidget from '../common/register';
import { extName } from '../r';

app.initializers.add(extName, () => {
  registerWidget(commonApp);

  app.extensionData
    .for(extName)
    .registerSetting({
      setting: `${extName}.limit`,
      label: app.translator.trans(`${extName}.admin.limit.label`),
      help: app.translator.trans(`${extName}.admin.limit.help`),
      type: `number`
    })
});
