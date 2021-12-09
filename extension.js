const { Meta, Shell } = imports.gi;
const Main = imports.ui.main;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

class Extension {
  enable() {
    log("enabled");

    // NOTE: `getSettings` references `settings-schema` in `metadata.json`.
    const settings = ExtensionUtils.getSettings();
    Main.wm.addKeybinding(
      "keybinding-example-hot-key",
      settings,
      Meta.KeyBindingFlags.NONE,
      Shell.ActionMode.NORMAL,
      () => {
        log("🐣<moo");
        Main.notify("🐣<moo");
      }
    );
  }

  disable() {
    log("disabled");
    Main.wm.removeKeybinding("keybinding-example-hot-key");
  }
}

function log(msg) {
  global.log(`[${Me.metadata.name}] ${msg}`);
}

function init() {
  return new Extension();
}
