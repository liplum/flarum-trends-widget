import app from 'flarum/admin/app';
import commonApp from 'flarum/common/app';
import registerWidget from '../common/register';
import { extName } from '../r';
// import SettingsModal from 'flarum/admin/components/SettingsModal';

app.initializers.add(extName, () => {
  registerWidget(commonApp);

  app.extensionData
    .for(extName)
    .registerSetting({
      setting: `${extName}.title`,
      label: app.translator.trans(`${extName}.admin.title.label`),
      help: app.translator.trans(`${extName}.admin.title.help`),
      type: `text`,
    })
    .registerSetting({
      setting: `${extName}.icon`,
      label: app.translator.trans(`${extName}.admin.icon.label`),
      help: app.translator.trans(`${extName}.admin.icon.help`),
      type: `text`,
    })
    .registerSetting(function () {
      const updateLivePreview = () => {
        const innerHtml = $("#html-textarea").val();
        $("#html-live-preview").html(`${innerHtml}`);
      }
      $("#html-textarea").on("keyup", updateLivePreview)
      $(updateLivePreview)
      return (
        <div className="Form-group">
          <aside style={{
            fontSize: "1rem",
            width: "750px",
            textAlign: "justify",
            paddingLeft: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            marginBottom: "1rem",
            borderLeft: "4px solid #ff6a00",
          }}>
            {app.translator.trans(`${extName}.admin.warning`)}
          </aside>
          <div style={{
            display: "inline-flex",
          }}>
            <textarea id="html-textarea"
              style={{
                height: "300px",
                width: "500px",
                margin: "0 auto",
                marginBottom: "50px",
              }}
              bidi={this.setting(`${extName}.innerHtml`)}
            />
            <div id="html-live-preview"
              style={{
                height: "300px",
                width: "480px",
                marginLeft: "8px",
                border: "0px",
              }}
            />
          </div>
        </div>
      );
    });
});
