export interface ITrip {
  id: number;
  tripType: number;
  title: string;
  postedDate: string;
  departureAirport?: any;
  arrivalAirport?: any;
  fromDate?: any;
  toDate?: any;
  companyId?: any;
  company?: any;
  tripCategoryId: number;
  tripCategory: TripCategory;
  budget: number;
  currency?: any;
  hasQuoted: boolean;
  hasReplies: boolean;
  hasQuotationRequest: boolean;
  integrationSourceId: number;
  noOfPassenger: number;
  integrationSource?: any;
  createdByUser?: any;
  tripQuotes: any[];
  tripReplies: any[];
}

interface TripCategory {
  id: number;
  name: string;
}
