import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ARTICLES = [
  {
    id: 1,
    slug: "sustainable-aviation-fuel-explained",
    category: "Industry",
    title: "Why Airlines Are Betting Big on Sustainable Aviation Fuel",
    dek: "SAF can cut lifecycle emissions by up to 80%, but supply is the real bottleneck.",
    excerpt: "Airlines have signed offtake agreements worth billions, yet SAF still makes up less than 1% of global jet fuel supply.",
    date: "2026-06-02",
    readTime: "6 min read",
    accent: 4,
    featured: true,
    body: [
      "Sustainable Aviation Fuel, or SAF, is a drop-in replacement for conventional jet fuel that can be produced from used cooking oil, agricultural waste, municipal solid waste, or synthesized from captured carbon and green hydrogen. Because it's chemically compatible with existing engines and fuel infrastructure, airlines can blend it directly into the tanks of aircraft flying today, without waiting for new propulsion technology.",
      "The appeal is straightforward: over its full lifecycle, SAF can reduce carbon emissions by up to 80% compared to fossil jet fuel, depending on the feedstock and production pathway. For an industry that is difficult to electrify at scale, especially on long-haul routes, SAF is currently the most credible near-term lever for decarbonization.",
      "The problem is supply. SAF still accounts for well under 1% of global jet fuel consumption, and production capacity is growing more slowly than the offtake agreements airlines have already signed. Feedstock competition with other industries, high production costs relative to fossil kerosene, and limited refining capacity all constrain how quickly volumes can scale.",
      "Regulation is starting to force the pace. Blending mandates in the EU and UK require a rising percentage of SAF in jet fuel supplied at airports, climbing toward 2050 targets. Airlines that can't source enough SAF to meet these mandates face penalties, which is pushing carriers to invest directly in production facilities rather than rely purely on the open market.",
      "For now, the economics mean SAF costs two to five times more than conventional jet fuel. Whether that gap closes fast enough to matter for climate targets will depend less on any single airline's ambition and more on how quickly refining capacity, feedstock supply chains, and policy incentives align over the next decade."
    ]
  },
  {
    id: 2,
    slug: "fly-by-wire-evolution",
    category: "Technology",
    title: "The Evolution of Fly-By-Wire: From Concorde to the A350",
    dek: "How electronic flight controls replaced cables and pulleys — and why pilots still argue about it.",
    excerpt: "Fly-by-wire didn't just change how aircraft are built. It changed what a pilot is allowed to do with the controls.",
    date: "2026-05-18",
    readTime: "7 min read",
    accent: 8,
    body: [
      "For most of aviation history, moving a control column pulled a physical cable connected directly to a control surface. Fly-by-wire severed that mechanical link. Pilot inputs are converted to electronic signals, processed by flight control computers, and translated into commands sent to hydraulic actuators — with a computer sitting in the loop the entire time.",
      "Concorde and the Airbus A320, launched in the 1980s, were early large-scale adopters. The A320 introduced a design philosophy that Airbus has carried through its entire fleet since: flight envelope protection, where the computer will not let the pilot exceed certain limits on bank angle, angle of attack, or load factor, even if the pilot commands it.",
      "Boeing took a different philosophical approach with its fly-by-wire aircraft, favoring control laws that give the pilot more direct authority and only step in as a soft limit rather than a hard one. Neither approach is objectively safer; they reflect different assumptions about the balance between automation and pilot authority.",
      "The benefits of fly-by-wire go beyond weight savings from removing mechanical linkages. It enables relaxed static stability designs that improve fuel efficiency, allows a single set of flight control laws to be tuned across an aircraft's flight envelope, and makes it possible to retrofit software updates that change handling characteristics without touching the airframe.",
      "The debate among pilots isn't really about whether fly-by-wire works — the safety record across both philosophies is strong. It's about where the line should sit between protecting an aircraft from an incorrect input and preserving a pilot's ability to do something unconventional in a genuine emergency."
    ]
  },
  {
    id: 3,
    slug: "ads-b-surveillance-explained",
    category: "Technology",
    title: "Inside the Cockpit: How ADS-B Turned the Sky Into an Open Network",
    dek: "The same signal that powers flight trackers online is also reshaping how air traffic control works.",
    excerpt: "ADS-B broadcasts an aircraft's GPS position every second — which is why anyone can watch flights live on a map.",
    date: "2026-04-29",
    readTime: "5 min read",
    accent: 358,
    body: [
      "Automatic Dependent Surveillance–Broadcast, or ADS-B, works differently from traditional radar. Instead of a ground station sweeping a beam and measuring the return, an ADS-B-equipped aircraft determines its own position using GPS and broadcasts it — along with altitude, speed, and heading — roughly once per second, to anyone with a receiver in range.",
      "That broadcast is unencrypted by design, which is exactly why public flight-tracking sites and apps can display near-real-time positions for most commercial aircraft in the world. A network of volunteer ground receivers, combined with satellite-based receivers, feeds that data back to tracking services.",
      "For air traffic control, ADS-B offers meaningfully better precision than older radar systems, updating more frequently and remaining accurate at longer ranges and lower altitudes, including over oceans and remote terrain where radar coverage was historically poor. This is part of why regulators in the US, Europe, and elsewhere have mandated ADS-B Out equipment in controlled airspace.",
      "The open nature of the signal has also raised valid questions about privacy and security, since anyone can track the movements of a specific aircraft, including private and government flights. Some operators use a system called ADS-B privacy filtering or fly under blocked tail numbers to limit public visibility, though this doesn't hide them from air traffic control itself.",
      "As satellite-based ADS-B receivers expand coverage to the remaining gaps over oceans and polar routes, the technology is closing in on something close to global real-time coverage of powered flight — a level of transparency that simply didn't exist with radar alone."
    ]
  },
  {
    id: 4,
    slug: "drone-swarms-military-aviation",
    category: "Drones",
    title: "Drone Swarms and the Next Shift in Military Aviation",
    dek: "Cheap, expendable, and coordinated — swarming drones are changing what air power means.",
    excerpt: "A single expensive fighter can be threatened by a hundred inexpensive drones acting as one coordinated system.",
    date: "2026-04-11",
    readTime: "6 min read",
    accent: 12,
    body: [
      "Military aviation spent most of the last century built around a simple idea: put the most capability possible into a small number of expensive, highly trained platforms. Drone swarm technology inverts that logic, distributing capability across large numbers of low-cost, semi-autonomous vehicles that coordinate with each other rather than relying on a single point of failure.",
      "A swarm's value isn't any individual drone's capability — it's the emergent behavior of the group. Algorithms allow dozens or hundreds of drones to maintain formation, redistribute tasks if some are shot down, and overwhelm air defense systems designed to track and intercept a much smaller number of manned aircraft or missiles.",
      "This changes the economics of air defense uncomfortably. A modern interceptor missile can cost far more than the drone it's shooting down, meaning a saturating swarm attack can be economically ruinous to defend against even when the defense technically works every time.",
      "It also lowers the barrier to entry. Building a capable swarm doesn't require the industrial base needed to produce a fifth-generation fighter — it requires commercially available components, increasingly capable onboard processors, and software, all of which are far easier for smaller states and non-state actors to acquire.",
      "Air forces built around crewed platforms are responding with counter-swarm technology of their own: directed energy weapons, electronic warfare to disrupt swarm coordination, and networked interceptor drones. Whether that keeps pace with how cheaply swarms can be built and iterated is the open question shaping procurement decisions right now."
    ]
  },
  {
    id: 5,
    slug: "diy-flight-controllers-stm32",
    category: "Drones",
    title: "Inside DIY Flight Controllers: What an STM32 Actually Does in a Drone",
    dek: "The chip at the heart of most hobbyist FPV builds runs the entire control loop, dozens of times a second.",
    excerpt: "From raw gyro data to motor output in under a millisecond — how a low-cost microcontroller keeps a quadcopter level.",
    date: "2026-03-22",
    readTime: "6 min read",
    accent: 350,
    body: [
      "Open the frame of almost any hobbyist FPV drone and the flight controller board at its center is very likely built around an STM32 microcontroller — a family of ARM Cortex-M chips chosen for a combination of processing headroom, low cost, and a deep open-source tooling ecosystem that flight control firmware like Betaflight and ArduPilot has been built around for years.",
      "The core job of that chip is running the control loop: reading data from the onboard gyroscope and accelerometer, filtering out vibration noise, comparing the result against pilot input from the receiver, and calculating corrections through a PID controller before sending updated throttle signals to each of the four motors. This entire cycle repeats hundreds to thousands of times per second.",
      "Timing is unforgiving. A delay of even a few milliseconds between sensing an unwanted rotation and correcting for it is the difference between a crisp, locked-in flight feel and a drone that oscillates or drifts. This is why flight controller firmware is written in C, runs with interrupt-driven timing rather than a general operating system, and why loop frequency is one of the first specs pilots check.",
      "Beyond the core stabilization loop, the same chip typically handles reading the receiver protocol, running OSD (on-screen display) overlays for the video feed, managing blackbox logging for post-flight tuning, and communicating with an ESC (electronic speed controller) using protocols like DShot.",
      "It's a good example of how much capability now sits on a chip that costs a few dollars in volume — and part of why the barrier to building a genuinely capable flight controller from scratch has dropped so far that it's a realistic hobbyist and student project rather than something requiring an aerospace lab."
    ]
  },
  {
    id: 6,
    slug: "cfm-leap-vs-pw1000g",
    category: "Technology",
    title: "CFM LEAP vs. Pratt & Whitney GTF: Two Bets on the Next-Gen Engine",
    dek: "One doubled down on refining a proven architecture. The other rearchitected the core.",
    excerpt: "Both engines promise similar fuel savings on the A320neo and 737 MAX family — they just got there very differently.",
    date: "2026-03-05",
    readTime: "7 min read",
    accent: 6,
    body: [
      "When airlines were choosing engines for the new generation of narrowbody jets, they effectively had to pick a philosophy. CFM International's LEAP engine is an evolution of the well-proven CFM56 architecture, refined with a higher bypass ratio, 3D-woven carbon fiber fan blades, and ceramic matrix composite components in the hot section to handle higher temperatures efficiently.",
      "Pratt & Whitney's Geared Turbofan, or GTF, took a structurally different approach. It inserts a gearbox between the fan and the low-pressure turbine, allowing each to spin at its own optimal speed rather than being locked together. This lets the fan turn slower, improving propulsive efficiency, while the turbine spins faster, improving thermal efficiency.",
      "In theory, the geared architecture should deliver a larger structural leap in efficiency, since it removes a fundamental compromise that non-geared turbofans have always had to accept. In practice, both engine families deliver broadly comparable fuel burn improvements over their CFM56 and V2500 predecessors, in the range of 15%.",
      "The GTF's added mechanical complexity — the gearbox itself, plus the engineering required to manage it reliably — has come with real costs. Pratt & Whitney has dealt with a series of durability issues and a major powder-metal contamination recall that has grounded aircraft and strained MRO capacity industry-wide.",
      "CFM's more conservative approach has generally meant fewer unscheduled removals in service, which is part of why LEAP has captured a larger share of narrowbody engine orders. It's a useful reminder that in commercial aviation, proven reliability often outcompetes a larger theoretical efficiency gain, at least until the newer architecture matures."
    ]
  },
  {
    id: 7,
    slug: "runway-incursions-rising-trend",
    category: "Incidents",
    title: "Why Runway Incursions Are Back Under the Spotlight",
    dek: "A string of high-profile near-misses has put ground safety ahead of in-flight risk on regulators' priority lists.",
    excerpt: "Most fatal accidents used to happen in the air. Increasingly, the most dangerous moments happen on the ground.",
    date: "2026-02-14",
    readTime: "5 min read",
    accent: 355,
    body: [
      "A runway incursion is any unauthorized presence of an aircraft, vehicle, or person on a runway that's active for takeoff or landing. They range from minor procedural errors caught immediately by controllers to near-collisions between aircraft that come within seconds of a catastrophic outcome.",
      "Aviation safety has improved dramatically over the past three decades largely by addressing in-flight risks: better weather radar, terrain awareness systems, and improved training around loss-of-control scenarios. That progress has, in relative terms, made ground operations a larger share of the remaining risk.",
      "Several contributing factors show up repeatedly in incident reports: increasingly congested airports operating close to capacity, complex taxi routings at unfamiliar airports, radio congestion during peak periods, and simple human factors like fatigue or expectation bias, where a pilot or controller hears what they expect rather than what was actually said.",
      "Regulators have responded with a mix of technology and procedure. Airport surface detection systems like ASDE-X track aircraft and vehicle movement on the ground and can alert controllers automatically to potential conflicts. Standardized readback procedures and simplified taxi instructions aim to cut down on the ambiguity that produces incursions in the first place.",
      "None of this eliminates the risk entirely, since ground operations depend on the same imperfect human communication that's always been part of aviation. But the shift in regulatory attention — from almost entirely in-flight risk to a genuine focus on the ramp and runway — reflects where the data says the remaining danger actually lives."
    ]
  },
  {
    id: 8,
    slug: "widebody-order-race-2026",
    category: "Airlines",
    title: "The Widebody Order Race Nobody Expected in 2026",
    dek: "After years of narrowbody dominance, airlines are quietly placing some of the largest widebody orders in a decade.",
    excerpt: "Long-haul demand recovered faster than capacity did — and airlines are now racing to lock in delivery slots.",
    date: "2026-01-27",
    readTime: "6 min read",
    accent: 2,
    body: [
      "For most of the last decade, the commercial aircraft order story was about narrowbodies: the A320neo and 737 MAX family dominated backlogs as airlines built out short and medium-haul networks. Widebody orders, by comparison, were comparatively modest, weighed down by high fuel prices and shifting long-haul demand.",
      "That balance has shifted. Long-haul international travel recovered faster than airlines and manufacturers expected, while widebody production rates were cut during the lean years and have been slow to ramp back up. The result is a supply-demand gap that's pushed airlines to place large widebody orders earlier than they normally would, to secure delivery slots before the backlog stretches out even further.",
      "Both Airbus and Boeing are benefiting, though for different reasons. The A350 has picked up orders from carriers prioritizing range and fuel efficiency on ultra-long-haul routes, while the 787 continues to appeal to airlines building out point-to-point long-haul networks that bypass traditional hub-and-spoke routing entirely.",
      "Engine makers are a less visible but equally important part of this story. Rolls-Royce, GE Aerospace, and Pratt & Whitney are all managing their own production ramp constraints, meaning an airline's widebody delivery timeline is now just as dependent on engine supply as on the airframe itself.",
      "The practical effect for travelers is more long-haul capacity and, in theory, more competitive fares on international routes over the next several years — assuming the current order boom translates into actual deliveries on schedule, which in an industry with a long history of supply chain delays is never a given."
    ]
  }
];

const outDir = path.join(__dirname, 'src/content/articles');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

ARTICLES.forEach(a => {
  const fm = `---
title: "${a.title.replace(/"/g, '\\"')}"
slug: "${a.slug}"
category: "${a.category}"
dek: "${a.dek.replace(/"/g, '\\"')}"
excerpt: "${a.excerpt.replace(/"/g, '\\"')}"
date: ${a.date}
readTime: "${a.readTime}"
accent: ${a.accent}
featured: ${a.featured ? 'true' : 'false'}
---
`;

  const body = a.body.map(p => p + '\n').join('\n');
  fs.writeFileSync(path.join(outDir, `${a.slug}.md`), fm + '\n' + body);
});

console.log('Migration complete!');
