import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CMSServiceService {

  constructor(public http:HttpClient) { }
  baseUrl =
  'http://morningstarweb-env.eba-pb7idjdb.ap-south-1.elasticbeanstalk.com/';

  UploadImages(file:any,name:string,price:any,page:any,section:any,subSection:any){
    let url=this.baseUrl+"contentDetails?price="+price+"&name="+name+"&pageName="+page+"&sectionName="+section+"&subSectionName="+subSection;
    const formdata: FormData= new FormData();
    console.log("Calling section1");
    
    formdata.append('file',file);
    const req=new HttpRequest('POST',url,formdata,{
      reportProgress:true,
      responseType:'text'
    });
    return this.http.request(req);
   }

   GetImages(pageName:any,sectionName:any,subSectionName:any){
    let data={pageName,sectionName,subSectionName};
    let url = this.baseUrl+"contentDetails/bulk";
    console.log("Getting imgaes API");
    return this.http.post(url,data);
   }



  // ForLandingSection2(file:any,name:string,price:any,bucketName:any){
  //    let url=this.baseUrl+"landingPageSection2?price="+price+"&name="+name+"&bucketName="+bucketName;
  //    const formdata: FormData= new FormData();
  //   console.log("Calling section2");
  //   formdata.append('file',file);
  //    const req=new HttpRequest('POST',url,formdata,{
  //      reportProgress:true,
  //      responseType:'text'
  //    });
  //    return this.http.request(req);
  //   }
  // ForLandingSection3(file:any,name:string,price:any,bucketName:any){
  //   let url=this.baseUrl+"landingPageSection3?price="+price+"&name="+name+"&bucketName="+bucketName;
  //   const formdata: FormData= new FormData();
  //   console.log("Calling section3");
  //   formdata.append('file',file);
  //   const req=new HttpRequest('POST',url,formdata,{
  //     reportProgress:true,
  //     responseType:'text'
  //   });
  //   return this.http.request(req);
  //   }
  
  // ForLandingSubsection1(file:any,name:string,price:any,bucketName:any){
  //   let url=this.baseUrl+"landingPageSubSection1?price="+price+"&name="+name+"&bucketName="+bucketName;
  //   const formdata: FormData= new FormData();
  //   formdata.append('file',file);
  //   console.log("Calling Subsection1");
  //   const req=new HttpRequest('POST',url,formdata,{
  //     reportProgress:true,
  //     responseType:'text'
  //   });
  //   return this.http.request(req);
  //   }

  //   ForLandingSubsection2(file:any,name:string,price:any,bucketName:any){
  //     let url=this.baseUrl+"landingPageSubSection2?price="+price+"&name="+name+"&bucketName="+bucketName;
  //     const formdata: FormData= new FormData();
  //     formdata.append('file',file);
  //     console.log("Calling Subsection1");
  //     const req=new HttpRequest('POST',url,formdata,{
  //       reportProgress:true,
  //       responseType:'text'
  //     });
  //     return this.http.request(req);
  //     }


  //     ForDealSection1(file:any,name:string,price:any,bucketName:any){
  //       let url=this.baseUrl+"DealsPageSection1?price="+price+"&name="+name+"&bucketName="+bucketName;
  //       const formdata: FormData= new FormData();
  //       formdata.append('file',file);
  //       console.log("Calling deal sec1");
  //       const req=new HttpRequest('POST',url,formdata,{
  //         reportProgress:true,
  //         responseType:'text'
  //       });
  //       return this.http.request(req);
  //       }

  //       ForDealSection2(file:any,name:string,price:any,bucketName:any){
  //         let url=this.baseUrl+"DealsPageSection2?price="+price+"&name="+name+"&bucketName="+bucketName;
  //         const formdata: FormData= new FormData();
  //         formdata.append('file',file);
  //         console.log("Calling deal sec2");
  //         const req=new HttpRequest('POST',url,formdata,{
  //           reportProgress:true,
  //           responseType:'text'
  //         });
  //         return this.http.request(req);
  //         }
  //         ForDealSection3(file:any,name:string,price:any,bucketName:any){
  //           let url=this.baseUrl+"DealsPageSection3?price="+price+"&name="+name+"&bucketName="+bucketName;
  //           const formdata: FormData= new FormData();
  //           formdata.append('file',file);
  //           console.log("Calling deal sec3");
  //           const req=new HttpRequest('POST',url,formdata,{
  //             reportProgress:true,
  //             responseType:'text'
  //           });
  //           return this.http.request(req);
  //           }
  //       ForDealSubSection1(file:any,name:string,price:any,bucketName:any){
  //         let url=this.baseUrl+"DealsPageSubSection1?price="+price+"&name="+name+"&bucketName="+bucketName;
  //         const formdata: FormData= new FormData();
  //         formdata.append('file',file);
  //         console.log("Calling deal Subsection1");
  //         const req=new HttpRequest('POST',url,formdata,{
  //           reportProgress:true,
  //           responseType:'text'
  //         });
  //         return this.http.request(req);
  //         }

  //       ForDealSubSection2(file:any,name:string,price:any,bucketName:any){
  //           let url=this.baseUrl+"DealsPageSubSection2?price="+price+"&name="+name+"&bucketName="+bucketName;
  //           const formdata: FormData= new FormData();
  //           formdata.append('file',file);
  //           console.log("Calling deal Subsection2");
  //           const req=new HttpRequest('POST',url,formdata,{
  //             reportProgress:true,
  //             responseType:'text'
  //           });
  //           return this.http.request(req);
  //           }

    
      getLandingPageSection1(){
        let url=this.baseUrl+"landingPageSection1/bulk";
        console.log("Calling Getting section1 images");        
        return this.http.get(url);
      }


      DeleteLandingPageSection1(bucketName:any,fileName:any){
        let url=this.baseUrl+"landingPageSection1?bucketName="+bucketName+"&fileName="+fileName;
        console.log("Calling delete section1 images");        
        return this.http.delete(url);
      }



      getLandingPageSection2(){
        let url=this.baseUrl+"landingPageSection2/bulk";
        console.log("Calling Getting section1 images");        
        return this.http.get(url);
      }

      DeleteLandingPageSection2(bucketName:any,fileName:any){
        let url=this.baseUrl+"landingPageSection2?bucketName="+bucketName+"&fileName="+fileName;
        console.log("Calling delete section1 images");        
        return this.http.delete(url);
      }
      getLandingPageSection3(){
        let url=this.baseUrl+"landingPageSection3/bulk";
        console.log("Calling Getting section1 images");        
        return this.http.get(url);
      }
      
      DeleteLandingPageSection3(bucketName:any,fileName:any){
        let url=this.baseUrl+"landingPageSection3?bucketName="+bucketName+"&fileName="+fileName;
        console.log("Calling delete section1 images");        
        return this.http.delete(url);
      }
      
      getLandingPageSubSection1(){
        let url=this.baseUrl+"landingPageSubSection1/bulk";
        console.log("Calling Getting section1 images");        
        return this.http.get(url);
      }

      DeleteLandingPageSubsection1(bucketName:any,fileName:any){
        let url=this.baseUrl+"landingPageSubSection1?bucketName="+bucketName+"&fileName="+fileName;
        console.log("Calling delete section1 images");        
        return this.http.delete(url);
      }

      getLandingPageSubSection2(){
        let url=this.baseUrl+"landingPageSubSection2/bulk";
        console.log("Calling Getting section1 images");        
        return this.http.get(url);
      }

      DeleteLandingPageSubsection2(bucketName:any,fileName:any){
        let url=this.baseUrl+"landingPageSubSection2?bucketName="+bucketName+"&fileName="+fileName;
        console.log("Calling delete section1 images");        
        return this.http.delete(url);
      }
      
      getDealPageSection1(){
        let url=this.baseUrl+"DealsPageSection1/bulk";
        console.log("Calling Getting section1 images");        
        return this.http.get(url);
      }

      DeleteDealsPageSection1(bucketName:any,fileName:any){
        let url=this.baseUrl+"DealsPageSection1?bucketName="+bucketName+"&fileName="+fileName;
        console.log("Calling delete section1 images");        
        return this.http.delete(url);
      }

      DeleteDealsPageSection2(bucketName:any,fileName:any){
        let url=this.baseUrl+"DealsPageSection2?bucketName="+bucketName+"&fileName="+fileName;
        console.log("Calling delete section1 images");        
        return this.http.delete(url);
      }

      DeleteDealsPageSection3(bucketName:any,fileName:any){
        let url=this.baseUrl+"DealsPageSection3?bucketName="+bucketName+"&fileName="+fileName;
        console.log("Calling delete section1 images");        
        return this.http.delete(url);
      }

      DeleteDealsPageSubSection1(bucketName:any,fileName:any){
        let url=this.baseUrl+"DealsPageSubSection1?bucketName="+bucketName+"&fileName="+fileName;
        console.log("Calling delete section1 images");        
        return this.http.delete(url);
      }

      DeleteDealsPageSubSection2(bucketName:any,fileName:any){
        let url=this.baseUrl+"DealsPageSubSection2?bucketName="+bucketName+"&fileName="+fileName;
        console.log("Calling delete section1 images");        
        return this.http.delete(url);
      }

      getDealPageSubSection1(){
        let url=this.baseUrl+"DealsPageSubSection1/bulk";
        console.log("Calling Getting section1 images");        
        return this.http.get(url);
      }
      getDealPageSubSection2(){
        let url=this.baseUrl+"DealsPageSubSection2/bulk";
        console.log("Calling Getting section1 images");        
        return this.http.get(url);
      }


      getDealPageSection2(){
        let url=this.baseUrl+"DealsPageSection2/bulk";
        console.log("Calling Getting section1 images");        
        return this.http.get(url);
      }
      getDealPageSection3(){
        let url=this.baseUrl+"DealsPageSection3/bulk";
        console.log("Calling Getting section1 images");        
        return this.http.get(url);
      }

      


    }



