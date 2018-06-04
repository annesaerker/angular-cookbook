import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterArrayPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        //value is what you get out of the search
        //arg is what there is something put in the input 

        // checks if there is nothing in the search input
        if(!args){
            // show all values(users)
            return value;
        }
        // else get the matches
        else{
            args = args;
        } 
        // and compare the first names and show them
        return value.filter(items=>{
            return items.firstname.startsWith(args)==true;
        })
    }
}