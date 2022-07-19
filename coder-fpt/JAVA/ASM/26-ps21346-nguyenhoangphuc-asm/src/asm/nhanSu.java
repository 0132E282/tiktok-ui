
package asm;

import java.util.Scanner;


public  abstract class nhanSu {
    String ten;
    String chucVu;
    String ma;

    public nhanSu() {
    }

    public nhanSu(String ten, String chucVu, String ma) {
        this.ten = ten;
        this.chucVu = chucVu;
        this.ma = ma;
    }
    Scanner input = new Scanner(System.in);
    abstract float getLuong();
    public float getThue(){
     if(getLuong()<9){ 
      return 0;   
     }else if(getLuong() < 15){
      return (float) (getLuong()*0.15);   
     }else{
         return (float) (getLuong()*0.12);
     }  
    }
    void ouputNhanSu(){
        System.out.println("ten "+ten);
        System.out.println("chuc vu :"+chucVu);
        System.out.println("ma :"+ma);       
        System.out.println("thue phai dong :"+getThue());
        System.out.println("luong :"+getLuong());
        
    }
}
