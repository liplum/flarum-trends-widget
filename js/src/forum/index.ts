import app from 'flarum/common/app';
import registerWidget from '../common/register';
import { extName } from '../r';

app.initializers.add(extName, () => {
  registerWidget(app);
});
