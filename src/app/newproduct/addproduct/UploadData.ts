import {Day} from './Day';
import {Exclusion} from './Exclusion';
import {Inclusion} from './Inclusion';
import {Price} from './Price';
import {SubdestinationHotel} from './SubdestinationHotel'
export class UploadData{
    description:string = '';
    destination:string = '';
    duration:string = '';
    productCategory: string= '';
    productDays:Day[]=[];
    productExclusion:Exclusion[]=[];
    productInclusion:Inclusion[]=[];
    productName: string='';
    productPrice:Price[]=[];
    productSubDestination:SubdestinationHotel[]=[];
    productType:string='';
}