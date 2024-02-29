// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('api', {
  // Invoke Methods
  testInvoke: (args: any) => ipcRenderer.invoke('test-invoke', args),
  // Send Methods
  testSend: (args: any) => ipcRenderer.send('test-send', args),
  // Receive Methods
  testReceive: (callback: (arg0: any) => void) =>
    ipcRenderer.on('test-receive', (event, data) => {
      callback(data);
    }),
});

export type ElectronHandler = typeof electronHandler;
