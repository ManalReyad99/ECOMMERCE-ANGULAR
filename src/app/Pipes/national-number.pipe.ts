import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertIDtoDate'
})
export class NationalNumberPipe implements PipeTransform {

  transform(ID:string,dateStyle:string): string {
var date="";
if(dateStyle=="YY")
{
  date="19"+ID[1]+ID[2];
}else if(dateStyle=="MM")
{
  date=ID[3]+ID[5];

}else if(dateStyle=="DD")
{
  date=ID[5]+ID[6];
}else if(dateStyle=="FullDate")
{
date="19"+ID[1]+ID[2]+"-"+ID[3]+ID[4]+"-"+ID[5]+ID[6];
}
return date;
}
}