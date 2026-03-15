export const createICS = () => {
  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding//Boda//ES
BEGIN:VEVENT
UID:boda-maria-paula-nelson@wedding.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z
DTSTART:20260911T153000Z
DTEND:20260911T230000Z
SUMMARY:Boda de María Paula y Nelson
DESCRIPTION:Nos casamos! Te esperamos en la Iglesia de Santa María la Blanca a las 17:30.
LOCATION:Sevilla, España
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "boda-maria-paula-nelson.ics";
  link.click();
  URL.revokeObjectURL(url);
};
