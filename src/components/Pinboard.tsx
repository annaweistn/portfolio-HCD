import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Image as ImageIcon,
  Calendar,
  MapPin,
  Award,
  Sparkles,
  Clock,
  Pin as PinIcon,
  Maximize2,
  ChevronRight,
  MessageSquare,
  ThumbsUp,
  Trash2,
} from "lucide-react";

export interface PinItem {
  id: string;
  title: string;
  category: "event" | "achievement";
  date: string;
  location: string;
  caption: string;
  image: string;
  likes: number;
  tags: string[];
  isCustom?: boolean;
  customBadge?: string;
}

const DEFAULT_PINS: PinItem[] = [
  {
    id: "pin-1",
    title: "Workshop for Students",
    category: "event",
    customBadge: "Workshop",
    date: "June 19, 2026",
    location: "Hochschule Aalen",
    caption:
      "I'm hosting an interactive workshop on designing effective learning environments using the LEGO® Serious Play® Method. Looking forward to exchanging ideas and exploring creative approaches to learning.",
    image: "/src/assets/images/workshop.png",
    likes: 42,
    tags: [
      "#Workshop",
      "#Students",
      "#LearningEnvironment",
      "#DesignThinking",
      "#FutureSkills",
    ],
  },
  {
    id: "pin-2",
    title: "International Sustainability Day",
    category: "event",
    date: "May 13. & 14., 2025",
    location: "Le Méridien Stuttgart",
    caption:
      "I participated in the International Sustainability Day as part of my bachelor’s thesis work, where I conducted interviews on digital product passports for textiles, connected with new people in the field, and pitched my idea.",
    image: "/src/assets/images/meredien.png",
    likes: 56,
    tags: [
      "#Sustainability",
      "#Thesis",
      "#Textiles",
      "#DigitalProductPassport",
    ],
  },
  {
    id: "pin-3",
    title: "Push your Idea Competition",
    category: "achievement",
    date: "Dezember 10., 2025",
    location: "Aalen, DE",
    caption:
      'Together with Anastasia Lorenz, I won 1st place in the "Local Mathador" category for our concept to modernize and improve hospital emergency call systems, aiming to increase efficiency and patient safety.',
    image: "/src/assets/images/pushself.jpg",
    likes: 29,
    tags: [
      "#Award",
      "#Teamwork",
      "#1.Place",
      "#MedTech",
      "#PushYourIdea",
      "#Pitching",
      "#IoT",
    ],
  },
  {
    id: "pin-4",
    title: "Case Study",
    category: "event",
    customBadge: "Case Study",
    date: "January 24, 2026",
    location: "Aalen, DE",
    caption:
      "We worked in teams on a case study together with Eric Brabänder, conducting market research, user interviews, and developing MVPs and go-to-market strategies, which we then presented.",
    image: "/src/assets/images/casestudy.jpg",
    likes: 31,
    tags: [
      "#ProductManagement",
      "#CaseStudy",
      "#Teamwork",
      "#MVP",
      "#Strategy",
    ],
  },
  {
    id: "pin-5",
    title: "Master's Welcome Event",
    category: "event",
    customBadge: "Kickoff",
    date: "October, 2025",
    location: "Hochschule Aalen",
    caption:
      "Looking forward to new challenges, inspiring discussions, and learning alongside such a great group of people. Here's our cohort photo from the start of this exciting chapter.",
    image: "/src/assets/images/master.png",
    likes: 31,
    tags: [
      "#MastersDegree",
      "#HumanCenteredeDesign",
      "#Learning",
      "#NewChapter",
    ],
  },
  {
    id: "pin-6",
    title: "Bye Bye HfG",
    category: "achievement",
    customBadge: "Bachelor",
    date: "July, 2025",
    location: "HfG Schwäbisch Gmünd",
    caption:
      "I have successfully completed my Bachelor’s thesis, marking the end of a wonderful and inspiring time at the Hochschule für Gestaltung Schwäbisch Gmünd in the Internet of Things program. I am grateful for the experiences, challenges, and growth throughout my studies, and I look back on this chapter with great appreciation as I move on to the next stage of my journey.",
    image: "/src/assets/images/studies.png",
    likes: 31,
    tags: ["#Bachelor", "#NewChapter", "#IoT", "#Teamwork"],
  },
];

