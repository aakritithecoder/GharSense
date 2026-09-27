import React, { useState } from 'react';
import { X, CheckCircle, Truck, Shield, Lock, CreditCard } from 'lucide-react';
import { playAlertChime } from '../utils/audio';

interface OrderKitModalProps {
  isOpen: boolean;
  initialPlan?: string;
  onClose: () => void;
}

export const OrderKitModal: React.FC<OrderKitModalProps> = ({
  isOpen,
  initialPlan = 'starter',
  onClose,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'complete'>(
    initialPlan === 'complete' ? 'complete' : 'starter'
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [pipeSize, setPipeSize] = useState('1" Standard PVC/CPVC');
  const [ordered, setOrdered] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const currentPrice = selectedPlan === 'starter' ? 1199 : 1799;
  const originalPrice = selectedPlan === 'starter' ? 1999 : 2999;
  const savings = originalPrice - currentPrice;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !pincode || !address) {
      alert('Please fill out all address details.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOrdered(true);
      playAlertChime();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#f8f9ff] rounded-3xl shadow-2xl border border-[#d3e4fe] overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#131b2e] text-white p-6 flex items-center justify-between border-b border-[#213145]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00687a] flex items-center justify-center text-white">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline-sm text-[20px] font-bold">Express Hardware Dispatch</h3>
              <p className="text-[12.5px] text-[#7c839b]">
                Free Priority VIP Delivery across all pin codes in India
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {ordered ? (
            <div className="text-center py-8 space-y-5 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-[#dcfce7] text-[#009668] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="font-headline-sm text-[22px] font-bold text-[#0b1c30]">
                  Kit Dispatched Successfully!
                </h4>
                <p className="text-[14px] text-[#45464d] max-w-md mx-auto">
                  Thank you, <strong className="text-[#0b1c30]">{name}</strong>! Your order for the{' '}
                  <strong className="text-[#00687a]">
                    {selectedPlan === 'starter' ? 'Starter Home Kit' : 'Complete Home Shield'}
                  </strong>{' '}
                  is confirmed.
                </p>
                <div className="p-4 rounded-2xl bg-[#eff4ff] border border-[#d3e4fe] text-left text-[13px] space-y-1.5 max-w-md mx-auto mt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Order ID:</span>
                    <span className="font-mono font-bold text-[#0b1c30]">GS-2026-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Delivery Address:</span>
                    <span className="font-medium text-[#0b1c30] text-right">{address}, {pincode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Estimated Delivery:</span>
                    <span className="font-bold text-[#009668]">Tomorrow by 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-t border-[#d3e4fe] pt-2 font-bold text-[#0b1c30]">
                    <span>Amount Paid:</span>
                    <span>₹{currentPrice.toLocaleString()} (Zero Shipping Fee)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#00687a] text-white font-bold text-[14px] hover:bg-[#004e5c] transition-colors cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              {/* Plan Choice Selector */}
              <div className="space-y-2">
                <label className="text-[13.5px] font-bold text-[#0b1c30]">Select Hardware Configuration</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => setSelectedPlan('starter')}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedPlan === 'starter'
                        ? 'border-[#00687a] bg-[#acedff]/20 shadow-xs'
                        : 'border-[#d3e4fe] bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-[14.5px] text-[#0b1c30]">Starter Home Kit</span>
                      <span className="font-bold text-[15px] text-[#00687a]">₹1,199</span>
                    </div>
                    <p className="text-[12px] text-[#45464d] mt-1">Water overflow clamp + 16A smart cutoff relay</p>
                  </div>

                  <div
                    onClick={() => setSelectedPlan('complete')}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all relative ${
                      selectedPlan === 'complete'
                        ? 'border-[#00687a] bg-[#acedff]/20 shadow-xs'
                        : 'border-[#d3e4fe] bg-white hover:bg-gray-50'
                    }`}
                  >
                    <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#00687a] text-white text-[9.5px] font-bold uppercase tracking-wider">
                      Most Popular
                    </span>
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-[14.5px] text-[#0b1c30]">Complete Home Shield</span>
                      <span className="font-bold text-[15px] text-[#00687a]">₹1,799</span>
                    </div>
                    <p className="text-[12px] text-[#45464d] mt-1">Water sensor + MCB power monitor + Hindi audio</p>
                  </div>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-[#0b1c30]">Recipient Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Iyer"
                    className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#d3e4fe] text-[13.5px] outline-none focus:border-[#00687a]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-[#0b1c30]">WhatsApp Mobile (+91)</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98200 XXXXX"
                    className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#d3e4fe] text-[13.5px] outline-none focus:border-[#00687a] font-mono"
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-[13px] font-semibold text-[#0b1c30]">Delivery Address (House/Flat No, Society, Street)</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Flat 402, Wing B, Oberoi Splendor, JVLR"
                    className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#d3e4fe] text-[13.5px] outline-none focus:border-[#00687a]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-[#0b1c30]">6-Digit PIN Code</label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="400076"
                    className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#d3e4fe] text-[13.5px] outline-none focus:border-[#00687a] font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-[#0b1c30]">Main Pipe Diameter</label>
                  <select
                    value={pipeSize}
                    onChange={(e) => setPipeSize(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#d3e4fe] text-[13.5px] outline-none cursor-pointer"
                  >
                    <option value='0.75" (3/4 inch)'>0.75" (3/4 inch) CPVC / PVC</option>
                    <option value='1.0" (1 inch) Standard'>1.0" (1 inch) Standard Riser</option>
                    <option value='1.25" (1-1/4 inch)'>1.25" (1-1/4 inch) Riser</option>
                    <option value='1.5" (1-1/2 inch)'>1.5" (1-1/2 inch) Riser</option>
                    <option value='2.0" to 2.5" Society'>2.0" to 2.5" Society Main Line</option>
                  </select>
                </div>
              </div>

              {/* Order Summary Box */}
              <div className="p-4 rounded-2xl bg-[#eff4ff] border border-[#d3e4fe] space-y-2 text-[13px]">
                <div className="flex justify-between text-[#45464d]">
                  <span>Hardware Subtotal:</span>
                  <span className="line-through">₹{originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#009668] font-bold">
                  <span>Monsoon Launch Discount:</span>
                  <span>- ₹{savings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#45464d]">
                  <span>Shipping &amp; Transit Insurance:</span>
                  <span className="font-bold text-[#009668]">FREE (Express Air)</span>
                </div>
                <div className="flex justify-between border-t border-[#d3e4fe] pt-2 text-[16px] font-extrabold text-[#0b1c30]">
                  <span>Total Payable:</span>
                  <span className="text-[#00687a]">₹{currentPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11.5px] text-gray-500">
                <Lock className="w-4 h-4 text-[#00687a]" />
                <span>100% Secure Checkout • Cash on Delivery / UPI / Card supported</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-xl bg-[#00687a] text-white font-bold text-[15px] shadow-lg hover:bg-[#004e5c] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <span>Securing Order...</span>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>Confirm Order – ₹{currentPrice.toLocaleString()}</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
