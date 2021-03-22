import { DailyItinerary } from './DailyItinerary';

export class PackagePdfRequest {
  destination: string = '';
  fistName: string = '';
  lastName: string = '';
  lengthOfStay: string = '';
  minimumNumberOfPax: string = '';
  roomType: string = '';
  travelDate: string = '';
  dayIternares: DailyItinerary[] = [];
}