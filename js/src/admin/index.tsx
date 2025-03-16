import app from 'flarum/admin/app';
import commonApp from 'flarum/common/app';
import registerWidget from '../common/register';
import { extName } from '../r';

app.initializers.add(extName, () => {
  registerWidget(commonApp);

  app.extensionData
    .for(extName)
    .registerSetting({
      setting: `${extName}.recentDays`,
      label: app.translator.trans(`${extName}.admin.recentDays.label`),
      help: app.translator.trans(`${extName}.admin.recentDays.help`),
      type: `number`
    })
    .registerSetting({
      setting: `${extName}.limit`,
      label: app.translator.trans(`${extName}.admin.limit.label`),
      help: app.translator.trans(`${extName}.admin.limit.help`),
      type: `number`
    })
    .registerSetting({
      setting: `${extName}.hotSpotHours`,
      label: app.translator.trans(`${extName}.admin.hotSpotHours.label`),
      help: app.translator.trans(`${extName}.admin.hotSpotHours.help`),
      type: `number`
    })
});
