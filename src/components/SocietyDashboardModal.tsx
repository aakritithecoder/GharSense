import React, { useState } from 'react';
import { X, Building2, Droplets, Zap, AlertTriangle, FileDown, CheckCircle, RefreshCw, Power } from 'lucide-react';
import { SocietyTank, PumpMotor, LeakLog } from '../types';
import { playAlertChime } from '../utils/audio';

interface SocietyDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SocietyDashboardModal: React.FC<SocietyDashboardModalProps> = ({ isOpen, onClose }) => {
  const [tanks, setTanks] = useState<SocietyTank[]>([
    { id: 't1', name: 'Overhead Tank 1 (Wing A)', type: 'overhead', capacityLiters: 10000, currentLevelPercent: 96, inflowRateLpm: 120, outflowRateLpm: 45, status: 'filling' },
    { id: 't2', name: 'Overhead Tank 2 (Wing B)', type: 'overhead', capacityLiters: 10000, currentLevelPercent: 82, inflowRateLpm: 0, outflowRateLpm: 38, status: 'normal' },
    { id: 't3', name: 'Overhead Tank 3 (Wing C)', type: 'overhead', capacityLiters: 8000, currentLevelPercent: 74, inflowRateLpm: 0, outflowRateLpm: 30, status: 'normal' },
    { id: 't4', name: 'Underground Raw Water Sump', type: 'sump', capacityLiters: 50000, currentLevelPercent: 68, inflowRateLpm: 210, outflowRateLpm: 120, status: 'normal' },
  ]);

  const [pumps, setPumps] = useState<PumpMotor[]>([
    { id: 'p1', name: 'Pump 1: 5.0 HP Submersible (Wing A & B)', hp: '5.0 HP', phase: '3-Phase', status: 'running', currentAmps: 7.8, voltage: 415, powerFactor: 0.91, runtimeTodayHours: 2.4 },
    { id: 'p2', name: 'Pump 2: 7.5 HP Monoblock (Wing C Riser)', hp: '7.5 HP', phase: '3-Phase', status: 'auto-cutoff', currentAmps: 0.0, voltage: 412, powerFactor: 0.94, runtimeTodayHours: 1.8 },
    { id: 'p3', name: 'Borewell Sump Auxiliary (Emergency)', hp: '3.0 HP', phase: '3-Phase', status: 'dry-run-locked', currentAmps: 0.0, voltage: 415, powerFactor: 0.88, runtimeTodayHours: 0.0 },
  ]);

  const [leaks] = useState<LeakLog[]>([
    { id: 'l1', timestamp: 'Today 04:15 AM', location: 'Wing B Riser - Floor 4 Duct', severity: 'low', estimatedLossLph: 14, status: 'active' },
    { id: 'l2', timestamp: 'Yesterday 09:30 PM', location: 'Clubhouse Flush Supply Line', severity: 'medium', estimatedLossLph: 48, status: 'isolated' },
  ]);

  const [exportNotice, setExportNotice] = useState(false);

  if (!isOpen) return null;

  const triggerManualCutoff = (pumpId: string) => {
    playAlertChime();
    setPumps((prev) =>
      prev.map((p) => {
        if (p.id === pumpId) {
          const newStatus = p.status === 'running' ? 'auto-cutoff' : 'running';
          return {
            ...p,
            status: newStatus,
            currentAmps: newStatus === 'running' ? 7.6 : 0,
          };
        }
        return p;
      })
    );
  };

