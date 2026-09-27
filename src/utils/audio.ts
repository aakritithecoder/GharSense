// Web Audio API tone generator and speech synthesis for realistic IoT alert sounds
export function playAlertChime() {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    
    // Two-tone pleasant notification chime
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'sine';

    osc1.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc1.frequency.setValueAtTime(880, ctx.currentTime + 0.12); // A5

    osc2.frequency.setValueAtTime(440, ctx.currentTime); // A4
    osc2.frequency.setValueAtTime(659.25, ctx.currentTime + 0.12); // E5

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 0.6);
    osc2.stop(ctx.currentTime + 0.6);
  } catch (e) {
    console.warn('Audio chime unsupported or blocked', e);
  }
}

export function playHindiVoicePrompt(onEnd?: () => void) {
  playAlertChime();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance('Alert: Chhat ki paani ki tanki bhar gayi hai. Motor band kar di gayi hai.');
    utterance.lang = 'hi-IN';
    utterance.rate = 0.95;
    utterance.pitch = 1.05;
    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }
    window.speechSynthesis.speak(utterance);
  } else if (onEnd) {
    setTimeout(onEnd, 3000);
  }
}
