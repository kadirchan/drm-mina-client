import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import './App.css';

function Home() {
  const [cpu_id, setCpuId] = useState('');
  const [system_serial, setSystemSerial] = useState('');
  const [system_uuid, setSystemUuid] = useState('');
  const [baseboard_serial, setBaseboardSerial] = useState('');
  const [mac_addresses, setMacAddresses] = useState([] as string[]);
  const getSerialNumber = () => {
    window.api.testSend();
    window.api.testReceive((data: any) => {
      setCpuId(data.cpu_id);
      setSystemSerial(data.system_serial);
      setSystemUuid(data.system_uuid);
      setBaseboardSerial(data.baseboard_serial);
      setMacAddresses(data.mac_addresses);
    });
  };
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1 className="bg-gray-700 text-center text-red-200">DRM Mina</h1>
      <div className="Hello">
        <button type="button" onClick={getSerialNumber}>
          get id
        </button>
        <ul>
          <li>CPU ID: {cpu_id}</li>
          <li>System Serial: {system_serial}</li>
          <li>System UUID: {system_uuid}</li>
          <li>Baseboard Serial: {baseboard_serial}</li>
          {mac_addresses.map((mac: string, index: number) => (
            <li key={index}>MAC Address: {mac}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

declare global {
  interface Window {
    api?: any;
  }
}
