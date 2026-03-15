export interface Guest {
  name: string;
  maxGuests: number;
  hasResponded: boolean;
}

export interface GuestListResponse {
  guests: Guest[];
}

export interface RsvpSubmission {
  name: string;
  attending: "yes" | "no";
  guestCount: number;
  message: string;
}

export interface RsvpResponse {
  status: "success" | "error";
  message: string;
}
