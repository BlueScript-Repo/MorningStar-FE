import { DailyItinerary } from './DailyItinerary';

export class Package {
  constructor() {}
  agent: string = '';
  airTickets: string = '';
  price: string = '';
  user: string = '';
  visa: string = '';
  dailyItineraries: DailyItinerary[] = [];
}