  const handleExportAGM = () => {
    setExportNotice(true);
    setTimeout(() => setExportNotice(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#f8f9ff] rounded-3xl shadow-2xl border border-[#d3e4fe] overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        
        {/* Top Header Bar */}
        <div className="bg-[#131b2e] text-white p-6 flex items-center justify-between border-b border-[#213145]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00687a] flex items-center justify-center text-white">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline-sm text-[20px] font-bold">Society Fleet Telemetry Console</h3>
                <span className="px-2 py-0.5 rounded bg-[#4edea3]/20 text-[#4edea3] font-mono text-[11px] font-bold">
                  LIVE MESH ONLINE
                </span>
              </div>
              <p className="text-[12.5px] text-[#7c839b]">
                Green Acres CHS (Powai, Mumbai) • 96 Flats • 4 Overhead Tanks • 3 Commercial Pumps
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Console Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#d3e4fe] shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-[#45464d] uppercase tracking-wider">Water Saved This Month</span>
              <div className="text-[24px] font-extrabold text-[#00687a]">1,42,000 L</div>
              <span className="text-[11px] text-[#009668] font-bold">↑ 100% Overflow Prevention</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#d3e4fe] shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-[#45464d] uppercase tracking-wider">Pump Power Saved</span>
              <div className="text-[24px] font-extrabold text-[#0b1c30]">418 kWh</div>
              <span className="text-[11px] text-[#009668] font-bold">≈ ₹4,180 tariff reduction</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#d3e4fe] shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-[#45464d] uppercase tracking-wider">Dry-Run Lockouts</span>
              <div className="text-[24px] font-extrabold text-[#0b1c30]">14 Events</div>
              <span className="text-[11px] text-[#00687a] font-bold">Protected motor windings</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#d3e4fe] shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-[#45464d] uppercase tracking-wider">Connected Residents</span>
              <div className="text-[24px] font-extrabold text-[#00687a]">96 Flats</div>
              <span className="text-[11px] text-[#45464d]">WhatsApp Alert Mesh active</span>
            </div>
          </div>

          {/* Section 1: Water Tank Level Telemetry */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-[#00687a]" />
                <h4 className="font-headline-sm text-[17px] font-bold text-[#0b1c30]">
                  Overhead &amp; Sump Real-time Storage Levels
                </h4>
              </div>
              <span className="text-[12px] text-gray-500 font-mono">Updated 3s ago</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tanks.map((tank) => (
                <div key={tank.id} className="p-5 rounded-2xl bg-white border border-[#d3e4fe] shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-bold text-[14.5px] text-[#0b1c30]">{tank.name}</h5>
                      <p className="text-[12px] text-[#45464d]">Capacity: {tank.capacityLiters.toLocaleString()} Litres</p>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        tank.currentLevelPercent >= 90
                          ? 'bg-[#acedff] text-[#004e5c]'
                          : 'bg-[#eff4ff] text-[#00687a]'
                      }`}
                    >
                      {tank.currentLevelPercent}% Full
                    </span>
                  </div>

                  {/* Visual Progress Bar with Water Flow Animation */}
                  <div className="h-3.5 w-full bg-[#eff4ff] rounded-full overflow-hidden p-0.5 border border-[#d3e4fe]">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        tank.currentLevelPercent >= 95
                          ? 'bg-[#00687a]'
                          : tank.currentLevelPercent > 40
                          ? 'bg-[#57dffe]'
                          : 'bg-amber-500'
                      }`}
                      style={{ width: `${tank.currentLevelPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11.5px] text-[#45464d] font-mono">
                    <span>Inflow: {tank.inflowRateLpm} LPM</span>
                    <span>Outflow: {tank.outflowRateLpm} LPM</span>
                    <span className="font-semibold text-[#00687a]">
                      {tank.currentLevelPercent >= 95 ? 'Cutoff Armed' : 'Normal Filling'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: 3-Phase Commercial Pump Controls */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-600" />
                <h4 className="font-headline-sm text-[17px] font-bold text-[#0b1c30]">
                  3-Phase Pump Motor Controls &amp; Auto-Cutoff Relays
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pumps.map((pump) => (
                <div key={pump.id} className="p-5 rounded-2xl bg-white border border-[#d3e4fe] shadow-xs flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-label-badge text-[10.5px] font-bold text-[#45464d] uppercase">
                        {pump.hp} • {pump.phase}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10.5px] font-bold uppercase ${
                          pump.status === 'running'
                            ? 'bg-[#dcfce7] text-[#009668]'
                            : pump.status === 'auto-cutoff'
                            ? 'bg-[#eff4ff] text-[#00687a]'
                            : 'bg-[#ffdad6] text-[#ba1a1a]'
                        }`}
                      >
                        {pump.status.replace('-', ' ')}
                      </span>
                    </div>

                    <h5 className="font-bold text-[14px] text-[#0b1c30]">{pump.name}</h5>

                    <div className="p-3 rounded-xl bg-[#f8f9ff] text-[12px] space-y-1 font-mono text-[#45464d] border border-[#eff4ff]">
                      <div className="flex justify-between">
                        <span>Current Draw:</span>
                        <strong className="text-[#0b1c30]">{pump.currentAmps} A</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Grid Voltage:</span>
                        <span>{pump.voltage} V</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Power Factor:</span>
                        <span>{pump.powerFactor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Runtime Today:</span>
                        <span>{pump.runtimeTodayHours} hrs</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => triggerManualCutoff(pump.id)}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-[13px] flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      pump.status === 'running'
                        ? 'bg-[#ba1a1a] text-white hover:bg-red-800'
                        : 'bg-[#00687a] text-white hover:bg-[#004e5c]'
                    }`}
                  >
                    <Power className="w-4 h-4" />
                    <span>{pump.status === 'running' ? 'Trigger Safe Cutoff' : 'Engage Motor'}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Acoustic Pipe Telemetry Leak Logs */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h4 className="font-headline-sm text-[17px] font-bold text-[#0b1c30]">
                  Acoustic Riser Leak Telemetry
                </h4>
              </div>
            </div>

            <div className="space-y-2">
              {leaks.map((leak) => (
                <div
                  key={leak.id}
                  className="p-3.5 rounded-xl bg-white border border-[#d3e4fe] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13px]"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        leak.status === 'active' ? 'bg-amber-500 animate-pulse' : 'bg-[#009668]'
                      }`}
                    />
                    <div>
                      <span className="font-bold text-[#0b1c30]">{leak.location}</span>
                      <span className="text-gray-500 ml-2">({leak.timestamp})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-gray-600">≈ {leak.estimatedLossLph} Litres/Hour</span>
                    <span
                      className={`px-2.5 py-0.5 rounded text-[11px] font-bold uppercase ${
                        leak.status === 'active' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {leak.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Export AGM Report Notification Banner */}
          {exportNotice && (
            <div className="p-4 rounded-xl bg-[#dcfce7] text-[#009668] border border-emerald-300 flex items-center justify-between animate-in fade-in">
              <div className="flex items-center gap-2 font-bold text-[14px]">
                <CheckCircle className="w-5 h-5" />
                <span>AGM Audit Report generated! Downloaded: `Green_Acres_CHS_Q1_Utility_Audit.pdf`</span>
              </div>
              <span className="text-[12px] font-medium">Verified by GharSense IoT</span>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-[#d3e4fe] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[13px] text-[#45464d]">
              Live encrypted micro-mesh gateway: <strong>GHARSENSE-GW-POWAI-96</strong>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleExportAGM}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white border border-[#d3e4fe] text-[#00687a] font-bold text-[14px] hover:bg-[#eff4ff] transition-colors cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Export AGM Audit Report (PDF)</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 sm:flex-none inline-flex items-center justify-center py-3 px-6 rounded-xl bg-[#00687a] text-white font-bold text-[14px] hover:bg-[#004e5c] transition-colors cursor-pointer"
              >
                Close Console
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
