// Each entry: topic, question, three choices, correct choice index, explanation.
export const questions = [
  ['Current & Ohm’s law','A 12 V source is connected across 4 Ω. What current flows?',['3 A','16 A','48 A'],0,'I = V/R = 12/4 = 3 A.'],
  ['Current & Ohm’s law','A switch opens in a single-loop DC circuit. What happens to the loop current?',['It doubles','It becomes zero','It stays constant'],1,'An open switch breaks the only current path.'],
  ['Current & Ohm’s law','At fixed voltage, resistance changes from 100 Ω to 200 Ω. The current…',['doubles','halves','stays the same'],1,'Ohm’s law gives I = V/R, so doubling R halves I.'],
  ['Current & Ohm’s law','Which formula gives current through a resistor?',['I = V/R','I = V × R','I = R/V'],0,'Ohm’s law gives current as voltage divided by resistance.'],

  ['Series & KVL','Two resistors, 2 Ω and 3 Ω, are in series. Their equivalent resistance is…',['1.2 Ω','5 Ω','6 Ω'],1,'Series resistances add: 2 + 3 = 5 Ω.'],
  ['Series & KVL','A 10 V source feeds 2 Ω and 3 Ω in series. What current flows?',['1 A','2 A','5 A'],1,'Rtotal = 5 Ω, so I = 10/5 = 2 A.'],
  ['Series & KVL','In a series circuit, current through every resistor is…',['the same','always zero','different at each resistor'],0,'There is only one current path in a series circuit.'],
  ['Series & KVL','A loop has a 15 V source and one 6 V drop. What must the remaining drop be?',['9 V','15 V','21 V'],0,'KVL requires the drops to sum to 15 V: 15 − 6 = 9 V.'],

  ['Parallel & KCL','Two resistors are connected in parallel across 12 V. The voltage across each is…',['6 V','12 V','24 V'],1,'Both branches share the same pair of nodes as the source.'],
  ['Parallel & KCL','A 12 V source feeds a 6 Ω branch. What is that branch current?',['0.5 A','2 A','6 A'],1,'I = 12/6 = 2 A.'],
  ['Parallel & KCL','At a junction, 5 A enters and 2 A leaves in one branch. How much leaves in the other?',['3 A','5 A','7 A'],0,'By KCL, outgoing currents must total 5 A; the other branch takes 3 A.'],
  ['Parallel & KCL','In parallel branches, what is the same across each branch?',['Voltage','Current','Resistance'],0,'Every branch connects to the same two nodes, so each has the same voltage.'],

  ['Silicon diode states','In the approximate silicon diode model, the forward ON drop is about…',['0 V','0.7 V','7 V'],1,'The lecture’s piecewise silicon model uses approximately 0.7 V.'],
  ['Silicon diode states','A forward silicon diode has only 0.5 V applied. In the 0.7 V model it is…',['ON','OFF','short-circuited'],1,'0.5 V does not reach the assumed 0.7 V turn-on threshold.'],
  ['Silicon diode states','A reverse-biased diode acts approximately like…',['an open circuit','a short circuit','a 1 Ω resistor'],0,'The simple model blocks current when reverse biased.'],
  ['Silicon diode states','A 5 V source drives a forward Si diode and 1 kΩ in series. Approximate current?',['0.7 mA','4.3 mA','5.7 mA'],1,'The resistor gets 5 − 0.7 = 4.3 V; I = 4.3/1000 = 4.3 mA.'],

  ['Diode load line','A load line on a diode graph comes from the source and…',['the series resistor','a clock','a transformer only'],0,'The source voltage and series resistance set the straight load line.'],
  ['Diode load line','On a load line, what is the current when the circuit path is open?',['Zero','Maximum','Always 1 A'],0,'An open path carries no current.'],
  ['Diode load line','The operating point Q is where the load line meets…',['the time axis','the diode curve','the source waveform'],1,'Q is where both the circuit rule and diode behavior agree.'],
  ['Diode load line','If source voltage increases and resistance stays fixed, the possible current generally…',['increases','decreases','must become zero'],0,'More source voltage can drive more current through the same resistor.'],

  ['Half-wave rectification','A positive half-wave rectifier blocks which input half-cycle?',['Positive','Negative','Both'],1,'Its diode conducts on the positive half and blocks the negative half.'],
  ['Half-wave rectification','A 50 Hz half-wave rectifier produces output pulses at…',['25 Hz','50 Hz','100 Hz'],1,'There is one output pulse per input cycle.'],
  ['Half-wave rectification','A half-wave rectifier uses how many conducting half-cycles per input cycle?',['One','Two','Four'],0,'Only one half-cycle reaches the load.'],
  ['Half-wave rectification','During the blocked half-cycle, the idealized load voltage is…',['0 V','equal to the input','twice the input'],0,'With the diode OFF, load current and load voltage are zero in the simple model.'],

  ['Full-wave rectification','A full-wave rectifier uses…',['only positive half-cycles','both half-cycles','only negative half-cycles'],1,'Both input halves make positive-polarity output pulses.'],
  ['Full-wave rectification','A 50 Hz full-wave rectifier has a pulse rate of…',['25 Hz','50 Hz','100 Hz'],2,'Two output pulses occur during each 50 Hz input cycle.'],
  ['Full-wave rectification','In a bridge rectifier, how many Si diode drops are in the conducting load path?',['One','Two','Four'],1,'Two diodes conduct in series with the load each half-cycle.'],
  ['Full-wave rectification','Compared with half-wave rectification, full-wave gives…',['two output pulses per input cycle','no output pulses','half a pulse per cycle'],0,'Both input halves are used, so there are two pulses each cycle.'],

  ['Capacitor filters','A smoothing capacitor mainly supplies the load…',['between rectified peaks','only when the diode is ON','only at zero frequency'],0,'It charges near peaks and discharges through the load between peaks.'],
  ['Capacitor filters','If filter capacitance doubles, ripple approximately…',['doubles','halves','stays unchanged'],1,'For small ripple, Vr(pp) ≈ Vpeak/(frRC).'],
  ['Capacitor filters','A full-wave rectifier runs from 60 Hz AC. Which ripple frequency enters the estimate?',['30 Hz','60 Hz','120 Hz'],2,'A full-wave output has two charging peaks per input cycle.'],
  ['Capacitor filters','Between rectified peaks, a smoothing capacitor…',['discharges through the load','turns into a resistor','reverses the AC source'],0,'Its stored charge supplies current to the load.'],

  ['Clipping basics','An ideal upper clipper at 0 V receives a ±8 V sine. Its highest output is…',['−8 V','0 V','+8 V'],1,'All positive values above the 0 V limit are flattened to 0 V.'],
  ['Clipping basics','An upper clipper limits values…',['above its threshold','below its threshold','at every zero crossing'],0,'Upper clipping caps only the samples above the clip line.'],
  ['Clipping basics','A lower clipper limits which part of the waveform?',['Values below its threshold','Values above its threshold','Only the zero crossing'],0,'A lower clipper holds values that fall below its limit.'],
  ['Clipping basics','A clipper normally changes the waveform by…',['flattening selected peaks','shifting the entire wave unchanged','doubling its frequency'],0,'A clipper limits the part of the wave beyond a threshold.'],

  ['Series & shunt clippers','In a series clipper, the diode is…',['in the load path','across the output','inside the capacitor'],0,'The series diode controls whether current can reach the load.'],
  ['Series & shunt clippers','When the diode in a series clipper is OFF, load current is…',['zero','maximum','twice the source current'],0,'The OFF diode opens the only path to the load.'],
  ['Series & shunt clippers','When a series diode is ON, current can…',['reach the load','skip every wire','flow through an open switch'],0,'The ON diode completes the load path.'],
  ['Series & shunt clippers','In an upper shunt Si clipper, the diode conducts when the output tries to rise above…',['−0.7 V','+0.7 V','+8 V'],1,'The shunt diode diverts current and holds the output near +0.7 V.'],

  ['Biased clippers','Why add a DC source to a clipper?',['To move the clipping level','To remove all resistance','To double the frequency'],0,'The bias shifts the threshold away from zero.'],
  ['Biased clippers','An upper clipper has a +5 V limit. What happens to a −2 V sample?',['It stays −2 V','It becomes +5 V','It becomes 0 V'],0,'Only values above +5 V are capped.'],
  ['Biased clippers','In a lower clipper, the flat part appears near the…',['bottom of the waveform','top of the waveform','time axis only'],0,'A lower clipper limits the negative-going side.'],
  ['Biased clippers','When an upper clipper bias increases, the positive clipping plateau moves…',['up','down','to 0 V'],0,'The threshold is bias plus the conducting diode drop.'],

  ['Biased series clipping','Before current can pass a biased series diode, the input must overcome…',['the bias and diode drop','the output frequency','the load color'],0,'The opposing bias and forward diode drop both matter.'],
  ['Biased series clipping','Adding an opposing bias to a positive series clipper makes its turn-on level…',['higher','lower','unchanged'],0,'The input must now exceed the extra opposing voltage.'],
  ['Biased series clipping','If the input is below the turn-on level, the diode is…',['OFF','ON','a capacitor'],0,'There is not enough forward voltage to turn it ON in the simple model.'],
  ['Biased series clipping','Below the conduction threshold, a positive series clipper gives approximately…',['0 V at the load','the full input at the load','twice the input'],0,'The diode is OFF and no load current flows in the simple model.'],

  ['Clampers','An ideal positive clamper moves a wave…',['upward','downward','left in time'],0,'A positive clamper adds a positive DC offset.'],
  ['Clampers','A clamper primarily…',['moves a wave vertically','cuts off its peaks','changes its frequency'],0,'It adds a DC offset to the input waveform.'],
  ['Clampers','An ideal negative clamper moves a wave…',['downward','upward','faster'],0,'A negative clamper adds a negative DC offset.'],
  ['Clampers','What happens to peak-to-peak voltage in an ideal clamper?',['It stays the same','It becomes zero','It doubles'],0,'A vertical shift changes the level, not the ideal peak-to-peak height.'],

  ['Biased clampers','In a biased clamper, the bias sets…',['the reference level','the input frequency','the number of AC cycles'],0,'The DC reference decides where one wave extreme sits.'],
  ['Biased clampers','A biased clamper moves the waveform mainly…',['up or down','left or right in time','to zero frequency'],0,'Clamping changes the DC level of the whole wave.'],
  ['Biased clampers','Adding a DC bias to a clamper changes its…',['clamp reference level','input frequency','source resistance'],0,'The bias sets the level where one extreme of the wave is anchored.'],
  ['Biased clampers','In an ideal biased clamper, peak-to-peak height…',['stays the same','always becomes zero','always doubles'],0,'Moving a waveform vertically does not change its height.'],

  ['Voltage multipliers','An ideal two-stage multiplier gives an output near…',['twice the input peak','half the input peak','zero'],0,'Two stored peak-sized voltages combine at the output.'],
  ['Voltage multipliers','A diode-capacitor multiplier uses capacitors to…',['store peak-sized voltages','remove all AC instantly','set the source frequency'],0,'Each stage stores charge near an AC peak.'],
  ['Voltage multipliers','Which components are central to a diode-capacitor multiplier?',['Diodes and capacitors','Only switches','Only resistors'],0,'Diodes steer charge while capacitors store voltage.'],
  ['Voltage multipliers','Why is a practical multiplier output below the ideal value?',['Diode drops and load discharge','The frequency becomes zero','KVL stops applying'],0,'Real diodes lose voltage and load current discharges the capacitors.'],
].map(([topic,prompt,choices,correct,explanation],index)=>({id:`q${String(index+1).padStart(2,'0')}`,topic,prompt,choices,correct,explanation}));
