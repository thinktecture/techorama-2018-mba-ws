const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path'),
  url = require('url');

let mainWindow;

const createWindow = () => {
  const options = {
    width: 1000,
    height: 700,
    title: 'Conference App',
    webPreferences: {
      nodeIntegration: false
    }
  };
  mainWindow = new BrowserWindow(options);
  const mainWindowUrl = url.format({
    pathname: path.join(__dirname, 'web', 'index.html'),
    protocol: 'file:',
    slashes: true
  });
  globalShortcut.register('CommandOrControl+Shift+D', () => {
    mainWindow.webContents.toggleDevTools();
  })
  mainWindow.loadURL(mainWindowUrl);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }

});

app.on('quit', () => {
  mainWindow = null;
  globalShortcut.unregisterAll();
});
