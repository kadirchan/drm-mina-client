import sudo from '@vscode/sudo-prompt';
import { ipcMain } from 'electron';
import { RawIdentifiers } from './identifiers';

let system_info: RawIdentifiers = {
  cpuId: '',
  systemSerial: '',
  systemUUID: '',
  baseboardSerial: '',
  macAddress: [],
  diskSerial: '',
};

export function getWindowsSystemInfo(): Promise<RawIdentifiers> {
  const options = {
    encoding: 'utf-8',
    name: 'Electron',
    icns: '/assets/icon.svg',
  };
  const command =
    'wmic cpu get ProcessorId && wmic bios get serialnumber && wmic csproduct get uuid && wmic baseboard get serialnumber && wmic nicconfig get macaddress';

  return new Promise((resolve, reject) => {
    sudo.exec(command, options, (error, stdout, stderr) => {
      if (error) reject(error);

      if (stdout) {
        console.log(stdout);
        const lines = stdout.toString().split('\n');
        const cpu_id = lines[1].trim();
        const system_serial = lines[3].trim();
        const system_uuid = lines[5].trim();
        const baseboard_serial = lines[7].trim();
        const mac_addresses = lines
          .slice(9, lines.length - 1)
          .map((line: string) => line.trim());

        system_info = {
          cpuId: cpu_id,
          systemSerial: system_serial,
          systemUUID: system_uuid,
          baseboardSerial: baseboard_serial,
          macAddress: mac_addresses,
          diskSerial: '',
        };
      }
      resolve(system_info);
    });
  });
}
