import { Injectable } from '@angular/core';
import {delay} from "rxjs";

export enum DoAn {
  com,
  thit
}

export interface Siblings {
  displayName: string,
  DoAn: DoAn,
  height: number,
  weight: number
}

export interface CaNha {
  giaDinh: any,
  thanhvien: Siblings[]
}

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor() { }

  public delay(ms: number) {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(1);
      },ms);
    });
  }

  public async launch(caNha: CaNha){
    await this.delay(500);
    if (caNha.giaDinh < 2) {
      console.log("Chua duoc an");
      return false;
    }
    if (caNha.giaDinh.length == 0){
      console.log("Khong co ai an");
      return false;
    }
    console.log("Bat toi xong");
    return true;
  }

  public async refill(caNha: CaNha) {
    while (caNha.giaDinh < 100){
      caNha.giaDinh++;
      await this.delay(50);
    }
  }

  public async prepare(caNha: CaNha, crew: Siblings[]){
    caNha.giaDinh = [];
    for(let ast of crew){
      caNha.giaDinh.push(ast);
      await this.delay(1000);
    }
  }

  public async planB(){
    console.time("Bua toi 1");
    let caNha:CaNha = {
      giaDinh:0,
      thanhvien:[]
    };
    console.log("Bat dau bua toi");
    await Promise.all([
      this.prepare(caNha,[{
        displayName:"Alice",
        DoAn: DoAn.thit,
        weight: 68,
        height: 172
      },{
        displayName:"Tom",
        DoAn: DoAn.com,
        weight: 120,
        height: 150
      }]),
      this.refill(caNha)
    ]);
    console.log("Bat dau any");
    await this.launch(caNha);
    console.timeEnd("Bua toi 1");
  }

}
