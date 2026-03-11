// Body / Case types
export interface UnidentifiedBody {
  id: string;
  bodyId: string;
  locationFound: string;
  dateFound: string;
  cremationDate?: string;
  status: "pending" | "identified" | "cremated";
  clothesDescription: string;
  marksOrTattoos?: string;
  age?: string;
  gender?: string;
  photoUrl?: string;
  certificateUrl?: string;
  reportedBy?: string;
  policeStation?: string;
}

export interface CremationRecord {
  id: string;
  bodyId: string;
  locationFound: string;
  dateFound: string;
  cremationDate: string;
  certificateNumber: string;
  cremationGround: string;
  officerInCharge: string;
  witness?: string;
}

// Volunteer types
export interface Volunteer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  city: string;
  roleInterest: VolunteerRole[];
  availability: Availability;
  joinedDate: string;
  status: "active" | "inactive" | "pending";
}

export type VolunteerRole =
  | "transport"
  | "documentation"
  | "cremation_support"
  | "family_counseling"
  | "fundraising"
  | "awareness"
  | "medical_support";

export type Availability = "weekdays" | "weekends" | "full_time" | "on_call";

// Report types
export interface BodyReport {
  id?: string;
  location: string;
  latitude?: number;
  longitude?: number;
  description: string;
  contactNumber: string;
  dateTimeFound: string;
  imageUrl?: string;
  reporterName?: string;
  submittedAt?: string;
}

// Donation types
export interface Donation {
  id: string;
  amount: number;
  donorName?: string;
  donorEmail?: string;
  message?: string;
  date: string;
  paymentStatus: "success" | "pending" | "failed";
  purpose?: string;
}

// Stats types
export interface ImpactStats {
  totalCremations: number;
  activeCases: number;
  activeVolunteers: number;
  citiesCovered: number;
  familiesHelped: number;
  totalDonations: number;
}

// Government scheme types
export interface GovernmentScheme {
  id: string;
  name: string;
  authority: string;
  description: string;
  eligibility: string;
  benefits: string;
  applicationProcess: string;
  contactInfo?: string;
  state?: string;
}

// FAQ types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}
