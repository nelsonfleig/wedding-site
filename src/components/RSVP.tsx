import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import type { Guest, RsvpResponse, RsvpSubmission } from "../types";

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL as string;

type FormState = "loading" | "form" | "submitting" | "success" | "error";

const RSVP = () => {
  const [state, setState] = useState<FormState>("loading");
  const [guests, setGuests] = useState<Guest[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  // Form fields
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch guest list on mount
  useEffect(() => {
    fetch(APPS_SCRIPT_URL)
      .then((r) => r.json())
      .then((data) => {
        setGuests(data.guests);
        setState("form");
      })
      .catch(() => {
        setErrorMsg(
          "No se pudo cargar la lista de invitados. Por favor, inténtalo de nuevo más tarde.",
        );
        setState("error");
      });
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filteredGuests = guests.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase()),
  );

  const selectGuest = (guest: Guest) => {
    setSelectedGuest(guest);
    setSearch(guest.name);
    setDropdownOpen(false);
    setAttending(null);
    setGuestCount(1);
    setMessage("");
  };

  const resetForm = () => {
    setSelectedGuest(null);
    setSearch("");
    setAttending(null);
    setGuestCount(1);
    setMessage("");
    setState("form");
  };

  const handleSubmit = async () => {
    if (!selectedGuest || attending === null) return;

    setState("submitting");

    const payload: RsvpSubmission = {
      name: selectedGuest.name,
      attending,
      guestCount: attending === "yes" ? guestCount : 0,
      message,
    };

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const text = await res.text();
      const data = JSON.parse(text) as RsvpResponse;
      if (data.status === "success") {
        setState("success");
      } else {
        setErrorMsg(data.message || "Algo salió mal.");
        setState("form");
      }
    } catch {
      setErrorMsg("No se pudo enviar el RSVP. Por favor, inténtalo de nuevo.");
      setState("form");
    }
  };

  const canSubmit = selectedGuest !== null && attending !== null;

  return (
    <motion.section
      className="relative py-20 px-6 min-h-125"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.h2 variants={fadeUp} className="mb-4">
          RSVP
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-10">
          Confirma tu presencia
        </motion.p>

        {/* Loading */}
        {state === "loading" && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400"
          >
            Cargando lista de invitados…
          </motion.p>
        )}

        {/* Fatal error (couldn't load guests) */}
        {state === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500"
          >
            {errorMsg}
          </motion.p>
        )}

        {/* Success */}
        {state === "success" && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <p className="text-lg">
              ¡Gracias, {selectedGuest?.name}! Tu RSVP ha sido recibido.
            </p>
          </motion.div>
        )}

        {/* Form */}
        {(state === "form" || state === "submitting") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-left"
          >
            {/* Inline error */}
            <AnimatePresence>
              {errorMsg && state === "form" && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-500 text-sm text-center"
                >
                  {errorMsg}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Guest search dropdown */}
            <div ref={dropdownRef} className="relative">
              <label className="block text-sm font-medium mb-1">
                Busca tu nombre
              </label>
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setDropdownOpen(true);
                  if (selectedGuest) {
                    setSelectedGuest(null);
                    setAttending(null);
                  }
                }}
                onFocus={() => setDropdownOpen(true)}
                placeholder="Empieza buscando tu nombre..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                disabled={state === "submitting"}
              />
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto list-none ml-0 space-y-0"
                  >
                    {filteredGuests.length === 0 ? (
                      <li className="px-4 py-3 text-gray-400">
                        No se encontraron invitados
                      </li>
                    ) : (
                      filteredGuests.map((guest) => (
                        <li
                          key={guest.name}
                          onClick={() => selectGuest(guest)}
                          className="px-4 py-3 cursor-pointer hover:bg-gray-50 flex justify-between items-center"
                        >
                          <span>{guest.name}</span>
                          {guest.hasResponded && (
                            <span className="text-xs text-gray-400">
                              Respondido
                            </span>
                          )}
                        </li>
                      ))
                    )}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Attendance toggle */}
            <AnimatePresence>
              {selectedGuest && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      ¿Asistirás?
                    </label>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setAttending("yes")}
                        disabled={state === "submitting"}
                        className={`flex-1 py-3 rounded-lg border transition font-medium ${
                          attending === "yes"
                            ? "bg-gray-900 text-white border-gray-900"
                            : "border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        Claro que si 🥳
                      </button>
                      <button
                        type="button"
                        onClick={() => setAttending("no")}
                        disabled={state === "submitting"}
                        className={`flex-1 py-3 rounded-lg border transition font-medium ${
                          attending === "no"
                            ? "bg-gray-900 text-white border-gray-900"
                            : "border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        No podré asistir 😞
                      </button>
                    </div>
                  </div>

                  {/* Guest count (only if attending and max > 1) */}
                  <AnimatePresence>
                    {attending === "yes" && selectedGuest.maxGuests > 1 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <label className="block text-sm font-medium mb-2">
                          Número de invitados
                        </label>
                        <div className="flex gap-2">
                          {Array.from(
                            { length: selectedGuest.maxGuests },
                            (_, i) => i + 1,
                          ).map((n) => (
                            <button
                              key={n}
                              type="button"
                              onClick={() => setGuestCount(n)}
                              disabled={state === "submitting"}
                              className={`w-10 h-10 rounded-full border transition font-medium ${
                                guestCount === n
                                  ? "bg-gray-900 text-white border-gray-900"
                                  : "border-gray-300 hover:bg-gray-100"
                              }`}
                            >
                              {n}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Message (always shown once guest is selected) */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Mensaje para los novios
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Acompañantes, restricciones dietéticas, canciones para el DJ o cualquier otro mensaje"
                      rows={3}
                      disabled={state === "submitting"}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="text-center">
                    <motion.button
                      whileHover={canSubmit ? { scale: 1.02 } : {}}
                      whileTap={canSubmit ? { scale: 0.98 } : {}}
                      onClick={handleSubmit}
                      disabled={!canSubmit || state === "submitting"}
                      className={`w-full py-3 rounded-lg font-medium transition ${
                        canSubmit
                          ? "bg-gray-900 text-white hover:bg-gray-700"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {state === "submitting" ? "Enviando…" : "Enviar RSVP"}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default RSVP;