// Aesthetic solid color gradient blocks to choose from if users don't upload an image
const PRESET_GRADIENTS = [
  {
    name: "Saffron Dawn",
    value: "linear-gradient(135deg, #1e1b18 0%, #4c3f30 50%, #e4b76d 100%)",
  },
  {
    name: "Obsidian Core",
    value: "linear-gradient(135deg, #0f0f0f 0%, #1c1917 60%, #44403c 100%)",
  },
  {
    name: "Cosmic Nebula",
    value: "linear-gradient(135deg, #1c1917 0%, #292524 40%, #be123c 100%)",
  },
  {
    name: "Boreal Pine",
    value: "linear-gradient(135deg, #0c0a09 0%, #1c1917 50%, #16a34a 100%)",
  },
];

export default function Pinboard() {
  const [pins, setPins] = useState<PinItem[]>([]);
  const [filter, setFilter] = useState<"all" | "event" | "achievement">("all");
  const [likedPins, setLikedPins] = useState<string[]>([]);
  const [selectedPin, setSelectedPin] = useState<PinItem | null>(null);

  // Load pins & likes from local storage on mount
  useEffect(() => {
    const storedPins = localStorage.getItem("anna_portfolio_pins");
    if (storedPins) {
      try {
        const parsed = JSON.parse(storedPins) as PinItem[];
        // Refresh default pins with updated source content while keeping custom pins and likes
        const updated = [
          ...parsed.map((pin) => {
            const defaultPin = DEFAULT_PINS.find((dp) => dp.id === pin.id);

            if (defaultPin) {
              return {
                ...defaultPin,
                likes: pin.likes,
              };
            }

            return pin;
          }),

          // neue Default-Pins ergänzen
          ...DEFAULT_PINS.filter(
            (defaultPin) =>
              !parsed.some((storedPin) => storedPin.id === defaultPin.id),
          ),
        ];
        setPins(updated);
        localStorage.setItem("anna_portfolio_pins", JSON.stringify(updated));
      } catch (e) {
        setPins(DEFAULT_PINS);
      }
    } else {
      setPins(DEFAULT_PINS);
      localStorage.setItem("anna_portfolio_pins", JSON.stringify(DEFAULT_PINS));
    }

    const storedLikes = localStorage.getItem("anna_portfolio_pin_likes");
    if (storedLikes) {
      try {
        setLikedPins(JSON.parse(storedLikes));
      } catch (e) {
        setLikedPins([]);
      }
    }
  }, []);

  const savePinsToStorage = (updatedPins: PinItem[]) => {
    setPins(updatedPins);
    localStorage.setItem("anna_portfolio_pins", JSON.stringify(updatedPins));
  };

  // Toggle Like with functional state update
  const handleLike = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation(); // Avoid triggering details modal
    }

    let isLikedNow = false;
    const newLiked = [...likedPins];
    if (likedPins.includes(id)) {
      const idx = newLiked.indexOf(id);
      newLiked.splice(idx, 1);
    } else {
      newLiked.push(id);
      isLikedNow = true;
    }
    setLikedPins(newLiked);
    localStorage.setItem("anna_portfolio_pin_likes", JSON.stringify(newLiked));

    // Update pins list
    const updatedPins = pins.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          likes: isLikedNow ? p.likes + 1 : Math.max(0, p.likes - 1),
        };
      }
      return p;
    });
    savePinsToStorage(updatedPins);

    // Update selected open pin if any
    if (selectedPin && selectedPin.id === id) {
      setSelectedPin({
        ...selectedPin,
        likes: isLikedNow
          ? selectedPin.likes + 1
          : Math.max(0, selectedPin.likes - 1),
      });
    }
  };

  // Delete custom pins
  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Do you really want to delete this entry?")) {
      const updated = pins.filter((p) => p.id !== id);
      savePinsToStorage(updated);
      if (selectedPin && selectedPin.id === id) {
        setSelectedPin(null);
      }
    }
  };

  // Filter list
  const filteredPins = pins.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <div
      id="pinnwand-container"
      className="mt-28 border-t border-stone-900 pt-20"
    >
      {/* Section Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.2em] text-[#e4b76d] uppercase mb-3">
            <PinIcon className="w-3.5 h-3.5 rotate-45" /> DIGITAL PINBOARD
          </span>
          <h3 className="text-3xl md:text-[38px] font-serif text-white tracking-tight leading-none mb-3">
            Updates &amp;{" "}
            <span className="italic-display text-[#e4b76d]">Events</span>
          </h3>
          <p className="text-stone-400 text-sm font-light max-w-xl">
            My recent activities, events, and achievements are shared here.
          </p>
        </div>

        {/* Action Button & Filters */}
      </div>

      {/* Filter Tabs Row */}
      <div className="flex items-center justify-between border-b border-stone-900 pb-4 mb-10 overflow-x-auto gap-4">
        <div className="flex gap-2.5">
          {(["all", "event", "achievement"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-md text-[11px] font-mono font-medium uppercase tracking-wider transition-all duration-300 ${
                filter === tab
                  ? "bg-stone-900 text-[#e4b76d] border border-stone-800"
                  : "text-stone-500 hover:text-stone-300 bg-transparent border border-transparent"
              }`}
            >
              {tab === "all" && "All"}
              {tab === "event" && "Events"}
              {tab === "achievement" && "Achievements"}
            </button>
          ))}
        </div>
      </div>

      {/* Pin Board Grid (tactile polaroid board style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        <AnimatePresence>
          {filteredPins.map((pin, index) => {
            const isLiked = likedPins.includes(pin.id);

            return (
              <motion.div
                key={pin.id}
                layoutId={`pin-card-${pin.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedPin(pin)}
                className="relative bg-[#0f0e0d] p-4 pb-6 border border-stone-900 hover:border-stone-800 rounded-sm shadow-xl cursor-pointer transition-all duration-300 group"
              >
                {/* Visual Adhesive Tape mimicking high-craft styling */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-14 h-5.5 bg-gradient-to-r from-stone-800/40 via-stone-700/30 to-stone-800/40 backdrop-blur-[2px] border-x border-dashed border-stone-600/25 shadow-sm flex items-center justify-center pointer-events-none transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-950/20" />
                </div>

                {/* Polaroid Image Box */}
                <div className="relative aspect-square w-full bg-stone-950 rounded-xs overflow-hidden mb-4 border border-stone-900 group-hover:shadow-inner transition-shadow flex items-center justify-center">
                  {pin.image.startsWith("linear-gradient") ? (
                    <div
                      className="w-full h-full flex flex-col justify-between p-4 relative"
                      style={{ background: pin.image }}
                    >
                      <div className="absolute inset-0 bg-stone-950/20 mix-blend-multiply" />
                      <div className="relative z-10 p-1 bg-black/40 rounded-full w-fit">
                        {pin.category === "event" ? (
                          <Sparkles className="w-3.5 h-3.5 text-[#e4b76d]" />
                        ) : (
                          <Award className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                      </div>
                      <span className="relative z-10 text-[11px] font-mono tracking-wider font-semibold text-white/90 drop-shadow-md">
                        {pin.location}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={pin.image}
                      alt={pin.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Category Stamp/Badge */}
                  <span
                    className={`absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-medium tracking-wider uppercase z-10 drop-shadow-md flex items-center gap-1.5 bg-black text-white border ${
                      pin.category === "event"
                        ? "border-[#e4b76d]/50"
                        : "border-emerald-500/50"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        pin.category === "event"
                          ? "bg-[#e4b76d]"
                          : "bg-emerald-400"
                      }`}
                    />
                    {pin.customBadge ||
                      (pin.category === "event" ? "EVENT" : "AWARD")}
                  </span>

                  {/* Hover Quick Zoom / Reveal */}
                  <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 border border-stone-800 rounded-lg text-xs font-mono text-stone-200">
                      <Maximize2 className="w-3.5 h-3.5 text-[#e4b76d]" />{" "}
                      Details
                    </span>
                  </div>
                </div>

                {/* Metadata Row */}
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#e4b76d]/80" />{" "}
                    {pin.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-stone-600" />{" "}
                    {pin.location === "Le Méridien Stuttgart"
                      ? "Stuttgart"
                      : pin.location.split(",")[0]}
                  </span>
                </div>

                {/* Card Title & Brief Description */}
                <h4 className="text-sm font-sans font-semibold text-stone-200 group-hover:text-[#e4b76d] tracking-tight line-clamp-1 transition-colors leading-tight mb-1.5">
                  {pin.title}
                </h4>
                <p className="text-stone-400 text-xs font-light line-clamp-2 leading-relaxed mb-4 min-h-[2.5rem]">
                  {pin.caption}
                </p>

                {/* Footer Controls (Like count, remove button) */}
                <div className="flex items-center justify-between border-t border-stone-900/55 pt-3 mt-1 text-xs font-mono">
                  <div className="flex flex-wrap gap-1">
                    {pin.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] text-[#e4b76d]/70 bg-[#e4b76d]/5 px-1.5 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {pin.isCustom && (
                      <button
                        onClick={(e) => handleDelete(pin.id, e)}
                        className="p-1 rounded text-stone-600 hover:text-red-400 hover:bg-amber-500/5 transition-colors"
                        title="Remove entry"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Lightbox details modal using Framer Motion (visual focus mode compliant) */}
      <AnimatePresence>
        {selectedPin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPin(null)}
              className="absolute inset-0 bg-[#060605]/95 backdrop-blur-md"
            />

            {/* Lightbox Card inside relative viewport */}
            <motion.div
              layoutId={`pin-card-${selectedPin.id}`}
              className="relative w-full max-w-2xl bg-[#0e0d0c] border border-stone-800 rounded-xl overflow-hidden shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedPin(null)}
                className="absolute top-4 right-4 p-2 bg-stone-900-50/50 hover:bg-stone-900 hover:text-[#e4b76d] border border-stone-800 text-stone-400 rounded-full transition-all duration-300 z-20"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Visual Left: Showcase */}
                <div className="md:col-span-6 relative aspect-video md:aspect-auto md:min-h-[380px] bg-stone-950 border-r border-stone-900 flex items-center justify-center">
                  {selectedPin.image.startsWith("linear-gradient") ? (
                    <div
                      className="w-full h-full flex flex-col justify-between p-6"
                      style={{ background: selectedPin.image }}
                    >
                      <div className="absolute inset-0 bg-stone-950/20 mix-blend-multiply" />
                      <div className="relative z-10 p-2 bg-black/40 rounded-full w-fit">
                        {selectedPin.category === "event" ? (
                          <Sparkles className="w-5 h-5 text-[#e4b76d]" />
                        ) : (
                          <Award className="w-5 h-5 text-emerald-400" />
                        )}
                      </div>
                      <span className="relative z-10 text-xs font-mono tracking-wider font-semibold text-white/90 drop-shadow-md">
                        {selectedPin.location}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={selectedPin.image}
                      alt={selectedPin.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>

                {/* Details Right: Dialogue Body */}
                <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Header tags */}
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase ${
                          selectedPin.category === "event"
                            ? "bg-[#e4b76d]/15 text-[#e4b76d] border border-[#e4b76d]/30"
                            : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                        }`}
                      >
                        {selectedPin.customBadge
                          ? `📁 ${selectedPin.customBadge}`
                          : selectedPin.category === "event"
                            ? "🎉 Event"
                            : "🏆 Achievement"}
                      </span>
                      <span className="text-[10px] font-mono text-stone-500">
                        {selectedPin.date}
                      </span>
                    </div>

                    {/* Headline and Narrative */}
                    <div>
                      <h4 className="text-xl font-serif text-white tracking-tight leading-tight mb-2">
                        {selectedPin.title}
                      </h4>
                      <p className="text-stone-300 text-sm font-light leading-relaxed">
                        {selectedPin.caption}
                      </p>
                    </div>

                    {/* Meta coordinates */}
                    <div className="space-y-1.5 pt-3 border-t border-stone-900/80">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-stone-400">
                        <MapPin className="w-3.5 h-3.5 text-stone-600" />
                        <span>Location: {selectedPin.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-stone-400">
                        <Clock className="w-3.5 h-3.5 text-stone-600" />
                        <span>Date: {selectedPin.date}</span>
                      </div>
                    </div>

                    {/* Hashtags list */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedPin.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-stone-400 font-mono bg-stone-900 px-2 py-0.5 rounded border border-stone-800/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactivity Footer */}
                  <div className="flex items-center justify-end mt-8 pt-4 border-t border-stone-900/80">
                    <button
                      onClick={() => setSelectedPin(null)}
                      className="text-stone-500 hover:text-stone-300 text-[11px] font-mono flex items-center gap-1"
                    >
                      Close window <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
