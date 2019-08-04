'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function () {

  mainWindow = new BrowserWindow({
    width: 500,
    height: 150,
    minWidth: 250,
    minHeight: 80,
    resizable: true,
    frame: false
   });
  mainWindow.loadURL('file://' + __dirname + '/app/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

});
