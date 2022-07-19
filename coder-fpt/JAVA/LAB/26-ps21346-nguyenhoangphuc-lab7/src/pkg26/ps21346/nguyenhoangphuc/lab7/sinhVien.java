
package pkg26.ps21346.nguyenhoangphuc.lab7;

import java.util.Objects;
import java.util.Scanner;

abstract public class sinhVien  {
    String ten;
    String  nganh;
    Scanner input = new Scanner(System.in);
    public sinhVien(String ten, String nganh) {
        this.ten = ten;
        this.nganh = nganh;
    }
    public sinhVien() {
        
    }
    abstract public float getdiem();
    public String gethocLuc(){
        if(this.getdiem() < 5){
            return "yeu";
        }else if(this.getdiem()<6.5){
            return "trung binh";
        }else if(this.getdiem()< 7.5){
         return "kha";   
        }else if(this.getdiem()< 9){
         return "gioi";   
        }else{
        return "xuat sat";
        }
    }
    abstract float getmon ();

    String hocBong(){
     if(getmon() > 6.5 &&getdiem() > 7.5){   
      return "hoc bong gioi";   
     }else if(getmon() > 5 && getdiem() > 6.5){        
         return "hoc bong kha";
    }
        return "khong hoc bong";
  }
    void  inputSInhVien(){
         System.out.print("nhap ten :");
         ten = input.nextLine();  
    }
    void ouputSinhVien(){
        System.out.println("ten :"+ten);
        System.out.println("nganh :"+nganh);
        System.out.println("diem :"+this.getdiem());
        System.out.println("hoc luc :"+this.gethocLuc());
    }
}
